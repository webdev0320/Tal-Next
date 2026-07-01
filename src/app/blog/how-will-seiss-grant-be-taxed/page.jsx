import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "How will SEISS grant be taxed? | Taxaccolega",
  description: "How will SEISS grant be taxed? The government has supported the self employed throughout the pandemic with a generous grant under 'Self employed -income Suppor…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/how-will-seiss-grant-be-taxed/" },
  openGraph: {
    type: 'article',
    title: "How will SEISS grant be taxed? | Taxaccolega",
    description: "How will SEISS grant be taxed? The government has supported the self employed throughout the pandemic with a generous grant under 'Self employed -income Suppor…",
    url: "https://www.taxaccolega.co.uk/blog/how-will-seiss-grant-be-taxed/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-03-20 14:54:17",
  },
  twitter: {
    card: 'summary_large_image',
    title: "How will SEISS grant be taxed? | Taxaccolega",
    description: "How will SEISS grant be taxed? The government has supported the self employed throughout the pandemic with a generous grant under 'Self employed -income Suppor…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">How will SEISS grant be taxed?</h1>
          <p className="text-white-50">20 March 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  How will SEISS grant be taxed?
</h1>
</h1>				
		<p>The government has supported the self employed throughout the pandemic with a generous grant under 'Self employed -income Support Scheme'. The businesses which were affected during the lockdown were given this grant, the third grant given was 80% of the lost income up to a maximum of £7500, paid in a single instalment. It is expected that a fourth self-employment grant will be given following the third lockdown covering the three month period where most of the shops remained shut and the businesses were adversely affected.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>While the self employed are eager to welcome the fourth grant to cover their lost income they should bear in mind that the grant will be taxed. You should keep some money aside to pay for your taxes which will not be due before Jan 2021.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>IS SEISS GRANT TREATED AS INCOME</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>SEISS grant is taxable income and therefore it will subject to income tax and National Insurance. You will have to include this income in full in your tax return for the tax year 2020-2021 regardless of your accounting period.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>This might over estimate the profits and create losses in the future period. You might want to consider changing your accounting period. It is a simple process and if you need any help our <strong><a href="https://www.taxaccolega.co.uk/">accountants in Croydon</a></strong> at Taxaccolega can help you with that.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>YOUR TAX LIABILITY</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Income tax and NI</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Your Tax liability is explained in the following example considering that you are a basic tax rate payer :</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>HMRC calculates your average income based on what you have submitted in your previous tax returns.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>For example your average annual income as calculated by HMRC is £48 000</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Average monthly income will be (48000/12)=£4000</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Income for 3 months will be (£4000*3)=£12 000</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Grant will be- 80%*12 000=£ 9600 and this will be capped £7500</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Since the above income falls in the basic tax rate payer you will be paying tax at the rate of 20 % and Class 2 NI will be paid at 9%.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>WILL VAT BE APPLIED ON THE GRANT</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>SEISS grant is not subject <strong><a href="https://www.taxaccolega.co.uk/factsheets/vat/vat-a-summary">to VAT</a></strong>. Even if the grant income when added to the taxable incomes moves the income up to the threshold after which the business needs to be registered for the VAT and fill in and submit VAT returns. In short the SEISS grants are not VAT-able income</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you have the received the grant you should be ready to pay taxes on it in Jan 2022. Its best to set the money aside now to avoid any cash flow problems. You will be paying payments on account in Jan 2022 which are the advance payments towards your tax bill. You get a penalty charge if you do not pay on time.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>HOW CAN WE HELP?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are self employed and want to apply for the grant, we at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> cannot apply on your behalf. Although we can help you apply and advise you on all the accounting issues related to the grant. If you do not qualify for the grant we help you find more options as provided by HMRC. Feel free to contact us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and we will be happy to help you.</p>		
					
									
				
									
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
