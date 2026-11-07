import { buildBlogIndexMetadata } from '../../lib/seo-settings';
import { getPostSummaries } from '../../lib/cms';
import Blog from '../../views/Blog';

export async function generateMetadata() {
  return buildBlogIndexMetadata();
}

const POSTS_PER_PAGE = 15;

export const revalidate = 60;

export default async function Page() {
  return <Blog posts={await getPostSummaries()} currentPage={1} postsPerPage={POSTS_PER_PAGE} />;
}
