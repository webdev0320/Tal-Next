import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Why You Must File a Self Assessment Tax Return in the UK | Taxaccolega",
  description: "Why You Must File a Self Assessment Tax Return in the UK 3 Reasons You need to fill in Annual Self-Assessment Tax Return You need to fill in the self-assessmen…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/why-submit-self-assessment-tax-return-in-uk/" },
  openGraph: {
    type: 'article',
    title: "Why You Must File a Self Assessment Tax Return in the UK | Taxaccolega",
    description: "Why You Must File a Self Assessment Tax Return in the UK 3 Reasons You need to fill in Annual Self-Assessment Tax Return You need to fill in the self-assessmen…",
    url: "https://www.taxaccolega.co.uk/blog/why-submit-self-assessment-tax-return-in-uk/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-10-01 11:52:52",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why You Must File a Self Assessment Tax Return in the UK | Taxaccolega",
    description: "Why You Must File a Self Assessment Tax Return in the UK 3 Reasons You need to fill in Annual Self-Assessment Tax Return You need to fill in the self-assessmen…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Why You Must File a Self Assessment Tax Return in the UK</h1>
          <p className="text-white-50">1 October 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Why You Must File a
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  Self Assessment Tax Return in the UK
</h1></h1>				
		<h2><strong>3 Reasons You need to fill in Annual Self-Assessment Tax Return</strong></h2>
<p>You need to fill in the self-assessment tax return and pay income tax in the following cases:</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>1. YOU ARE SELF EMPLOYED</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are running a business and you get an income through dividends you will have to submit annual self-assessment tax return. The reason is that since this income is not taxed at source like your wages you will need to declare this in your annual self-assessment tax return and pay the tax on it.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>2. INCOME</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If your income is more than £100 000 per year before tax or if your annual income from savings or other investments such as shares is £10 000 or more before tax.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>3. FOREIGN INCOME</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>You are a UK resident and you have a foreign income. There is an exemption to this rule: if the foreign income is in the form of dividend and it is less than £300 you don't have to declare it. So If you have any foreign income you should first establish if you are UK resident, or a UK non- resident. You will also have to figure out where you are domiciled. This will help determine the tax implications on your foreign income.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>4. YOU SOLD AN ASSET AND YOU PAID <a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2020/october/self-assessment-tax-return-and-capital-gains-tax">CAPITAL GAINS TAX</a></strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you have sold an asset and which was worth £49,200 or more in the tax year 2020/2021 or your asset might be valued less but you made a gain of £12300 which is the threshold and also In case you sold the asset and it made a loss but there are other gains as well and the net that means (gain – loss)is more than the exemption of £ 12, 300. In all the cases you will have to register for the Self-Assessment tax return and pay CGT.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>5. IF YOU ARE A TRUSTEE</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If <strong><a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2020/september/discretionery-trusts">a trust</a></strong> is established with some income generating assets such as shares and you are appointed its trustee you need to declare it in the self-assessment tax return.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>This is not an exhaustive list and there are many other cases in which you might need to fill in your self-assessment tax return.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>By filing the self-assessment tax return you are telling HMRC that you have some untaxed income on which you are supposed to pay tax. You can also register for self-assessment if you have any reliefs to claim.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>It is always a good idea to submit your self-assessment tax return early. In this way it can be processed quickly and if you are to get any relief you can get it quick. There is also a less chance that you get a penalty. Once you have submitted and paid early you will have a much better idea of your finances and cash flows as well.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>We at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a>, can help you with your self-assessment tax returns. Simply call us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and we can sort out the things for you. In case you have some untaxed income in the tax year 2019/ 2020 , the deadline to submit the self-assessment tax return in Jan 2021 and you must have registered for self-assessment latest by 5 Oct 2020 otherwise you can get penalties.</p>		
					
									
				
									
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
