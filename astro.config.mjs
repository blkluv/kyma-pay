import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { getRequiredIcons } from "./src/lib/getRequiredIcons";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://t.atl5d.com",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: getRequiredIcons(),
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'  // ✅ THIS IS THE KEY LINE
      }
    }
  }
});