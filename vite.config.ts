import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [react(), TanStackRouterVite()],
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     api: 'modern'
    //   }
    // },
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
