import { test, expect, vi } from 'vitest'
import * as Sync from '@pages/api/sync'
import { beforeEach, describe } from 'node:test'

vi.stubGlobal('fetch', vi.fn())

beforeEach(() => {
    vi.clearAllMocks()
})

describe('Sync Social Networks', () => {
    test('No API key', async () => {
        const request = new Request('https://example.com/api/sync', { method: 'POST' })
        const context: any = { request, locals: { runtime: { env: {} } }, url: new URL('https://example.com/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://example.com/')
    })

    test('Wrong API key', async () => {
        const request = new Request('https://example.com/api/sync', { method: 'POST', headers: { 'x-api-key': 'wrong' } })
        const context: any = { request, locals: { runtime: { env: { SYNC_KEY: 'correct' } } }, url: new URL('https://example.com/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(301)
        expect(response.headers.get('Location')).toBe('https://example.com/')
    })

    test('Missing tokens', async () => {
        const request = new Request('https://example.com/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = { request, locals: { runtime: { env: { SYNC_KEY: 'correct' } } }, url: new URL('https://example.com/api/sync') }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Tokens not set')
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
        const request = new Request('https://example.com/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            url: new URL('https://example.com/api/sync')
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
        const request = new Request('https://example.com/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            url: new URL('https://example.com/api/sync')
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
        const request = new Request('https://example.com/api/sync', { method: 'POST', headers: { 'x-api-key': 'correct' } })
        const context: any = {
            request,
            locals: {
                runtime: {
                    env: {
                        SYNC_KEY: 'correct',
                        YOUTUBE_TOKEN: 'youtube-token',
                        INSTAGRAM_TOKEN: 'instagram-token',
                        STORE: { put: putMock }
                    }
                }
            },
            url: new URL('https://example.com/api/sync')
        }
        const response: Response = await Sync.POST(context)

        expect(response.status).toBe(500)
        const body: string = await response.text()
        expect(body).toBe('Instagram API error: Instagram API error')

        expect(putMock).toHaveBeenCalledTimes(1)
        expect(putMock).toHaveBeenNthCalledWith(1, 'YOUTUBE_STATISTICS', JSON.stringify({ viewCount: '1000', subscriberCount: '100', videoCount: '10' }), expect.any(Object))
    })
})
