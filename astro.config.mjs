// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vlastní doména – `site` = doména, `base` není potřeba.
export default defineConfig({
  site: 'https://www.zkonupaky.cz',
  // sitemap-index.xml pro vyhledávače (odkazuje na něj i public/robots.txt)
  integrations: [sitemap()],
});
