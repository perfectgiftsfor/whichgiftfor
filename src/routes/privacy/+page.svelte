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

  const TITLE = 'Privacy policy';
  const DESCRIPTION = `How ${SITE.name} handles data: no tracking cookies, no email-list sharing, full policy published at launch.`;

  const schema = graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbNode([{ name: 'Privacy', path: '/privacy/' }]),
    articleNode({
      url: '/privacy/',
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
  <meta property="og:url" content="https://whichgiftfor.com/privacy/" />
  <link rel="canonical" href={`${SITE.url}/privacy/`} />
  {@html `<script type="application/ld+json">${jsonLd(schema)}</script>`}
</svelte:head>

<main class="editorial">
  <h1>Privacy policy.</h1>
  <p class="byline">Last updated {DATE_MODIFIED}</p>

  <p class="bottom-line">
    Short version: no tracking cookies, no email-list sharing, no
    selling of reader data. The full launch-version policy is
    published at go-live. This page is the honest placeholder until
    then.
  </p>

  <h2>What this page is</h2>
  <p>
    This is a placeholder privacy notice. A full GDPR- and CCPA-compliant
    policy will be published at launch. Until then, the commitments
    below are in force and are what you can count on.
  </p>

  <h2>What we collect</h2>
  <ul>
    <li>
      <strong>Server logs.</strong> Our host records standard web-server
      information — IP address, user-agent, referrer, timestamp, path
      requested — for operational and security reasons. Logs rotate on
      a short cadence and are not used for advertising.
    </li>
    <li>
      <strong>Privacy-preserving analytics.</strong> We plan to use a
      cookieless, privacy-preserving analytics provider (to be finalized
      pre-launch — likely Plausible or a similar service). No
      individual-tracking cookies, no cross-site profiling, no ad-network
      fingerprinting.
    </li>
    <li>
      <strong>Email you send us.</strong> If you write to an address at
      whichgiftfor.com, we retain the email thread for the purpose of
      replying to you and honoring the commitment in it.
    </li>
  </ul>

  <h2>What we do not do</h2>
  <ul>
    <li>We do not sell your email address or any other personal data.</li>
    <li>We do not run retargeting pixels or third-party advertising trackers.</li>
    <li>We do not share data with affiliate networks beyond the standard click-through referrer a retailer receives when you follow an outbound link.</li>
    <li>We do not require a newsletter signup to read content.</li>
  </ul>

  <h2>Affiliate links</h2>
  <p>
    Some outbound links on this site are affiliate links. When you
    click one and make a purchase, we receive a small commission at no
    extra cost to you. The retailer you land on may set their own
    cookies — their privacy policy governs what they do on their own
    domain. See <a href="/editorial/">/editorial/</a> for our full
    disclosure stance.
  </p>

  <h2>Your rights</h2>
  <p>
    You can email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
    to request: a copy of any data we hold about you, deletion of that
    data, or answers to any specific privacy question. We respond
    within 30 days and typically within 48 business hours.
  </p>

  <h2>Updates to this policy</h2>
  <p>
    Material changes will be dated at the top of this page and
    announced by updating the "last updated" line. The full
    launch-version policy will replace this placeholder text at
    go-live.
  </p>
</main>
