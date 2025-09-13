import type { APIRoute } from 'astro'

export const prerender = false

// Get synced data
export const GET: APIRoute = async ({ request, locals, site }) => {
    const key = request.headers.get('x-api-key')
    if (locals.runtime.env.SYNC_KEY && key === locals.runtime.env.SYNC_KEY) {
        return new Response(JSON.stringify({
            'YOUTUBE_STATISTICS': await locals.runtime.env.STORE.getWithMetadata('YOUTUBE_STATISTICS', { type: 'json' }) || null,
            'INSTAGRAM_POSTS': await locals.runtime.env.STORE.getWithMetadata('INSTAGRAM_POSTS', { type: 'json' }) || null,
            'TWITCH_LIVE': await locals.runtime.env.STORE.getWithMetadata('TWITCH_LIVE', { type: 'json' }) || null
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    // Redirect to website by default
    return Response.redirect(site?.origin || 'https://rvandco.fr', 301)
}

// Sync data
export const POST: APIRoute = async ({ request, locals, site }) => {
    const key = request.headers.get('x-api-key')
    if (locals.runtime.env.SYNC_KEY && key === locals.runtime.env.SYNC_KEY) {
        // Check if tokens are set
        if (!locals.runtime.env.YOUTUBE_CHANNEL_ID || !locals.runtime.env.GOOGLE_TOKEN || !locals.runtime.env.INSTAGRAM_TOKEN) {
            return new Response('Environment variables not set', { status: 500 })
        }

        const errors: string[] = []

        // YouTube
        const getYouTubeStatistics = async () => {
            try {
                const request = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${locals.runtime.env.YOUTUBE_CHANNEL_ID}&alt=json&fields=items&prettyPrint=true&key=${locals.runtime.env.GOOGLE_TOKEN}`)
                const result: any = await request.json()
                if (result?.error) throw new Error(result.error.message)
                if (request.status !== 200) throw new Error(`YouTube API returned status ${request.status}`)

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
                if (request.status !== 200) throw new Error(`Instagram API returned status ${request.status}`)

                const data = result.data.slice(0, 10)
                if (!data) throw new Error('No data found')
                else await locals.runtime.env.STORE.put('INSTAGRAM_POSTS', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
            }
            catch (e: any) {
                errors.push(`Instagram API error: ${e.message}`)
            }
        }

        // Twitch
        const getTwitchLive = async () => {
            try {
                const request = await fetch("https://api.twitch.tv/helix/streams?user_login=studiorvandco", {
                    headers: {
                        "Client-Id": locals.runtime.env.TWITCH_ID,
                        "Authorization": `Bearer ${locals.runtime.env.TWITCH_TOKEN}`
                    }
                })
                const result: any = await request.json()
                if (result?.error) throw new Error(result.message)
                if (request.status !== 200) throw new Error(`Twitch API returned status ${request.status}`)

                const data = result.data[0]
                if (!data) throw new Error('No data found')
                else await locals.runtime.env.STORE.put('TWITCH_LIVE', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
            }
            catch (e: any) {
                errors.push(`Instagram API error: ${e.message}`)
            }
        }

        await Promise.all([getYouTubeStatistics(), /* getInstagramPosts(), getTwitchLive() */])

        // Return errors if any
        if (errors.length) {
            return new Response(errors.join('\n'), { status: 500 })
        }

        return new Response('OK', { status: 200 })
    }

    // Redirect to website by default
	return Response.redirect(site?.origin || 'https://rvandco.fr', 301)
}
