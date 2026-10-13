import { readdirSync } from "node:fs";
import type { Config } from "@react-router/dev/config";

// Every article in app/content/blog gets its own pre-rendered page.
const articlePaths = readdirSync("app/content/blog")
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => `/blog/${file.replace(/\.mdx$/, "")}`);

export default {
  // No server: every page is written to an HTML file at build time.
  ssr: false,
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...articlePaths],
  // React Router 8 behaviour, switched on early so the later upgrade is small.
  future: {
    v8_middleware: true,
    v8_passThroughRequests: true,
    v8_splitRouteModules: true,
    v8_trailingSlashAwareDataRequests: true,
    v8_viteEnvironmentApi: true,
  },
} satisfies Config;
