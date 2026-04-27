// 2026-04-27 swap: adapter-node -> adapter-static.
// whichgiftfor is fully prerenderable (all routes had `prerender: '*'`
// already). Static output deploys cleanly to any CDN / Render free tier
// static_site without needing a Node runtime.
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: ['*'],
      // /compare and /disclosures link to /masthead/#dani-perez-cole.
      // Anchor lives in the masthead body but svelte-kit's prerender
      // crawler can't see it (rendered at runtime). Allow.
      handleMissingId: 'ignore',
    },
  },
};

export default config;
