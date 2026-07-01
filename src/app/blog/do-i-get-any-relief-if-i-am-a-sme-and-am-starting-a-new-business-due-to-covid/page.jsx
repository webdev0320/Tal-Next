import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Do I get any relief if I am a SME and am starting a new business due to covid? | Taxaccolega",
  description: "Do I get any relief if I am a SME and I am starting a new business due to covid? There are many businesses who are planning to develop new products due to Covi…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/do-i-get-any-relief-if-i-am-a-sme-and-am-starting-a-new-business-due-to-covid/" },
  openGraph: {
    type: 'article',
    title: "Do I get any relief if I am a SME and am starting a new business due to covid? | Taxaccolega",
    description: "Do I get any relief if I am a SME and I am starting a new business due to covid? There are many businesses who are planning to develop new products due to Covi…",
    url: "https://www.taxaccolega.co.uk/blog/do-i-get-any-relief-if-i-am-a-sme-and-am-starting-a-new-business-due-to-covid/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-07-19 11:02:07",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Do I get any relief if I am a SME and am starting a new business due to covid? | Taxaccolega",
    description: "Do I get any relief if I am a SME and I am starting a new business due to covid? There are many businesses who are planning to develop new products due to Covi…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Do I get any relief if I am a SME and am starting a new business due to covid?</h1>
          <p className="text-white-50">19 July 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Do I get any relief if I am a SME and 
</h1>
<h2 style="color:#d2601a;font-weight:600;font-size:40px">
  I am starting a new business due to covid?
</h2></h1>				
		<p>There are many businesses who are planning to develop new products due to Covid-19 so they can remain competitive in the market. This is because the businesses are either facing a slump in the demand and therefore profitability.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Many cash generating schemes are available to the SMEs, however all such businesses who are planning to develop and introduce new products in the market to remain competitive can <strong>claim R&amp;D tax credit relief</strong>.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>It does not matter which sector you work in, if you are limited company and have carried qualifying research and development activities. To qualify who must have actually spent money on these qualifying R &amp; D projects and you are able to prove it.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>What is R&amp;D Relief?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The Research and Development expenditure is increased to 13% from 1 April 2020. This mean that the companies can deduct 130% of their qualifying costs from their yearly profit in addition to the normal 100% to make a total of 230%.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>What costs can I claim?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Following are some of the costs which you can claim under R&amp;D relief. This will provide you with the funding and reduce your tax bill:</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>Employee Costs: </strong>This will include Salary, NI contributions, and pension contributions of all those employees who are working directly with the project. If you have hired a<strong> subcontractor</strong> to work on the project you can claim 65% of the relevant costs.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>Materials: </strong>You can claim for the materials which you use for the project.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Cost of land, Capital expenditure, the costs associated with the distribution of the product cannot be claimed under the relief.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>How to claim for the relief? </strong>You can claim the relief for upto 2 years after the end of the accounting period in which the project was started. Don't forget to note the start and the end date of the project. You can claim for the relief in CT 600 with appropriate calculations</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Our expert team at Taxaccolega will make sure that your company\`s R&amp;D claims can deliver maximum value to you. Our tax specialist can work directly with your finance team so that you can carry out the business most efficiently. Please contact Taxaccolega at <a href="tel:02081270728"><strong>02081270728</strong></a>. If you have any queries please fill in this form <a href="https://www.taxaccolega.co.uk/contact-us">https://www.taxaccolega.co.uk/contact-us</a></p>
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
