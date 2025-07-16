// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1) Presign calls (upload URL) → presign server
      '/api/upload': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/upload/, '/api/upload'),
      },
      // 2) All other /api/* → main REST API
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
})
