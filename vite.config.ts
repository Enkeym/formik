import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local'
    }
  },
  optimizeDeps: {
    include: [
      '@chakra-ui/react',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion'
    ]
  }
})
