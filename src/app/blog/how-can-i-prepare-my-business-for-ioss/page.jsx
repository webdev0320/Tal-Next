import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "How Can I Prepare My Business for IOSS? | Taxaccolega",
  description: "How Can I Prepare My Business for IOSS? The new VAT policies make sure that the international trade between EU and non-EU states is made easy. As an IOSS regis…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/how-can-i-prepare-my-business-for-ioss/" },
  openGraph: {
    type: 'article',
    title: "How Can I Prepare My Business for IOSS? | Taxaccolega",
    description: "How Can I Prepare My Business for IOSS? The new VAT policies make sure that the international trade between EU and non-EU states is made easy. As an IOSS regis…",
    url: "https://www.taxaccolega.co.uk/blog/how-can-i-prepare-my-business-for-ioss/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-08-13 14:37:17",
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Can I Prepare My Business for IOSS? | Taxaccolega",
    description: "How Can I Prepare My Business for IOSS? The new VAT policies make sure that the international trade between EU and non-EU states is made easy. As an IOSS regis…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">How Can I Prepare My Business for IOSS?</h1>
          <p className="text-white-50">13 August 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  How Can I Prepare My Business for IOSS?
</h1>
</h1>				
		<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>The new VAT policies make sure that the international trade between EU and non-EU states is made easy. As an IOSS registered business you will be providing better service to your customers as they won't be facing any delays in the deliveries and won't have to deal with any surprise costs after they have bought the product.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>On the other hand, as a business you might also be reducing your administrative costs because when you are registered for IOSS you will be required to register only in one of the EU member states instead of registering in every single EU country where you have customers.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are supplying your goods internationally to EU or non-EU states and the value of your consignment is below 150 you can register your business for IOSS scheme. As there are benefits associated with the IOSS scheme, many businesses want to register for IOSS as this will reduce the admin costs and also provide better customer services.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>AS A BUSINESS YOU SHOULD PREPARE YOURSELF FOR THE IOSS</strong></h2>
<p><!-- /wp:heading --><!-- wp:heading {"level":3} --></p>
<h3><strong>UNDERSTAND YOUR BUSINESS</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>You should understand your business. You might be selling your products internationally both through a marketplace and through your own website. If you are selling your products thorough a marketplace you don't have to register for IOSS as the marketplaces such as eBay and Amazon have already registered for IOSS and they deal with your VAT. However, for those products being sold through own website you will have to consider the value of your consignments and consider if it's worth registering from financial as well as administrative point of view.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>KNOW THE VALUE OF YOUR CONSIGNMENTS</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>The low value consignment relief has been abolished and VAT is due on all items exported to EU and non-EU states. The IOSS Scheme is only for consignments below £150, for consignments above this value they will have to go through the customs etc. Therefore, you should have a very fair idea as to what is the value of your consignment.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>CONSIDER RE PRICING YOUR PRODUCTS</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>As part of the new VAT reforms the businesses are supposed to charge customers VAT based on where they are based. As the rate of VAT can vary in all the European countries this can affect the prices. You should have that it in mind while you decide the price of your product. And the correct VAT rate should be incorporated in the prices.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>TRAIN YOUR STAFF</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>You should train your staff by providing them guidance on IOSS. If you sell your products through the online marketplace then you don't have to account for the VAT. However, you will have to account for VAT on the other products. Sold through the website. You will also be accounting for VAT differently when you are selling in both international as well as domestic market. You should make sure that your accountants dealing with VAT have all information in order to avoid mistakes and waste time correcting them.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you want to register for IOSS or OSS we at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> can help you with that. Just call us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and our accountants in Croydon, Surrey will be happy to help you. If you have any queries you can drop us a message <strong><a href="https://www.taxaccolega.co.uk/contact-us">here</a></strong> and we will be happy to help you</p>
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
