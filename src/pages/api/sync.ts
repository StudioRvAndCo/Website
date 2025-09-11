import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request, locals, url }) => {
    const key = request.headers.get('x-api-key')
    if (locals.runtime.env.SYNC_KEY && key === locals.runtime.env.SYNC_KEY) {
        // Check if tokens are set
        if (!locals.runtime.env.YOUTUBE_ID || !locals.runtime.env.YOUTUBE_TOKEN || !locals.runtime.env.INSTAGRAM_TOKEN) {
            return new Response('Environment variables not set', { status: 500 })
        }

        const errors: string[] = []

        // YouTube
        const getYouTubeStatistics = async () => {
            try {
                const request = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${locals.runtime.env.YOUTUBE_ID}&alt=json&fields=items&prettyPrint=true&key=${locals.runtime.env.YOUTUBE_TOKEN}`)
                const result: any = await request.json()
                if (result?.error) throw new Error(result.error.message)

                const data = result.items[0].statistics
                if (!data) throw new Error('No data found')
                else await locals.runtime.env.STORE.put('YOUTUBE_STATISTICS', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
            }
            catch (e: any) {
                errors.push(`YouTube API error: ${e.message}`)
            }
        }

        // Instagram
        const getInstagramPosts = async () => {
            try {
                const request = await fetch(`https://graph.instagram.com/v11.0/me/media?fields=media_type,media_url,permalink,thumbnail_url&access_token=${locals.runtime.env.INSTAGRAM_TOKEN}`)
                const result: any = await request.json()
                if (result?.error) throw new Error(result.error.message)

                const data = result.data.slice(0, 10)
                if (!data) throw new Error('No data found')
                else await locals.runtime.env.STORE.put('INSTAGRAM_POSTS', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
            }
            catch (e: any) {
                errors.push(`Instagram API error: ${e.message}`)
            }
        }

        // Twitch
        /* const getTwitchState = async () => {
            try {
                const request = await fetch("https://api.twitch.tv/helix/streams?user_login=studiorvandco", {
                    headers: {
                        "Client-Id": locals.runtime.env.TWITCH_ID,
                        "Authorization": `Bearer ${locals.runtime.env.TWITCH_TOKEN}`
                    }
                })
                const result: any = await request.json()
                if (result?.error) throw new Error(result.message)

                const data = result.data[0]
                if (!data) throw new Error('No data found')
                else await locals.runtime.env.STORE.put('TWITCH_LIVESTREAM_STATE', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
            }
            catch (e: any) {
                errors.push(`Instagram API error: ${e.message}`)
            }
        } */

        await Promise.all([getYouTubeStatistics(), getInstagramPosts(), /* getTwitchState() */])

        // Return errors if any
        if (errors.length) {
            return new Response(errors.join('\n'), { status: 500 })
        }

        return new Response('OK', { status: 200 })
    }

    // Redirect to website
	return Response.redirect(url.origin, 301)
}
