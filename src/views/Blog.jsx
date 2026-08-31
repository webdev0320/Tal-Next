"use client";
import React from 'react';
import Link from 'next/link';
import ContactSection from '../components/ContactSection';

const Blog = ({ posts = [], currentPage = 1, postsPerPage = 15 }) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-3 fw-bold text-white">Insights & Knowledge</h1>
          <p className="lead text-white-50">Expert tax advice, accounting guides, and business insights from Taxaccolega.</p>
        </div>
      </header>
      
      <main className="container py-5">
        <section>
          <div className="row g-4">
            {currentPosts.map((post, index) => (
              <div className="col-md-4" key={post.id || index}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                  <div className="position-relative overflow-hidden bg-light" style={{ height: '200px' }}>
                    <img 
                      src={post.featured_image_url || (post.content.match(/<img[^>]+src="([^">]+)"/i)?.[1]) || '/images/logo/tal-logo.png'} 
                      alt={post.title} 
                      className="w-100 h-100 object-fit-cover" 
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/tal-logo.png'; }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-brand-dark mb-3">{post.title}</h5>
                    <p className="card-text text-muted small mb-4">{new Date(post.date).toLocaleDateString()}</p>
                    <Link href={`/blog/${post.slug}`} className="text-brand-orange fw-bold text-decoration-none">Read More &raquo;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav className="mt-5" aria-label="Blog pagination">
            <ul className="pagination justify-content-center">
              {currentPage > 1 && (
                <li className="page-item">
                  <Link
                    className="page-link"
                    href={currentPage === 2 ? '/blog/' : `/blog/page/${currentPage - 1}/`}
                    rel="prev"
                  >
                    &laquo; Previous
                  </Link>
                </li>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                  <Link className="page-link" href={page === 1 ? '/blog/' : `/blog/page/${page}/`}>
                    {page}
                  </Link>
                </li>
              ))}
              {currentPage < totalPages && (
                <li className="page-item">
                  <Link className="page-link" href={`/blog/page/${currentPage + 1}/`} rel="next">
                    Next &raquo;
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default Blog;
