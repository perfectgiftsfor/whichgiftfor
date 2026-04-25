// Schema.org @graph helpers for whichgiftfor.com.
//
// Deliberately written from scratch — field order, naming, and the
// Organization @id are all distinct from sibling Ramban Group properties
// so the generated JSON-LD has its own fingerprint. Two sites with
// identical schema shapes read as a doorway network to AI engines and
// to structured-data consumers like Perplexity and ChatGPT; two
// genuinely-structured sites read as independent publishers.
//
// The @id scheme anchors this publication specifically:
//   - https://whichgiftfor.com/#publisher  (the Organization)
//   - https://whichgiftfor.com/#website    (the WebSite)
//   - https://whichgiftfor.com/#dani-perez-cole  (the Person/editor)

import { SITE } from './site';

const ORG_ID = `${SITE.url}/#publisher`;
const SITE_ID = `${SITE.url}/#website`;
const EDITOR_ID = `${SITE.url}/#${SITE.editor.slug}`;

export interface ArticleInput {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  articleSection?: string;
}

export interface CrumbItem {
  name: string;
  path: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Field order intentionally differs from sibling properties:
//   name → url → sameAs → description → knowsAbout → jobTitle → worksFor
// vs. sibling pattern of name → url → jobTitle → description → knowsAbout.
export function editorPersonNode() {
  return {
    '@type': 'Person',
    '@id': EDITOR_ID,
    name: SITE.editor.name,
    url: `${SITE.url}/about/#${SITE.editor.slug}`,
    // sameAs nested before description (distinct field order from siblings).
    // Two-element array — about + masthead.
    sameAs: [
      `${SITE.url}/about/#${SITE.editor.slug}`,
      `${SITE.url}/masthead/#${SITE.editor.slug}`,
    ],
    description:
      'Comparisons Editor at WhichGiftFor. Writes head-to-head product comparisons across gift categories — sheets, frames, memoir services, photo books, and every A-vs-B gift question a thoughtful shopper asks. Dani Perez-Cole is a disclosed editorial pen name used by a single operator at Ramban Group during pre-incorporation; full disclosure on /about/.',
    knowsAbout: [
      'head-to-head product comparison',
      'gift comparison methodology',
      'comparison-table editorial craft',
      'evaluating competing gift brands on materials, price, and fit',
      'when two similar products actually differ, and when they do not',
    ],
    jobTitle: SITE.editor.role,
    worksFor: { '@id': ORG_ID },
  };
}

// Field order: @id → name → url → description → parentOrganization → foundingDate
// vs. sibling pattern which leads with parentOrganization after url.
export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description:
      'Independent editorial publication covering head-to-head product comparisons for the gift-giving reader. One question per page: of these two, which one should you send? Framework-first editorial with a real comparison table on every deep guide.',
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.parent,
    },
    foundingDate: SITE.foundingDate,
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbNode(items: CrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url + '/',
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: SITE.url + item.path,
      })),
    ],
  };
}

// Field order: url → headline → description → dates → section → author → publisher
// vs. sibling pattern which leads with headline.
export function articleNode(input: ArticleInput) {
  return {
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE.url + input.url,
    },
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    articleSection: input.articleSection ?? 'Comparison',
    author: { '@id': EDITOR_ID },
    publisher: { '@id': ORG_ID },
  };
}

export function faqPageNode(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

// JSON-LD serializer — escape `</script` so a node value can't break out of
// the containing <script type="application/ld+json"> block.
export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/<\/script/gi, '<\\/script');
}
