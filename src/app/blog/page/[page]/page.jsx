import { getPostSummaries } from '../../../../lib/cms';
import { buildBlogIndexMetadata } from '../../../../lib/seo-settings';
import Blog from '../../../../views/Blog';

export const revalidate = 60;

const POSTS_PER_PAGE = 15;

export async function generateStaticParams() {
  const totalPages = Math.ceil((await getPostSummaries()).length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  return buildBlogIndexMetadata({ pageNumber: Number(page) });
}

export default async function Page({ params }) {
  const { page } = await params;
  return <Blog posts={await getPostSummaries()} currentPage={Number(page)} postsPerPage={POSTS_PER_PAGE} />;
}
