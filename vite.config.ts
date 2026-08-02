import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import compression from "vite-plugin-compression"

export default defineConfig({
  base: '/github-star-signs',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', {}]],
      },
    }),
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress' }),
  ],
  build: {
    outDir: "build",
  },
})
