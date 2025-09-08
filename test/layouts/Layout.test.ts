import { test, expect } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Layout from '@layouts/Layout.astro';

function decodeHTMLEntities(text: string): string {
    return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

test('Main layout', async () => {
    const title: string = "Studio Rv & Co";
    const description: string = "Le Studio Rv & Co est une association regroupant des amis passionnés par le monde du cinéma.";
    const color: string = "#393939";

	const container: AstroContainer = await AstroContainer.create();
	const component: Response = await container.renderToResponse(Layout);

	expect(component.status).toBe(200);
	expect(component.headers.get('Content-Type')).toBe('text/html');

	const body: string = decodeHTMLEntities(await component.text());
	expect(body).toContain(`<title>${title}</title>`);
	expect(body).toContain(`<meta name="description" content="${description}">`);
	expect(body).toContain(`<meta property="og:title" content="${title}">`);
	// expect(body).toContain('<meta property="og:image" content="/banner.png">');
	expect(body).toContain(`<meta property="og:image:alt" content="${title} banner">`);
	expect(body).toContain(`<meta name="twitter:title" content="${title}">`);
	expect(body).toContain(`<meta name="twitter:description" content="${description}">`);
	// expect(body).toContain('<meta name="twitter:image" content="/banner.png">');
	expect(body).toContain(`<meta name="twitter:image:alt" content="${title} banner">`);
	expect(body).toContain(`<meta name="theme-color" content="${color}">`);
	expect(body).toContain('<link rel="sitemap" href="/sitemap-index.xml">');
})
