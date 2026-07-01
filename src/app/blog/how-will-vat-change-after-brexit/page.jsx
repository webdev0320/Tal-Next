import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "How will VAT change after Brexit? | Taxaccolega",
  description: "How will VAT change after Brexit? As the transition period of Brexit is coming to an end in Jan 2021, it`s time that businesses who are dealing with EU countri…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/how-will-vat-change-after-brexit/" },
  openGraph: {
    type: 'article',
    title: "How will VAT change after Brexit? | Taxaccolega",
    description: "How will VAT change after Brexit? As the transition period of Brexit is coming to an end in Jan 2021, it`s time that businesses who are dealing with EU countri…",
    url: "https://www.taxaccolega.co.uk/blog/how-will-vat-change-after-brexit/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-11-04 12:08:16",
  },
  twitter: {
    card: 'summary_large_image',
    title: "How will VAT change after Brexit? | Taxaccolega",
    description: "How will VAT change after Brexit? As the transition period of Brexit is coming to an end in Jan 2021, it`s time that businesses who are dealing with EU countri…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">How will VAT change after Brexit?</h1>
          <p className="text-white-50">4 November 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  How will VAT change after Brexit?
</h1>
</h1>				
		<p>As the transition period of Brexit is coming to an end in Jan 2021, it\`s time that businesses who are dealing with EU countries should start to look at the changes that will follow and get their businesses ready for the change.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Although the government has tried its best to minimise the impact of Brexit on sales, the no-deal Brexit will affect the way the business in many ways including how VAT is charged. This is because the UK will probably no longer be part of the EU VAT area.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>VAT AND LOCAL BUSINESS</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p> If you are a VAT registered business and you are selling goods and services, hiring or loaning goods to someone, selling business assets, or even providing canteen meals to your employees you charge VAT on the items you are selling. </p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>A VAT registered business can also reclaim any VAT on the business-related purchases. A standard rate of 20 % will be charged on the sales unless the goods supplied come under the list of 'zero-rated' or 'reduced' supplies.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Following Brexit, the rules for VAT will remain the same for the local businesses. </p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>HOW VAT IS CHARGED CURRENTLY ON THE SALES TO THE EU</strong> <strong>COUNTRIES?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Dispatches/ Exports: If VAT able supplies are supplied to a VAT registered business in an EU country by a VAT registered business in the UK, the sale is considered a 'zero rate' sale, and this is known as a \`dispatch\`. It will be considered an 'export' if the supplies are made to a VAT registered business in a non-EU country by a VAT registered business in the UK. <strong>VAT will be charged at a zero rate in both EU and non-EU countries. </strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Distance selling: If a UK VAT registered business is selling VAT able supplies to an EU member country that is not registered for VAT this is known as distance selling. UK rates will be charged on the sales made to these countries although there is a threshold for each country and UK businesses will need to register for VAT in that country once that threshold has passed. </p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>HOW THE VAT CHARGED WILL BE CHANGED AFTER BREXIT?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Dispatches/ Exports: Following the Brexit, although sales to EU countries will be called exports and the UK businesses will no longer report the EC sales list in their VAT return.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Distance Selling: Following Brexit, the rules for distance selling will no longer apply and UK businesses will zero-rate these supplies. The Customer in the EU country will pay local VAT. </p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>VAT REFUNDS FROM 1 JAN 2021</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you have incurred any expenses in the EU member state before 1 January 2020, you will be able to claim a refund through the EU VAT refund system. </p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>HOW CAN WE HELP?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are doing business with EU countries and you are not sure how Brexit will apply to your business, you can contact <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and we can advise you depending on the type of business that you have. </p>		
					
									
				
									
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
