import PackagePage from '../../../views/PackagePage';
import { metadataForPackageSlug } from '../../../lib/seo-generators';

// Known package slugs not already covered by static pages
export function generateStaticParams() {
  return [
    { slug: 'sole-trader' },
    { slug: 'ltd-company' },
    { slug: 'contractor-ltd' },
    { slug: 'spvs-ltd' },
    { slug: 'landlords' },
    { slug: 'charities' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForPackageSlug(slug);
}

export default function Page({ params }) {
  return <PackagePage params={params} />;
}
