import { test, expect, describe } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import ProductionComponent from '@components/list/Production.astro'
import { decodeHTMLEntities, type Production } from '@types'
import EnSursisThumbnail from '@assets/img/productions/en_sursis.webp'

describe('Production component', () => {
    const production: Production = {
        name: {
            fr: "Nom en français",
            en: "Name in English"
        },
        description: {
            fr: "Description en français",
            en: "Description in English"
        },
        picture: "en_sursis.webp",
        link: "https://rvandco.fr"
    }

    test('With index = 0', async () => {
        const container = await AstroContainer.create()
        const component: Response = await container.renderToResponse(ProductionComponent, {
            props: { production, index: 0 }
        })

        expect(component.status).toBe(200)
        expect(component.headers.get('Content-Type')).toBe('text/html')

        const body: string = decodeHTMLEntities(await component.text())
        expect(body).toContain(`<section class`)
        expect(body).toContain(`src="${EnSursisThumbnail.src}"`)
        expect(body).toContain(`alt="${production.name.fr}"`)
        expect(body).toContain(`width="${EnSursisThumbnail.width}"`)
        expect(body).toContain(`height="${EnSursisThumbnail.height}"`)
        expect(body).toContain(`>Nouveau</span>`)
        expect(body).toContain(`> ${production.name.fr} </h3>`)
        expect(body).toContain(`>${production.description.fr}</p>`)
        expect(body).toContain(`href="${production.link}"`)
        expect(body).toContain(`> Regarder </a>`)
    })


    test('With odd index != 0', async () => {
        const container = await AstroContainer.create()
        const component: Response = await container.renderToResponse(ProductionComponent, {
            props: { production, index: 1 }
        })

        expect(component.status).toBe(200)
        expect(component.headers.get('Content-Type')).toBe('text/html')

        const body: string = decodeHTMLEntities(await component.text())
        expect(body).toContain(`<section class="reverse"`)
        expect(body).toContain(`src="${EnSursisThumbnail.src}"`)
        expect(body).toContain(`alt="${production.name.fr}"`)
        expect(body).toContain(`width="${EnSursisThumbnail.width}"`)
        expect(body).toContain(`height="${EnSursisThumbnail.height}"`)
        expect(body).not.toContain(`>Nouveau</span>`)
        expect(body).toContain(`>  ${production.name.fr} </h3>`)
        expect(body).toContain(`>${production.description.fr}</p>`)
        expect(body).toContain(`href="${production.link}"`)
        expect(body).toContain(`> Regarder </a>`)
    })
})
