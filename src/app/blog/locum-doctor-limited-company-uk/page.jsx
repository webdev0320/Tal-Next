import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Can Locum Doctors Work Through a Limited Company? | Taxaccolega",
  description: "I am a Locum Doctor Can I work through a limited Company? If you are a locum doctor and you are looking for some ways to save on the taxes that you pay to HMRC…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/locum-doctor-limited-company-uk/" },
  openGraph: {
    type: 'article',
    title: "Can Locum Doctors Work Through a Limited Company? | Taxaccolega",
    description: "I am a Locum Doctor Can I work through a limited Company? If you are a locum doctor and you are looking for some ways to save on the taxes that you pay to HMRC…",
    url: "https://www.taxaccolega.co.uk/blog/locum-doctor-limited-company-uk/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-07-22 14:40:17",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Can Locum Doctors Work Through a Limited Company? | Taxaccolega",
    description: "I am a Locum Doctor Can I work through a limited Company? If you are a locum doctor and you are looking for some ways to save on the taxes that you pay to HMRC…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Can Locum Doctors Work Through a Limited Company?</h1>
          <p className="text-white-50">22 July 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  I am a Locum Doctor
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  Can I work through a limited Company?
</h1></h1>				
		<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>If you are a locum doctor and you are looking for some ways to save on the taxes that you pay to HMRC, you will have to look for your employment status. You pay taxes through PAYE when you are <strong>employed by an agency or by the NHS</strong> under a fixed term contract. The employer will pay tax and NI on your behalf however, in this way you cannot claim any expenses that you made to carry out the job, for example travel expenses etc. Even Though this kind of an arrangement is a little hassle free and as a locum doctor you don't have to worry about calculating taxes and submitting your taxes on time this is not a vey tax efficient way to carry out your work as a locum doctor.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Another option that you have is to <strong>set up a limited company</strong> and work through that limited company. When you set up a limited company you can be the director of that company as well as an employee of the company. Setting up a limited company can be demanding as you will have to manage and take care of the deadlines and do all the administration work such as keeping the receipts of your expenses that are related to your work organised which will help you make your accounts accurately, deciding on the time and amount of the dividends, transferring salary on time, claiming expenses, making accurate accounts and submitting them on time, calculating taxes accurately and paying them in a timely manner. You might need to <strong><a href="https://www.taxaccolega.co.uk/about-us/advantages-of-having-an-accountant">hire an accountant</a></strong> for all the work but don't worry the accountant fee can also be claimed as an expense against the profits that you make.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>How is Limited Company Tax Efficient?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>The limited company can be tax efficient when you pay the right combination of taxes. This means if you pay the dividend and salary to yourself in a way that you have to pay the minimum tax. You get a tax free dividend allowance of £2000 per year and if you are a basic-rate tax payer you will pay dividend tax at 7.5% and if you are an additional rate taxpayer you will pay tax at 32.5% these rates are lower than the income tax rates. You can calculate the dividend tax by using our <strong><a href="https://www.taxaccolega.co.uk/resources/online-calculators/dividend-tax-calculator">dividend tax calculator</a></strong></p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>Is my contract under IR35?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are working through your company you should be very clear in what your contract is really like with your client. HMRC wants to make sure that you are not a 'disguised employee' and therefore getting the employee benefits and paying taxes at lower rates. In order to avoid any extra charges and make sure that you are paying the right taxes, it is important that you know if you are falling within IR 35 or not. Being Inside IR 35 means that for tax purposes you will be treated as an employee of your client and your taxes will be deducted at source. Make sure that you are not getting any employee benefits such as maternity pay etc, you are able to provide a substitute if you are not able to work the client will then pay you for the substitute and you will pay the person who substituted, you should not be working for one client. Make sure that you have different clients or atleast change them regularly.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are a locum doctor or a dentist and you want to <strong><a href="https://www.taxaccolega.co.uk/small-businesses/sole-trader-or-limited-company">form a company</a></strong> contact Taxaccolega and our team of experienced accountants will be there to help you. <a href="https://www.taxaccolega.co.uk/contact-us"><strong>Taxaccolega accountants in Croydon and Southall</strong> </a>will give you all the information that you need.</p>
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
