import { test, expect, vi } from 'vitest'
import * as Sync from '@pages/api/sync'
import { beforeEach, describe } from 'node:test'

vi.stubGlobal('fetch', vi.fn())

beforeEach(() => {
    vi.clearAllMocks()
})

describe('Get Sync Data', () => {
    test('No API key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'GET' })
        const context: any = { request, locals: { runtime: { env: {} } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.GET(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })

    test('Wrong API key', async () => {
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
            TWITCH_LIVE: { value: { id: '12345', user_id: '67890', user_name: 'studiorvandco', game_id: '0', type: 'live', title: 'Live Stream', viewer_count: 100, started_at: '2024-01-01T00:00:00Z', language: 'en', thumbnail_url: 'https://example.com/thumbnail.jpg', tag_ids: [] }, metadata: { updatedAt: '2024-01-01T00:00:00Z' } }
        })

        expect(getMock).toHaveBeenCalledTimes(3)
        expect(getMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', { type: 'json' })
        expect(getMock).toHaveBeenNthCalledWith(2, 'INSTAGRAM_POSTS', { type: 'json' })
        expect(getMock).toHaveBeenNthCalledWith(3, 'TWITCH_LIVE', { type: 'json' })
    })
})

describe('Sync Social Networks', () => {
    test('No API key', async () => {
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST' })
        const context: any = { request, locals: { runtime: { env: {} } }, site: new URL('https://rvandco.fr/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://rvandco.fr/')
    })

    test('Wrong API key', async () => {
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
        (fetch as any)
            .mockResolvedValueOnce({
                json: async () => ({
                    items: [{ statistics: { viewCount: '1000', subscriberCount: '100', videoCount: '10' } }]
                })
            })
            .mockResolvedValueOnce({
                json: async () => ({
                    data: [
                        { id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' },
                        { id: '2', media_type: 'VIDEO', media_url: 'https://example.com/video1.mp4', permalink: 'https://instagram.com/p/2' }
                    ]
                })
            })

        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(200)
        const body: string = await response.text()
        expect(body).toBe('OK')

        expect(putMock).toHaveBeenCalledTimes(2)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), expect.any(Object))
        expect(putMock).toHaveBeenNthCalledWith(2, 'INSTAGRAM_POSTS', JSON.stringify([
            { id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' },
            { id: '2', media_type: 'VIDEO', media_url: 'https://example.com/video1.mp4', permalink: 'https://instagram.com/p/2' }
        ]), expect.any(Object))
    })

    test('YouTube API error', async () => {
        (fetch as any)
            .mockResolvedValueOnce({
                json: async () => ({
                    error: { message: 'YouTube API error' }
                })
            })
            .mockResolvedValueOnce({
                json: async () => ({
                    data: [
                        { id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' }
                    ]
                })
            })

        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('YouTube API error: YouTube API error')

        expect(putMock).toHaveBeenCalledTimes(1)
        expect(putMock).toHaveBeenNthCalledWith(1, 'INSTAGRAM_POSTS', JSON.stringify([
            { id: '1', media_type: 'IMAGE', media_url: 'https://example.com/image1.jpg', permalink: 'https://instagram.com/p/1' }
        ]), expect.any(Object))
    })

    test('Instagram API error', async () => {
        (fetch as any)
            .mockResolvedValueOnce({
                json: async () => ({
                    items: [{ statistics: { viewCount: '1000', subscriberCount: '100', videoCount: '10' } }]
                })
            })
            .mockResolvedValueOnce({
                json: async () => ({
                    error: { message: 'Instagram API error' }
                })
            })

        const putMock = vi.fn().mockResolvedValue(undefined)
        const request = new Request('https://rvandco.fr/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_CHANNEL_ID: 'youtube-id',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            site: new URL('https://rvandco.fr/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Instagram API error: Instagram API error')

        expect(putMock).toHaveBeenCalledTimes(1)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), expect.any(Object))
    })
})
