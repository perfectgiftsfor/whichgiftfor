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

  const TITLE = 'Corrections log';
  const DESCRIPTION = `How ${SITE.name} logs factual corrections, price updates, and editorial revisions — our public record of every substantive change to a published comparison.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Corrections log', path: '/corrections/' }]),
    articleNode({
      url: '/corrections/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Corrections',
    }),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/corrections/" />
  <link rel="canonical" href={`${SITE.url}/corrections/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Corrections log.</h1>
  <p class="byline">By {SITE.editor.name}, {SITE.editor.role} · Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    Factual errors, price changes, return-policy shifts, and revisions
    of editorial judgment are logged here with the date, the URL
    affected, and what was corrected. This page is how an editorial
    publication earns trust over time: by showing the record, not by
    quietly editing the past.
  </p>

  <p>
    Every deep guide on {SITE.name} is a dated editorial call by a
    named editor. Prices move, products get discontinued, brands change
    hands, return policies tighten, and sometimes the editor's call on
    a specific comparison evolves with new information. When any of
    that changes a published guide in a substantive way, it lands here —
    not as a silent edit, but as a logged correction with the date, the
    affected URL, and a plain-English note on what was changed and why.
    A typo fix or a clarified sentence does not warrant a log entry;
    a changed winner, a corrected price band, or a factual error does.
  </p>

  <h2>Our corrections SLA</h2>
  <p>
    Correction requests receive a first response within 48 hours of
    receipt. When a correction is warranted, the fix lands publicly
    within 72 hours — inline on the affected page with a dated note,
    and as a new row on this log. If a request does not rise to a
    correction (for example, a difference of editorial judgment rather
    than a factual error), the reply explains why.
  </p>

  <h2>How to submit a correction</h2>
  <p>
    Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
    with the URL of the affected page, the specific claim in question,
    and what you believe the correct version should be. A source link
    is helpful when the correction is factual. The editor reads every
    correction email personally.
  </p>

  <p>A template that makes corrections easy to process:</p>

  <pre class="compare-card"><code>Subject: Correction — [page URL]

Page: https://whichgiftfor.com/compare/[slug]/
Claim in question: "[quote the specific sentence]"
What should be corrected: [what you believe is accurate]
Source (optional): [link or citation]
</code></pre>

  <h2>Log</h2>
  <p>
    No corrections to log yet. This page will track every factual
    correction, price update, and editorial revision with date,
    affected URL, and what changed. We will not silently edit; every
    substantive change gets logged here.
  </p>
</main>
