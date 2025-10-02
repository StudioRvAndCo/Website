import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import InstagramPosts from "../../../src/components/defer/InstagramPosts.astro"

describe("InstagramPosts component", () => {
    test("renders posts correctly", async () => {
        const mockPosts = [
            {
                permalink: "https://instagram.com/p/abc123",
                media_type: "IMAGE",
                media_url: "https://image.url/abc.jpg",
                thumbnail_url: null,
                id: "abc123"
            },
            {
                permalink: "https://instagram.com/p/def456",
                media_type: "VIDEO",
                media_url: "https://video.url/def.mp4",
                thumbnail_url: "https://image.url/def-thumb.jpg",
                id: "def456"
            }
        ]
        const container = await AstroContainer.create()
        const component: Response = await container.renderToResponse(InstagramPosts, {
            locals: {
                runtime: {
                    env: {
                        STORE: {
                            get: () => (mockPosts)
                        }
                    }
                } as any
            }
        })
        expect(component.status).toBe(200)
        expect(component.headers.get("Content-Type")).toBe("text/html")
        const body: string = await component.text()
        expect(body).toContain("href=\"https://instagram.com/p/abc123\"")
        expect(body).toContain("src=\"https://image.url/abc.jpg\"")
        expect(body).toContain("href=\"https://instagram.com/p/def456\"")
        expect(body).toContain("src=\"https://image.url/def-thumb.jpg\"")
    })

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
