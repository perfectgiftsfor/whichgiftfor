<script lang="ts">
  import { SITE } from '$lib/site';
  import {
    articleNode,
    editorPersonNode,
    faqPageNode,
    graph,
    jsonLd,
    organizationNode,
    websiteNode,
  } from '$lib/schema';

  const DATE_PUBLISHED = '2026-04-24';
  const DATE_MODIFIED = '2026-04-24';

  const TITLE = 'Two products. One winner. The reasoning.';
  const DESCRIPTION =
    "WhichGiftFor writes head-to-head product comparisons for gift-givers. Each deep guide answers one question — of these two, which one should you send — with a real comparison table, a named winner for a specifically-defined recipient, and the cases where the other product is the right pick instead.";

  const FAQS = [
    {
      question: `What makes ${SITE.name} different from other gift sites?`,
      answer:
        "Most gift sites hand you a ranked list of ten items. This site narrows to two. The reader arrives already knowing the decision is down to these two brands — Brooklinen versus Parachute, Storyworth versus Legacybox — and wants the comparison argued, not the field widened. Every deep guide on this site is structured that way: the two products, a real comparison table, the named winner for a named recipient, and the specific cases where the other pick is better.",
    },
    {
      question: 'Do you test every product you compare?',
      answer:
        "No, and we say so on every page. WhichGiftFor is framework-first editorial. Products are evaluated from widely-reviewed brands using the editor's judgment plus publicly-available reputation signals — Wirecutter, trade press, strong consumer-review profiles across multiple retailers. The value of this site is the editor's reasoning about which product fits which recipient, not a claim to have personally bench-tested both sides of every comparison.",
    },
    {
      question: 'Who is Dani Perez-Cole?',
      answer:
        "Dani Perez-Cole is the Comparisons Editor and a disclosed editorial pen name used by a single operator at Ramban Group during pre-incorporation. The pen name is a handle for editorial consistency; behind it is a real human making real decisions about which product wins which comparison and why. The full disclosure is on /about/.",
    },
  ];

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    articleNode({
      url: '/',
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Home',
    }),
    faqPageNode(FAQS),
  );
</script>

<svelte:head>
  <title>{TITLE} — {SITE.name}</title>
  <meta name="description" content={DESCRIPTION} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${TITLE} — ${SITE.name}`} />
  <meta property="og:description" content={DESCRIPTION} />
  <meta property="og:url" content="https://whichgiftfor.com/" />
  <link rel="canonical" href={`${SITE.url}/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Two products. One winner. The reasoning.</h1>
  <p class="byline">By {SITE.editor.name}, {SITE.editor.role} · Updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    Most gift sites widen the field to ten options. {SITE.name} narrows
    to two. Each deep guide is a head-to-head comparison — two products
    the reader is already choosing between — with a real comparison
    table, a named winner for a specifically-defined recipient, and the
    specific cases where the other pick is better.
  </p>

  <h2>How this site works</h2>
  <p>
    The reader who lands on a comparison page has already done the
    shortlist. They know it's down to Brooklinen or Parachute, Framebridge
    or Artifact Uprising, Storyworth or Legacybox. What they need is the
    argument, made honestly, so they can close the tab and send the gift.
  </p>
  <p>
    Every deep guide opens with who each product is genuinely for,
    then a real HTML comparison table covering the dimensions that
    actually matter for a gift decision — not a vendor spec sheet, but
    an editor's read on price band, return policy, gift-presentation
    handling, and the specific failure modes each brand is known for.
    From there the editor names a winner for a named recipient and
    closes with the cases where the other product is the right call.
  </p>

  <h2>Start here</h2>
  <ul>
    <li><a href="/compare/">The comparison hub</a></li>
    <li><a href="/compare/brooklinen-vs-parachute/">Brooklinen vs. Parachute sheets</a></li>
    <li><a href="/compare/framebridge-vs-artifact-uprising/">Framebridge vs. Artifact Uprising framing</a></li>
    <li><a href="/compare/storyworth-vs-legacybox/">Storyworth vs. Legacybox memory services</a></li>
  </ul>

  <h2>About the publication</h2>
  <p>
    {SITE.name} is an editorial publication by <strong>{SITE.parent}</strong>.
    We operate without sponsored content, we do not rank by commission
    rate, and every recommendation is editor-selected from widely-reviewed
    brands. Affiliate links are disclosed at the page and site level. The
    editor is {SITE.editor.name}, {SITE.editor.role} — a disclosed
    editorial pen name in pre-incorporation use. Full disclosure at
    <a href="/about/">/about/</a>, editorial standards at
    <a href="/editorial/">/editorial/</a>.
  </p>

  <h2>Frequently asked</h2>
  {#each FAQS as faq}
    <h3>{faq.question}</h3>
    <p>{faq.answer}</p>
  {/each}
</main>
