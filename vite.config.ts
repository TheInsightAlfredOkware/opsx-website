import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isGhPages = process.env.VITE_GITHUB_PAGES === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGhPages ? '/opsx-website/' : '/',
  server: {
    port: 5200,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
