import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://backend-service:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
