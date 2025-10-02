import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Productions from "@components/Productions.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"
import ProductionsList from "@assets/json/productions.json"

describe("Productions component", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(Productions)

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`>${Translations.fr.productions.self}</h2>`)

		const sortedProductions = ProductionsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		for (const index in sortedProductions) {
			const production = sortedProductions[index]!
			expect(body).toContain(`alt="${production.name.fr}"`)
			if (index === '0') {
				expect(body).toContain(`>Nouveau</span> ${production.name.fr} </h3>`)
			} else {
				expect(body).toContain(`>  ${production.name.fr} </h3>`)
			}
			expect(body).toContain(`>${production.description.fr}</p>`)
		}
	})
})
