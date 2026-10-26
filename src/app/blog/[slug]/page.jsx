import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';
import { getPost, getPosts, seoToMetadata } from '../../../lib/cms';
import { createMetadata, stripHtml } from '../../../lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (post.seo) return seoToMetadata(post.seo);

  return createMetadata({
    title: post.title,
    description: stripHtml(post.excerpt || post.content),
    path: `/blog/${post.slug}/`,
    image: post.featured_image || undefined,
    type: 'article',
  });
}

function formatDate(iso) {
  return iso
    ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const byline = [formatDate(post.published_at), post.author?.name && `By ${post.author.name}`]
    .filter(Boolean)
    .join(' | ');

  return (
    <div className="blog-post-page bg-light">
      {post.seo?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.seo.schema).replace(/</g, '\\u003c') }}
        />
      )}

      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">{post.title}</h1>
          {byline && <p className="text-white-50">{byline}</p>}
        </div>
      </header>

      {post.featured_image && (
        <div className="container mt-n5" style={{ marginTop: '-2rem' }}>
          <img
            src={post.featured_image}
            alt={post.featured_image_alt || post.title}
            className="w-100 rounded shadow-sm"
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
        </div>
      )}

      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {(post.previous || post.next) && (
          <nav className="d-flex justify-content-between gap-3 mt-4" aria-label="More posts">
            <div>
              {post.previous && (
                <Link href={`/blog/${post.previous.slug}/`} className="text-brand-orange fw-bold text-decoration-none" rel="prev">
                  &laquo; {post.previous.title}
                </Link>
              )}
            </div>
            <div className="text-end">
              {post.next && (
                <Link href={`/blog/${post.next.slug}/`} className="text-brand-orange fw-bold text-decoration-none" rel="next">
                  {post.next.title} &raquo;
                </Link>
              )}
            </div>
          </nav>
        )}
      </main>

      <div className="container mb-5">
        <Link href="/blog" className="btn btn-brand">&laquo; Back to Blog</Link>
      </div>

      <ContactSection />
    </div>
  );
}
