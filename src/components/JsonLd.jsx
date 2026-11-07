import { SITE, absoluteUrl } from '../lib/seo';

/**
 * Organization/website JSON-LD driven by the admin's global SEO settings
 * (site representation + social profiles), falling back to the hardcoded
 * SITE constants when a field isn't configured.
 */
function buildOrganizationSchema(org = {}, social = {}) {
  const url = SITE.url;
  const address = org.address || {};
  const logo = org.logo || absoluteUrl('/images/favicon.png');
  const orgType = org.type && org.type !== 'Organization' ? org.type : 'AccountingService';

  const socialProfiles = [
    social.facebook,
    social.twitter ? `https://twitter.com/${String(social.twitter).replace(/^@/, '')}` : null,
    social.linkedin,
    social.instagram,
    social.youtube,
    ...(Array.isArray(social.other) ? social.other : []),
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', orgType],
        '@id': `${url}/#organization`,
        name: org.legal_name || SITE.legalName,
        alternateName: org.name || SITE.name,
        url,
        logo: {
          '@type': 'ImageObject',
          url: logo,
          width: 512,
          height: 512,
        },
        image: logo,
        telephone: org.phone || SITE.phone,
        email: org.email || SITE.email,
        foundingDate: '2009',
        address: {
          '@type': 'PostalAddress',
          streetAddress: address.street || SITE.address.street,
          addressLocality: address.city || SITE.address.city,
          addressRegion: address.region || SITE.address.region,
          postalCode: address.postal_code || SITE.address.postalCode,
          addressCountry: address.country || SITE.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.3727,
          longitude: -0.0995,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        priceRange: '££',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:30',
          },
        ],
        sameAs: socialProfiles.length
          ? socialProfiles
          : [
              'https://www.facebook.com/Taxaccolega',
              'https://twitter.com/Taxaccolega',
              'https://www.linkedin.com/company/taxaccolega',
              'https://g.page/taxaccolega',
            ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Accounting & Tax Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self Assessment Tax Returns' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporation Tax Returns' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Returns' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Payroll Services' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bookkeeping' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Formation' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url,
        name: org.legal_name || SITE.legalName,
        publisher: { '@id': `${url}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${url}/?s={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

export default function JsonLd({ org, social }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(org, social)) }}
    />
  );
}
