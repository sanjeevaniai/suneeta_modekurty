import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 4000,
  },
  plugins: [
    react(),
    // Browser-free prerender at build time so AI crawlers/search engines read
    // the full page copy as static HTML. Runs in Vercel's build (no Chromium).
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "src/prerender.tsx"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
