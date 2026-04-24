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

  const TITLE = 'Head-to-head gift comparisons — the hub';
  const DESCRIPTION =
    'Every WhichGiftFor comparison guide. Two products per page, a real HTML comparison table, a named winner for a specifically-defined recipient, and the cases where the other product is the right pick instead.';

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Compare', path: '/compare/' }]),
    articleNode({
      url: '/compare/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Comparisons',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/compare/" />
  <link rel="canonical" href={`${SITE.url}/compare/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Comparisons hub.</h1>
  <p class="byline">By {SITE.editor.name}, {SITE.editor.role} · Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    Three opening comparisons, each built around a real HTML comparison
    table and a named winner for a specifically-defined recipient. The
    roadmap below names the next batch.
  </p>

  <p>
    Each guide below answers a single question: of these two, which one
    should the reader send? The reader who arrives already has the
    shortlist. The editor's job is to argue the comparison honestly,
    name a winner for a specific kind of recipient, and say plainly when
    the other product is the right pick instead.
  </p>

  <h2>Live comparisons</h2>

  <div class="compare-card">
    <span class="compare-label">Bedding · $$ range</span>
    <h3><a href="/compare/brooklinen-vs-parachute/">Brooklinen vs. Parachute sheets</a></h3>
    <p>
      Two direct-to-consumer brands a decade into the market, similar
      price bands, measurably different cloth. The reader who is stuck
      here is usually choosing between a percale-first brand and a
      sateen-and-linen-first brand without knowing which weave the
      recipient actually sleeps well on. Comparison table covers weave,
      weight, return window, and gift-presentation handling.
    </p>
  </div>

  <div class="compare-card">
    <span class="compare-label">Framing · $$ range</span>
    <h3><a href="/compare/framebridge-vs-artifact-uprising/">Framebridge vs. Artifact Uprising framing</a></h3>
    <p>
      Two online framing services that look similar on the homepage and
      diverge sharply the moment a reader has a specific image in mind.
      One is built for a single photograph; the other is built for a
      framed print from an art-quality print shop. Comparison table
      covers substrate, frame profile depth, lead time, and what happens
      if the recipient dislikes the finish.
    </p>
  </div>

  <div class="compare-card">
    <span class="compare-label">Memory preservation · $$$ range</span>
    <h3><a href="/compare/storyworth-vs-legacybox/">Storyworth vs. Legacybox memory services</a></h3>
    <p>
      Two very different services often compared because they both get
      shorthanded as "a gift for Mom." Storyworth is a year-long writing
      prompt service that produces a printed memoir; Legacybox is a
      one-time media digitization service. The comparison is less about
      which is better and more about which problem the recipient
      actually has — and this guide separates them.
    </p>
  </div>

  <h2>What's on the roadmap</h2>
  <p>
    Wirecutter-vs-NYT-Cooking subscriptions (for the home-cook
    recipient); Our Place vs. Caraway cookware; Masterclass vs.
    Skillshare memberships; Flowers on a subscription — UrbanStems vs.
    Farmgirl. Each new guide follows the same shape: two products, one
    real comparison table, one named winner for a named recipient, and
    the cases where the other product is the right pick instead.
  </p>

  <hr />
  <p>
    <a href="/editorial/">Read the editorial standards</a> for how the
    editor decides which product wins a comparison — and what never
    factors in.
  </p>
</main>
