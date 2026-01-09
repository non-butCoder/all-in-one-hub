import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. Set the base path to your repository name
  // This ensures assets like CSS and JS load correctly on GitHub Pages
  base: "/all-in-one-hub/", 

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 2. Add build configuration to ensure the output goes to the right place
  build: {
    outDir: "dist",
  }
}));
