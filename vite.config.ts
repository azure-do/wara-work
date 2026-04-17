import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    /**
     * VPN の stealth/proxy モードで localhost がプロキシ経由になる場合があるため、
     * ループバック IP を明示して回避する。
     */
    host: '127.0.0.1',
    proxy: {
      '/api/contact': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
      },
    },
  },
})
