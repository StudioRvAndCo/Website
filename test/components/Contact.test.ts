import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Contact from "@components/Contact.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"
import FullLogo from "@assets/img/full_logo.webp"

describe("Contact component", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(Contact)

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`>${Translations.fr.contact.self}</h2>`)
		expect(body).toContain(`>Studio Rv & Co</h3>`)
		expect(body).toContain(`Email : `)
		expect(body).toContain(`<a href="mailto:studio@rvandco.fr"`)
		expect(body).toContain(`>studio@rvandco.fr</a>`)
		expect(body).toContain(`>${Translations.fr.contact.socialNetworks}</h3>`)
		expect(body).toContain(`title="YouTube"`)
		expect(body).toContain(`title="X"`)
		expect(body).toContain(`title="Instagram"`)
		expect(body).toContain(`title="Twitch"`)
		expect(body).toContain(`<img src="${FullLogo.src}" alt="Studio Rv & Co" width="${FullLogo.width}" height="${FullLogo.height}"`)
	})
})
