import { metadataForPath } from '../../lib/seo';
import { getPostSummaries } from '../../lib/cms';
import Blog from '../../views/Blog';

export const metadata = metadataForPath('/blog');

const POSTS_PER_PAGE = 15;

export default function Page() {
  return <Blog posts={getPostSummaries()} currentPage={1} postsPerPage={POSTS_PER_PAGE} />;
}
