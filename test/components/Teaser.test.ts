import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Teaser from "@components/Teaser.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"
import Thumbnail from "@assets/img/thumbnail.webp"
import TeaserWebm from "@assets/vid/teaser.webm"
import TeaserMp4 from "@assets/vid/teaser.mp4"

describe("Teaser component", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(Teaser, {
			locals: {
				runtime: {
					env: {
						STORE: {
							get: () => ({})
						}
					}
				} as any
			}
		})

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`>${Translations.fr.teaser.catchphrase}</h2>`)
		expect(body).toContain(`poster="${Thumbnail.src}"`)
		expect(body).toContain(`<source src="${TeaserWebm}" type="video/webm"`)
		expect(body).toContain(`<source src="${TeaserMp4}" type="video/mp4"`)
		expect(body).toContain(`>${Translations.fr.teaser.numbers}</h3>`)
		expect(body).toContain(`>0</span> ${Translations.fr.teaser.members}</p>`)
		expect(body).toContain(`>0</span> ${Translations.fr.teaser.projects}</p>`)
		expect(body).toContain(`>0</span> ${Translations.fr.teaser.years}</p>`)
		expect(body).toContain(`>${Translations.fr.teaser.readMore}</a>`)
	})
})
