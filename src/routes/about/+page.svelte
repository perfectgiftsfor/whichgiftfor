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

  const TITLE = `About ${SITE.name}`;
  const DESCRIPTION = `${SITE.name} is an editorial publication by ${SITE.parent}. Full disclosure of ownership, editorial pen name, affiliate relationships, and how the editor decides which product wins a head-to-head comparison.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'About', path: '/about/' }]),
    articleNode({
      url: '/about/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'About',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/about/" />
  <link rel="canonical" href={`${SITE.url}/about/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>About {SITE.name}.</h1>
  <p class="byline">By {SITE.editor.name}, {SITE.editor.role} · Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    {SITE.name} is an editorial publication owned and operated by
    <strong>{SITE.parent}</strong>. Head-to-head gift comparisons. One
    editorial voice, one disclosed pen name, full disclosure. Every
    deep guide carries a real comparison table and names a winner for a
    specifically-defined recipient — no pay-for-placement, no
    ranking-by-commission.
  </p>

  <h2>The one-line version</h2>
  <p>
    {SITE.name} writes head-to-head product comparisons for gift-givers.
    One question per page: of these two, which one should the reader
    send? Each deep guide carries a real HTML comparison table, names a
    winner for a specifically-defined recipient, and calls out the
    specific cases where the other product is the right pick instead.
    The reader finishes the page with a decision, not a shortlist.
  </p>

  <h2>Ownership</h2>
  <p>
    {SITE.name} is an editorial brand of <strong>{SITE.parent}</strong>.
    {SITE.parent} operates a portfolio of independent gift-advice
    publications — each with its own editorial voice, its own domain,
    its own design, and its own team. No cross-linking between properties,
    no shared content, no shared branding visible to readers. The parent
    company is named here on every site we run because disclosed
    ownership is standard practice; anything else would be hiding.
  </p>

  <h2 id={SITE.editor.slug}>Who writes the comparisons</h2>
  <p>
    <strong>{SITE.editor.name}</strong>, {SITE.editor.role}.
    {SITE.editor.name} is a disclosed editorial pen name used by a
    single operator at {SITE.parent} during pre-incorporation. The
    name is a handle for editorial consistency; behind it is a real
    human making real calls about which product wins each comparison
    and why. The pen name will retire when we hire contributor editors
    under their legal names.
  </p>
  <p>
    This is standard practice among gift-advice publications and
    explicitly disclosed here so you can calibrate how you read the
    byline. Every editorial standard on this site applies regardless of
    who writes under the pen name on any given day.
  </p>

  <h2>How we make money</h2>
  <p>
    Affiliate commission. When you click an outbound retailer link on
    this site and make a qualifying purchase, we receive a small
    percentage of the sale at no extra cost to you. We are an Amazon
    Associate (the required verbatim statement: "As an Amazon
    Associate, {SITE.name} earns from qualifying purchases.") and
    participate in a small number of other major affiliate networks for
    specialty retailers. Commission never determines which product is
    named the winner of a comparison — the editor is not shown which
    brand pays a higher rate when making the call.
  </p>

  <h2>What {SITE.name} is — and isn't</h2>
  <p>
    <strong>{SITE.name} is framework-first head-to-head editorial.</strong>
    Every deep guide is a comparison between two products, structured
    around a real HTML table and a named winner for a specifically-
    defined recipient. Where we evaluate specific products they are
    widely-reviewed brands; we do not claim to hand-test every product
    we compare. The editor's judgment about which product fits which
    recipient is the thing worth citing, and we are up-front about that.
  </p>
  <p>We do <strong>not</strong>:</p>
  <ul>
    <li>Accept sponsored posts or paid reviews.</li>
    <li>Accept vendor freebies disguised as tested products.</li>
    <li>Publish AI-generated content without editorial review.</li>
    <li>Rank products by commission rate.</li>
    <li>Sell your email address or personal data. See the <a href="/privacy/">privacy policy</a>.</li>
  </ul>

  <h2>Corrections</h2>
  <p>
    Spotted a factual error, a price that has moved, a policy that has
    changed? Write to
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
    Material corrections land within 48 hours of notification and are
    noted inline on the affected page with the date of the fix. See
    <a href="/corrections/">/corrections/</a> for the standing log.
  </p>

  <h2>Legal structure</h2>
  <p>
    {SITE.parent} operates this publication pre-incorporation of a
    formal LLC. Once the LLC is formed, this page will update with the
    legal name, registered-agent address, and EIN. Until then, the sole
    operator is the data controller of record. Contact is at
    <a href="/contact/">/contact/</a>.
  </p>

  <hr />
  <p>
    <a href="/editorial/">Read the editorial standards</a>
  </p>
</main>
