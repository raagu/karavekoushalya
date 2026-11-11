import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// The requested yellow/red wordmark is a logotype (WCAG 1.4.3 exemption).
// Exempt only colour-contrast nodes explicitly marked as part of that logo.
// All other rules and all navigation, body and subtitle text remain audited.
// https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
function applicableViolations(
  violations: Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"],
) {
  return violations.flatMap((violation) => {
    if (violation.id !== "color-contrast") return [violation];
    const nodes = violation.nodes.filter(
      // Match the node itself, not an ancestor containing the wordmark.
      (node) => !node.html.split(">")[0].includes('data-brand-logotype="true"'),
    );
    return nodes.length ? [{ ...violation, nodes }] : [];
  });
}

for (const language of ["kn", "en"] as const) {
  test(`${language} pages and registration dialog pass automated accessibility checks`, async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await page.goto("/");
    if (language === "en")
      await page.getByRole("link", { name: "English", exact: true }).click();

    for (const route of ["home", "about", "programs", "join"]) {
      await test.step(route, async () => {
        await page.goto(`/#/${route}`);
        await page.evaluate(() => document.fonts.ready);
        if (route === "programs") {
          // Details remain optional to visitors, but their expanded content is audited too.
          for (const summary of await page
            .locator("main details summary")
            .all())
            await summary.click();
        }
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect
          .soft(applicableViolations(result.violations), `${language} ${route}`)
          .toEqual([]);
      });
    }

    await page.getByTestId("register-corporate").click();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(applicableViolations(result.violations)).toEqual([]);
  });
}
