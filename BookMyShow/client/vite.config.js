import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bms/v1": {
        target: "http://localhost:3002",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
