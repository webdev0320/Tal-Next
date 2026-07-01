import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "A Brand New Post | Taxaccolega",
  description: "A New Test Post By Rizwan This is another new test post added by Rizwan.",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/a-new-post-by-rizwan/" },
  openGraph: {
    type: 'article',
    title: "A Brand New Post | Taxaccolega",
    description: "A New Test Post By Rizwan This is another new test post added by Rizwan.",
    url: "https://www.taxaccolega.co.uk/blog/a-new-post-by-rizwan/",
    siteName: 'Taxaccolega',
    publishedTime: "2025-01-08 13:24:22",
  },
  twitter: {
    card: 'summary_large_image',
    title: "A Brand New Post | Taxaccolega",
    description: "A New Test Post By Rizwan This is another new test post added by Rizwan.",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">A Brand New Post</h1>
          <p className="text-white-50">8 January 2025 | By Rizwan SEO</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><a href="http://a-new-test-post-by-rizwan" target="_blank">A New Test Post By Rizwan</a></h1>				
		<p>This is another new test post added by Rizwan.</p>` }} />
        </article>
      </main>

      <div className="container mb-5">
        <Link href="/blog" className="btn btn-brand">&laquo; Back to Blog</Link>
      </div>

      <ContactSection />
    </div>
  );
}
