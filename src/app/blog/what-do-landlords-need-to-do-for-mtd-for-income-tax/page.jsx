import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: "What do landlords need to do for MTD for income tax? | Taxaccolega",
  description: "What do landlords need to do for MTD for income tax? The landlords whose income from the properties for example if their rental income exceeds £10 000 per year…",
  alternates: { canonical: "https://www.taxaccolega.co.uk/blog/what-do-landlords-need-to-do-for-mtd-for-income-tax/" },
  openGraph: {
    type: 'article',
    title: "What do landlords need to do for MTD for income tax? | Taxaccolega",
    description: "What do landlords need to do for MTD for income tax? The landlords whose income from the properties for example if their rental income exceeds £10 000 per year…",
    url: "https://www.taxaccolega.co.uk/blog/what-do-landlords-need-to-do-for-mtd-for-income-tax/",
    siteName: 'Taxaccolega',
    publishedTime: "2022-03-26 12:14:06",
  },
  twitter: {
    card: 'summary_large_image',
    title: "What do landlords need to do for MTD for income tax? | Taxaccolega",
    description: "What do landlords need to do for MTD for income tax? The landlords whose income from the properties for example if their rental income exceeds £10 000 per year…",
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">What do landlords need to do for MTD for income tax?</h1>
          <p className="text-white-50">26 March 2022 | By Shehriyar Lateef</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: `<h1><h1 style="color:#1d3c45;font-weight:800;font-size:65px;margin-bottom:10px">
  What do landlords need to do 
</h1>
<h1 style="color:#d2601a;font-weight:600;font-size:40px">
  for MTD for income tax?
</h1></h1>				
		<figure><img src="https://www.taxaccolega.co.uk/img/blog/mtd.jpg" alt="" /></figure>
<p><!-- /wp:image --><!-- wp:paragraph --></p>
<p>The landlords whose income from the properties for example if their rental income exceeds £10 000 per year, they are required to switch to MTD for their income tax reporting. From April 2024 it will be mandatory for all the individuals who are currently using self assessment.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If the landlord owns some other business as well</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If the landlord runs some other business as well for example he is a sole trader as a sole he will have to switch to MTD .In order to determine if he is required to switch to MTD he will have to add income from the property (rental income) or all the properties and income from the other business, if the total exceeds £10 000 they will have to switch to MTD. By switching to MTD it means that they will have to register for MTD for income tax for accounting relating to your property.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If the landlord is a permanent employee</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If the landlord is the permanent employee and he pays his income tax and National Insurance through PAYE and also owns rental property then he won't be combining the two incomes. If the annual income from the rental property is less than £10 000 he will continue to pay his income taxes through Self assessment. However, if the total income from all the rental property is more than £ 10, 000 then he will have to register for MTD and digitize all the accounting related to the property.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If you have inherited a property</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>You are considered a landlord for tax purposes If you have inherited a property and you receive a rental income from it. You must declare it to HMRC if it exceeds £1000 per annum and you will have to register for MTD income tax if it exceeds £10 000. You won't have to add the income from other sources such as permanent jobs to determine if you should register for MTD.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If you are a buy to let landlord and you own a share of the property</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you own part of the property then you will consider the income from your share of the rent. If the rental income from your share of the property exceeds £10 000 then you will register for MTD and pay taxes through it.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p><strong>If you receive income from the property business which is incorporated</strong></p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>The MTD does not apply to the incorporate business and they will continue to pay taxes</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>By registering for MTD you might have to bear some costs such as buying the software, inhouse training, and increased accountant fees. Although there is not much change in the reporting to HMRC however through MTD you might have to report to HMRC more frequently. This means you might be reporting to HMRC quarterly instead of annually as you did in the self assessment.</p>
<p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
<p>If you need more information on MTD contact <strong><a href="https://www.taxaccolega.co.uk/">Taxaccolega</a></strong>, <strong><a href="tel:02081270728">020 8127 0728</a></strong> accountants in Croydon and our team of landlord accountants, self assessment accountants, will be there to help you.</p>
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
