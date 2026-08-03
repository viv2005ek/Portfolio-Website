import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Only split the massive three.js engine itself to keep React hooks resolved in the main vendor chunk
            if (id.includes('node_modules/three/')) {
              return 'three-core';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});
