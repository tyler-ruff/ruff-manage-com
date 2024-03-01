import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ruff-manage.com",
  server: { host: '0.0.0.0'},
  integrations: [tailwind(), mdx(), sitemap()],
});
