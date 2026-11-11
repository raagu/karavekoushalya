// Read-only production checks. Never submit registration forms or visitor data.
import { connect } from "node:tls";

const origin = "https://karavekoushalya.com";
const failures = [];
async function check(name, work) {
  try {
    await work();
    console.log(`PASS ${name}`);
  } catch (error) {
    failures.push(name);
    console.error(`FAIL ${name}: ${error.message}`);
  }
}
async function get(url, options = {}) {
  return fetch(url, { signal: AbortSignal.timeout(15_000), ...options });
}

for (const lang of ["kn", "en"]) {
  for (const page of ["", "about/", "programs/", "join/"]) {
    const url = `${origin}/${lang}/${page}`;
    await check(url, async () => {
      const response = await get(url);
      if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      if (!html.includes("<h1>") || !html.includes(`<html lang="${lang}">`))
        throw new Error("Missing pre-rendered content or incorrect language");
      if (!html.includes(`<link rel="canonical" href="${url}"`))
        throw new Error("Missing or incorrect canonical URL");
    });
  }
}

await check("sitemap and crawler access", async () => {
  const [sitemap, robots] = await Promise.all([
    get(`${origin}/sitemap.xml`),
    get(`${origin}/robots.txt`),
  ]);
  if (sitemap.status !== 200 || robots.status !== 200)
    throw new Error("Sitemap or robots.txt is unavailable");
  if ([...(await sitemap.text()).matchAll(/<loc>/g)].length !== 8)
    throw new Error("Sitemap must contain all eight canonical language pages");
  if (!(await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`))
    throw new Error("robots.txt is not advertising the sitemap");
});

for (const address of [
  "http://karavekoushalya.com/",
  "https://www.karavekoushalya.com/",
  "https://raagu.github.io/karavekoushalya/",
]) {
  await check(`secure redirect: ${address}`, async () => {
    const first = await get(address, { redirect: "manual" });
    if (![301, 302, 307, 308].includes(first.status))
      throw new Error(`Expected a redirect; received HTTP ${first.status}`);
    const target = new URL(first.headers.get("location"), address);
    if (target.protocol !== "https:")
      throw new Error("Redirect still points to unencrypted HTTP");
    const final = await get(address);
    if (!final.ok || final.url !== `${origin}/`)
      throw new Error(
        `Unexpected final address: ${final.url} (HTTP ${final.status})`,
      );
  });
}

await check(
  "HTTPS certificate validity",
  () =>
    new Promise((resolve, reject) => {
      const socket = connect({
        host: "karavekoushalya.com",
        port: 443,
        servername: "karavekoushalya.com",
        rejectUnauthorized: true,
      });
      socket.setTimeout(15_000, () =>
        socket.destroy(new Error("Certificate check timed out")),
      );
      socket.once("error", reject);
      socket.once("secureConnect", () => {
        const certificate = socket.getPeerCertificate();
        socket.end();
        if (Date.parse(certificate.valid_to) - Date.now() < 14 * 86400 * 1000)
          reject(new Error("HTTPS certificate expires in less than 14 days"));
        else resolve();
      });
    }),
);

if (failures.length) {
  console.error(
    `${failures.length} production check(s) failed. Domain-owner settings may require attention.`,
  );
  process.exitCode = 1;
}
