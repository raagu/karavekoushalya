import { test, expect } from "@playwright/test";

const origin = "https://karavekoushalya.com";
const pages = ["", "about/", "programs/", "join/"];

for (const language of ["kn", "en"] as const) {
  for (const path of pages) {
    test(`${language}/${path} is a complete indexable page without JavaScript`, async ({
      browser,
      baseURL,
      request,
    }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      try {
        const page = await context.newPage();
        const response = await page.goto(`${baseURL}${language}/${path}`);
        expect(response?.status()).toBe(200);
        const html = await response!.text();
        expect(html).toContain("<h1>");
        expect(html).not.toContain('<div id="root"></div>');
        await expect(page.locator("main h1")).toBeVisible();
        await expect(page.locator("main h1")).toHaveCount(1);
        await expect(page.locator("html")).toHaveAttribute("lang", language);
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
          "content",
          /^index, follow/,
        );
        await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          "href",
          `${origin}/${language}/${path}`,
        );
        await expect(page.locator('meta[name="description"]')).toHaveCount(1);
        const description = await page
          .locator('meta[name="description"]')
          .getAttribute("content");
        expect(description!.length).toBeGreaterThan(50);
        expect(await page.title()).toContain(
          language === "en" ? "Karave Koushalya" : "ಕರವೇ ಕೌಶಲ್ಯ",
        );
        for (const lang of ["kn", "en", "x-default"]) {
          await expect(
            page.locator(`link[hreflang="${lang}"]`),
          ).toHaveAttribute(
            "href",
            `${origin}/${lang === "en" ? "en" : "kn"}/${path}`,
          );
        }
        await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
          "content",
          `${origin}/${language}/${path}`,
        );
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
          "content",
          await page.title(),
        );
        await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
          "content",
          "summary",
        );
        const data = JSON.parse(
          (await page
            .locator('script[type="application/ld+json"]')
            .textContent()) ?? "",
        );
        expect(data["@context"]).toBe("https://schema.org");
        expect(
          data["@graph"].find(
            (item: { "@type": string }) => item["@type"] === "WebPage",
          ),
        ).toMatchObject({
          url: `${origin}/${language}/${path}`,
          inLanguage: language,
        });
        const policy = await page
          .locator('meta[http-equiv="Content-Security-Policy"]')
          .getAttribute("content");
        expect(policy).toContain("object-src 'none'");
        expect(policy).toContain("script-src 'self'");
        expect(policy).not.toContain("unsafe-inline");
        const siteLinks = await page
          .locator("a[href]")
          .evaluateAll((links) =>
            links.map((link) => link.getAttribute("href")!),
          );
        expect(siteLinks.filter((href) => href.startsWith("#/"))).toEqual([]);
        // Language selection is a real link and works without any script.
        await page
          .getByRole("link", {
            name: language === "en" ? "ಕನ್ನಡ" : "English",
            exact: true,
          })
          .click();
        await expect(page.locator("html")).toHaveAttribute(
          "lang",
          language === "en" ? "kn" : "en",
        );
        await expect(page.locator("main h1")).toBeVisible();
        const image = await request.get(
          `${baseURL}images/karave-koushalya-social.png`,
        );
        expect(image.status()).toBe(200);
      } finally {
        await context.close();
      }
    });
  }
}

test("sitemap lists all eight canonical pages and robots allows them", async ({
  request,
  baseURL,
}) => {
  const robots = await request.get(`${baseURL}robots.txt`);
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${origin}/sitemap.xml`);
  expect(await robots.text()).not.toContain("Disallow: /");
  const sitemap = await request.get(`${baseURL}sitemap.xml`);
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()["content-type"]).toContain("xml");
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  expect(urls).toHaveLength(8);
  expect(new Set(urls).size).toBe(8);
  for (const url of urls) {
    expect(url.startsWith(`${origin}/`)).toBe(true);
    expect(url).not.toContain("#");
    expect(url).not.toContain("?");
    const localUrl = `${baseURL}${url.slice(origin.length + 1)}`;
    expect((await request.get(localUrl)).status()).toBe(200);
  }
});

test("query variants canonicalise correctly and unknown paths remain real 404s", async ({
  page,
  request,
  baseURL,
}) => {
  await page.goto(`${baseURL}en/programs/?focus=guidance`);
  await expect(page.getByTestId("program-details-guidance")).toHaveAttribute(
    "open",
    "",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${origin}/en/programs/`,
  );
  expect((await request.get(`${baseURL}en/nonexistent/`)).status()).toBe(404);
  expect((await request.get(`${baseURL}nonexistent/`)).status()).toBe(404);
  const slash = await request.get(`${baseURL}en/about`, { maxRedirects: 0 });
  expect(slash.status()).toBe(301);
});

test("client navigation refreshes search metadata and back history", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}en/`);
  await page
    .locator(".desktop-nav")
    .getByRole("link", { name: "About us", exact: true })
    .click();
  await expect(page).toHaveURL(`${baseURL}en/about/`);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${origin}/en/about/`,
  );
  const aboutDescription = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  await page.getByRole("link", { name: "ಕನ್ನಡ", exact: true }).click();
  await expect(page).toHaveURL(`${baseURL}kn/about/`);
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "kn_IN",
  );
  expect(
    await page.locator('meta[name="description"]').getAttribute("content"),
  ).not.toBe(aboutDescription);
  await page.goBack();
  await expect(page).toHaveURL(`${baseURL}en/about/`);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("production policy blocks injected inline JavaScript", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}en/`);
  await page.evaluate(() => {
    const script = document.createElement("script");
    script.textContent = "window.__seoCspProbe = true";
    document.body.append(script);
    script.remove();
  });
  expect(await page.evaluate(() => "__seoCspProbe" in window)).toBe(false);
  // The site's own external application script is still working.
  await page.getByRole("link", { name: "ಕನ್ನಡ", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "kn");
});
