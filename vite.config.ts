import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  // AVIF at 55 is visually on par with WebP ~80; one quality applies to both formats of an import.
  plugins: [react(), tailwindcss(), imagetools({ defaultDirectives: new URLSearchParams({ quality: "55" }) })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
