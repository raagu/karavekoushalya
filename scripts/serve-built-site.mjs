// Local deployment checks only. GitHub Pages serves the actual website.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

// Isolated origins prevent root assets from masking broken project-path URLs.
const mounts = [
  { port: 4174, prefix: "/" },
  { port: 4175, prefix: "/karavekoushalya/" },
];

await stat(resolve(root, "index.html"));
const servers = mounts.map(({ prefix }) =>
  createServer(async (request, response) => {
    try {
      if (!["GET", "HEAD"].includes(request.method ?? "")) {
        response.writeHead(405, { Allow: "GET, HEAD" }).end();
        return;
      }
      const pathname = decodeURIComponent(
        new URL(request.url ?? "/", "http://localhost").pathname,
      );
      if (!pathname.startsWith(prefix)) {
        response.writeHead(404).end();
        return;
      }
      const relative = pathname.slice(prefix.length) || "index.html";
      const file = resolve(root, relative);
      if (!file.startsWith(root.endsWith(sep) ? root : `${root}${sep}`)) {
        response.writeHead(404).end();
        return;
      }
      const body = await readFile(file);
      response.writeHead(200, {
        "Content-Type": types[extname(file)] ?? "application/octet-stream",
        "Cache-Control": "no-store",
      });
      response.end(request.method === "HEAD" ? undefined : body);
    } catch {
      // No SPA fallback: a missing image or font must fail the deployment check.
      response.writeHead(404).end();
    }
  }),
);

try {
  await Promise.all(
    servers.map(
      (server, index) =>
        new Promise((done, fail) => {
          server.once("error", fail);
          server.listen(mounts[index].port, "127.0.0.1", done);
        }),
    ),
  );
  console.log(
    "Built website available on isolated root and project-path origins.",
  );
} catch (error) {
  for (const server of servers) server.close();
  throw error;
}

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => {
    for (const server of servers) server.close();
  });
}
