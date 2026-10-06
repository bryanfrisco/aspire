// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only: `npm run build` writes plain files to dist/ for any host.
export default defineConfig({
  site: 'https://www.aspire.id',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'id', locales: { id: 'id-ID', en: 'en-US' } },
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  image: { responsiveStyles: true },
});
