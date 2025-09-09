import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import metaTags from 'astro-meta-tags';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), metaTags()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  })
});
