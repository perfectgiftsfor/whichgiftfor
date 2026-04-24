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

  const TITLE = 'Masthead';
  const DESCRIPTION = `The masthead for ${SITE.name} — the editor behind the byline, the beats covered and deliberately not covered, editorial philosophy, pitching conventions, corrections policy, and the ${SITE.parent} parent-company disclosure.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Masthead', path: '/masthead/' }]),
    articleNode({
      url: '/masthead/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Masthead',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/masthead/" />
  <link rel="canonical" href={`${SITE.url}/masthead/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Masthead.</h1>

  <p class="bottom-line">
    {SITE.name} is a single-editor editorial publication. This page
    names the editor behind the byline, the beats the editor writes,
    the beats the editor does not, how comparisons get argued, and how
    to pitch or flag a correction.
  </p>

  <h2 id="editorial-team">Editorial team</h2>
  <p>
    <strong>{SITE.editor.name}</strong>, {SITE.editor.role}.
    {SITE.editor.name} is a disclosed editorial pen name. The person
    behind the byline is an editorial operator at <strong>{SITE.parent}</strong>,
    and the pen name is used for privacy-first reasons consistent with
    multi-brand publishing — one named voice per property, one legal
    operator behind several named voices, and a clean separation
    between the editor's public work and the operator's private life.
    A disclosed pen name is a convention, not a trick; the full
    long-form disclosure is on <a href="/about/">/about/</a>.
  </p>

  <h2>Beats</h2>
  <p>
    {SITE.editor.name} writes head-to-head product comparisons for
    gift-givers — two brands per page, a real HTML comparison table,
    and a named winner for a specifically-defined recipient. Current
    coverage spans bedding, framing, memory-preservation services, and
    subscription-style gifts. Every deep guide follows the same
    structure: the two products, the comparison table, the winner, the
    named cases where the other product is the right pick instead.
    Editorial posture is framework-first, not hand-testing; the
    judgment worth citing is the editor's read on which product fits
    which recipient.
  </p>
  <p>
    {SITE.editor.name} does <strong>not</strong> write single-product
    roundups, ten-item listicles, or first-party hand-tested reviews.
    Those are different editorial formats. The editor also does not
    cover corporate or FINRA-compliance gifting — advisor-to-client
    gift etiquette, firm-wide holiday programs — which is covered at a
    separate {SITE.parent} property with its own compliance-aware
    register. Keeping the beats cleanly separated across properties
    lets each byline specialize rather than over-reach.
  </p>

  <h2>Editorial philosophy</h2>
  <p>
    {SITE.name} is built around the posture that a comparison article
    should end with a decision, not a widened shortlist. The reader
    arriving at a Brooklinen-vs-Parachute page has already decided
    between those two brands and everything else; they want the
    comparison argued, not relitigated. One well-argued winner for a
    clearly-defined recipient is more useful than a balanced "both are
    great, it depends" hedge that sends the reader back to a new tab.
  </p>
  <p>
    The ceiling on a comparison page is the quality of the table and
    the clarity of the call. A page with a vendor-style spec table and
    a vague conclusion ages poorly; a page with an editor-chosen
    comparison table and a named winner for a named recipient remains
    useful even after specific prices move, because the framework
    transfers. {SITE.name} is framework-first on purpose — the
    comparison table and the recipient-match call are the durable
    things, and the product mentions underneath are disposable
    scaffolding around them.
  </p>

  <h2>How to pitch the editor</h2>
  <p>
    Pitches are welcome at
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
    A usable pitch is a short paragraph — three to five sentences —
    naming the two products the piece would compare, the specific kind
    of recipient the comparison is for, why the comparison matters
    right now, and what writing background the pitcher brings.
    Unsolicited full drafts are not read; the editor prefers to shape a
    piece rather than reverse-engineer an edit on a finished draft.
  </p>

  <h2>Corrections</h2>
  <p>
    Corrections are actively invited. Price changes, return-policy
    updates, discontinued products, factual errors, broken links — if
    something on the site has drifted from accurate, write to
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
    with the page URL and the specific line that needs fixing.
    Material corrections land within 48 hours and are noted inline on
    the affected page with the date of the fix.
  </p>

  <h2>{SITE.parent} disclosure</h2>
  <p>
    {SITE.name} is a brand of <strong>{SITE.parent}</strong>, part of
    a multi-brand publisher network. {SITE.parent} operates several
    independent gift-advice and editorial publications, each with its
    own editor, its own domain, and its own register. Standard
    related-company disclosures, including sibling properties, are on
    <a href="/about/">/about/</a>. The parent company is named here on
    every site we run because disclosed ownership is how honest
    publishing works.
  </p>

  <hr />
  <p>
    <a href="/about/">About {SITE.name}</a> ·
    <a href="/editorial/">Editorial standards</a> ·
    <a href="/contact/">Contact</a>
  </p>
</main>
