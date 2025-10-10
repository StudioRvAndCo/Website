import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import InstagramPosts from "../../../src/components/list/InstagramPosts.astro"

describe("InstagramPosts component", () => {
    test("renders empty when no posts", async () => {
        const container = await AstroContainer.create()
        const component: Response = await container.renderToResponse(InstagramPosts, {
            locals: {
                runtime: {
                    env: {
                        STORE: {
                            get: () => ([])
                        }
                    }
                } as any
            }
        })
        expect(component.status).toBe(200)
        const body: string = await component.text()
        expect(body).not.toContain("<a href=")
    })
})
