import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Corporation tax increase by 6% - Will it affect your property business? | Taxaccolega",
  description: "Corporation tax increase by 6% - Will it affect your property business? In the budget it was announced that there will be an increase in the corporation tax by…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/corporation-tax-increase-by-6-will-it-affect-your-property-business/" },
  openGraph: {
    type: 'article',
    title: "Corporation tax increase by 6% - Will it affect your property business? | Taxaccolega",
    description: "Corporation tax increase by 6% - Will it affect your property business? In the budget it was announced that there will be an increase in the corporation tax by…",
    url: "https://www.taxaccolega.co.uk/blog/corporation-tax-increase-by-6-will-it-affect-your-property-business/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-03-09 14:51:55",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Corporation tax increase by 6% - Will it affect your property business? | Taxaccolega",
    description: "Corporation tax increase by 6% - Will it affect your property business? In the budget it was announced that there will be an increase in the corporation tax by…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Corporation tax increase by 6% - Will it affect your property business?</h1>
          <p className="text-white-50">9 March 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Corporation tax increase by 6% -
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  Will it affect your property business?
</h1></h1>				
		<p>In the budget it was announced that there will be an increase in the corporation tax by 6 % from 2023. According to the HMRC website this will affect the 30% of the trading companies which are doing well and making a profit of more than £50 000. '70% of the actively trading companies will continue to pay tax at 19% making a profit of less than £50 000.'</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are running a property business for example <strong><a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2020/july/is-it-a-good-idea-to-invest-in-btl-property">renting property through a limited</a></strong> company things that you need to consider the following:</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>STAMP DUTY TAX RELIEF</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>The stamp duty tax holiday has been extended so the buy to let landlords might be looking into buy more property to widen their portfolios. There has been an increase in the buy to let landlords in 2019, but after the budget they might be looking if its still worth it to run through a limited company or as a sole trader.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>CAPITAL GAINS TAX</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>There was a prediction that there will be a capital gains tax increase in the budget announced. However, it is a relief that there is no increase in the capital gains tax relief which along with the extension of the stamp duty relief will encourage the property owners to buy and continue to stay in the business.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>DIVIDENDS</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are a company director you will be paying yourself dividend and you will be paying income tax on it. The dividend allowance for 2021/ 2022 is £ 2000. IF you are a basic tax rate payer you will be paying your dividends at the rate of 7.5%, 32.5% at the higher rate.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>PROFITS</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>You are considered to be in a property business if you are renting more than one property. If you are renting property and the total taxable rental income after deducting all the expenses are £50 000 or you are expecting to make the rental income up to £ 50000 in 2023 you should be aware that you will have to pay corporation tax at the rate of 25%. A taper relief will be introduced so you wont have to pay a tax at the main rate of 25 % till your profits reach £ 250 000.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>PERSONAL ALLOWANCE</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>In the budget, Sunak announced that the personal allowance will increase to £12 570 for the basic rate payer and for the additional tax rate payer it will increase to £50 270 from April 2021.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The increase in the personal allowance will reduce the income tax and dividend that is payable to the HMRC.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>FINANCE COST</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you are running a property business through a company you will be able to deduct the finance cost as an expense which you will no longer be allowed if you are self- employed. This way if you run the property business through a limited company you can reduce the taxable income and therefore reduce costs to the company.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are looking to invest in property and need advice on how to structure your business, please do not hesitate to contact us for an expert advice. We are <strong><a href="https://www.taxaccolega.co.uk/">property accountants</a></strong> and we can provide accounting services at affordable rates.</p>		
					
									
				
									
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
