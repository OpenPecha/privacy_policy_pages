import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/privacy_policy_pages/', // Use the subdirectory for deployment
  plugins: [react()],
});