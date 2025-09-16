import { test, expect, describe } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import HeaderLayout from '@layouts/Header.astro'

describe('Header layout', () => {
	test('Render', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(HeaderLayout, {
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
		expect(body).toContain('Studio Rv & Co')
		expect(body).toContain('Accueil')
		expect(body).toContain('Productions')
		expect(body).toContain('Projets')
		expect(body).toContain('Association')
		expect(body).toContain('Contact')

		expect(body).toContain('title="YouTube')
		expect(body).toContain('title="X')
		expect(body).toContain('title="Instagram')
		expect(body).toContain('title="Facebook')
		expect(body).toContain('title="Twitch')
	})
})
