// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ["**/*.glb"],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    historyApiFallback: true, // Redirects all 404 requests to index.html
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {}, // Keep this option if you plan on adding manual chunking
      },
    },
  },
});
