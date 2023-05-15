import { defineConfig } from 'vite';
import path from 'path';
const env = process.env.NODE_ENV === 'development' ? '' : '/blog';

export default defineConfig({
  base: env,
  resolve: {
    alias: {
      '@comp': path.join(__dirname, '.', 'components', '/'),
    },
  },
});
