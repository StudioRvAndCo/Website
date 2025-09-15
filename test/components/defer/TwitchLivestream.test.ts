import { test, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import TwitchLivestream from '@components/defer/TwitchLivestream.astro'

test('Twitch is not live', async () => {
	const container = await AstroContainer.create()
	const component: Response = await container.renderToResponse(TwitchLivestream, {
		locals: {
			runtime: {
				env: {
					STORE: {
						get: () => ({})
					}
				}
			} as any
		}
	})

	expect(component.status).toBe(200)
	expect(component.headers.get('Content-Type')).toBe('text/html')

	const body: string = await component.text()
	expect(body).toContain('<a class href=')
	expect(body).toContain('title="Twitch"')
})


test('Twitch is live', async () => {
	const container = await AstroContainer.create()
	const component: Response = await container.renderToResponse(TwitchLivestream, {
		locals: {
			runtime: {
				env: {
					STORE: {
						get: () => ({
							"title": "Just Chatting",
							"viewer_count": 42,
							"started_at": "2024-01-01T00:00:00Z"
						})
					}
				}
			} as any
		}
	})

	expect(component.status).toBe(200)
	expect(component.headers.get('Content-Type')).toBe('text/html')

	const body: string = await component.text()
	expect(body).toContain('<a class="on-air" href=')
	expect(body).toContain('title="Twitch"')
})
