import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import TwitchLivestreamToast from "@components/TwitchLivestreamToast.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"

describe("TwitchLivestreamToast component", () => {
	test("Is not live", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(TwitchLivestreamToast, {
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
		expect(body).toContain(`<section id="toast" class="hidden"`)
		expect(body).toContain(Translations.fr.onAir)
	})
})
