import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "National Minimum and Living Wage Rates in UK Guide 2025 | Taxaccolega",
  description: "Understanding the National Minimum Wage amp National Living Wage Fair Pay and Workers' Rights – NMW & NLW body { font-family: 'Montserrat Alternates', sans-ser…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/national-minimum-living-wage-uk-2025/" },
  openGraph: {
    type: 'article',
    title: "National Minimum and Living Wage Rates in UK Guide 2025 | Taxaccolega",
    description: "Understanding the National Minimum Wage amp National Living Wage Fair Pay and Workers' Rights – NMW & NLW body { font-family: 'Montserrat Alternates', sans-ser…",
    url: "https://www.taxaccolega.co.uk/blog/national-minimum-living-wage-uk-2025/",
    siteName: 'Taxaccolega',
    publishedTime: "2024-03-15 10:51:36",
  },
  twitter: {
    card: 'summary_large_image',
    title: "National Minimum and Living Wage Rates in UK Guide 2025 | Taxaccolega",
    description: "Understanding the National Minimum Wage amp National Living Wage Fair Pay and Workers' Rights – NMW & NLW body { font-family: 'Montserrat Alternates', sans-ser…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">National Minimum and Living Wage Rates in UK Guide 2025</h1>
          <p className="text-white-50">15 March 2024 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Understanding the National Minimum Wage &amp; amp
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:50px">
  National Living Wage
</h1></h1>				
					
					
									
				
									
					` }} />
        </article>
      </main>

      <div className="container mb-5">
        <Link href="/blog" className="btn btn-brand">&laquo; Back to Blog</Link>
      </div>

      <ContactSection />
    </div>
  );
}
