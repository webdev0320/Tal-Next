import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "Discretionery Trusts | Taxaccolega",
  description: "Discretionary Trusts WHAT IS A DISCRETIONARY TRUST? A discretionary trust is one of the trusts which can be set up by an individual to manage their assets. By…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/discretionery-trusts/" },
  openGraph: {
    type: 'article',
    title: "Discretionery Trusts | Taxaccolega",
    description: "Discretionary Trusts WHAT IS A DISCRETIONARY TRUST? A discretionary trust is one of the trusts which can be set up by an individual to manage their assets. By…",
    url: "https://www.taxaccolega.co.uk/blog/discretionery-trusts/",
    siteName: 'Taxaccolega',
    publishedTime: "2020-09-08 11:45:09",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Discretionery Trusts | Taxaccolega",
    description: "Discretionary Trusts WHAT IS A DISCRETIONARY TRUST? A discretionary trust is one of the trusts which can be set up by an individual to manage their assets. By…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">Discretionery Trusts</h1>
          <p className="text-white-50">8 September 2020 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  Discretionary Trusts
</h1>
</h1>				
		<h2><strong>WHAT IS A DISCRETIONARY TRUST?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>A discretionary trust is one of the trusts which can be set up by an individual to manage their assets.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>By creating a discretionary trust you can manage your cash, other investments such as shares, land and buildings in such a way that it can be beneficial to your family in the future when they need it the most.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>Creating a discretionary trust involves a settlor (an individual who puts the assets in the trust), a trustee (the one who manages the trust), and a beneficiary (anyone who is benefitted from the trust).</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The beneficiary in the discretion trust does not have a right over the trust assets until they are distributed by the trustees according to the\` trust deed'.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>For example, you want to set some money aside for your grandchildren from your estate and not give them right away, you (the settlor) will put the money in the trust which will then be distributed to the beneficiary (in this case your grandchildren) at a certain age say for example at the age if 25 when they can sensibly manage their money and this will be distributed by the trustee.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>WHY SHOULD I CREATE A DISCRETIONARY TRUST?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Many people want to put their money in the trust as part of the estate planning. . Once the assets are added to the trust they are not part of your estate and therefore they are excluded for the inheritance tax purposes.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>A discretionary trust is created to ensure the family gets the wealth when they require it. It may be set by an individual going through a divorce who wants to secure his wealth or it may be set by an individual who wants to give some wealth to his parents who are already on state benefits. Once you put your wealth in the Discretionary trust you can make gifts to your family during your lifetime or even after your death.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>HOW DO WE CREATE A DISCRETIONARY TRUST?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Creating a trust usually is a 4 step process in which an individual who is the settlor decides upon which assets to put in a trust, they then appoint the trustees who has the discretion over the distributions from the trust. The beneficiaries are chosen. The terms of the 'terms of deed' are defined.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>WHAT ARE THE TAX IMPLICATIONS?</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>A discretionary trust has a standard rate band of £1000. This means the first £ 1000 is taxed at the standard rate of 20 % while the dividend income up to £1000 is taxed at 7.5%. Dividend income above £1000 is taxed at 38.1% while the other income is taxed at 45%.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The trustees will pay the income tax on the income generated from the trust. For example if the trustees received the dividend income they need to pay £45 on the income of £100. The trustees need to fill in the tax return each year if there is income generated by the trust.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>When the income is then distributed to the beneficiary it comes with a tax credit. It will be treated as though it was already taxed at 45 %. If the trustee is a basic tax rate tax payer or a higher rate tax payer of 40 % they can reclaim the difference between the tax paid by them and the tax paid by the trustee by filling the Self-Assessment form.</p>
<p><!-- /wp:paragraph --><!-- wp:heading --></p>
<h2><strong>IF YOU NEED FURTHER HELP</strong></h2>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Putting money in a trust many require some expert advice. You need to consult a solicitor and a financial advisor to deal with the complex matters such as taxes. We at <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> can help you with this. Please feel free to contact us at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> or drop us a message <strong><a href="https://www.taxaccolega.co.uk/contact-us">here</a></strong> and we will get back to you.</p>		
					
									
				
									
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
