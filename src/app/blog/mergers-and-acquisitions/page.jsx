import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Mergers and Acquisitions | Taxaccolega",
  description: "Mergers and Acquisitions The impact of coronavirus is significant on the mergers and acquisition deals. As a result of the crisis everything is disrupted, the…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/mergers-and-acquisitions/" },
  openGraph: {
    type: 'article',
    title: "Mergers and Acquisitions | Taxaccolega",
    description: "Mergers and Acquisitions The impact of coronavirus is significant on the mergers and acquisition deals. As a result of the crisis everything is disrupted, the…",
    url: "https://www.taxaccolega.co.uk/blog/mergers-and-acquisitions/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-07-20 11:08:29",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mergers and Acquisitions | Taxaccolega",
    description: "Mergers and Acquisitions The impact of coronavirus is significant on the mergers and acquisition deals. As a result of the crisis everything is disrupted, the…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Mergers and Acquisitions</h1>
          <p className="text-white-50">20 July 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Mergers and Acquisitions
</h1>
</h1>				
		<p><!-- wp:image --></p>
<figure><img src="https://www.taxaccolega.co.uk/img/blog/mergers-and-acquisitions.jpg" alt="" /></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>The impact of coronavirus is significant on the mergers and acquisition deals. As a result of the crisis everything is disrupted, the businesses are closing, there is an increase in the redundancies and there is an increase in the unemployment. Are we going to see any mergers and acquisitions in the near future?</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>It is expected that there is going to be some mergers and acquisitions activity in the businesses such as leisure, travel and transport. As these are the industries which are significantly affected by the pandemic. These businesses might attract some merger and acquisition deals. The buyers might want to acquire such businesses at a bargain and restructure it. The businesses might be looking to merge so they can combine their strengths and gain a larger market share</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Before a business finalises the deal it is important that they also consider the some financial issues that arise in the mergers and acquisitions deal:</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>● Will the buyer of the company have the expected debt financing at the time of the acquisition</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>● What are the financial arrangements being made with the lender, are they offering higher rates due to Covid-19</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>● Is there any extra due diligence yjay is required due o Covid and will it cause de;ays</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>● What are the tax liabilities of the target company</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>Transaction structuring options</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p><strong>What are the taxes that are paid in the merger and acquisitions:</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>When ywo companies merge there is a complicated tax isues for example:</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>● <strong>When raising the finance for acquisition:</strong> When the purchaser wants to acuire a business they must do so in order to maximise the tax relief for the borrower and the with holding tax on financing cost</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>● <strong>Taxes the investors will have to pay on the investment return:</strong> As the companies are acquired for profit. Taxes will have to be paod</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>●  <strong>Transaction costs:</strong> financing cost, corporate tax, stamp duty and VAT</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>● Tax due diligence</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p>There are certain capital gains tax rules which will be applied on the sellet side.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p> </p>
<p><!-- /wp:paragraph --></p>		
					
									
				
									
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
