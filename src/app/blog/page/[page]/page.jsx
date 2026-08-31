import { createMetadata } from '../../../../lib/seo';
import Blog from '../../../../views/Blog';
import blogsData from '../../../../../public/blogs.json';

export const dynamicParams = false;

const POSTS_PER_PAGE = 15;

export function generateStaticParams() {
  const totalPages = Math.ceil(blogsData.posts.length / POSTS_PER_PAGE);
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
  const posts = blogsData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return <Blog posts={posts} currentPage={Number(page)} postsPerPage={POSTS_PER_PAGE} />;
}
