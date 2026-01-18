import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // You MUST add this line

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This now has a reference to the import above
  ],
})