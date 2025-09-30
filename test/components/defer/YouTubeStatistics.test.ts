import { test, expect } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import YouTubeStatisticsComponent from "@components/defer/YouTubeStatistics.astro"

test("YouTubeStatistics component", async () => {
	const container = await AstroContainer.create()
	const component: Response = await container.renderToResponse(YouTubeStatisticsComponent, {
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

	const body: string = await component.text()
	expect(body).toContain(">0</span> Vues")
	expect(body).toContain(">0</span> Abonnés")
})
