import type { APIRoute } from 'astro'

export const prerender = false

// Get synced data
export const GET: APIRoute = async ({ request, locals, site }) => {
    const key = request.headers.get('x-api-key')
    if (locals.runtime.env.SYNC_KEY && key === locals.runtime.env.SYNC_KEY) {
        return new Response(JSON.stringify({
            'YOUTUBE_STATISTICS': await locals.runtime.env.STORE.getWithMetadata('YOUTUBE_STATISTICS', { type: 'json' }) || null,
            'INSTAGRAM_POSTS': await locals.runtime.env.STORE.getWithMetadata('INSTAGRAM_POSTS', { type: 'json' }) || null,
            'TWITCH_LIVESTREAM': await locals.runtime.env.STORE.getWithMetadata('TWITCH_LIVESTREAM', { type: 'json' }) || null
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
        if (
            !locals.runtime.env.GOOGLE_TOKEN || !locals.runtime.env.YOUTUBE_CHANNEL_ID ||
            !locals.runtime.env.TWITCH_USER || !locals.runtime.env.TWITCH_CLIENT_ID || !locals.runtime.env.TWITCH_CLIENT_SECRET
        ) {
            return new Response('Environment variables not set', { status: 500 })
        }

        const errors: string[] = []
        let twitchTokenRenewed = false

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
        /* const getInstagramPosts = async () => {
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
        } */

        // Twitch
        const getTwitchToken = async () => {
            const request = await fetch('https://id.twitch.tv/oauth2/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    client_id: locals.runtime.env.TWITCH_CLIENT_ID,
                    client_secret: locals.runtime.env.TWITCH_CLIENT_SECRET,
                    grant_type: 'client_credentials'
                })
            })
            const result: any = await request.json()
            if (request.status !== 200) throw new Error(`Twitch Token API returned status ${request.status}`)

            const data = result.access_token
            if (!data) throw new Error('No data found')
            else await locals.runtime.env.STORE.put('TWITCH_TOKEN', data, { metadata: { updatedAt: new Date().toISOString() } })
        }

        const getTwitchLive = async () => {
            try {
                let twitchToken = await locals.runtime.env.STORE.get('TWITCH_TOKEN') ?? ''
                if (!twitchToken) {
                    twitchTokenRenewed = true
                    await getTwitchToken()
                    twitchToken = await locals.runtime.env.STORE.get('TWITCH_TOKEN') ?? ''
                }

                const request = await fetch(`https://api.twitch.tv/helix/streams?user_login=${locals.runtime.env.TWITCH_USER}`, {
                    headers: {
                        'Client-ID': locals.runtime.env.TWITCH_CLIENT_ID,
                        'Authorization': `Bearer ${twitchToken}`
                    }
                })
                if (request.status === 401 && !twitchTokenRenewed) {
                    twitchTokenRenewed = true
                    await getTwitchToken()
                    await getTwitchLive()
                } else {
                    const result: any = await request.json()
                    if (result?.error) throw new Error(result.message)
                    if (request.status !== 200) throw new Error(`Twitch API returned status ${request.status}`)

                    const data = result.data?.[0] || {}
                    await locals.runtime.env.STORE.put('TWITCH_LIVESTREAM', JSON.stringify(data), { metadata: { updatedAt: new Date().toISOString() } })
                }
            }
            catch (e: any) {
                errors.push(`Twitch API error: ${e.message}`)
            }
        }

        await Promise.all([
            getYouTubeStatistics(),
            // getInstagramPosts(),
            getTwitchLive()
        ])

        // Return errors if any
        if (errors.length) {
            return new Response(errors.join('\n'), { status: 500 })
        }

        return new Response('OK', { status: 200 })
    }

    // Redirect to website by default
	return Response.redirect(site?.origin || 'https://rvandco.fr', 301)
}
