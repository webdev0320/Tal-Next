import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Stamp Duty Holiday – Are You Eligible in the UK? | Taxaccolega",
  description: "Stamp Duty Holiday Are You Eligible in the UK? The government has increased the stamp duty threshold to £500 000 for property sales on 8 July 2020.The announce…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/stamp-duty-holiday-eligibility-uk/" },
  openGraph: {
    type: 'article',
    title: "Stamp Duty Holiday – Are You Eligible in the UK? | Taxaccolega",
    description: "Stamp Duty Holiday Are You Eligible in the UK? The government has increased the stamp duty threshold to £500 000 for property sales on 8 July 2020.The announce…",
    url: "https://www.taxaccolega.co.uk/blog/stamp-duty-holiday-eligibility-uk/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-07-13 11:12:19",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stamp Duty Holiday – Are You Eligible in the UK? | Taxaccolega",
    description: "Stamp Duty Holiday Are You Eligible in the UK? The government has increased the stamp duty threshold to £500 000 for property sales on 8 July 2020.The announce…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Stamp Duty Holiday – Are You Eligible in the UK?</h1>
          <p className="text-white-50">13 July 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Stamp Duty Holiday
</h1>
<h2 style="color:#d2601a;font-weight:600;font-size:40px">
  Are You Eligible in the UK?
</h2></h1>				
		<p><!-- wp:image --></p>
<figure><img src="https://www.taxaccolega.co.uk/img/blog/stamp-duty.jpg" alt="" /></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>The government has increased the stamp duty threshold to £500 000 for property sales on 8 July 2020.The announcement has made many purchasers which include many individual buyers and the estate agents happy.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<h2><strong>What is a stamp duty</strong>?</h2>
<p>Stamp duty is a tax that is paid on the property purchase. In the Covid-19 Crisis there was a drop in the house prices and the property market was down. Increasing the threshold is seen as a way to boost the property market and it is analysed that 90% of the buyers will not pay stamp duty land tax.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Anyone who is buying the property on 8 July and after will not pay any SDLT on property on the purchase of the property worth £ 500 000. However, if you have made the purchase before 8 July that you and have not moved in your home yet you will be paying SDLT as normal. In case you have exchanged and the transaction is not complete yet then you will be exempt from paying SDTL. This temporary relief will end in March 2020.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>is stamp duty exemption i s for those who are buying their main house and the house costs £500 000 or less. This was previously £300 000. This exemption is applied from 8 July which means that anyone who has completed the purchase before that will pay the stamp duty as normal.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Many analysts are suspecting this increase to be artificial. And this will increase the demand and boost the property sales till March then a drop in the demand will be seen after March 2020. If you are thinking of buying a house next year many buyers will try to accelerate their sale to get the benefit from the relief.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>This is certainly going to reduce the tax bills of the buyer. The maximum that can be saved I s£15000 if they are buying a property of £500 000 or more. Look at the table below to see how much SDTL you will pay if you purchase a property:</p>
<p><!-- /wp:paragraph --><!-- wp:table --></p>
<figure>
<table style="height: 205px;" width="179">
<tbody>
<tr>
<td><strong>Property Value( £)</strong></td>
<td><strong>SDLT you will pay according to new rates( £ )</strong></td>
</tr>
<tr>
<td>300 000</td>
<td>0</td>
</tr>
<tr>
<td>500 000</td>
<td>0</td>
</tr>
<tr>
<td>600 000</td>
<td>5000</td>
</tr>
</tbody>
</table>
</figure>
<p><!-- /wp:table --><!-- wp:paragraph --></p>
<p>Many buyers are looking to use the money they will be saving to do the renovations or even making some space for working from home.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>This stamp duty replaces the first time buyer account and the landlord the second home buyers will pay the 3 % of the stamp duty that they were charged previously.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>For more information on the property purchase, taxes involved in the property purchase and paying of SDLT please contact our expert team at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> <a href="tel:02081270728"><strong>020 8127 0728</strong></a>, we are based in Croydon and South hall and we will be happy to help you.</p>
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
