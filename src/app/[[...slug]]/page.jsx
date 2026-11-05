import { notFound } from 'next/navigation';

import CmsPageContent from '../../components/CmsPageContent';
import { SITE } from '../../lib/seo';
import { getPageByPath, pathFromSlug } from '../../lib/pages';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = await getPageByPath(path);

  if (!page) {
    return { title: 'Page not found | Taxaccolega' };
  }

  const seo = page.data.seo;
  const image = seo.open_graph?.image ?? SITE.defaultImage;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords ?? [],
    alternates: { canonical: seo.canonical },
    openGraph: {
      type: seo.open_graph?.type === 'article' ? 'article' : 'website',
      siteName: seo.open_graph?.site_name ?? SITE.name,
      locale: seo.open_graph?.locale ?? SITE.locale.replace('-', '_'),
      title: seo.open_graph?.title ?? seo.title,
      description: seo.open_graph?.description ?? seo.description,
      url: seo.open_graph?.url ?? seo.canonical,
      images: image ? [{ url: image, alt: seo.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitter?.title ?? seo.title,
      description: seo.twitter?.description ?? seo.description,
      images: image ? [image] : [],
    },
    robots: {
      index: seo.robots?.index ?? false,
      follow: seo.robots?.follow ?? false,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = await getPageByPath(path);

  if (!page) {
    notFound();
  }

  const seo = page.data.seo;
  const jsonLdBlocks = [...(page.data.json_ld ?? []), ...(seo?.schema ? [seo.schema] : [])];

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }}
        />
      ))}
      <CmsPageContent html={page.data.content} />
    </>
  );
}
