import { test, expect, describe } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import YouTubeStatistics from '@components/defer/YouTubeStatistics.astro'

describe('YouTubeStatistics component', () => {
	test('With statistics', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(YouTubeStatistics, {
			locals: {
				runtime: {
					env: {
						STORE: {
							get: () => ({
								"subscriberCount": 1234,
								"viewCount": 5678
							})
						}
					}
				} as any
			}
		})

		expect(component.status).toBe(200)
		expect(component.headers.get('Content-Type')).toBe('text/html')

		const body: string = await component.text()
		expect(body).toContain('>5678</span> Vues')
		expect(body).toContain('>1234</span> Abonnés')
	})


	test('Without statistics', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(YouTubeStatistics, {
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
		expect(body).toContain('></span> Vues')
		expect(body).toContain('></span> Abonnés')
	})
})
