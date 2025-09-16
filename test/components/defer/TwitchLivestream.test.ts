import { test, expect, describe } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import TwitchLivestreamComponent from '@components/defer/TwitchLivestream.astro'

describe('TwitchLivestream component', () => {
	test('Is live', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(TwitchLivestreamComponent, {
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


	test('Is not live', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(TwitchLivestreamComponent, {
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
})
