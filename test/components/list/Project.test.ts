import { test, expect, describe } from "vitest"
import { experimental_AstroContainer as AstroContainer } from "astro/container"
import Project from "@components/list/Project.astro"
import { decodeHTMLEntities, type Project as ProjectInterface } from "@types"
import LesChroniquesBackground from "@assets/img/projects/les_chroniques.webp"

describe("Production component", () => {
    const project: ProjectInterface = {
        name: {
            fr: "Nom en français",
            en: "Name in English"
        },
        description: {
            fr: "Description en français",
            en: "Description in English"
        },
        picture: "les_chroniques.webp",
        link: "https://rvandco.fr"
    }

    test("Render", async () => {
        const container = await AstroContainer.create()
        const component: Response = await container.renderToResponse(Project, {
            props: { project }
        })

        expect(component.status).toBe(200)
        expect(component.headers.get("Content-Type")).toBe("text/html")

        const body: string = decodeHTMLEntities(await component.text())
        expect(body).toContain("<ul class=\"splide__slide\"")
        expect(body).toContain(`>${project.name.fr}</h3>`)
        expect(body).toContain(`>${project.description.fr}</p>`)
        expect(body).toContain(`href="${project.link}"`)
        expect(body).toContain(`src="${LesChroniquesBackground.src}"`)
        expect(body).toContain(`alt="${project.name.fr}"`)
        expect(body).toContain(`width="${LesChroniquesBackground.width}"`)
        expect(body).toContain(`height="${LesChroniquesBackground.height}"`)
        expect(body).toContain(`>Voir</a>`)
    })
})
