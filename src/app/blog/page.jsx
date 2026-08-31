import { metadataForPath } from '../../lib/seo';
import Blog from '../../views/Blog';
import blogsData from '../../../public/blogs.json';

export const metadata = metadataForPath('/blog');

const POSTS_PER_PAGE = 15;

export default function Page() {
  const posts = blogsData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return <Blog posts={posts} currentPage={1} postsPerPage={POSTS_PER_PAGE} />;
}
