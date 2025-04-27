import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '33ff-89-169-52-137.ngrok-free.app'
    ],
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      }
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
});
