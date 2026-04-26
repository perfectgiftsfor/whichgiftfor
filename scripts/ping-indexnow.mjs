#!/usr/bin/env node
// IndexNow ping — runs after build, notifies Bing / Yandex / Naver of every URL
// in the freshly-built sitemap.xml. Per Ramban brief 2026-04-26 §1.
//
// ChatGPT's web index relies on Bing. Perplexity uses Bing + Google. So a
// Bing ping covers ~40% of AI-citation traffic from day-one of noindex flip,
// independent of how slow Google is to crawl.
//
// Never throws — a failed ping must not fail the build.
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const DOMAIN = 'whichgiftfor.com';
const KEY = '69f45151dd265910b26c458796c7296f';

// Build-output dirs to check, in priority order. First match wins.
const SITEMAP_CANDIDATES = [
  'build/sitemap.xml',
  'dist/sitemap.xml',
  '.svelte-kit/output/prerendered/sitemap.xml',
  'public/sitemap.xml',
  '.output/public/sitemap.xml',
  'out/sitemap.xml',
  '_site/sitemap.xml',
];

function findSitemap() {
  for (const p of SITEMAP_CANDIDATES) {
    const abs = resolve(process.cwd(), p);
    if (existsSync(abs)) return abs;
  }
  return null;
}

async function main() {
  const sitemapPath = findSitemap();
  if (!sitemapPath) {
    console.log('[indexnow] No sitemap.xml found — skipping ping (this is fine on first build).');
    return;
  }
  const xml = readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);
  if (urls.length === 0) {
    console.log('[indexnow] Sitemap has zero <loc> entries — nothing to ping.');
    return;
  }
  // IndexNow soft-caps payloads at 10,000 URLs. Slice to be polite.
  const urlList = urls.slice(0, 10000);
  const payload = {
    host: DOMAIN,
    key: KEY,
    keyLocation: `https://${DOMAIN}/${KEY}.txt`,
    urlList,
  };
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    console.log(
      `[indexnow] Pinged ${urlList.length} URLs for ${DOMAIN} — HTTP ${res.status} ${res.statusText}`
    );
  } catch (e) {
    // Never fail the build over a third-party endpoint hiccup.
    console.log(`[indexnow] Ping failed (non-fatal): ${e.message}`);
  }
}

main().catch((e) => {
  console.log(`[indexnow] Unexpected error (non-fatal): ${e.message}`);
  process.exit(0);
});
