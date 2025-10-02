import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Footer from "@components/Footer.astro"

describe("Footer layout", () => {
	test("Render", async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(Footer)

		expect(component.status).toBe(200)
		expect(component.headers.get("Content-Type")).toBe("text/html")

		const body: string = await component.text()
		expect(body).toContain("RvAndCo.fr")
		expect(body).toContain("Site web créé par")
	})
})
