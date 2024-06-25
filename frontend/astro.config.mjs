import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  compressHTML: true,
  site: 'https:/www.bearfiredfodder.co.uk',
  integrations: [sitemap()],
});
