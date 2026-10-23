import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

/** Absolute origin for canonical/Open Graph URLs: SITE_URL if set, else Vercel's production domain, else relative. */
const siteOrigin = process.env.SITE_URL?.replace(/\/$/, "") ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");

export default defineConfig({
  // AVIF at 55 is visually on par with WebP ~80; one quality applies to both formats of an import.
  plugins: [
    react(),
    tailwindcss(),
    imagetools({ defaultDirectives: new URLSearchParams({ quality: "55" }) }),
    {
      name: "site-origin",
      // Canonical and og:url must be absolute, so they're dropped when no origin is known (local builds).
      transformIndexHtml: (html) => (siteOrigin ? html : html.replace(/s*<link rel="canonical"[^>]*>|s*<meta property="og:url"[^>]*>/g, "")).replaceAll("%SITE_ORIGIN%", siteOrigin),
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
