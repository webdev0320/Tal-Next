import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Should I incorporate my property business? | Taxaccolega",
  description: "Should I incorporate my property business? Recently, it is noticed that many landlords who were managing their buy to let property personally or through in a p…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/should-i-incorporate-my-property-business/" },
  openGraph: {
    type: 'article',
    title: "Should I incorporate my property business? | Taxaccolega",
    description: "Should I incorporate my property business? Recently, it is noticed that many landlords who were managing their buy to let property personally or through in a p…",
    url: "https://www.taxaccolega.co.uk/blog/should-i-incorporate-my-property-business/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-10-23 12:04:52",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Should I incorporate my property business? | Taxaccolega",
    description: "Should I incorporate my property business? Recently, it is noticed that many landlords who were managing their buy to let property personally or through in a p…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Should I incorporate my property business?</h1>
          <p className="text-white-50">23 October 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Should I incorporate my property business?
</h1>
</h1>				
		<p>Recently, it is noticed that many landlords who were managing their buy to let property personally or through in a partnership are now looking to incorporate their business. They can then manage their property portfolio through a limited company.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>It should be noted that transferring the property to a limited company will come with a cost. For example, there will be additional administrative costs involved when managing property through a company. Tax liabilities such as SDLT and Capital Gains Tax will also arise as the transfer takes place at a market value.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Managing a company might not be very straightforward for all individuals and they will consider hiring an accountant who will make sure that all the accounting and tax deadlines are met. The accountant fees will be an additional cost however, it is an allowable expense and will be deducted from the rental income and decrease the value of taxable profit. Therefore it is generally seen that setting up a limited company will be beneficial for you if you rent more than one property.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The increase in the landlords wanting to transfer their property portfolio to the limited company is mainly due to the changes to the tax relief for the residential property which was being phased out since 2017 and is finally implemented in the tax year 2020/2021. This means that the property to let which is held by the individuals , in a partnership or by a non- UK resident who is letting the property individually in the UK will not be able to deduct the finance cost as an expense when calculating taxable profits. In other words it won\`t be an allowable expense. However, the individuals can claim basic tax rate reduction (20%) from their income tax liability on the portion of finance cost that was not deducted in calculating the profit. Finance cost all the costs relating to financing such as mortgage interest, legal fees for obtaining the loan and valuation fees. This restriction is not applied to commercial property and all these costs can be deducted as an expense therefore reducing the tax liability arising on rental profit.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The corporation tax for the tax year 2020/2021 is 19%. Whereas if the property is held by an individual he will have to fill in the self-assessment annually and pay the tax at 20 % in case of a basic rate tax payer, 40 % tax on the income in case of a higher rate tax payer and 45 % if he is an additional tax payer.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>In the incorporated business the individuals can draw money as dividends or wages. The dividend allowance for the tax year 2020/2021 is £ 2000 and this amount is after the personal allowance available to each individual. Tax will be paid for any dividend received above this amount. For basic rate tax payer tax will be paid at 7.5%, for higher rate tax payer it will be 32.5% and for additional it will be 38%. The individuals can also draw some money as a director loan.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If the property is managed through a company it is always easier to transfer change the directors of the company rather than change the ownership of the property. Transferring of the ownership of the company may be for tax efficient reasons.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You might also want to read an article on reducing the tax bill click <strong><a href="https://www.taxaccolega.co.uk/news/blog/archive/article/2020/September/how-can-i-minimise-my-taxes-on-my-property-income">here</a>.</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>There are other ways in which taxes on the rental income can be managed. There are reliefs available which can be used to mitigate the taxes which arise on the transfer such as incorporation relief, however, some criteria needs to be met. We at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> can advise you whether incorporating your property business suit you financially by doing the calculation based on your personal circumstances. Please feel free to contact us at <a href="tel:02081270728"><strong>020 8127 072</strong></a> or drop us a message <strong><a href="https://www.taxaccolega.co.uk/contact-us">here</a></strong> and we will get back to you.</p>		
					
									
				
									
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
