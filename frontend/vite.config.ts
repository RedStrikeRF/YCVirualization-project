import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@shared': path.resolve(__dirname, './src/app/shared'),
      '@shared-ui': path.resolve(__dirname, './src/app/shared/ui'),
      '@shared-hooks': path.resolve(__dirname, './src/app/shared/hooks'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@widgets': path.resolve(__dirname, './src/app/widgets'),
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
  }
})