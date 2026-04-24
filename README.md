# whichgiftfor.com

SvelteKit 2 + TypeScript + Tailwind. Server-rendered with `@sveltejs/adapter-node`, deployed to Fly.io.

## Stack (intentionally distinct from sibling Ramban Group properties)

- **Framework:** SvelteKit 2 with `@sveltejs/adapter-node`. Runs as a Node.js server behind Fly.io's edge network — a different output format from sibling properties that use `adapter-static` (static HTML) or Next.js (different framework entirely).
- **Styling:** Tailwind CSS with a bone + cyan + charcoal palette. Fonts: Fraunces (serif headings) + Manrope (sans-serif body + UI). Designed to read as a technical-comparison magazine — comparison tables are the visual anchor on every deep guide.
- **Hosting target:** Fly.io (machines + http_service with noindex header pre-launch).
- **Editorial byline:** Dani Perez-Cole, Comparisons Editor (disclosed editorial pen name).
- **Ownership disclosure:** Ramban Group, transparent on /about/ and /masthead/.
- **Editorial beat:** head-to-head A-vs-B gift comparisons at `/compare/[a]-vs-[b]/`.

## Local development

```
npm install
npm run dev
```

Open http://localhost:5173/.

## Build

```
npm run build
```

SvelteKit + adapter-node produces a Node server in `build/`. The entry point is `build/index.js`. Prerendered HTML for each route is in `build/prerendered/pages/`.

## Run the built server locally

```
npm run start
# or: node build/index.js
# serves on http://localhost:3000/
```

## Typecheck

```
npm run check
```

## Deployment

See `DEPLOYMENT.md` for the full Fly.io + Cloudflare DNS setup.

## Project structure

```
whichgiftfor/
├── Dockerfile                        # Multi-stage: build then trim for runtime
├── fly.toml                          # Fly.io app + http_service + noindex header
├── src/
│   ├── app.html                      # HTML shell (Google Fonts preconnect + noindex meta)
│   ├── app.css                       # Tailwind + base typography + bone/cyan/charcoal palette
│   ├── app.d.ts                      # SvelteKit ambient types
│   ├── lib/
│   │   ├── site.ts                   # SITE constant (url, name, parent, editor)
│   │   └── schema.ts                 # Fresh schema.org @graph helpers
│   └── routes/
│       ├── +layout.svelte            # Header + Footer
│       ├── +layout.ts                # prerender = true; trailingSlash = always
│       ├── +page.svelte              # Homepage
│       ├── compare/
│       │   ├── +page.svelte                                    # Hub
│       │   ├── brooklinen-vs-parachute/+page.svelte
│       │   ├── framebridge-vs-artifact-uprising/+page.svelte
│       │   └── storyworth-vs-legacybox/+page.svelte
│       ├── masthead/+page.svelte     # Editor bio + beats + philosophy
│       ├── about/+page.svelte
│       ├── editorial/+page.svelte
│       ├── contact/+page.svelte
│       ├── corrections/+page.svelte
│       ├── privacy/+page.svelte
│       └── terms/+page.svelte
├── static/
│   ├── 404.html
│   ├── favicon.svg
│   ├── robots.txt                    # Disallow: / (pre-launch shield)
│   └── llms.txt
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Editorial model

This site is **framework-first head-to-head editorial**. Each deep guide answers one question: of these two, which one should the reader send? Every comparison carries a real HTML `<table>` with `<caption>`, `<thead>`, and `<tbody>`, a named winner for a specifically-defined recipient, and the specific cases where the other product is the right pick instead. We do not claim to hand-test the products we compare; the judgment worth citing is the editor's read on recipient-match. See `/editorial/` for the full standards.

## Relationship to other Ramban Group properties

None, visible to readers or search engines. WhichGiftFor is a separate brand, separate repo, separate hosting, separate analytics, separate editor, separate voice, separate visual register. The shared parent (Ramban Group) is disclosed on /about/ and /masthead/, as is standard for multi-brand publications.

For 60 days after launch: zero cross-links between whichgiftfor.com and any other Ramban Group property. After that window, any cross-link must be contextually justified and never systematic.

## Pre-launch shield

Three layers of noindex are in force until the flip-at-launch step:

1. `<meta name="robots" content="noindex, nofollow">` in `src/app.html`
2. `Disallow: /` in `static/robots.txt`
3. `X-Robots-Tag: noindex, nofollow` header injected by `fly.toml` http_service.response_headers

At launch, remove or flip each of the three. The meta tag and the fly.toml header are the load-bearing ones — robots.txt is a courtesy for well-behaved crawlers but not a barrier.
