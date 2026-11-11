import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const output = resolve(process.env.SITE_OUT_DIR ?? "dist");
const { render, staticPages, canonicalUrl } = await import(
  pathToFileURL(resolve(".ssr/entry-server.js")).href
);
const template = await readFile(resolve(output, "index.html"), "utf8");
if (
  !template.includes("<!--seo:start-->") ||
  !template.includes('<div id="root"></div>')
)
  throw new Error(
    "Build template is missing the SEO or application placeholder",
  );

async function writePage(location, relative) {
  const { html, head, contentSecurityPolicy } = render(location);
  const document = template
    .replace('<html lang="kn">', `<html lang="${location.lang}">`)
    .replace(
      /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
      () =>
        `${head}\n    <meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}">`,
    )
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  const file = resolve(output, relative, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, document);
}

for (const location of staticPages)
  await writePage(
    location,
    `${location.lang}/${location.page === "home" ? "" : location.page}`,
  );

// Root remains a complete Kannada landing page. Its canonical points to /kn/.
await writePage({ lang: "kn", page: "home" }, "");
await writeFile(
  resolve(output, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticPages
    .map((location) => `  <url><loc>${canonicalUrl(location)}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);
await writeFile(resolve(output, ".nojekyll"), "");
console.log(
  `Generated ${staticPages.length} complete language pages, a root landing page and sitemap.`,
);
