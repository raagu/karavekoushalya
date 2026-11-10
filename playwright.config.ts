import { defineConfig, devices, chromium } from "@playwright/test";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

// Prefer Playwright's matching browser. A desktop runtime may already provide
// a compatible cached Chromium; use that without requiring another download.
function cachedChromium(): string | undefined {
  const supplied = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
  if (supplied) return supplied;
  if (existsSync(chromium.executablePath())) return undefined;
  const cache =
    process.platform === "darwin"
      ? join(homedir(), "Library", "Caches", "ms-playwright")
      : join(homedir(), ".cache", "ms-playwright");
  if (!existsSync(cache)) return undefined;
  for (const directory of readdirSync(cache)
    .filter((name) => /^chromium-\d+$/.test(name))
    .sort()
    .reverse()) {
    const root = join(cache, directory);
    for (const relative of [
      "chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
      "chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
      "chrome-linux64/chrome",
      "chrome-linux/chrome",
    ]) {
      const executable = join(root, relative);
      if (existsSync(executable)) return executable;
    }
  }
  return undefined;
}

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: { executablePath: cachedChromium() },
  },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 900 },
      },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 4173 --strictPort",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
