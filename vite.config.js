import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensures asset files are explicitly managed
    minify: 'terser', // or 'esbuild'
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Force clean, standard naming conventions for JS chunks
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})