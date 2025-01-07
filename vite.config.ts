import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Use the subdirectory for deployment
  plugins: [react()],
});