// whichgiftfor.com sitemap. SvelteKit endpoint, prerendered.

import { SITE } from '$lib/site';

export const prerender = true;

const LAST_MOD = '2026-04-25';

const ROUTES = [
  '/',
  '/compare/',
  '/compare/brooklinen-vs-parachute/',
  '/compare/framebridge-vs-artifact-uprising/',
  '/compare/storyworth-vs-legacybox/',
  '/about/',
  '/masthead/',
  '/editorial/',
  '/corrections/',
  '/contact/',
  '/privacy/',
  '/terms/',
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE.url}${r}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`,
).join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
