import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "./src/data/site.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  server: { port: 3000 },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
