import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Hash routes keep the document path stable, so relative assets work on
  // project Pages and a future custom domain without another build setting.
  base: "./",
  plugins: [react()],
  server: { host: "127.0.0.1" },
  preview: { host: "127.0.0.1" },
});
