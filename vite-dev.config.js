import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { wfHotReload } from "@xatom/wf-app-hot-reload";

export default defineConfig({
  server: {
    port: 1337,
    watch: {
      usePolling: true,
    },
  },
  plugins: [vue(), wfHotReload()],
  root: "./",
  base: "./",
  build: {
    outDir: "dist",
  },
});
