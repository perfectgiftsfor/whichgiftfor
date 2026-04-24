<script lang="ts">
  import { SITE } from '$lib/site';
  import {
    articleNode,
    breadcrumbNode,
    editorPersonNode,
    graph,
    jsonLd,
    organizationNode,
    websiteNode,
  } from '$lib/schema';

  const DATE_PUBLISHED = '2026-04-24';
  const DATE_MODIFIED = '2026-04-24';

  const TITLE = 'Contact';
  const DESCRIPTION = `How to reach ${SITE.name} — editorial pitches, press inquiries, privacy requests, and corrections.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Contact', path: '/contact/' }]),
    articleNode({
      url: '/contact/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Contact',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/contact/" />
  <link rel="canonical" href={`${SITE.url}/contact/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Contact.</h1>
  <p class="byline">Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    Three addresses, each for a specific purpose. We read everything
    and reply within 48 business hours. No contact form — plain email
    is easier to audit.
  </p>

  <h2>Editorial — <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></h2>
  <p>
    Corrections, notes on a comparison that drifted from accurate,
    pitching. If you have a specific correction, include the URL of
    the page and the line in question; material corrections land
    within 48 hours and are noted inline with the fix date.
  </p>
  <p>
    Editorial pitching: we are open to a small number of contributor
    pitches per quarter from writers with a demonstrated editorial
    track record in gift-adjacent verticals (lifestyle, design,
    consumer reporting, product comparison). Include three writing
    samples, a one-paragraph pitch naming the two products you would
    compare and the specific recipient the comparison is for, and a
    link to prior published work. We do not accept unsolicited full
    drafts — pitch first.
  </p>

  <h2>Press — <a href={`mailto:${SITE.pressEmail}`}>{SITE.pressEmail}</a></h2>
  <p>
    Media inquiries, interview requests, and press kit requests.
    Please include the publication name, your deadline, and a one-line
    summary of the story angle. If you are a journalist working on a
    story involving {SITE.parent} or the editorial structure of
    {SITE.name}, this is the right address.
  </p>

  <h2>Privacy — <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a></h2>
  <p>
    Privacy requests, data deletion requests, and anything involving
    personal data you have sent us. See the
    <a href="/privacy/">privacy policy</a> for the full frame.
  </p>

  <h2>What we do not accept</h2>
  <ul>
    <li>Sponsored-post pitches. Policy at <a href="/editorial/">/editorial/</a> — the answer is no.</li>
    <li>Product samples sent unsolicited. They will not be reviewed; they will be donated.</li>
    <li>Link-swap or guest-post schemes. Do not email us about these.</li>
    <li>SEO-agency outreach offering bulk backlink services. Same.</li>
  </ul>

  <h2>Mailing address</h2>
  <p>
    {SITE.parent} operates {SITE.name} pre-incorporation of a formal
    LLC. Once the LLC is formed, this section will publish the
    registered-agent address. Until then, email is the canonical
    channel.
  </p>
</main>
