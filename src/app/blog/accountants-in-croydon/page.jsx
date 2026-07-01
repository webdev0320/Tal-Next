import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Accountants in Croydon | Taxaccolega",
  description: "Accountants in Croydon Why do I need an accountant ? You need an accountant not only because they will do your accounts but having an accountant who is dependa…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/accountants-in-croydon/" },
  openGraph: {
    type: 'article',
    title: "Accountants in Croydon | Taxaccolega",
    description: "Accountants in Croydon Why do I need an accountant ? You need an accountant not only because they will do your accounts but having an accountant who is dependa…",
    url: "https://www.taxaccolega.co.uk/blog/accountants-in-croydon/",
    siteName: 'Taxaccolega',
    publishedTime: "2022-05-29 11:59:02",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Accountants in Croydon | Taxaccolega",
    description: "Accountants in Croydon Why do I need an accountant ? You need an accountant not only because they will do your accounts but having an accountant who is dependa…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Accountants in Croydon</h1>
          <p className="text-white-50">29 May 2022 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Accountants in Croydon
</h1>
</h1>				
		<h2><strong>Why do I need an accountant ?</strong></h2>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You need an accountant not only because they will do your accounts but having an accountant who is dependable can actually make your life easy.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If you are self employed</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you run your own business as a self employed person you have certain legal responsibilities related to accounting and the taxes which you have to fulfill within the deadlines otherwise you will have to bear certain<a href="https://www.taxaccolega.co.uk/services/annual-accounts"> <strong>penalties</strong></a>. You can hire an accountant to do these duties for you so you can focus more on running and expanding your business rather than being stuck in the accounting things which can be outsourced.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you hire an accountant they can take care of the following duties :</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>      ● Registering you as a self employed</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>      ● Registering your business for VAT if you have to</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>      ● Submitting your tax return annually</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>      ● Submitting VAT returns quarterly (in case you are VAT registered)</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p>We at Taxaccolega have accountants who will give you accounting and taxation advice after understanding your business. We understand that every business is unique and therefore the accounting advice for one business might not be right for the other business.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>An accountant will help you minimize your tax liabilities by claiming all the possible allowable expenses that can be deducted from your income while coming to the profit figure.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You will also need advice from your accountant on how you can withdraw money from your business. If you are self employed you can withdraw money as dividends, you can also withdraw money as director loans. However, an accountant can tell you which method would be most tax efficient.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If you run your business as limited liability company</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you run your business as a limited liability company you have some added legal responsibilities:</p>
<p><!-- /wp:paragraph --><!-- wp:list --></p>
<ul><!-- wp:list-item -->
<li>      ● You will have to register for corporation tax when you start doing your business</li>
<!-- /wp:list-item --><!-- wp:list-item -->
<li>   ●Prepare and file your company tax return. You will have to prepare your annual accounts and pay the corporation tax bill, your accountant can prepare the annual accounts for you.</li>
<!-- /wp:list-item --></ul>
<p><!-- /wp:list --><!-- wp:paragraph --></p>
<p>An accountant will help you with all the <strong><a href="https://www.taxaccolega.co.uk/services/bookkeeping">book keeping</a></strong>, they will manage your payroll and they will also advise you all on the other taxes such as capital gains tax, <strong><a href="https://www.taxaccolega.co.uk/services/inheritance-tax">inheritance tax</a></strong>, property taxes.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>They will also guide you on different relief available such as business property relief which can reduce the inheritance tax bill in the future.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You do not need an accountant while you are running your business, the best time to hire an accountant is before you start your business. Although you have to pay your accountant which will add to your costs, the good news is that it is an allowable expense and you can deduct it from your income.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>When you hire an accountant before you start your business, an accountant can advise you on the most tax efficient structure, which depends on your individual circumstances. They will also prepare and advise you on the cash flow forecasts so you can adopt the best business strategy.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are running a business or thinking of running a business you can contact <strong><a href="https://www.taxaccolega.co.uk/contact-us">Taxaccolega</a></strong><strong> </strong>accountants in croydon and they will advise you on the possible ways to run your business in the most tax efficient way.</p>		
					
									
				
									
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
