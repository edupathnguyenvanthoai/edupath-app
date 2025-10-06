import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const PORT = 3025
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: PORT,
    host: true,
  }
})
