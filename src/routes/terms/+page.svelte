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

  const TITLE = 'Terms of use';
  const DESCRIPTION = `Terms of use for ${SITE.name}. Editorial content only, affiliate disclosure, no warranties on third-party retailers.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Terms', path: '/terms/' }]),
    articleNode({
      url: '/terms/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Legal',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/terms/" />
  <link rel="canonical" href={`${SITE.url}/terms/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Terms of use.</h1>
  <p class="byline">Last updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    This is a placeholder terms-of-use. The full launch-version will
    replace it at go-live. The commitments below are in force until
    then.
  </p>

  <h2>Editorial content only</h2>
  <p>
    {SITE.name} publishes editorial gift-comparison content. We are
    not a retailer. We do not ship products, process payments, handle
    returns, or fulfill orders. When a guide on this site links to a
    third-party retailer and you click through and buy something,
    your purchase is a contract between you and that retailer; their
    terms govern that relationship.
  </p>

  <h2>Affiliate disclosure</h2>
  <p>
    Some outbound links on this site are affiliate links. When you
    click one and make a qualifying purchase, we receive a small
    commission at no extra cost to you. As an Amazon Associate,
    {SITE.name} earns from qualifying purchases. Full disclosure at
    <a href="/editorial/">/editorial/</a>.
  </p>

  <h2>No warranties on third-party products or retailers</h2>
  <p>
    The products and services we compare are third-party. We do our
    best to get the details right and we correct factual errors within
    48 hours of notification — but we do not warrant the performance,
    availability, price, or quality of any product mentioned, and we
    are not responsible for issues that arise between you and a
    retailer. Direct all product concerns to the retailer or
    manufacturer.
  </p>

  <h2>Use of content</h2>
  <p>
    Content on this site is copyrighted by {SITE.parent}. You are
    welcome to quote a sentence or two with attribution and a link
    back to the source page. Republishing full comparisons,
    re-typesetting them on another site, or training commercial
    language models on the full corpus without permission is not
    permitted.
  </p>

  <h2>Updates to these terms</h2>
  <p>
    Material changes will be dated at the top of this page. The full
    launch-version terms will replace this placeholder at go-live.
    Questions in the meantime:
    <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
  </p>
</main>
