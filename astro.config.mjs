// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://meta-harness.vercel.app",
  integrations: [mdx(), sitemap()],
});
