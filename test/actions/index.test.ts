import { test, expect, vi, beforeEach, describe } from "vitest"

beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
})

const loadActions = async () => {
    // Mock astro:actions so defineAction returns the raw handler function
    vi.doMock("astro:actions", () => ({ defineAction: ({ handler }: any) => handler }))
    return await import("../../src/actions/index")
}

describe("actions server", () => {
    test("getYouTubeStatistics returns stored json or default", async () => {
        const Actions = await loadActions()
        const getMock = vi.fn().mockResolvedValueOnce({ viewCount: 123, subscriberCount: 45 })

        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getYouTubeStatistics as any)(undefined, { locals } as any)

        expect(result).toEqual({ viewCount: 123, subscriberCount: 45 })
        expect(getMock).toHaveBeenCalledWith("YOUTUBE_STATISTICS", "json")
    })

    test("getYouTubeStatistics returns default when store empty", async () => {
        const Actions = await loadActions()
        const getMock = vi.fn().mockResolvedValueOnce(null)
        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getYouTubeStatistics as any)(undefined, { locals } as any)

        expect(result).toEqual({ viewCount: 0, subscriberCount: 0 })
        expect(getMock).toHaveBeenCalledWith("YOUTUBE_STATISTICS", "json")
    })

    test("getTwitchLivestream returns stored value or null", async () => {
        const Actions = await loadActions()
        const twitch = { id: "1", user_name: "user" }
        const getMock = vi.fn().mockResolvedValueOnce(twitch)
        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getTwitchLivestream as any)(undefined, { locals } as any)

        expect(result).toEqual(twitch)
        expect(getMock).toHaveBeenCalledWith("TWITCH_LIVESTREAM", "json")
    })

    test("getTwitchLivestream returns null when empty", async () => {
        const Actions = await loadActions()
        const getMock = vi.fn().mockResolvedValueOnce(null)
        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getTwitchLivestream as any)(undefined, { locals } as any)

        expect(result).toBeNull()
        expect(getMock).toHaveBeenCalledWith("TWITCH_LIVESTREAM", "json")
    })

    test("getInstagramPosts returns array or empty array", async () => {
        const Actions = await loadActions()
        const posts = [{ id: "1" }, { id: "2" }]
        const getMock = vi.fn().mockResolvedValueOnce(posts)
        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getInstagramPosts as any)(undefined, { locals } as any)

        expect(result).toEqual(posts)
        expect(getMock).toHaveBeenCalledWith("INSTAGRAM_POSTS", "json")
    })

    test("getInstagramPosts returns empty array when none", async () => {
        const Actions = await loadActions()
        const getMock = vi.fn().mockResolvedValueOnce(null)
        const locals: any = { runtime: { env: { STORE: { get: getMock } } } }

        const result = await (Actions.server.getInstagramPosts as any)(undefined, { locals } as any)

        expect(result).toEqual([])
        expect(getMock).toHaveBeenCalledWith("INSTAGRAM_POSTS", "json")
    })
})
