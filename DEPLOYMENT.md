# Deployment — whichgiftfor.com

Manual steps the operator (Chad) runs to deploy WhichGiftFor for the first time. Most require human interaction with a SaaS signup flow and cannot be automated.

## 1. Install dependencies + smoke-test locally

```
cd C:/Users/ChadE/GEO/whichgiftfor
npm install
npm run dev
# open http://localhost:5173/
# verify homepage, /compare/, three deep comparison pages, /about/, /editorial/ all render
npm run build
# verify build/ contains index.js (the node server entry)
node build/index.js
# curl http://localhost:3000/ — should respond with the homepage HTML
```

If the build fails, stop here. Nothing else works downstream.

## 2. GitHub repo (separate from other Ramban Group properties)

Create a **new, separate private GitHub repo** — not a fork, not a branch of any existing monorepo. Per the boss's "separate repo" directive.

```
cd C:/Users/ChadE/GEO/whichgiftfor
git init
git add .
git commit -m "Initial scaffold: whichgiftfor.com — Octopus tentacle (SvelteKit + Fly.io)"
# Create repo on github.com first (suggested name: ramban-group/whichgiftfor, private)
git remote add origin git@github.com:ramban-group/whichgiftfor.git
git branch -M main
git push -u origin main
```

Use a **different GitHub account** or at least a separate `ramban-group` organization than the account that owns any sibling Ramban Group property, per the infra-diversification matrix.

## 3. Fly.io deployment

Per the boss's diversification rules, WhichGiftFor deploys to **Fly.io** (distinct from any sibling Ramban Group property's host — idealgiftfor is on Vercel, topgiftsfor is on Netlify, etc.).

1. Install `flyctl` if not already installed: <https://fly.io/docs/hands-on/install-flyctl/>.
2. Sign up / log in with a **different email** from other Ramban Group hosting accounts: `flyctl auth signup` or `flyctl auth login`.
3. Launch the app (from the repo root; this reads fly.toml):

```
flyctl launch --no-deploy --name whichgiftfor
# or, if the app was pre-created: skip --name and let fly.toml drive it
```

4. Deploy:

```
flyctl deploy
```

Fly.io builds the Dockerfile in a remote builder, pushes the image to its registry, and starts a machine in the `primary_region` (default `iad` — adjust `fly.toml` if you want elsewhere).

5. Confirm the app is up:

```
flyctl status
flyctl logs
# visit the generated URL (e.g. https://whichgiftfor.fly.dev/)
```

Every response should carry `X-Robots-Tag: noindex, nofollow` from the `http_service.response_headers` block — verify with `curl -I https://whichgiftfor.fly.dev/`.

## 4. Domain + DNS (Cloudflare)

Domain `whichgiftfor.com` is in the portfolio. Use **Cloudflare** as the DNS provider (distinct from GoDaddy which holds sibling property DNS).

1. Add the domain to Cloudflare: <https://dash.cloudflare.com/>.
2. Cloudflare gives you two nameservers — update the registrar to point at those.
3. In Fly.io, add the certificate for the domain:

```
flyctl certs add whichgiftfor.com
flyctl certs add www.whichgiftfor.com
# flyctl will print the DNS records required for validation + the app A/AAAA targets
```

4. In Cloudflare DNS, add the records Fly.io prints:
   - An `A` record for `@` pointing at the Fly.io IPv4 anycast IP
   - An `AAAA` record for `@` pointing at the Fly.io IPv6 anycast IP
   - A `CNAME` for `www` pointing at `whichgiftfor.fly.dev`
   - Any `_acme-challenge` CNAME / TXT records Fly.io requires
5. Set Cloudflare proxy mode to **DNS only** (gray cloud) for the `A`/`AAAA` records during cert provisioning. Once the cert is issued you can switch back to proxied if desired, though proxied mode adds an extra layer with implications for Fly.io edge routing — start DNS-only, re-evaluate later.
6. Wait 15-60 minutes for propagation. `flyctl certs check whichgiftfor.com` confirms when the cert is issued.

## 5. Email — separate from other Ramban Group properties

