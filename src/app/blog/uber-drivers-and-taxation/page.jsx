import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Uber Drivers and taxation | Taxaccolega",
  description: "Uber Drivers and taxation If you are working for Uber you are not considered their employees. You are working as a self employed person as you set your own wor…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/uber-drivers-and-taxation/" },
  openGraph: {
    type: 'article',
    title: "Uber Drivers and taxation | Taxaccolega",
    description: "Uber Drivers and taxation If you are working for Uber you are not considered their employees. You are working as a self employed person as you set your own wor…",
    url: "https://www.taxaccolega.co.uk/blog/uber-drivers-and-taxation/",
    siteName: 'Taxaccolega',
    publishedTime: "2022-06-12 11:51:49",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Uber Drivers and taxation | Taxaccolega",
    description: "Uber Drivers and taxation If you are working for Uber you are not considered their employees. You are working as a self employed person as you set your own wor…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Uber Drivers and taxation</h1>
          <p className="text-white-50">12 June 2022 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Uber Drivers and taxation
</h1>
</h1>				
		<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>If you are working for Uber you are not considered their employees. You are working as a <strong><a href="https://www.taxaccolega.co.uk/self-employed/">self employed person</a></strong> as you set your own working hours and you follow your own business strategies to improve your business. You will be responsible for your own taxes as well. For tax purposes you are considered self employed and you will be paying <a href="https://www.taxaccolega.co.uk/blog/national-insurance-how-much-do-i-have-to-pay/"><strong>National Insurance</strong> </a>and <strong><a href="https://www.taxaccolega.co.uk/taxation/personal-income-tax-professionals-and-chartered-accountants/">Income tax</a></strong> on all the profits that you will make.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Some people tend to confuse income with profits, please note that income is all the earnings that you get as a result of the business that you are doing, in this case it is the Driving service that you are giving as an Uber Driver. However, the profit is the net income which you get after deducting all your expenses. This means that you will deduct all your costs which you incurred and it is directly related to the service that you are providing. For example, in this case one of the costs which you can deduct are the fuel costs. This net income is the taxable profit and you will pay income tax on it.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>When and How should I register for my taxes?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You don't have to register for a <strong><a href="https://www.taxaccolega.co.uk/accounts/self-assessment-tax-returns/">Self Assessment tax return</a></strong> if your income(before deducting any expenses) is less than £1000. If you exceed this threshold you will need to register for a self assessment tax return by 5th October in your business's second tax year.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>As an Uber Driver what expenses can I deduct?</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You should make it your habit that whenever you buy something or use something for your business you should keep a record of it. You can save all the paper receipts in a box, however, you can be a bit more organized and take a picture of all the receipts and save it to your drive. If you have an accountant you can just share that file with them instead of giving them all the paper receipts.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You should also enter your expenses digitally somewhere as you make them. You can either make an excel sheet and enter your expenses there or you can also use a software where you can enter your expenses. This will give you a peace of mind and it will save you lots of time when you are filing your tax return.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Here is a list of expenses that you can deduct from your income:</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>       ● Mileage and Business use of your car</li>
<li>     ● Mobile Phone expenses: The cost of the phone, billing charges, any other accessory essential for the business for example, chargers and mounts. IF you use your phone business and personal use, make sure that you have proper record of your business calls otherwise your claim might not be accepted by <strong><a href="https://www.taxaccolega.co.uk/blog/hmrc-penalties-investigations/">HMRC</a></strong></li>
<!-- /wp:list-item --><!-- wp:list-item --><!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● Licenses: For example cost of renewing your license.</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● Floor mats</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● First aid kits</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● Bottled water</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● Car tool kits</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>       ● Office supplies for example, stationery.</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p>If you are an Uber Driver and you want tax advice or you want an accountant to do your taxes <strong><a href="https://www.taxaccolega.co.uk/contact-us">contact Taxaccolega</a></strong> and Taxaccolega self employed will ask you simple questions and do all the taxes for you. </p>
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
