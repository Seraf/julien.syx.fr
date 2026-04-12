// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://julien.syx.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
