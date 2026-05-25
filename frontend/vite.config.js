import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/forms': {
        target: 'http://localhost:3002',
        changeOrigin: true,
      }
    }
  }
})