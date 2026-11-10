import { chromium } from "@playwright/test";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

// Prefer Playwright's matching browser. A desktop runtime may already provide
// a compatible cached Chromium; use that without requiring another download.
export function cachedChromium(): string | undefined {
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
