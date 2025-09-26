import { defineConfig } from "astro/config"
import icon from "astro-icon"
import sitemap from "@astrojs/sitemap"
import metaTags from "astro-meta-tags"
import compressor from "astro-compressor"
import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	site: "https://rvandco.fr",
	base: '/',
	integrations: [icon(), sitemap(), metaTags(), compressor()],
	adapter: cloudflare({
		imageService: "cloudflare",
		platformProxy: {
			enabled: true
		}
	}),
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "fr"
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "/src/assets/scss/mixin" as *;`
				}
			}
		}
	}
})
