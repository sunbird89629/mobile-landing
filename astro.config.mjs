import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mt.aaaabb.cc",
  integrations: [tailwind(), react(), sitemap()],
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
  }),
});
