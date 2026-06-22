import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.posts) {
          const found = data.posts.find((p) => p.slug === slug);
          setPost(found);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blog:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <p className="text-gray-500">Loading blog post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#1d3c45] mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">The requested blog post could not be located.</p>
        <a href="/blog" className="px-6 py-3 text-white rounded-full bg-orange-600 font-semibold" style={{ backgroundColor: '#d2601a' }}>
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
      <div className="mb-8">
        <a href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
          &larr; Back to all blogs
        </a>
      </div>
      
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#1d3c45] tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500">
          Published on {post.date} by {post.author || 'Taxaccolega Staff'}
        </div>
      </header>

      {/* Styled content output */}
      <div 
        className="prose max-w-none text-gray-700 leading-relaxed space-y-4"
        style={{ color: '#333' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
