// Global site constants for whichgiftfor.com.
//
// Single canonical source of truth for URLs, names, and editor identity.
// Structurally distinct from sibling Ramban Group properties — different
// editor, different beat (head-to-head comparisons), different visual
// register.

export const SITE = {
  url: 'https://whichgiftfor.com',
  name: 'WhichGiftFor',
  tagline: 'Head-to-head gift comparisons — two products, one winner, real reasoning.',
  parent: 'Ramban Group',
  foundingDate: '2026-04-24',
  editor: {
    name: 'Dani Perez-Cole',
    role: 'Comparisons Editor',
    slug: 'dani-perez-cole',
  },
  contactEmail: 'editor@whichgiftfor.com',
  pressEmail: 'press@whichgiftfor.com',
  privacyEmail: 'privacy@whichgiftfor.com',
} as const;

export type SiteConfig = typeof SITE;
