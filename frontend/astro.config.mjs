import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  compressHTML: true,
  adapter: vercel(),
  server: {
    host: true,
  },
});
