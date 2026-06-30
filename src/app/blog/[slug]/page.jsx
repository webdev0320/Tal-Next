import { readFileSync, existsSync } from 'fs';
import path from 'path';
import SingleBlog from '../../../views/SingleBlog';
import { metadataForBlogSlug } from '../../../lib/seo-generators';
import { createMetadata } from '../../../lib/seo';

export function generateStaticParams() {
  const blogsPath = path.join(process.cwd(), 'public', 'blogs.json');
  if (!existsSync(blogsPath)) return [];
  try {
    const data = JSON.parse(readFileSync(blogsPath, 'utf8'));
    return (data.posts || []).map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return (
    metadataForBlogSlug(slug) ||
    createMetadata({
      title: 'Blog Post',
      description: 'Tax and accounting insights from Taxaccolega.',
      path: `/blog/${slug}`,
      type: 'article',
    })
  );
}

export default function Page({ params }) {
  return <SingleBlog params={params} />;
}
