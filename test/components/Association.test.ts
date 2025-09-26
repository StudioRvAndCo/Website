import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import AssociationComponent from "@components/Association.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"
import Members from "@assets/json/members.json"

describe("Association component", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(AssociationComponent)

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`>${Translations.fr.association.self}</h2>`)
		expect(body).toContain(`>${Translations.fr.association.description}</p>`)

		const sortedMembers = Members.sort((a, b) => a.name.localeCompare(b.name))
		for (const member of sortedMembers) {
			expect(body).toContain(`alt="${member.name}"`)
			expect(body).toContain(`>${member.name}</p>`)
		}
	})
})
