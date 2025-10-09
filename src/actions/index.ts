import type { InstagramPost, TwitchLivestream, YouTubeStatistics } from "@types"
import { defineAction } from "astro:actions"

export const server = {
    getYouTubeStatistics: defineAction({
        handler: async (_, { locals }) => {
            return await locals.runtime.env.STORE.get("YOUTUBE_STATISTICS", "json") as YouTubeStatistics ?? { viewCount: 0, subscriberCount: 0 }
        }
    }),
    getTwitchLivestream: defineAction({
        handler: async (_, { locals }) => {
            return await locals.runtime.env.STORE.get("TWITCH_LIVESTREAM", "json") as TwitchLivestream | null
        }
    }),
    getInstagramPosts: defineAction({
        handler: async (_, { locals }) => {
            return await locals.runtime.env.STORE.get("INSTAGRAM_POSTS", "json") as InstagramPost[] ?? []
        }
    })
}
