import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make the server accessible externally
    port: 5173       // Specify the desired port (2345)hjjgufyydrf6t
  }
});
