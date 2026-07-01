import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Holdover Relief Explained – Capital Gains Tax Guide UK | Taxaccolega",
  description: "Holdover Relief I am selling my business to my friend will holdover relief apply to me? If you are eligible for gift holdover relief or not depends on all indi…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/holdover-relief-capital-gains-tax/" },
  openGraph: {
    type: 'article',
    title: "Holdover Relief Explained – Capital Gains Tax Guide UK | Taxaccolega",
    description: "Holdover Relief I am selling my business to my friend will holdover relief apply to me? If you are eligible for gift holdover relief or not depends on all indi…",
    url: "https://www.taxaccolega.co.uk/blog/holdover-relief-capital-gains-tax/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-07-21 11:14:39",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Holdover Relief Explained – Capital Gains Tax Guide UK | Taxaccolega",
    description: "Holdover Relief I am selling my business to my friend will holdover relief apply to me? If you are eligible for gift holdover relief or not depends on all indi…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Holdover Relief Explained – Capital Gains Tax Guide UK</h1>
          <p className="text-white-50">21 July 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Holdover Relief
</h1>
</h1>				
		<p><!-- wp:image --></p>
<figure><img src="https://www.taxaccolega.co.uk/img/blog/holdover-relief.jpg" alt="" /></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>I am selling my business to my friend will holdover relief apply to me?</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are eligible for gift holdover relief or not depends on all individual circumstances. If you are selling your business to your friend at zero consideration or any value which is less than the market value then the transaction will be considered as a disposal or a gift and you will be eligible for the relief. So yes, if you are selling your business to your friend the relief will apply to you.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Holdover relief means that for example, if you sold your retail shop to your friend worth £200, 000. The worth of the shop at the time of the sale was £400,000. If the relief is not available the <a href="https://www.taxaccolega.co.uk/news/budget/article/2020/march/capital-taxes">CGT</a> liability would be based on the market value, if a claim is made there is no need to pay tax on the chargeable gain which is known as 'held over gain'. However, at the time of the future disposal of the assets, the friends cost of the business which would be the market value of £ 200,000 will be reduced by the held over gain.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>Other Similar Disposals that qualify for the relief</strong></p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>Business asset: This is the asset which is used for the business</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>Shares and Securities: These are the shares and securities of a trading company if they aren't listed on the stock exchange</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:embed {"url":"https://www.gov.uk/gift-holdover-relief"} --></p>
<figure>
https://www.gov.uk/gift-holdover-relief
</figure>
<p><!-- /wp:embed --><!-- wp:paragraph --></p>
<p><strong>How to Claim:</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The claim will be made jointly with the person the gift was made. In this case the claim will be made by the friend and the person giving the gift. This is done by filling the form for the gift holdover relief and including it in the Self-assessment tax return.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>There can be some complex issues related to the selling of the business. We have an expert team at Taxaccolega, based in Croydon and Southall and we can help you with your taxes. Please feel free to contact Taxaccolega at <a href="mailto:info@taxaccolega.co.uk"><strong>info@taxaccolega.co.uk</strong></a> or call us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a></p>
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
