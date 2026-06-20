import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Data": path.resolve(__dirname, "./src/Data"),
      "@Contexts": path.resolve(__dirname, "./src/Contexts"),
      "@Hooks": path.resolve(__dirname, "./src/Hooks"),
      "@UI": path.resolve(__dirname, "./src/UI"),
      "@Utils": path.resolve(__dirname, "./src/Utils"),
    },
  },
});
