import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@Contexts": path.resolve(__dirname, "./src/Contexts"),
      "@Hooks": path.resolve(__dirname, "./src/Hooks"),
      "@MainAssets": path.resolve(__dirname, "./src/Layout/Main/assets"),
    },
  },
});
