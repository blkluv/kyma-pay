import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import vercelAnalytics from '@vercel/analytics/astro';import icon from "astro-icon";
import { getRequiredIcons } from "./src/lib/getRequiredIcons";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://atl5d.com",
  integrations: [
    tailwind(),
    // vercelAnalytics(),
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