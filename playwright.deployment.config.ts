import { defineConfig } from "@playwright/test";
import { cachedChromium } from "./tests/browser";

export default defineConfig({
  testDir: "./deployment-tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    viewport: { width: 1280, height: 900 },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    launchOptions: { executablePath: cachedChromium() },
  },
  projects: [
    {
      name: "custom-domain-root",
      use: { baseURL: "http://127.0.0.1:4174/" },
    },
    {
      name: "github-project-pages",
      use: { baseURL: "http://127.0.0.1:4175/karavekoushalya/" },
    },
  ],
  webServer: {
    command: "node scripts/serve-built-site.mjs",
    url: "http://127.0.0.1:4174/",
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
