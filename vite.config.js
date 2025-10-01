import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react-slick"],
  },
  plugins: [react()],
  server: {
    host: true, // equivalent to --host, listens on 0.0.0.0
    port: 5173, // you can change this if you want a custom port
  },
});
