import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  assets: {
    // Specify the maximum size (in bytes) of the asset to inline
    inlineAssetSize: 4096,
    // Specify the font file types to be handled by Vite
    fileExtensions: ['woff2', 'woff', 'ttf'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
