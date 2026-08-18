import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// User site served from the domain root: https://aadarshkumar.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsInlineLimit: 2048,
  },
})
