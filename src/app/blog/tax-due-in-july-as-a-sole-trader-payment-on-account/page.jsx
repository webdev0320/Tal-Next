import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Sole Trader Tax: July Payment on Account Explained | Taxaccolega",
  description: "Tax due in July as a sole trader payment on account If you are self-employed running your own business as a sole trader you will have to pay your income tax th…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/tax-due-in-july-as-a-sole-trader-payment-on-account/" },
  openGraph: {
    type: 'article',
    title: "Sole Trader Tax: July Payment on Account Explained | Taxaccolega",
    description: "Tax due in July as a sole trader payment on account If you are self-employed running your own business as a sole trader you will have to pay your income tax th…",
    url: "https://www.taxaccolega.co.uk/blog/tax-due-in-july-as-a-sole-trader-payment-on-account/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-05-15 14:38:15",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sole Trader Tax: July Payment on Account Explained | Taxaccolega",
    description: "Tax due in July as a sole trader payment on account If you are self-employed running your own business as a sole trader you will have to pay your income tax th…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Sole Trader Tax: July Payment on Account Explained</h1>
          <p className="text-white-50">15 May 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Tax due in July as a sole trader
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  payment on account 
</h1></h1>				
		<p><!-- wp:image --></p>
<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>If you are self-employed running your own business as a sole trader you will have to pay your income tax through a self assessment tax return. For your trading income that will fall in the tax year running from April 2020 to April 2021, the taxes on that income will be due in full on 31 Jan 2022. This means you are not paying at source.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>In order to make sure that the self-employed are not paying their tax bills in arrears HMRC has a system known as payment on account. You have to make these payments twice a year. You will be making these payments on accounts If your tax bill for a tax year is more than £1000, you won't have to make these payments if your tax bill is less than £1000 or 80% of your income is taxed at source, for example if you are employed full time at a company.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>How does it work? </strong></p>
<p>Payment on accounts are the advance payments towards your tax bill which is due in Jan the following year. These payments are calculated by HMRC based on your tax liability for the previous year. You pay 50% of the estimated tax liability on 31 Jan and the other 50% of the tax liability on 31 July. The payments on account will therefore mean that the self employed person will end paying 150% of their tax bill in a particular year.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>These payments on accounts include tax on your trading income and class 4 NI. It will not include any capital gains tax or student loan tax. These taxes are then paid as part of the balancing payment on 31 Jan the following year.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>This can be best explained with an example below:</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Claire is a sole trader and her tax liability for the tradings in the tax year 2019- 2020 were £6000. Based on her previous tax bill she will make 2 advance payments of £3000 each. One on 31 Jan 2021 and the second on 31 July 2020. If her actual tax bill for the tax year 2020-2021 comes out to be £7500 then she will have to make the balancing payment of £1500 on 31 Jan 2022 along with the first payment on account of £3750 which is an advance payment towards her tax bill.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Claire will have to pay a total of £5250 on 31 Jan 2022. It is therefore important that you understand your tax bills and set your money aside accordingly in order to avoid financial shocks. If you make an underpayment of your taxes you might have to face penalty charges which is an extra cost to your business.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you have a business in which the profits fluctuate or they are fluctuating because of any other reason such as Lockdown you can reduce your payments on account by simply filling in the <strong><a href="https://www.gov.uk/government/publications/self-assessment-claim-to-reduce-payments-on-account-sa303" target="_blank" rel="noreferrer noopener">form</a></strong> and letting HMRC why you want to reduce your payments on account. You cannot simply ask to reduce your payments on account because you cannot afford to pay the tax bill.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you want to sort out your taxes and stay worry free you can contact <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> and we will do the numbers for you. We make sure that all your taxes are calculated accurately and all your tax bills paid on time. We are accountants based in Croydon and Surrey and we can help you with the personal taxes as well as corporation taxes and liabilities.</p>
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
