import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://seeyog-stha.github.io/Company/',
  plugins: [react()],

})
