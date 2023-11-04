import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add a custom Replace plugin to replace __VITE_ENV__ with environment variables
      plugins: [
        {
          name: 'replace-vite-env',
          transform(code, id) {
            if (id.endsWith('/vite.config.js')) {
              // Replace __VITE_ENV__ with the JSON stringified environment variables
              code = code.replace('__VITE_ENV__', JSON.stringify(process.env));
            }
            return {
              code,
              map: null,
            };
          },
        },
      ],
    },
  },
});