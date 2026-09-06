import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Build config for the single-file bundle.
 *
 * Differs from the main config in exactly two ways, both forced by having no
 * server: every chunk is inlined into one entry file, and CSS is emitted as a
 * single stylesheet. Route-level code splitting is deliberately given up here —
 * it buys nothing when there is only one file to load.
 */
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2022',
    outDir: 'dist-single',
    emptyOutDir: true,
    cssCodeSplit: false,
    modulePreload: { polyfill: false },
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
