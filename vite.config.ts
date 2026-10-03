import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { BUSINESS, LINKS, RATING, SITE_URL } from './src/config'
import { FAQ } from './src/content'

/**
 * Builds the JSON-LD and sitemap from src/config.ts and src/content.ts so the
 * structured data can never drift from what the page actually says. Everything
 * is injected at build time, so crawlers see it without running JavaScript.
 */
function seo(): Plugin {
  const { address, hours } = BUSINESS

  const gym = {
    '@context': 'https://schema.org',
    '@type': ['ExerciseGym', 'SportsActivityLocation', 'LocalBusiness'],
    '@id': `${SITE_URL}/#gym`,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.phoneHref.replace('tel:', ''),
    email: BUSINESS.email,
    image: `${SITE_URL}/og.jpg`,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Be Strong The Gym is a full gym in Red Hills, Lakdikapul, Hyderabad, offering weight training, cardio, bodybuilding, fitness training, personal training and nutritional guidance.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: `${String(hours.open).padStart(2, '0')}:00`,
        closes: `${String(hours.close).padStart(2, '0')}:00`,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING.score,
      reviewCount: RATING.count,
      bestRating: '5',
    },
    sameAs: [LINKS.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Training at Be Strong The Gym',
      itemListElement: [
        'Weight Training',
        'Cardio',
        'Personal Training',
        'Bodybuilding',
        'Fitness Training',
        'Nutritional Guidance',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return {
    name: 'bestrong-seo',
    transformIndexHtml() {
      return [gym, faq].map((data) => ({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(data),
        injectTo: 'head' as const,
      }))
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })
    },
  }
}

// Relative base so the build works at the custom domain root and at a project
// subpath such as /bestrongthegym/.
export default defineConfig({
  plugins: [react(), seo()],
  base: './',
  build: { assetsInlineLimit: 0 },
})
