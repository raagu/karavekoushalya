import { expect, test } from "@playwright/test";

for (const language of ["kn", "en"] as const) {
  test(`${language} production site loads assets and survives direct route reloads`, async ({
    page,
    baseURL,
    request,
  }) => {
    const origin = new URL(baseURL!);
    const failures: string[] = [];
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        failures.push(`${response.status()} ${response.url()}`);
    });
    page.on("requestfailed", (request) => failures.push(request.url()));
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (
        url.origin === origin.origin &&
        !url.pathname.startsWith(origin.pathname)
      )
        failures.push(`Asset escaped the website path: ${request.url()}`);
    });

    if (origin.pathname !== "/") {
      const outside = await request.get(
        new URL("/images/karave-koushalya-logo-v3.png", origin.origin).href,
      );
      expect(outside.status()).toBe(404);
    }

    await page.goto(`${baseURL}#/home`);
    if (language === "en")
      await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", language);

    for (const route of ["home", "about", "programs", "join"]) {
      await page.goto(`${baseURL}#/${route}`);
      await page.reload();
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      await page.evaluate(() => document.fonts.ready);
      await expect
        .poll(() =>
          page
            .locator("img")
            .evaluateAll((images) =>
              images.every(
                (image) =>
                  (image as HTMLImageElement).complete &&
                  (image as HTMLImageElement).naturalWidth > 0,
              ),
            ),
        )
        .toBe(true);
      expect(
        await page.evaluate(
          (language) =>
            language === "kn"
              ? document.fonts.check('400 16px "Noto Sans Kannada"', "ಕನ್ನಡ")
              : document.fonts.check('400 16px "Inter"', "Karave"),
          language,
        ),
      ).toBe(true);
    }

    const favicon = await page.locator('link[rel="icon"]').getAttribute("href");
    const icon = await request.get(new URL(favicon!, page.url()).href);
    expect(icon.status()).toBe(200);
    expect(icon.headers()["content-type"]).toContain("image/png");
    await expect(page.getByTestId("register-mentee")).toHaveAttribute(
      "href",
      "https://forms.gle/GD4aqzcX7ezvwxQj7",
    );
    await page.getByTestId("register-mentor").click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "The option coming soon",
        exact: true,
      }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    expect(failures).toEqual([]);
    expect(errors).toEqual([]);
  });
}
