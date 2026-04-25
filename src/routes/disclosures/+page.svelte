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

  const DATE_PUBLISHED = '2026-04-25';
  const DATE_MODIFIED = '2026-04-25';

  const TITLE = `Disclosures`;
  const DESCRIPTION = `${SITE.name} disclosures: affiliate relationships across both products in every comparison, editorial pen name, parent company, and the things this publication does not do.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Disclosures', path: '/disclosures/' }]),
    articleNode({
      url: '/disclosures/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Disclosures',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/disclosures/" />
  <link rel="canonical" href={`${SITE.url}/disclosures/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Disclosures.</h1>
  <p class="byline">
    Last reviewed by
    <a href={`/masthead/#${SITE.editor.slug}`}>{SITE.editor.name}</a>,
    {SITE.editor.role} · Updated {DATE_MODIFIED}
  </p>

  <p class="bottom-line">
    Everything a thoughtful reader should know about how this site
    earns money on a comparison page where both products may be
    affiliated, who is behind the byline, and what this publication
    deliberately does not do.
  </p>

  <h2>Affiliate disclosure (both sides of every comparison)</h2>
  <p>
    {SITE.name} earns a commission from qualifying purchases. We are
    an Amazon Associate. The required verbatim statement is: <em>"As
    an Amazon Associate we earn from qualifying purchases."</em>
    Outbound retailer links on this site carry our Amazon Associates
    tracking identifier. The structural detail worth knowing for a
    comparison site: <strong>both products in any head-to-head
    comparison may be affiliated</strong>. Neither inclusion in a
    comparison nor the named winner is paid placement. The editor's
    judgment about which product fits a specifically-defined
    recipient is the editorial signal; commission rate is not a
    factor in that judgment.
  </p>

  <h2>Editorial pen name</h2>
  <p>
    All comparisons on {SITE.name} are published under the byline
    <strong>{SITE.editor.name}, {SITE.editor.role}</strong>. This is
    a disclosed editorial pen name used by a single operator at
    {SITE.parent} during the pre-incorporation phase of the
    publication. The name is a handle for editorial consistency;
    behind it is a real human making real decisions about which
    product wins a comparison and which dimensions actually matter
    for a gift. The pen name will retire when we hire contributor
    editors under their legal names.
  </p>

  <h2>Parent company</h2>
  <p>
    {SITE.name} is an editorial brand of <strong>{SITE.parent}</strong>.
    {SITE.parent} operates a portfolio of independent gift-advice
    publications. Each property has its own editorial voice, its own
    domain, its own design, and its own editor; there is no
    cross-linking, no shared content, no shared branding visible to
    readers. The parent company is named on every site we run because
    disclosed ownership is standard practice.
  </p>
  <p>
    {SITE.name} operates pre-incorporation of a formal LLC. Once the
    LLC is formed, this page will update with the legal name,
    registered-agent address, and EIN.
  </p>

  <h2>Comparison-table craft</h2>
  <p>
    Every deep comparison on {SITE.name} carries a real HTML
    <code>&lt;table&gt;</code> with caption, thead, and tbody. The
    rows reflect the editor's judgment about which dimensions actually
    matter for a gift decision — not vendor spec sheets. Products are
    evaluated using publicly-available reputation signals plus the
    editor's reasoning about fit; we do not claim hands-on testing of
    every product we compare. The named winner is for a specifically-
    defined recipient, not for every gift situation.
  </p>

  <h2>What {SITE.name} does not do</h2>
  <ul>
    <li>Accept sponsored posts or paid reviews.</li>
    <li>Accept vendor freebies disguised as tested products.</li>
    <li>Publish AI-generated editorial without human review.</li>
    <li>Pick comparison winners based on commission rate.</li>
    <li>Claim hands-on testing of products evaluated from public
      signals.</li>
    <li>Sell, rent, or trade your email address or personal data.
      See the <a href="/privacy/">privacy policy</a>.</li>
    <li>Cross-link with sibling {SITE.parent} properties during the
      first 60 days of live traffic per property.</li>
    <li>Combine content with perfectgiftsfor.com (unrelated
      publisher).</li>
  </ul>

  <h2>Corrections</h2>
  <p>
    Spotted a factual error, a price that has moved, or a comparison
    where the named winner no longer holds up? Email
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
    Material corrections are made within 48 hours of being notified.
    The full corrections log lives at
    <a href="/corrections/">/corrections/</a>.
  </p>

  <h2>Contact</h2>
  <p>
    For editorial questions, press inquiries, or privacy concerns,
    see <a href="/contact/">/contact/</a> for the routing addresses.
    The disclosed editor is reachable at
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
  </p>

  <hr />
  <p>
    <a href="/about/">About the publication</a> ·
    <a href="/editorial/">Editorial standards</a> ·
    <a href="/corrections/">Corrections log</a>
  </p>
</main>
