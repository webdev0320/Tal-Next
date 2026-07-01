import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "6 Things you should know about Reporting the Capital Gains Tax when selling property. | Taxaccolega",
  description: "6 Things you should know about Reporting the Capital Gains Tax when selling property When you are selling an asset, you should keep in mind that you will have…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/6-things-you-should-know-about-reporting-the-capital-gains-tax-when-selling-property/" },
  openGraph: {
    type: 'article',
    title: "6 Things you should know about Reporting the Capital Gains Tax when selling property. | Taxaccolega",
    description: "6 Things you should know about Reporting the Capital Gains Tax when selling property When you are selling an asset, you should keep in mind that you will have…",
    url: "https://www.taxaccolega.co.uk/blog/6-things-you-should-know-about-reporting-the-capital-gains-tax-when-selling-property/",
    siteName: 'Taxaccolega',
    publishedTime: "2021-08-20 14:36:21",
  },
  twitter: {
    card: 'summary_large_image',
    title: "6 Things you should know about Reporting the Capital Gains Tax when selling property. | Taxaccolega",
    description: "6 Things you should know about Reporting the Capital Gains Tax when selling property When you are selling an asset, you should keep in mind that you will have…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">6 Things you should know about Reporting the Capital Gains Tax when selling property.</h1>
          <p className="text-white-50">20 August 2021 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  6 Things you should know about Reporting 
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  the Capital Gains Tax when selling property
</h1></h1>				
		<figure></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>When you are selling an asset, you should keep in mind that you will have to pay a chunk of tax to the HMRC.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>IS THE PROPERTY THAT I AM SELLING MY OWN HOME?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>When you sell your property which is your main home you won't have to report any gains that you get. This means that you are eligible for Private Residence Relief even if you are a non-resident in the UK. A property will be considered your home for tax purposes if you have one home and you have lived in it as your main home for all the time that you have owned it and you have neither ever rented it out nor have you used the property for commercial purposes.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>IS THE PROPERTY THAT I AM SELLING A RESIDENTIAL PROPERTY?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>However, you will be reporting and paying Capital Gains Tax on any residential property that you sell. For example, if you are a landlord and you own a residential property which is not your main home then this property will be subject to Capital Gains Tax.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>TO WHOM AM I SELLING THE PROPERTY?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>You won't have to report and pay any taxes when you sell your property to your husband/wife or to your children.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>HAVE I SOLD THE PROPERTY ON OR AFTER 6 APRIL 2020?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>If you have sold the property on or after 6 April 2020 you must pay any capital gains tax due within 30 days of selling it. HMRC will charge you interest and penalty if the CGT is not paid reported and paid on time. In this case you don't have to wait to report the gain in the self-assessment tax return. Also note that this rule is only for the residential property, if you have sold any other asset on or after 6 April 2020 you can report is straight away using Real Time Capital Gains Tax Services or you can also report the gains in the self-assessment tax return.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>DO I NEED TO REPORT CAPITAL GAINS TAX EVEN IF THE TOTAL GAINS ARE LESS THAN THE TAX-FREE ALLOWANCE?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>Yes, if the total gains are less than the tax-free allowance you won't have to pay capital gains tax, however, you will still need to report them. The tax-free allowance for CGT for the tax year 2021/2022 is 12300.</p>
<p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
<h3><strong>DO I HAVE TO REPORT THE LOSSES?</strong></h3>
<p><!-- /wp:heading --><!-- wp:paragraph --></p>
<p>The losses for the year from the sale of the assets can be offset against the gains in the same year and for the losses of the previous 4 years this can reduce your capital gains tax bill.  Therefore, it is very important to report the gains as well as the losses to HMRC.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you are selling a property and you what know about the tax implications and all the reliefs available, please do not hesitate to contact <a href="https://www.taxaccolega.co.uk/"><strong>Taxaccolega</strong></a> at <a href="tel:02081270728"><strong>020 8127 0728</strong></a> we are accountants based in Surrey, Croydon, London and our team of expert accountants will be happy to advise you.</p>
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
