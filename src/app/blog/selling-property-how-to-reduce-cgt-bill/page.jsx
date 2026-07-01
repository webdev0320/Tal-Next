import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Selling Property - How to reduce CGT bill? | Taxaccolega",
  description: "Selling Property How to reduce CGT bill? SELLING PROPERTY THAT IS YOUR MAIN RESIDENCE If you are selling property that is not your main residence you will qual…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/selling-property-how-to-reduce-cgt-bill/" },
  openGraph: {
    type: 'article',
    title: "Selling Property - How to reduce CGT bill? | Taxaccolega",
    description: "Selling Property How to reduce CGT bill? SELLING PROPERTY THAT IS YOUR MAIN RESIDENCE If you are selling property that is not your main residence you will qual…",
    url: "https://www.taxaccolega.co.uk/blog/selling-property-how-to-reduce-cgt-bill/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-09-09 11:47:13",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Selling Property - How to reduce CGT bill? | Taxaccolega",
    description: "Selling Property How to reduce CGT bill? SELLING PROPERTY THAT IS YOUR MAIN RESIDENCE If you are selling property that is not your main residence you will qual…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Selling Property - How to reduce CGT bill?</h1>
          <p className="text-white-50">9 September 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Selling Property 
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
   How to reduce CGT bill?
</h1></h1>				
		<h2><strong>SELLING PROPERTY THAT IS YOUR MAIN RESIDENCE</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are selling property that is not your main residence you will qualify for the <strong><a href="https://www.taxaccolega.co.uk/factsheets/capital-taxes/capital-gains-tax-and-the-family-home">Private Residence Relief</a></strong>, This means that if you can prove that the property that you are selling was the private property and your main residence you won't have to pay <strong><a href="https://www.taxaccolega.co.uk/factsheets/capital-taxes/capital-gains-tax-and-the-family-home">CGT</a></strong> on it.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The property that an individual is selling will be considered their private residence if it's their only home and they have used it as a main residence for all the whole period of time that they have owned it. It should not have been used for letting purposes for any period of time.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You should have ever used part of the property or whole of the property for any business purposes. If you are self-employed and you have registered the home address as your business address, it might be considered that you are using it for business purposes and you might have to pay CGT when you sell the property.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The whole property must be less than 5000 square meters to qualify for PPR. This includes the building as well as the grounds that form part of the property. This can be an issue for those living in the country side with substantial lands. To avoid paying CGT they can sell the land separately.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The individual selling the property will have to prove that they did not buy the property just to make a gain. It's not a problem for those who have been living in the house for years, however, in recent years when houses are bought for investment purposes, CGT will have to be paid when such a property is sold.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>SELLING PROPERTY THAT YOU INHERITED:</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you have inherited a property and you have decided that you do not want to keep it, you can sell it during <strong><a href="https://www.taxaccolega.co.uk/news/latest-news-for-business/archive/news-article/2019/april/delay-to-rise-in-pr">probate</a></strong> without paying CGT on it.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If the value of the property increased after the person died then the individual who inherited the property will have to pay CGT on the sale of the inherited property. The government will estimate the increase in the value of the property after the person died and CGT will be paid on the gain during the probate. Although each situation is different, it is a good idea to sell the inherited property during the probate period so that the CGT paid is minimal.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are selling or buying property and you need advice, please feel free to contact us by clicking <strong><a href="https://www.taxaccolega.co.uk/contact-us">here</a></strong>. We are tax experts based in Croydon and South hall. We can give you tax advise based on your individual situation so you can make maximise your profits.</p>		
					
									
				
									
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
