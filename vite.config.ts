import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',  // تأكد من أن Vite يقوم بإنشاء المجلد 'dist'
  },
});
