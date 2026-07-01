import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Landlord National Insurance in the UK – What You Owe | Taxaccolega",
  description: "I am a Landlord- How much NI will I have to pay? When you think of running a business it is very important that you know what costs may be involved so you have…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/i-am-a-landlord-how-much-ni-will-i-have-to-pay/" },
  openGraph: {
    type: 'article',
    title: "Landlord National Insurance in the UK – What You Owe | Taxaccolega",
    description: "I am a Landlord- How much NI will I have to pay? When you think of running a business it is very important that you know what costs may be involved so you have…",
    url: "https://www.taxaccolega.co.uk/blog/i-am-a-landlord-how-much-ni-will-i-have-to-pay/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-02-16 12:29:15",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Landlord National Insurance in the UK – What You Owe | Taxaccolega",
    description: "I am a Landlord- How much NI will I have to pay? When you think of running a business it is very important that you know what costs may be involved so you have…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Landlord National Insurance in the UK – What You Owe</h1>
          <p className="text-white-50">16 February 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  I am a Landlord-
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  How much NI will I have to pay? 
</h1></h1>				
		<p><!-- wp:image --></p>
<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>When you think of running a business it is very important that you know what costs may be involved so you have a fair idea of how much profits you will make.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you rent a property as a business, you must pay a certain amount to HMRC in the form of income tax and National Insurance. Renting a property is considered a business if all the following applies:</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>      ● You buy property for the purpose of renting out.</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>      ● Renting out properties is your main business and</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>      ● You rent out more than one property.</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p>If the above applies to you it means you must pay NI. If you are an accidental landlord that means you do not have to pay NI even if you advertise for renting out the property or get the repairs done.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are running a business, you will be either running a business as a sole trader or you will be running as a limited company.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>IF YOU RUN A BUSINESS AS A SOLE TRADER:</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you run a business as a sole trader, you will be paying NI with your self-assessment tax return if your profits for the year are £ 6475 or more. The type of NI you will pay is Class 2 NI. The tax rate for 2020/2021 is £ 3.05 per week. Most people pay their NI contributions through self-assessment.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You are usually required to register yourself for self-assessment when you are earning more than £1000 per year. However, you can register voluntarily even if your profits are less and pay NI voluntarily just to make sure that you get full state pension – which requires a contribution of 35 years.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You must note that the NI is paid when you reach a certain threshold for profits and not for the rent itself.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>To come to a profit figure, you have to deduct all the 'allowable expenses' from the rent that is paid to you. The allowable expenses will include all the costs involved in repairing, replacing and maintenance of the property. This will include repairing of water leaks, replacing of fixtures and fittings, repainting of walls. If you have hired some equipment to carry out the repair work, then you can deduct its cost from the rental income as well which will in turn reduce your taxable profit.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If renting your property is your main business, you are most likely to have your unused personal allowance. For the year 2020/ 2021 the personal allowance is £12 500.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Once you have calculated your rental profit by subtracting your allowable expenses from the rental income, you must subtract personal allowance from the rental profit. The remaining figure is your taxable profit.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>RUNNING A BUSINESS AS A LIMITED COMPANY</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are running a business as a limited company, and you are working as an employee you will be paying Class 1 NI through your PAYE system- Employees NI. We will cover that in detail in our next blog.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>We at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> have an expert team of property accountants if you are looking for accountants in Croydon or accountants in South hall you should contact us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and our expert team of accountants will be happy to help you.</p>
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
