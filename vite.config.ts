import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.SITE_BASE_PATH ?? "/";
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base))
  throw new Error("SITE_BASE_PATH must be an absolute directory path");

export default defineConfig({
  base,
  plugins: [react()],
  build: { outDir: process.env.SITE_OUT_DIR ?? "dist" },
  server: { host: "127.0.0.1" },
  preview: { host: "127.0.0.1" },
});
