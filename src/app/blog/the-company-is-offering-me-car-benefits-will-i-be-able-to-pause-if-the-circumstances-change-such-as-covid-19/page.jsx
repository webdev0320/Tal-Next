import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? | Taxaccolega",
  description: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? The combination of salary and benefits in kind…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/the-company-is-offering-me-car-benefits-will-i-be-able-to-pause-if-the-circumstances-change-such-as-covid-19/" },
  openGraph: {
    type: 'article',
    title: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? | Taxaccolega",
    description: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? The combination of salary and benefits in kind…",
    url: "https://www.taxaccolega.co.uk/blog/the-company-is-offering-me-car-benefits-will-i-be-able-to-pause-if-the-circumstances-change-such-as-covid-19/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-04-04 14:30:04",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? | Taxaccolega",
    description: "The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19? The combination of salary and benefits in kind…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">The Company is offering me car benefits - will I be able to pause if the circumstances change such as covid-19?</h1>
          <p className="text-white-50">4 April 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  The Company is offering me car benefits - will I be able to pause
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  if the circumstances change such as covid-19?
</h1></h1>				
		<p><!-- wp:image --></p>
<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>The combination of salary and benefits in kind (BIK) often referred to as “perks” is what makes an attractive salary package these days. As mentioned in one of our previous blogs, some of these benefits in kinds are <a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2021/april/employee-benefits-and-what-are-the-related-taxes"><strong>taxable and some are non-taxable</strong>.</a></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Car benefit is one of the benefits in kind on which you pay taxes if you are using it for our personal use or for private commuting.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The amount of tax you pay will depend on the value of the car (which your employer will mention in the P11D). The value of the car is reduced if you pay something towards its cost, if it has low carbon dioxide emissions and if you have it part time. It will also depend on the tax bracket you fall in, You will be paying higher tax rates if you are in <a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2021/March/increase-in-the-personal-allowance-how-does-it-affect-you"><strong>higher tax rate brackets</strong>.</a></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>Do we continue to pay tax on company car benefit even if we are not able to avail the benefit due to situations like pandemic Covid-19?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Well the answer is no, you don't have to. To stop the company car benefit you should prove to HMRC that the company car wasn't available for your personal use for at least 30 days, You will be able to save some tax in this way. To prove it to HMRC the best way is to hand over the company car keys to the employer for this time period. Or to return the car to the employer for this period.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If the company is providing you with the company car as well as the fuel then your fuel benefit will also stop with the car benefit and you will be saving tax on the fuel as well.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The benefits in kind are reported on P11D forms. This form needs to be submitted by 6 July following the end of the relevant tax year. For more tax deadlines <strong><a href="https://www.taxaccolega.co.uk/resources/tax-calendar">see here</a></strong>. If there are any changes in the benefits in kind they should be reflected in the P11D forms</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>What are my responsibilities as an Employee if there are any changes in the Benefits in Kind?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Your employer should give you a copy of the P11D form and you should check the amounts of taxes you paid on the benefits. If there are certain figures you don't agree with you should discuss them with your employer.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If your benefit in kind is being payrolled by the employer, you need to check the tax code and the payslip to ensure the correct amount of taxes are being paid.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>HMRC suggests employee that If there are any alterations in your salary sacrifice arrangements they should be reflected in the contract. And they should be clear on their cash and non cash entitlement</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>P11D can be a bit confusing as there are too many details to fill in. If you need any help with the P11D form contact our team of accountants at <strong><a href="https://www.taxaccolega.co.uk/">Taxaccolega</a></strong> at <a href="tel:02081270728"><strong>020 8127 0728</strong></a>. If you are an employer and you need a payroll accountant we will provide you the payroll services at very affordable rates. Accountants based in Croydon, Surrey and Southall our expert team can help do calculations for you and meet the deadlines.</p>
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
