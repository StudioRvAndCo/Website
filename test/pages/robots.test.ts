import { test, expect } from "vitest"
import * as Robots from "@pages/robots.txt"

test("Generate robots.txt", async () => {
	const url: URL = new URL("sitemap-index.xml", "https://example.com")
	const context: any = { site: url }
	const fileContent: string = `User-agent: *Allow: /Sitemap: ${url.origin}${url.pathname}`
	const component: Response = await Robots.GET(context)

	expect(component.status).toBe(200)
	expect(component.headers.get("Content-Type")).toBe("text/plain;charset=UTF-8")

	const body: string = await component.text()
	expect(body.trim().replace(/\r?\n|\r/g, '')).toBe(fileContent)
})
