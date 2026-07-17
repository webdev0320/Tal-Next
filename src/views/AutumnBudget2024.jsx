"use client";
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';


const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AutumnBudget2024 = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Autumn Budget 2024', active: true },
  ];

  const sections = [
  {
    "title": "Fixing The Foundations To Deliver Change",
    "paragraphs": [
      "On October 30, Rachel Reeves, the first female Chancellor of the Exchequer, unveiled the 2024 Autumn Budget, long-awaited as a major development, thus marking a tremendous turning point in the UK economy.",
      "Reeves’ speech also touched on the reshaping of public expenditure and revenue proceeds by the Labour government after 14 years under the Conservative government. This budget is said to mark the turning point or a devoted budget which woos spending on public services with a flexible target of bringing in an extra £70 billion from Yes, it’s about 2% of GDP.",
      "There are notable changes such as the employer National insurance contributions which are being raised to generate an extra £25 billion on average each and every year, increases on capital gains tax and revision on inheritance tax by the government. Looking into the practical implications of this historical budget, it is apparent that the Labour government has come of age to take the country into a new direction characterised by growth-oriented policies and investments."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Autumn Budget 2024 - Changes to Capital Gains Tax Rates",
    "paragraphs": [
      "CGT is an essential financial issue that arises for individuals who are selling an asset that has a higher value than when they first bought it, for example, properties, shares, and other investments. In the Autumn 2024 Budget, Chancellor Rachel Reeves announced major alterations to the Capital Gains Tax (CGT) system, which are proposed to come into effect on 30th October 2024 for a variety of asset scenarios."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "What Are the New CGT Rates?",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Who Is Impacted?",
    "paragraphs": [
      "In the new regime, people, sole traders, partners in business, and shareholders will experience the effects of this new structure in the event of the sale of increased in value assets.",
      "Nevertheless, companies with limited liabilities don't need to pay CGT rather, they are accountable for the Corporation Tax on the profits coming from the disposals of assets."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Increased Stamp Duty on Second Homes",
    "paragraphs": [
      "Stamp Duty Land Tax is the general term for a government duty paid on documents involved when buying either land or property. This is what you need to know about the changes recently made to the SDLT rules:"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "What Are the New SDLT Rates?",
    "paragraphs": [
      "The Labour government announced in the Autumn 2024 Budget that a second home would henceforth be subject to immediate action, with 5% SDLT instead of the earlier 2%."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Who Is Impacted?",
    "paragraphs": [
      "This higher SDLT will be off-putting to potential new landlords entering the market and may make existing landlords apprehensive about expanding their portfolio. Given this, we are likely to face a shortage in the availability of properties to let, which in turn could force up rents."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Increase in Employers’ National Insurance (NI) Contributions",
    "paragraphs": [
      "National Insurance is a tax system in the UK, and most of it pays for social security benefits, mainly the state pension, healthcare, and various welfare programs. Here's what letting agents and landlords should understand about Labour's position regarding this Budget:"
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "What Are the New NI Rates?",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Who Is Impacted?",
    "paragraphs": [
      "However, this rise in employers' NI contributions will really hit businesses that employ staff and, therefore, increase the payroll costs. This is likely to hit the small and medium-sized enterprises rather hard, especially those with very tight budgets. Fortunately, this burden will be partially alleviated by the increased Employment Allowance, which enables many employers to pay little or no NI. While this may affect the larger companies more, for the smaller businesses, it would be a little buffered by these measures. In the previous budgets, Class 1 NI contributions were reduced from 10% to 8%, and Class 4 contributions were reduced from 8% to 6%, while income tax rates remained the same."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Inheritance Tax - Extended",
    "paragraphs": [
      "Inheritance Tax (IHT) is the tax charged on the value of the estate of a person who has died this includes all property, money, and possessions."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "What Are the New IT Rates?",
    "paragraphs": [
      "During the Autumn 2024 Budget, Rachel Reeves reaffirmed that the current IHT thresholds will be maintained until 2030. For the purpose of IHT, the first £325,000 of any estate is disregarded, this rises to £500,000 where the estate includes a home being passed on to direct children and rises up to £1 million when a deceased civil spouse or partner has died having transferred a nil rate band allowance in her lifetime. And then there’s the issue of the inherited pensions, which will become liable to IHT from April 2027."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Who Does It Affect?",
    "paragraphs": [
      "During the Autumn 2024 Budget, Rachel Reeves reaffirmed that the current IHT thresholds will be maintained until 2030. For the purpose of IHT, the first £325,000 of any estate is disregarded, this rises to £500,000 where the estate includes a home being passed on to direct children and rises up to £1 million when a deceased civil spouse or partner has died having transferred a nil rate band allowance in her lifetime. And then there’s the issue of the inherited pensions, which will become liable to IHT from April 2027."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Increase in National Living Wage and National Minimum Wage",
    "paragraphs": [
      "The National Living Wage (NLW) and National Minimum Wage (NMW) are key components of the UK's wage structure aimed at ensuring fair compensation for workers. The NLW is the minimum hourly wage that employers must pay workers aged 23 and over, while the NMW applies to younger employees, with different rates for those aged 16-17 and 18-20."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "What Are the New NLW & NMW Rates?",
    "paragraphs": [],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Who is Affected?",
    "paragraphs": [
      "Employees",
      "Non-exempt employees over 21 years old, employees aged 18-20, and apprentices will all be entitled to higher wages thus improving the economically vulnerable segments of the population.",
      "Employers",
      "Will incur additional labour cost which may result in a higher price of goods and services.",
      "May be compelled to cut down on employees’ hours in order to contain costs.",
      "Will have additional obligations to enforce the minimum wage policy and therefore risk penalties for violations."
    ],
    "bullets": [],
    "faqs": []
  },
  {
    "title": "Conclusion:",
    "paragraphs": [
      "To summarise, the 2024 Autumn Budget is a sea change for the UK economy with tax hikes and wage rates that will be applied to both businesses and individuals. It will be tough but there is hope to look out for since the government is keen on investment and public services where there is potential for growth.",
      "Landlords will have to face increased Stamp Duty and letting agents will have to cope with the changes as well. There will also be change to National Insurance and the National Living Wage which will force businesses to review their finances."
    ],
    "bullets": [],
    "faqs": []
  }
];


  return (
    <div>
      <PageHero
        title="Autumn Budget 2024"
        subtitle="Key Tax Changes & What They Mean for Your Business — Taxaccolega Analysis"
        breadcrumbs={breadcrumbs}
      />

      {sections.length > 0 && sections.map((section, idx) => {
        const altBg     = idx % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
        const showImage = idx === 0;
        return (
          <section key={idx} className={`py-5 ${altBg}`}>
            <div className="container py-2">
              <div className="row g-5 align-items-center">
                {showImage && (
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="p-2 border rounded-4 shadow-lg bg-white">
                      <img
                        src="/images/young-asian.webp"
                        alt="Autumn Budget 2024"
                        className="img-fluid rounded-3"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                <div className={`col-lg-${showImage ? '7' : '10 mx-auto'} ${showImage ? 'order-1 order-lg-2' : ''}`}>
                  {section.title && (
                    <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4"
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs.map((para, i) =>
                    para.startsWith('## ') ? (
                      <h3 key={i} className="h4 text-brand-dark fw-bold mt-4 mb-3"
                          style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {para.slice(3)}
                      </h3>
                    ) : (
                      <p key={i} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>{para}</p>
                    )
                  )}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="d-flex align-items-start">
                          <CheckIcon />
                          <span>{bullet.replace(/^\*\*.*?\*\*:\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {sections.length === 0 && (
        <section className="py-5 bg-white">
          <div className="container py-4 text-center">
            <p className="text-secondary fs-5">
              Content coming soon. In the meantime, please{' '}
              <a href="/contact-us" className="text-brand-orange fw-bold">contact our team</a>.
            </p>
          </div>
        </section>
      )}



      <Partners />
      <ContactForm source="AutumnBudget2024" />
      <ReviewsSlider />
    </div>
  );
};

export default AutumnBudget2024;
