import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Mets ici le nom EXACT de ton dépôt GitHub (sensible à la casse)
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', 
})
