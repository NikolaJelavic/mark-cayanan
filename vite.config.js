import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://nikolajelavic.github.io/mark-cayanan/" //working!
})


//  base:"/mark-cayanan/"