import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Projects from "@components/Projects.astro"
import { decodeHTMLEntities } from "@types"
import Translations from "@assets/json/translations.json"
import ProjectsList from "@assets/json/projects.json"

describe("Projects component", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(Projects)

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`>${Translations.fr.projects.self}</h2>`)

		const sortedProjects = ProjectsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		for (const project of sortedProjects) {
			expect(body).toContain(`>${project.name.fr}</h3>`)
			expect(body).toContain(`>${project.description.fr}</p>`)
			expect(body).toContain(`<a href="${project.link}"`)
			expect(body).toContain(`>${Translations.fr.projects.view}</a>`)
			expect(body).toContain(`alt="${project.name.fr}"`)
		}
	})
})
