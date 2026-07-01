import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "eBay Sellers Import One Stop Shop | Who Needs to Register? | Taxaccolega",
  description: "I sell goods on Ebay Do I need to register for Ioss (import one stop shop)? If you are selling your goods online this means that you are attracting customers f…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/i-sell-goods-on-ebay-do-i-need-to-register-for-ioss-import-one-stop-shop/" },
  openGraph: {
    type: 'article',
    title: "eBay Sellers Import One Stop Shop | Who Needs to Register? | Taxaccolega",
    description: "I sell goods on Ebay Do I need to register for Ioss (import one stop shop)? If you are selling your goods online this means that you are attracting customers f…",
    url: "https://www.taxaccolega.co.uk/blog/i-sell-goods-on-ebay-do-i-need-to-register-for-ioss-import-one-stop-shop/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-07-13 14:38:59",
  },
  twitter: {
    card: 'summary_large_image',
    title: "eBay Sellers Import One Stop Shop | Who Needs to Register? | Taxaccolega",
    description: "I sell goods on Ebay Do I need to register for Ioss (import one stop shop)? If you are selling your goods online this means that you are attracting customers f…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">eBay Sellers Import One Stop Shop | Who Needs to Register?</h1>
          <p className="text-white-50">13 July 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  I sell goods on Ebay
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  Do I need to register for Ioss (import one stop shop)?
</h1></h1>				
		<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>If you are selling your goods online this means that you are attracting customers from EU and Northern Ireland. If your business is registered in Great Britain and you have your consignments going to the customers in the EU and the value of the goods do not exceed £135 have been given the option to opt for IOSS. If you supply consignments to the Northern Island and the sale value of the goods do not exceed £135 and you are also VAT registered in the UK will be able to pay any VAT due to the HMRC through their IOSS return. They are required to tell HMRC about their IOSS registration number before they can move goods to the Northern Island.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If I am not registered for VAT?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are a Business registered in Great Britain and you are not VAT registered because you might be below the VAT registration threshold but you are registered for IOSS, in that case you will be able to tell HMRC about the IOSS registration number before you can move your goods to the Northern Island but no VAT will be charged on the goods supplied to the Northern Island.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>What exactly is IOSS?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>IOSS is created for the benefit of the buyer and seller of the goods being transported to the EU and Northern Island. If as a seller you are registered for IOSS your customer will know that the price they are paying includes all the VAT charges and it saves them from the hassle of paying any other hidden charges.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>What are the benefits of registering for IOSS</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Although registering for IOSS is optional there are advantages of IOSS.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The main advantage of IOSS is that there won't be delays at the customs, in contrast if you are not registered for IOSS the products might get stuck at the customs where they ask for the VAT and the handling fees.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Registering for IOSS means that the VAT is charged at the point of sales and your customers will not have to go through the delays. Happy customers mean a successful business.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If You Sell Through Ebay ?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you sell on an online marketplace they must have registered for IOSS. Ebay, amazon and the other marketplaces are responsible for charging, collecting and paying VAT on behalf of the seller. if you are sending your products through the Royal mail they will ask for the market place where their products are sold. The correct IOSS number will be allocated to the item by the Royal Mail, when the parcel arrives at the destination country they would know that VAT has been paid by the information on the package.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>Who can help me with IOSS registration?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>IOSS registration can be time consuming, we at Taxaccolega can make it easy for you. You will just have to give us your business details and we will take care of the rest. We are accountants based in Croydon and South hall, call us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> or drop us a message <strong><a href="https://www.taxaccolega.co.uk/contact-us">here</a></strong> and our team will be happy to help you.</p>
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
