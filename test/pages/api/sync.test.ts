import { test, expect, vi } from 'vitest'
import * as Sync from '@pages/api/sync'
import { beforeEach, describe } from 'node:test'

vi.stubGlobal('fetch', vi.fn())

beforeEach(() => {
    vi.clearAllMocks()
})

describe('Get Sync Data', () => {
    test('No sync key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'GET' })
        const context: any = { request, locals: { runtime: { env: {} } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.GET(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })


    test('Wrong sync key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'GET', headers: { 'x-api-key': 'wrong' } })
        const context: any = { request, locals: { runtime: { env: { SYNC_KEY: 'correct' } } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.GET(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })


    test('Successful data retrieval', async () => {
        const getMock = vi.fn()
            .mockResolvedValueOnce({ value: { viewCount: '1000', subscriberCount: '100', videoCount: '10' }, metadata: { updatedAt: '2024-01-01T00:00:00Z' } })
            .mockResolvedValueOnce({ value: [{ id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' }], metadata: { updatedAt: '2024-01-01T00:00:00Z' } })
            .mockResolvedValueOnce({ value: { id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] }, metadata: { updatedAt: '2024-01-01T00:00:00Z' } })

        const request = new Request('https://rvandco.fr/api/sync', { method: 'GET', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        STORE: { getWithMetadata: getMock }
                    }
                }
            },
            url: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.GET(context)

        expect(response.status).toBe(200)
        const body: any = await response.json()
        expect(body).toEqual({
            YOUTUBE_STATISTICS: { value: { viewCount: '1000', subscriberCount: '100', videoCount: '10' }, metadata: { updatedAt: '2024-01-01T00:00:00Z' } },
            INSTAGRAM_POSTS: { value: [{ id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' }], metadata: { updatedAt: '2024-01-01T00:00:00Z' } },
            TWITCH_LIVESTREAM: { value: { id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] }, metadata: { updatedAt: '2024-01-01T00:00:00Z' } }
        })

        expect(getMock).toHaveBeenCalledTimes(3)
        expect(getMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', { type: 'json' })
        expect(getMock).toHaveBeenNthCalledWith(2, 'INSTAGRAM_POSTS', { type: 'json' })
        expect(getMock).toHaveBeenNthCalledWith(3, 'TWITCH_LIVESTREAM', { type: 'json' })
    })
})


describe('Sync Social Networks', () => {
    test('No sync key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST' })
        const context: any = { request, locals: { runtime: { env: {} } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })


    test('Wrong sync key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'wrong' } })
        const context: any = { request, locals: { runtime: { env: { SYNC_KEY: 'correct' } } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })


    test('Missing tokens', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = { request, locals: { runtime: { env: { SYNC_KEY: 'correct' } } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Environment variables not set')
    })


    test('Successful sync', async () => {
        const putMock = vi.fn().mockResolvedValue(undefined)
        const fetchMock = vi.fn()
            // YouTube
            .mockResolvedValueOnce(new Response(JSON.stringify({
                items: [{ statistics: { viewCount: '1000', subscriberCount: '100', videoCount: '10' } }]
            }), { status: 200 }))
            // Twitch Token
            .mockResolvedValueOnce(new Response(JSON.stringify({
                access_token: 'twitch_token',
                expires_in: 3600,
                token_type: 'bearer'
            }), { status: 200 }))
            // Twitch Live
            .mockResolvedValueOnce(new Response(JSON.stringify({
                data: [{ id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] }]
            }), { status: 200 }))

        vi.stubGlobal('fetch', fetchMock)

        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        GOOGLE_TOKEN: 'google_token',
                        YOUTUBE_CHANNEL_ID: 'youtube_channel_id',
                        TWITCH_USER: 'twitch_user',
                        TWITCH_CLIENT_ID: 'twitch_client_id',
                        TWITCH_CLIENT_SECRET: 'twitch_client_secret',
                        STORE: {
                            put: putMock,
                            get: vi.fn().mockResolvedValueOnce(null).mockResolvedValueOnce('twitch_token').mockResolvedValueOnce({ id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] })
                        }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(200)
        const body: string = await response.text()
        expect(body).toBe('OK')

        expect(fetchMock).toHaveBeenCalledTimes(3)
        expect(fetchMock).toHaveBeenNthCalledWith(1, 'https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=youtube_channel_id&alt=json&fields=items&prettyPrint=true&key=google_token')
        expect(fetchMock).toHaveBeenNthCalledWith(2, 'https://id.twitch.tv/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: 'twitch_client_id',
                client_secret: 'twitch_client_secret',
                grant_type: 'client_credentials'
            })
        })
        expect(fetchMock).toHaveBeenNthCalledWith(3, 'https://api.twitch.tv/helix/streams?user_login=twitch_user', {
            headers: {
                'Client-ID': 'twitch_client_id',
                'Authorization': 'Bearer twitch_token'
            }
        })

        expect(putMock).toHaveBeenCalledTimes(3)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), { metadata: { updatedAt: expect.any(String) } })
        expect(putMock).toHaveBeenNthCalledWith(2, 'TWITCH_TOKEN', 'twitch_token', { metadata: { updatedAt: expect.any(String) } })
        expect(putMock).toHaveBeenNthCalledWith(3, 'TWITCH_LIVESTREAM', JSON.stringify({ id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] }), { metadata: { updatedAt: expect.any(String) } })
    })


    test('YouTube API error', async () => {
        (fetch as any)
            .mockResolvedValueOnce(new Response(JSON.stringify({
                error: { message: 'YouTube API error' }
            }), { status: 400 }))
            .mockResolvedValueOnce(new Response(JSON.stringify({
                access_token: 'twitch_token',
                expires_in: 3600,
                token_type: 'bearer'
            }), { status: 200 }))
            .mockResolvedValueOnce(new Response(JSON.stringify({
                data: []
            }), { status: 200 }))

        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        GOOGLE_TOKEN: 'youtube-token',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        TWITCH_USER: 'twitch-user',
                        TWITCH_CLIENT_ID: 'twitch-client-id',
                        TWITCH_CLIENT_SECRET: 'twitch-client-secret',
                        STORE: {
                            put: putMock,
                            get: vi.fn().mockResolvedValueOnce(null).mockResolvedValueOnce('twitch_token').mockResolvedValueOnce({ id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] })
                        }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('YouTube API error: YouTube API error')

        expect(putMock).toHaveBeenCalledTimes(2)
        expect(putMock).toHaveBeenNthCalledWith(1, 'TWITCH_TOKEN', 'twitch_token', { metadata: { updatedAt: expect.any(String) } })
        expect(putMock).toHaveBeenNthCalledWith(2, 'TWITCH_LIVESTREAM', JSON.stringify({}), { metadata: { updatedAt: expect.any(String) } })
    })


    test('Twitch token API error', async () => {
        (fetch as any)
            .mockResolvedValueOnce(new Response(JSON.stringify({
                items: [{ statistics: { viewCount: '1000', subscriberCount: '100', videoCount: '10' } }]
            }), { status: 200 }))
            .mockResolvedValueOnce(new Response(JSON.stringify({
                error: { message: 'Twitch API error' }
            }), { status: 400 }))


        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        GOOGLE_TOKEN: 'youtube-token',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        TWITCH_USER: 'twitch-user',
                        TWITCH_CLIENT_ID: 'twitch-client-id',
                        TWITCH_CLIENT_SECRET: 'twitch-client-secret',
                        STORE: {
                            put: putMock,
                            get: vi.fn().mockResolvedValue(null)
                        }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Twitch API error: Twitch Token API returned status 400')

        expect(putMock).toHaveBeenCalledTimes(1)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), { metadata: { updatedAt: expect.any(String) } })
    })


    test('Twitch live API error', async () => {
        (fetch as any)
            .mockResolvedValueOnce(new Response(JSON.stringify({
                items: [{ statistics: { viewCount: '1000', subscriberCount: '100', videoCount: '10' } }]
            }), { status: 200 }))
            .mockResolvedValueOnce(new Response(JSON.stringify({
                access_token: 'twitch_token',
                expires_in: 3600,
                token_type: 'bearer'
            }), { status: 200 }))
            .mockResolvedValueOnce(new Response(JSON.stringify({
                error: 'Unauthorized',
                message: 'Invalid OAuth token'
            }), { status: 401 }))

        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        GOOGLE_TOKEN: 'youtube-token',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        TWITCH_USER: 'twitch-user',
                        TWITCH_CLIENT_ID: 'twitch-client-id',
                        TWITCH_CLIENT_SECRET: 'twitch-client-secret',
                        STORE: {
                            put: putMock,
                            get: vi.fn().mockResolvedValueOnce(null).mockResolvedValueOnce('twitch_token').mockResolvedValueOnce(null)
                        }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Twitch API error: Invalid OAuth token')

        expect(putMock).toHaveBeenCalledTimes(2)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), { metadata: { updatedAt: expect.any(String) } })
        expect(putMock).toHaveBeenNthCalledWith(2, 'TWITCH_TOKEN', 'twitch_token', { metadata: { updatedAt: expect.any(String) } })
    })
})
