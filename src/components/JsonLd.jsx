import { SITE, absoluteUrl } from '../lib/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'AccountingService'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.legalName,
      alternateName: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/favicon.png'),
        width: 512,
        height: 512,
      },
      image: absoluteUrl('/images/favicon.png'),
      telephone: SITE.phone,
      email: SITE.email,
      foundingDate: '2009',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
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
      sameAs: [
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
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.legalName,
      publisher: { '@id': `${SITE.url}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/?s={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