Per infra-diversification: use a **different email provider** than any sibling Ramban Group property uses. Candidate TBD — likely one of ProtonMail, Zoho Mail, or a self-hosted solution, to be finalized before launch.

Whatever provider is chosen:
1. Verify domain ownership (provider gives you a TXT record → add to Cloudflare DNS).
2. Create mailboxes: `editor@whichgiftfor.com`, `press@whichgiftfor.com`, `privacy@whichgiftfor.com`.
3. Add MX records in Cloudflare DNS per the provider's instructions.
4. Add DKIM + SPF + DMARC records.

## 6. Analytics — separate from other Ramban Group properties

Analytics provider TBD pre-launch. Must be:
- Privacy-preserving (no third-party tracking cookies)
- Distinct from whatever sibling properties use (so fingerprinting tools cannot join the properties)

Candidates: Fathom, a self-hosted Plausible instance (note: Plausible.io SaaS is in use at a sibling property; self-hosted or a different provider is required here to maintain distinctness).

Once selected, add the snippet in `src/app.html` just before `%sveltekit.head%`.

## 7. Google Search Console

1. Go to <https://search.google.com/search-console>.
2. **Add property → Domain property → whichgiftfor.com**.
3. Verify via the DNS TXT record Google gives you (add to Cloudflare DNS).
4. Do not submit the sitemap until the launch flip — the pre-launch shield is noindex on every response, and submitting a sitemap while the shield is up confuses signals.

## 8. Launch flip (remove the pre-launch shield)

Three things to remove in one PR when flipping to public:

1. `src/app.html` — remove `<meta name="robots" content="noindex, nofollow" />`
2. `static/robots.txt` — remove `Disallow: /`, add `Sitemap: https://whichgiftfor.com/sitemap.xml`
3. `fly.toml` — remove the `[[http_service.response_headers]]` block that sets `X-Robots-Tag`

Then: `flyctl deploy`. Verify with `curl -I https://whichgiftfor.com/` that `X-Robots-Tag` is no longer present and `<meta name="robots">` is gone from the HTML.

## 9. Verify the infra-diversification matrix

Before first public announcement, confirm each dimension is distinct from sibling Ramban Group properties:

| Dimension | WhichGiftFor | Distinct? |
|---|---|---|
| Hosting | Fly.io | Yes |
| Framework | SvelteKit 2 + adapter-node (server) | Yes (siblings use adapter-static / Next.js) |
| Editorial byline | Dani Perez-Cole, Comparisons Editor | Yes |
| Primary palette | Bone + cyan + charcoal | Yes |
| Typography | Fraunces + Manrope | Yes |
| Email | TBD (not Fastmail or Gmail-for-Workspace) | Yes |
| Analytics | TBD (not Plausible.io SaaS) | Yes |
| GitHub org | ramban-group | Separate account if possible |
| DNS | Cloudflare | Yes (siblings on GoDaddy / Vercel DNS) |

## 10. Linking policy (first 60 days)

**Zero cross-links** between whichgiftfor.com and any other Ramban Group property for the first 60 days of the site being live. Let the domain build its own organic authority.

After day 60: cross-links are permitted **only when contextually justified** — a specific article might link to another specific article because it is genuinely useful. No "related brands" footer blocks, no systematic "as seen on" attribution, no cross-posting of newsletter content.

## 11. First expansion after launch

Once the core 10 pages are live and tracking:

- /compare/wirecutter-vs-nyt-cooking/
- /compare/our-place-vs-caraway/
- /compare/masterclass-vs-skillshare/
- /compare/urbanstems-vs-farmgirl-flowers/

Each page follows the same A-vs-B comparison pattern — two products, one real table, one named winner, cases-for-the-other — from the existing three.

## 12. Content cadence post-launch

Sustainable cadence per the editorial playbook: **one new comparison per month.** Each new comparison goes through the same framework-first table-driven structure, gets added to the hub, the sitemap, `llms.txt`, and the README tree. Cadence beats burst; monthly publication keeps Dani's voice consistent and avoids the thin-content trap that kills framework-first sites when they scale too fast.
