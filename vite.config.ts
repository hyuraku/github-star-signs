import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/github-star-signs',
  plugins: [
    react(),
  ],
  build: {
    outDir: "build",
  },
})
