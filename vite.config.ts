import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: false,
        svgo: true,
      },
    }),
  ],
  base: command === "build" ? "/college-react/" : "/",
}));
