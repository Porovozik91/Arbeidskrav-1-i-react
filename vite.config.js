import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['ce4e-84-214-60-59.ngrok-free.app'], 
  },
})
