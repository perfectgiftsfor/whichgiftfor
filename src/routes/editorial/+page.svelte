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

  const TITLE = 'Editorial standards';
  const DESCRIPTION = `How ${SITE.name} decides which product wins a comparison, how we handle affiliate links, and what distinguishes our head-to-head guides from retailer-owned listicles.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Editorial standards', path: '/editorial/' }]),
    articleNode({
      url: '/editorial/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Editorial',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/editorial/" />
  <link rel="canonical" href={`${SITE.url}/editorial/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Editorial standards.</h1>
  <p class="byline">By {SITE.editor.name}, {SITE.editor.role} · Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    {SITE.name} is a framework-first editorial publication built around
    head-to-head product comparisons. We write the way a thoughtful
    friend would argue a decision, not the way a retailer moves inventory.
    Here is how the editor decides which product wins a comparison and
    what never factors in.
  </p>

  <h2>What "framework-first" means for a comparison site</h2>
  <p>
    Every deep guide starts with a frame for the decision: who each
    product is actually for, what dimensions actually matter for a gift
    decision (not a vendor spec sheet), and what the most common failure
    modes are on each side. From there the editor produces a real HTML
    comparison table covering the chosen dimensions, names a winner for
    a specifically-defined recipient, and names the cases where the
    other product is the better pick instead.
  </p>
  <p>
    The comparison table is editorial work. The rows are the dimensions
    the editor believes matter for a gift decision, not the ones the
    brand marketing pages emphasize. A row for "return window" appears
    because it matters disproportionately for gifts; a row for
    "thread count" does not appear because it does not predict how the
    recipient will experience the sheet. The table is where the
    editor's judgment about the decision lives.
  </p>

  <h2>How the editor picks the winner</h2>
  <p>
    When the editor names a winner for a given comparison, the call is
    built from: long-track-record editorial reputation on each brand
    (publications like Wirecutter, Consumer Reports, America's Test
    Kitchen, trade-press reviews), strong consumer-review profiles
    across multiple retailers, the brand's own published return and
    remake policies (which matter more for gifts than for self-purchase),
    and the editor's read on which recipient each product genuinely fits.
  </p>
  <p>
    Commission rate is never part of this decision. The editor does not
    see which of two competing brands pays a higher affiliate percentage
    when making the call. That isolation is a hard rule, not a
    stylistic claim.
  </p>

  <h2>Affiliate relationships</h2>
  <p>
    Some product and brand links on deep guides route through affiliate
    programs — primarily Amazon Associates, plus a small number of
    direct brand partnerships. When they do, we earn a commission on
    qualifying purchases at no extra cost to the reader.
  </p>
  <p>
    Commission does not influence editorial selections. Winners are
    chosen from widely-reviewed brands based on editor's judgment and
    publicly-available reputation signals, not personal hand-testing
    (see the standards above). We do not publish paid placements
    disguised as editorial picks, and the winner of a comparison never
    changes because of commission.
  </p>
  <p>
    <strong>The Amazon required statement:</strong> As an Amazon
    Associate, {SITE.name} earns from qualifying purchases.
  </p>

  <h2>What we don't do</h2>
  <ul>
    <li><strong>No sponsored content.</strong> If a brand wants to pay for placement, the answer is no. If that ever changes, the page will be labeled clearly as sponsored and set outside our regular editorial feed.</li>
    <li><strong>No AI-generated content without editorial review.</strong> We use writing tools internally; the editor makes every published call.</li>
    <li><strong>No paraphrased comparisons.</strong> We do not rewrite other publications' head-to-heads.</li>
    <li><strong>No vendor freebies disguised as tested products.</strong> If the editor ever hand-tests two products in a future evolution of this site, the page will say so specifically, with dates and conditions.</li>
    <li><strong>No dark patterns.</strong> No forced newsletter signup to read content, no fake urgency timers, no artificial scarcity framing.</li>
  </ul>

  <h2>Corrections</h2>
  <p>
    Spot a factual error? A price that has moved? A return policy that
    has changed? Write to
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
    Material corrections land within 48 hours of notification and are
    noted inline on the affected page with the date of the fix. See
    <a href="/corrections/">/corrections/</a> for the standing log.
  </p>

  <h2>Ownership and editorial independence</h2>
  <p>
    {SITE.name} is an editorial brand of {SITE.parent}. The editor is
    {SITE.editor.name}, {SITE.editor.role}, a disclosed pen name during
    pre-incorporation. See <a href="/about/">/about/</a> for the full
    ownership, pen-name, and commercial disclosures.
  </p>
</main>
