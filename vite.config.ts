import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Absolute base: the app uses history routing, so nested URLs must resolve
  // assets from the root. The host must serve index.html as the SPA fallback.
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    // Budget guard: any single chunk above this is a signal that a section or a
    // visualization engine leaked into the shared bundle instead of being
    // route-split. See PROJECT_PLAN.md § Performance strategy.
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        // Everything from node_modules into one long-lived vendor chunk. Naming
        // the packages instead would miss `react-dom/client`, which is what the
        // entry actually imports — and silently leave React in the app chunk.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          return undefined;
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    css: false,
  },
});
