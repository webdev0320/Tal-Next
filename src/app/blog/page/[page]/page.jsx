import { createMetadata } from '../../../../lib/seo';
import { getPostSummaries } from '../../../../lib/cms';
import Blog from '../../../../views/Blog';

export const revalidate = 60;

const POSTS_PER_PAGE = 15;

export async function generateStaticParams() {
  const totalPages = Math.ceil((await getPostSummaries()).length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const pageNum = Number(page);
  const url = `/blog/page/${page}/`;
  return createMetadata({
    title: `Blog - Page ${pageNum}`,
    description: `Insights & Knowledge from Taxaccolega - Blog archive page ${pageNum}. Expert tax advice, accounting guides, and business insights.`,
    path: url,
  });
}

export default async function Page({ params }) {
  const { page } = await params;
  return <Blog posts={await getPostSummaries()} currentPage={Number(page)} postsPerPage={POSTS_PER_PAGE} />;
}
