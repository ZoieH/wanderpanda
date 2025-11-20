import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Replace GA Measurement ID if environment variable is set, otherwise keep the hardcoded one
        const gaId = process.env.VITE_GA_MEASUREMENT_ID;
        if (gaId) {
          return html.replace(/G-8C3JQ79B6X/g, gaId);
        }
        return html;
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
