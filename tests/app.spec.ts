import { expect, test, type Page } from "@playwright/test";

const routes = {
  home: "Skills for a stronger Karnataka.",
  about: "Our vision for Karnataka.",
  programs: "Skills, guidance and opportunity.",
  join: "Be part of Karave Koushalya.",
};

async function english(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: "English", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
}

async function openNavigation(page: Page, mobile: boolean) {
  if (mobile)
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
  return page.getByRole("navigation").first();
}

test("starts in Kannada and remembers a visitor's language choice", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "kn");
  await page.getByRole("button", { name: "English", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "kn");
});

test("home introduces leadership, vision and mission clearly", async ({
  page,
}) => {
  await english(page);
  await expect(
    page.getByRole("heading", { name: routes.home, exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our vision", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our mission", exact: true }),
  ).toBeVisible();
  await expect(
    page
      .locator("main")
      .getByText("T. A. Narayana Gowda", { exact: true })
      .first(),
  ).toBeVisible();
  const portrait = page
    .locator(
      'main figure.leadership-portrait-transparent img[src*="narayana-gowda-transparent"]',
    )
    .first();
  await expect(portrait).toBeVisible();
  await expect
    .poll(() =>
      portrait.evaluate(
        (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
      ),
    )
    .toBe(true);
  await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
  await expect(
    page
      .locator("main")
      .getByText("ಟಿ ಎ ನಾರಾಯಣ ಗೌಡರು", { exact: true })
      .first(),
  ).toBeVisible();
  await expect(page.locator("main")).not.toContainText("ತ.ನಾ.");
});

test("joining offers three public roles and links guidance registration to the supplied form", async ({
  page,
}) => {
  await english(page);
  await page.goto("/#/join");
  const formUrl = "https://forms.gle/GD4aqzcX7ezvwxQj7";
  for (const language of ["en", "kn"] as const) {
    if (language === "kn")
      await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
    const cards = page.locator("main .role-grid .role-card");
    await expect(cards).toHaveCount(3);
    await expect(cards.locator("h2")).toHaveText(
      language === "en"
        ? ["People seeking guidance", "Mentors", "Companies & partners"]
        : ["ಮಾರ್ಗದರ್ಶನ ಬಯಸುವವರು", "ಮಾರ್ಗದರ್ಶಕರು", "ಕಂಪನಿಗಳು ಮತ್ತು ಸಹಭಾಗಿಗಳು"],
    );
    await expect(page.getByTestId("register-candidate")).toHaveCount(0);
    await expect(page.locator("main .administrator-row")).toHaveCount(0);
    const guidance = page.getByTestId("register-mentee");
    await expect(guidance).toHaveJSProperty("tagName", "A");
    await expect(guidance).toHaveAttribute("href", formUrl);
    await expect(guidance).toHaveAttribute("target", "_blank");
    await expect(guidance).toHaveAttribute("rel", /noopener/);
    await expect(guidance).toHaveAttribute("rel", /noreferrer/);
    await expect(guidance).toContainText(
      language === "en" ? "Register for guidance" : "ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ನೋಂದಣಿ",
    );
  }
  // The external form is intentionally not opened or submitted by this check.
});

test("mentor, partner and administrator options show the required dialog without collecting data onsite", async ({
  page,
}) => {
  await english(page);
  await page.goto("/#/join");
  const writes: string[] = [];
  page.on("request", (request) => {
    if (!["GET", "HEAD", "OPTIONS"].includes(request.method()))
      writes.push(request.url());
  });
  await expect(page.locator("form, input, textarea")).toHaveCount(0);
  for (const role of ["mentor", "corporate", "admin"]) {
    const registration = page.getByTestId(`register-${role}`);
    await registration.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", {
        name: "The option coming soon",
        exact: true,
      }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(registration).toBeFocused();
  }
  expect(writes).toEqual([]);
});

test("Kannada registration has a translated explanation and close control", async ({
  page,
}) => {
  await page.goto("/#/join");
  await page.getByTestId("register-mentor").click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByRole("heading", {
      name: "The option coming soon",
      exact: true,
    }),
  ).toBeVisible();
  await expect(dialog).toContainText(/[\u0C80-\u0CFF]/);
  await dialog.getByRole("button", { name: "ಮುಚ್ಚಿ", exact: true }).click();
  await expect(dialog).not.toBeVisible();
});

test("all four pages are readable without horizontal overflow in both languages", async ({
  page,
}) => {
  await english(page);
  for (const language of ["en", "kn"]) {
    if (language === "kn")
      await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
    for (const [route, heading] of Object.entries(routes)) {
      await page.goto(`/#/${route}`);
      await expect(page.locator("main h1")).toBeVisible();
      if (language === "en")
        await expect(
          page.getByRole("heading", { name: heading, exact: true }),
        ).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", language);
      const dimensions = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
      }));
      expect(
        dimensions.content,
        `${language} ${route} should fit the viewport`,
      ).toBeLessThanOrEqual(dimensions.viewport + 1);
    }
  }
});

