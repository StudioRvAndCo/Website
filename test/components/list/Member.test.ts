import { test, expect, describe } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import MemberComponent from '@components/list/Member.astro'
import { decodeHTMLEntities, type Member } from '@types'
import DefaultPicture from '@assets/img/members/default.webp'

describe('Member component', () => {
	const member: Member = {
		name: "Studio Rv & Co",
		picture: 'default.webp'
	}

	test('With link', async () => {
		const memberWithLink = {
			...member,
			link: "https://rvandco.fr"
		}

		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(MemberComponent, {
			props: { member: memberWithLink }
		})

		expect(component.status).toBe(200)
		expect(component.headers.get('Content-Type')).toBe('text/html')

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).toContain(`<a href="${memberWithLink.link}"`)
		expect(body).toContain(`src="${DefaultPicture.src}"`)
		expect(body).toContain(`alt="${memberWithLink.name}"`)
		expect(body).toContain(`width="${DefaultPicture.width}"`)
		expect(body).toContain(`height="${DefaultPicture.height}"`)
		expect(body).toContain(`>${memberWithLink.name}</p>`)
	})


	test('Without link', async () => {
		const container = await AstroContainer.create()
		const component: Response = await container.renderToResponse(MemberComponent, {
			props: { member }
		})

		expect(component.status).toBe(200)
		expect(component.headers.get('Content-Type')).toBe('text/html')

		const body: string = decodeHTMLEntities(await component.text())
		expect(body).not.toContain(`<a href="`)
		expect(body).toContain(`src="${DefaultPicture.src}"`)
		expect(body).toContain(`alt="${member.name}"`)
		expect(body).toContain(`width="${DefaultPicture.width}"`)
		expect(body).toContain(`height="${DefaultPicture.height}"`)
		expect(body).toContain(`>${member.name}</p>`)
	})
})
