import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: 'xbox-logo.jpg',
        dest: 'assets'
      }
    ]
  })],
  build: {
    outDir: './public',
    emptyOutDir: false,
  },
  base: './',
});