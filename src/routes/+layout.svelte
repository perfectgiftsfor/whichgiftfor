<script lang="ts">
  import '../app.css';
  import { SITE } from '$lib/site';

  let { children } = $props();
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header class="site-header">
  <div class="site-header-inner">
    <a href="/" class="site-wordmark">{SITE.name}</a>
    <nav class="site-nav" aria-label="Primary">
      <a href="/compare/">Comparisons</a>
      <a href="/masthead/">Masthead</a>
      <a href="/about/">About</a>
      <a href="/editorial/">Editorial</a>
      <a href="/contact/">Contact</a>
    </nav>
  </div>
</header>

<div id="main-content" class="container-editorial">
  {@render children?.()}
</div>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>
      <strong>{SITE.name}</strong> is an editorial publication by
      <strong>{SITE.parent}</strong>. Editor: {SITE.editor.name},
      {SITE.editor.role} (disclosed editorial pen name; see
      <a href="/about/">About</a>). Framework-first editorial; we do not
      claim to hand-test every product we compare. Full standards at
      <a href="/editorial/">/editorial/</a>.
    </p>
    <p class="footer-ftc">
      As an Amazon Associate, I earn from qualifying purchases. Editorial
      selections are independent of affiliate commission — see our
      <a href="/editorial/">editorial standards</a> and
      <a href="/disclosures/">affiliate disclosure</a>.
    </p>
    <nav class="footer-legal" aria-label="Legal">
      <a href="/about/">About</a>
      <a href="/editorial/">Editorial</a>
      <a href="/corrections/">Corrections</a>
      <a href="/contact/">Contact</a>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
    </nav>
  </div>
</footer>