test("the logo, name, navigation and controls stay aligned at narrow and desktop widths", async ({
  page,
}) => {
  await english(page);
  for (const language of ["en", "kn"]) {
    if (language === "kn")
      await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
    for (const width of [320, 390, 961, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.locator("header").evaluate((header) => {
        const brand = header.querySelector<HTMLElement>(".brand")!;
        const title = header.querySelector<HTMLElement>(".brand-title")!;
        const controls = header.querySelector<HTMLElement>(".header-controls")!;
        const navigation = header.querySelector<HTMLElement>(".desktop-nav");
        const brandBox = brand.getBoundingClientRect();
        const titleBox = title.getBoundingClientRect();
        const controlsBox = controls.getBoundingClientRect();
        const navBox =
          navigation && getComputedStyle(navigation).display !== "none"
            ? navigation.getBoundingClientRect()
            : null;
        return {
          titleRight: titleBox.right,
          brandRight: brandBox.right,
          nextLeft: navBox?.left ?? controlsBox.left,
          navRight: navBox?.right,
          controlsLeft: controlsBox.left,
          centerDifference: Math.abs(
            brandBox.top +
              brandBox.height / 2 -
              (controlsBox.top + controlsBox.height / 2),
          ),
          overflow:
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth,
        };
      });
      const label = `${language}, ${width}px`;
      expect(
        layout.titleRight,
        `${label}: name must not overlap navigation or controls`,
      ).toBeLessThanOrEqual(layout.nextLeft + 1);
      expect(
        layout.brandRight,
        `${label}: brand must not overlap navigation or controls`,
      ).toBeLessThanOrEqual(layout.nextLeft + 1);
      if (layout.navRight !== undefined)
        expect(
          layout.navRight,
          `${label}: navigation must clear controls`,
        ).toBeLessThanOrEqual(layout.controlsLeft + 1);
      expect(
        layout.centerDifference,
        `${label}: brand and controls should share a horizontal row`,
      ).toBeLessThanOrEqual(4);
      expect(layout.overflow, `${label}: no horizontal page overflow`).toBe(
        false,
      );
    }
  }
});

test("navigation supports browser history and mobile access", async ({
  page,
}, testInfo) => {
  await english(page);
  const mobile = testInfo.project.name.includes("mobile");
  let navigation = await openNavigation(page, mobile);
  await navigation.getByRole("link", { name: "About us", exact: true }).click();
  await expect(page).toHaveURL(/#\/about$/);
  await expect(
    page.getByRole("heading", { name: routes.about, exact: true }),
  ).toBeVisible();
  navigation = await openNavigation(page, mobile);
  await navigation
    .getByRole("link", { name: "Our programs", exact: true })
    .click();
  await expect(page).toHaveURL(/#\/programs$/);
  await page.goBack();
  await expect(page).toHaveURL(/#\/about$/);
  await expect(
    page.getByRole("heading", { name: routes.about, exact: true }),
  ).toBeVisible();
});

test("program summaries reveal optional details with mouse and keyboard", async ({
  page,
}) => {
  await english(page);
  await page.goto("/#/programs");
  for (const program of ["skills", "guidance", "opportunity"]) {
    const details = page.getByTestId(`program-details-${program}`);
    const summary = details.locator("summary");
    await expect(summary).toHaveText("Explore this program");
    await expect(details).not.toHaveAttribute("open", "");
    await summary.click();
    await expect(details).toHaveAttribute("open", "");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(details).not.toHaveAttribute("open", "");
  }
});

test("previous career-pathway and mentorship links still show useful program content", async ({
  page,
}) => {
  await english(page);
  for (const route of ["pathways", "mentorship"]) {
    await page.goto(`/#/${route}`);
    await expect(
      page.getByRole("heading", { name: routes.programs, exact: true }),
    ).toBeVisible();
    await expect(page.getByTestId("program-details-skills")).toBeVisible();
    await expect(page.getByTestId("program-details-guidance")).toBeVisible();
  }
});

test("mobile menu preserves focus when dismissed, selecting the current page, or resizing to desktop", async ({
  page,
}, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("mobile"),
    "The mobile menu is hidden on desktop.",
  );
  await english(page);
  await page.goto("/#/home");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  const menu = page.getByRole("navigation", {
    name: "Mobile navigation",
    exact: true,
  });
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: "About us", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  const toggle = page.getByRole("button", { name: "Open menu", exact: true });
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  // Selecting the page already on screen must still return focus from the
  // removed mobile navigation to its visible toggle.
  const currentUrl = page.url();
  await toggle.click();
  await menu.getByRole("link", { name: "Home", exact: true }).click();
  await expect(page).toHaveURL(currentUrl);
  await expect(menu).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  // A focused mobile link must not disappear without a visible destination
  // when the viewport crosses the desktop breakpoint.
  await toggle.click();
  await menu.getByRole("link", { name: "About us", exact: true }).focus();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(menu).not.toBeVisible();
  const desktopHome = page
    .locator(".desktop-nav")
    .getByRole("link", { name: "Home", exact: true });
  await expect(desktopHome).toBeVisible();
  await expect(desktopHome).toHaveAttribute("aria-current", "page");
  await expect(desktopHome).toBeFocused();
});

test("pages, language switches, program details and dialogs produce no browser errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  await english(page);
  for (const route of Object.keys(routes)) {
    await page.goto(`/#/${route}`);
    await expect(page.locator("main h1")).toBeVisible();
    if (route === "programs")
      await page
        .getByTestId("program-details-guidance")
        .locator("summary")
        .click();
    if (route === "join") {
      await page.getByTestId("register-corporate").click();
      await page
        .getByRole("dialog")
        .getByRole("button", { name: "Close", exact: true })
        .click();
    }
  }
  await page.getByRole("button", { name: "ಕನ್ನಡ", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "kn");
  expect(errors).toEqual([]);
});
