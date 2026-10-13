import { fileURLToPath } from "node:url";
import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { Features } from "lightningcss";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), mdx({ remarkPlugins: [remarkGfm] }), reactRouter()],
  resolve: {
    alias: { "~": fileURLToPath(new URL("./app", import.meta.url)) },
  },
  css: {
    lightningcss: {
      // Keep semi-transparent colours written as rgba(), with the same numbers
      // as the original site. The minifier would otherwise rewrite them as
      // 8-digit hex, which rounds the transparency to the nearest 1/255.
      // Firefox keeps the finer value, so the rounding shows there as colours
      // that are off by one step.
      include: Features.HexAlphaColors,
    },
  },
  build: { cssMinify: "lightningcss" },
});
