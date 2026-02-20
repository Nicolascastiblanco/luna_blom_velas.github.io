import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/luna_blom_velas.github.io/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
