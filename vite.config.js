import { defineConfig } from 'vite';
const env = process.env.NODE_ENV === 'development' ? '' : '';

export default defineConfig({
  base: env,
});
