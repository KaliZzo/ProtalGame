// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/nisim/UploadPortalGameReact/',
  build: {
    outDir: 'dist', // Output directory, you can change it if needed
  },
});
