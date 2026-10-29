"use client";

import React from 'react';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import { faqJsonLd } from '../lib/jsonld';

const atAGlance = [
  {
    area: 'Income tax on earnings',
    change: 'Rates unchanged; thresholds stay frozen',
    date: 'No change',
  },
  {
    area: 'National Insurance',
    change: 'Rates unchanged; most thresholds frozen to 2030-31',
    date: 'No change',
  },
  {
    area: 'VAT',
    change: 'Standard rate unchanged; new online marketplace rules',
    date: 'October 2027',
  },
  {
    area: 'Savings income',
    change: 'Rates rise to 24%, 44% and 49%',
    date: '6 April 2027',
  },
  {
    area: 'Property income',
    change: 'Rates rise to 24%, 44% and 49% (England, Wales, NI)',
    date: '6 April 2027',
  },
  {
    area: 'Dividends',
    change: 'No change to rates',
    date: 'No change',
  },
  {
    area: 'Corporation Tax',
    change: '25% main rate and 19% small profits rate kept',
    date: 'No change',
  },
  {
    area: 'Capital allowances',
    change: 'First-year allowance up to 50%; main pool rate down to 12%',
    date: '1 January / April 2027',
  },
  {
    area: 'Business Asset Disposal Relief',
    change: 'Lifetime limit cut from £1m to £500,000',
    date: '6 April 2027',
  },
  {
    area: "Founders' Relief",
    change: 'New lower CGT rate for qualifying founders',
    date: '6 April 2027, subject to consultation',
  },
  {
    area: 'Trading allowance',
    change: 'Rises from £1,000 to £3,000',
    date: '6 April 2027',
  },
  {
    area: 'Cash ISA',
    change: '£20,000 limit kept; the planned cut is reversed',
    date: 'April 2027',
  },
];

const readings = [
  {
    label: 'Rate changes',
    tone: 'orange',
    text: 'Rate changes alter how much tax is due on the same income or gain. The savings and property income increases sit here. They call for modelling.',
  },
  {
    label: 'Relief changes',
    tone: 'teal',
    text: 'Relief changes alter how much is taxed at all, or when relief arrives. BADR, Founders’ Relief, capital allowances and the trading allowance belong here. They call for timing decisions.',
  },
  {
    label: 'Reporting changes',
    tone: 'slate',
    text: 'Reporting changes alter how and when you deal with HMRC, without necessarily changing the bill. Payrolling benefits, the R&D form changes and more regular Self Assessment payments fall here. They call for systems and calendars.',
  },
];

const timeline = [
  {
    date: '1 January 2027',
    detail: '50% first-year allowance; bank surcharge at 6%',
  },
  {
    date: '1 April 2027',
    detail: '12% main pool rate for companies; R&D Claim Notification Form removed',
  },
  {
    date: '6 April 2027',
    detail:
      'Savings and property income rates; BADR £500,000 limit; Founders’ Relief; £3,000 trading allowance; 35p mileage rate above 10,000 miles; Pension Tax Allowance; 12% pool rate for unincorporated businesses; payrolling of cars, vans, fuel and medical benefits',
  },
  {
    date: 'October 2027',
    detail: 'Online marketplace VAT collection',
  },
  {
    date: '2 January 2028',
    detail: 'VAT on full private hire fares for large operators',
  },
  {
    date: 'April 2028',
    detail: 'Distributions framework; payrolling of most other benefits; employment expenses threshold removed',
  },
  {
    date: 'April 2029',
    detail:
      'VAT e-invoicing; more regular Self Assessment payments; Direct Debit for VAT and PAYE; First Time Buyer ISA',
  },
];

const actionPlan = [
  {
    who: 'A higher-rate saver',
    issue: 'Savings income taxed at 44% from April 2027',
    type: 'Rate',
    review: 'Savings held outside ISAs and pensions against your Personal Savings Allowance',
  },
  {
    who: 'A landlord',
    issue: 'Property income taxed at 24%, 44% or 49%',
    type: 'Rate',
    review: '2027-28 rental profit modelled at the new rates',
  },
  {
    who: 'A company director',
    issue: 'Distributions rules change from April 2028',
    type: 'Rate',
    review: 'Any planned buyback, capital return or reorganisation',
  },
  {
    who: 'Planning to sell a business',
    issue: 'BADR lifetime limit falls to £500,000',
    type: 'Relief',
    review: 'Unused BADR and where the deal sits against 6 April 2027',
  },
  {
    who: 'Buying equipment',
    issue: 'First-year allowance up, pool rate down',
    type: 'Relief',
    review: 'Purchase dates around 1 January and April 2027',
  },
  {
    who: 'Self-employed',
    issue: 'Trading allowance, mileage and MTD',
    type: 'Relief and reporting',
    review: 'Side income against the £3,000 allowance; your MTD start date',
  },
  {
    who: 'An employer',
    issue: 'Mandatory payrolling of benefits',
    type: 'Reporting',
    review: 'Payroll software readiness for April 2027',
  },
  {
    who: 'Selling through online marketplaces',
    issue: 'VAT collected by the platform',
    type: 'Reporting',
    review: 'Sales per platform against the £90,000 threshold',
  },
];

const faqs = [
  {
    q: 'What are the biggest tax changes in the UK Budget 2026?',
    a: 'The biggest changes are higher income tax rates on savings and property income, rising to 24%, 44% and 49% from 6 April 2027, and a cut in the Business Asset Disposal Relief lifetime limit from £1 million to £500,000. Capital allowances are reshaped too, with a 50% first-year allowance and a 12% main pool rate. Headline rates of income tax on earnings, National Insurance and VAT are unchanged.',
  },
  {
    q: 'Did income tax go up in Budget 2026?',
    a: 'Not on earnings. Income tax rates on salary, self-employed profits and pensions are unchanged, and the personal allowance stays at £12,570, with thresholds frozen until April 2031. The increases fall on savings and property income instead, which will be taxed at 24%, 44% and 49% from 6 April 2027. Because thresholds stay frozen, some people may still pay more as their income rises.',
  },
  {
    q: 'Which taxes did not change in Budget 2026?',
    a: 'The headline rates of income tax on earnings, National Insurance and VAT are unchanged. Corporation Tax stays at 25% for the main rate and 19% for small profits, dividend tax rates were left alone, and the main Capital Gains Tax rates stay at 18% and 24%. The BADR limit does fall, though, and frozen thresholds mean an unchanged rate doesn’t always mean an unchanged bill.',
  },
  {
    q: 'What does Budget 2026 mean for small businesses?',
    a: 'For most small businesses, headline tax rates stay the same. The changes to check are capital allowance timing around January and April 2027, the £3,000 trading allowance for side businesses, mandatory payrolling of benefits from April 2027 and new VAT collection rules for online sellers. In England, more retail, hospitality and leisure premises will pay no business rates once the relief threshold rises.',
  },
  {
    q: 'How will Budget 2026 affect landlords?',
    a: 'From 6 April 2027, individual landlords in England, Wales and Northern Ireland will pay income tax on rental profit at 24%, 44% or 49%, rather than at the rates on earnings. A higher-rate landlord therefore pays four points more on rent than on salary. The government will also consult on wider third-party reporting of property income, which makes accurate records more important.',
  },
  {
    q: 'Does the higher property income tax rate apply to limited companies?',
    a: 'No. The new property income rates are income tax rates for individuals. Companies that hold property pay Corporation Tax on their profits, and those rates are unchanged at 19% and 25%. That doesn’t automatically make a company structure better, because transferring property into a company can trigger Stamp Duty Land Tax and Capital Gains Tax, and taking profits out is taxed too.',
  },
  {
    q: 'Do the savings tax changes affect money held in an ISA?',
    a: 'No. Interest earned inside an ISA stays free of income tax, so the higher savings rates from April 2027 only apply to savings held outside ISAs and pensions. The Budget also kept the cash ISA limit at £20,000, reversing a planned cut. For higher-rate taxpayers with sizeable savings, using the full ISA allowance each year becomes more valuable than it was.',
  },
  {
    q: 'When was the UK Budget 2026, and when do the changes start?',
    a: 'The UK Budget 2026 was delivered on Wednesday 28 October 2026 by Chancellor John Healey. Most tax measures will be legislated in Finance Bill 2026-27. The main changes start on 1 January 2027 for the first-year allowance, 1 April 2027 for company capital allowances and R&D forms, and 6 April 2027 for savings and property income, BADR and the trading allowance.',
  },
];

const contents = [
  { href: '#at-a-glance', label: 'What changed and what didn’t' },
  { href: '#how-to-read', label: 'Rate, relief, reporting' },
  { href: '#individuals', label: 'Changes for individuals' },
  { href: '#businesses', label: 'What it means for small businesses' },
  { href: '#selling-a-business', label: 'Selling a business' },
  { href: '#landlords', label: 'Landlords and property' },
  { href: '#vat', label: 'VAT and business rates' },
  { href: '#timeline', label: 'When changes take effect' },
  { href: '#action-plan', label: 'What to review now' },
  { href: '#faqs', label: 'Budget 2026 FAQs' },
];

const toneClasses = {
  orange: 'border-[#d2601a] bg-orange-50 text-[#8a3f10]',
  teal: 'border-teal-600 bg-teal-50 text-teal-900',
  slate: 'border-slate-500 bg-slate-50 text-slate-800',
};

const H2 = ({ id, children }) => (
  <h2
    id={id}
    className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6 scroll-mt-28"
    style={{ fontFamily: "'Outfit', sans-serif" }}
  >
    {children}
  </h2>
);

const H3 = ({ id, children }) => (
  <h3
    id={id}
    className="text-xl lg:text-2xl font-bold text-[#1D3C45] mt-8 mb-3 scroll-mt-28"
    style={{ fontFamily: "'Outfit', sans-serif" }}
  >
    {children}
  </h3>
);

const P = ({ children, className = '' }) => (
  <p className={`text-slate-700 leading-relaxed mb-4 ${className}`}>{children}</p>
);

const Callout = ({ children, title }) => (
  <div className="bg-slate-50 border-l-4 border-[#d2601a] rounded-r-xl p-6 my-8">
    {title && <p className="font-bold text-[#1D3C45] mb-3 text-lg">{title}</p>}
    <div className="text-slate-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

const UkBudget2026 = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'UK Budget 2026', active: true },
  ];

  const faqSchema = faqJsonLd(faqs);

  return (
    <div className="bg-white font-sans text-slate-800">
      <PageHero
        title="UK Budget 2026: The Tax Changes That Matter Once the Headlines Fade"
        subtitle="Budget 2026 tax changes, key announcements and what they mean for individuals, landlords, company directors and small businesses."
        breadcrumbs={breadcrumbs}
      />

      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-slate-600 mb-0 text-center lg:text-left">
            <span className="font-semibold text-[#1D3C45]">Last reviewed:</span> 28 October 2026
            <span className="mx-2 text-slate-400">|</span>
            Based on the HM Treasury and HMRC Budget 2026 publications
          </p>
        </div>
      </div>

      <article className="py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <P>
              The UK Budget 2026, delivered by Chancellor John Healey on 28 October 2026, was built
              around one promise: no rise in the headline rates of income tax, National Insurance or
              VAT. That promise held. But a Budget can leave the headline rates alone and still change
              a good deal underneath them, and this one does.
            </P>
            <P>
              The money is raised in narrower places. Income from savings and property will be taxed
              more heavily from April 2027. The lifetime limit for Business Asset Disposal Relief is
              halved. Capital allowances are reshaped, so the timing of an equipment purchase matters
              more than it did. At the same time, several measures cut admin, from a tripled trading
              allowance to the end of the R&amp;D claim notification form.
            </P>

            <div className="my-8 rounded-xl bg-[#1D3C45] p-6 text-white">
              <p className="mb-0 text-lg leading-relaxed">
                <span className="font-bold text-[#e8a274]">The short version:</span> earned income is
                protected. Income and gains from assets carry more of the load.
              </p>
            </div>

            <P>
              A Budget announcement isn’t the same as enacted law. Some measures announced on
              28 October 2026 still need primary legislation through Finance Bill 2026-27, some will
              be made by secondary legislation and a few remain under consultation. Where it matters,
              this guide says which is which. It is general information, and how any change affects
              you will depend on your own circumstances.
            </P>

            <nav
              aria-label="In this guide"
              className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                In this guide
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-none p-0 m-0">
                {contents.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-[#1D3C45] no-underline hover:text-[#d2601a] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </article>

      {/* At a glance */}
      <section className="py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <H2 id="at-a-glance">UK Budget 2026: what changed and what didn’t</H2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#1D3C45] text-white">
                    <th className="p-4 font-semibold">Tax or area</th>
                    <th className="p-4 font-semibold">What Budget 2026 changes</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Effective date</th>
                  </tr>
                </thead>
                <tbody>
                  {atAGlance.map((row, i) => (
                    <tr
                      key={row.area}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td className="p-4 border-t border-slate-200 font-semibold text-[#1D3C45] align-top">
                        {row.area}
                      </td>
                      <td className="p-4 border-t border-slate-200 text-slate-700 align-top">
                        {row.change}
                      </td>
                      <td className="p-4 border-t border-slate-200 text-slate-700 align-top whitespace-nowrap">
                        {row.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to read */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <H2 id="how-to-read">A practical way to read this Budget: rate, relief, reporting</H2>
            <P>
              Every measure in this Budget falls into one of three groups. It isn’t an official
              classification, but it is the quickest way we know to work out what a Budget actually
              asks of you.
            </P>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              {readings.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl border-l-4 p-6 ${toneClasses[item.tone]}`}
                >
                  <p className="font-bold text-lg mb-2">{item.label}</p>
                  <p className="leading-relaxed mb-0 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <P>
              Rate changes call for modelling. Relief changes call for timing decisions. Reporting
              changes call for systems and calendars. Plenty of people will be touched by at least one
              group even if their bill barely moves. The same split runs through the decision table at
              the end of this guide, and it is a sensible shape for any post-Budget tax planning
              review.
            </P>
          </div>
        </div>
      </section>

      {/* Individuals */}
      <section className="py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="individuals">Budget 2026 tax changes for individuals</H2>

            <H3>Income tax on earnings</H3>
            <P>
              Nothing changes for salary, self-employed profits or pension income. The personal
              allowance stays at £12,570 and the bands remain frozen until April 2031, as previously
              announced. That freeze still matters. As pay rises, more of it drifts into higher bands
              without any change in the rate. Scottish taxpayers should note that rates and bands on
              earnings are set in Holyrood.
            </P>

            <H3>Savings and property income</H3>
            <P>
              Last year’s Budget had already legislated a two-point rise from April 2027. This Budget
              adds two more points on top. From 6 April 2027, savings income will be taxed at 24%
              (basic), 44% (higher) and 49% (additional) across the UK.
            </P>
            <P>
              Property income gets the same 24%, 44% and 49% rates in England, Wales and Northern
              Ireland. The Scottish Government has been given the power to set its own property income
              rates, and the Welsh Government holds the same power, so rates in either nation could
              differ in later years. Both changes are due in Finance Bill 2026-27 (source: HMRC Budget
              2026 tax legislation and rates).
            </P>
            <P>
              The government says 84% of income taxpayers will be unaffected, largely because the
              Personal Savings Allowance and starting rate for savings remain. Even so, the change
              makes ISA and pension wrappers more valuable for anyone holding sizeable savings outside
              them.
            </P>

            <H3>Pensioners and savers</H3>
            <P>
              A new Pension Tax Allowance runs from 6 April 2027 to 5 April 2030. It means pensioners
              whose total income is no more than the full new State Pension won’t receive small income
              tax bills on their State Pension, and it tapers away at £1 for every £3 of income above
              that level. The cash ISA limit stays at £20,000, a change being made through secondary
              legislation. A new First Time Buyer ISA, with a 25% government bonus towards a first home
              worth up to £450,000, will replace the Lifetime ISA for new savers when it launches in
              April 2029.
            </P>
            <P>
              The move to bring most unused pension funds into Inheritance Tax from 6 April 2027 isn’t
              new. It was legislated in Finance Act 2026 and still goes ahead.
            </P>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="businesses">What the UK Budget 2026 means for small businesses</H2>
            <P>
              Most small businesses face no change in their headline tax rates. What changes is the
              detail around them: when relief arrives, what gets reported and how. The questions worth
              asking depend on how the business is set up.
            </P>

            <H3>If you run a limited company or are a company director</H3>
            <P>
              Corporation Tax stays at 25% for the main rate and 19% for small profits, confirmed for
              the financial year starting 1 April 2028. The only rate change is for banks, whose
              surcharge doubles from 3% to 6% between 1 January 2027 and 31 March 2028.
            </P>
            <P>
              Dividend tax rates are unchanged at this Budget, with the ordinary and upper rates
              staying at 10.75% and 35.75% after April 2026’s increase. The longer-term item for
              directors is a modernised framework for company distributions, due from April 2028. The
              government says genuine changes of ownership, including family successions, will keep
              capital treatment, but draft legislation isn’t expected until 2027. Anyone weighing a
              share buyback, capital reduction or reorganisation should build that into their profit
              extraction planning for directors.
            </P>
            <P>
              On R&amp;D tax relief, the Claim Notification Form is removed for claims made on or after
              1 April 2027, and the Additional Information Form will be simplified from autumn 2027.
              For employee share schemes, the CSOP option limit rises to £120,000 from 6 April 2027 and
              the EMI exercise window after a disqualifying event extends to 180 days.
            </P>

            <H3>If you are a sole trader or freelancer</H3>
            <P>
              The trading allowance triples from £1,000 to £3,000 from 6 April 2027, and the Self
              Assessment reporting threshold for trading income moves with it (HMRC). Someone earning
              a few thousand pounds from a side business may no longer need to declare it, although
              claiming the allowance means giving up the deduction for actual expenses.
            </P>
            <P>
              Mileage changes too. The 55p rate for the first 10,000 business miles in a car or van,
              brought in earlier in 2026 as a temporary measure, is being made permanent. Above 10,000
              miles, the rate rises from 25p to 35p from 6 April 2027. The changes cover both
              employees’ approved mileage payments and the simplified rates used by the self-employed,
              and will be set by statutory instrument.
            </P>
            <P>
              If you join Making Tax Digital for Income Tax in April 2027, no late submission penalty
              points will apply to quarterly updates in 2027-28. From April 2029, people who make
              payments on account will move to smaller, more regular payments. Both are worth noting
              alongside your usual Self Assessment deadlines.
            </P>

            <H3>If you employ staff</H3>
            <P>
              National Insurance rates are unchanged, and most thresholds stay frozen until 2030-31,
              set through the usual secondary legislation in early 2027. The National Living Wage and
              National Minimum Wage rise by 3.9%.
            </P>
            <P>
              The bigger administrative change is mandatory payrolling of benefits in kind. From
              6 April 2027, company cars, vans, fuel and medical benefits must be reported through
              payroll, with most other benefits following on 6 April 2028 (HMRC). Also from April 2028,
              new benchmark subsistence rates apply and the £2,500 Self Assessment threshold for
              employment expense claims is removed. If you run payroll in-house, check your software is
              ready well before April, or weigh up whether outsourced payroll would be simpler.
            </P>

            <H3>If you are planning to invest in equipment</H3>
            <P>
              The main rate first-year allowance rises from 40% to 50% for expenditure incurred on or
              after 1 January 2027. The main pool writing-down allowance falls from 14% to 12% from
              1 April 2027 for companies and 6 April 2027 for unincorporated businesses (HMRC).
            </P>
            <P>
              Full expensing continues, so many companies buying new, qualifying plant and machinery
              may barely notice the lower pool rate. The £1 million Annual Investment Allowance also
              stays, which already gives most smaller businesses 100% relief on qualifying spending.
              The changes bite where neither of those reaches.
            </P>

            <Callout title="Who should pay particular attention to the capital allowance changes?">
              <p className="mb-0">
                Companies buying second-hand equipment are the clearest group. Used assets don’t
                qualify for full expensing or first-year allowances, so they go straight into the pool
                at the lower rate. Sole traders and partnerships can’t use full expensing, so any
                spending above the Annual Investment Allowance relies on the 50% first-year allowance
                for new assets and the pool for the rest. Equipment-heavy businesses with large
                existing pool balances will see slower write-offs from April 2027 even if they buy
                nothing new. Cars generally sit outside both the Annual Investment Allowance and these
                first-year allowances, so they follow their own rules.
              </p>
              <p className="mb-0">
                Timing is where the planning sits. For spending that relies on the first-year
                allowance, buying on or after 1 January 2027 rather than in December lifts it from 40%
                to 50%. Accounting periods that straddle the April 2027 change may use a blended pool
                rate, so your year-end matters as well. Whether an asset qualifies depends on what it
                is, whether it is new and how it is financed, which is exactly the kind of question
                business tax planning should settle before you commit.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* Selling a business */}
      <section className="py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="selling-a-business">Selling a business: BADR cut and a new Founders’ Relief</H2>
            <P>
              The BADR lifetime limit falls from £1 million to £500,000 for qualifying disposals on or
              after 6 April 2027 (HMRC). The BADR rate has been 18% since April 2026. The government
              expects three-quarters of claimants to keep relief on their whole gain, but owners with
              larger lifetime gains now have a clear date to plan around.
            </P>

            <H3>Does the £500,000 BADR limit mean you should sell before April 2027?</H3>
            <P>
              Not automatically. At current rates, BADR taxes qualifying gains at 18%, against 24% for
              a higher-rate taxpayer without it. So the cut costs at most six percentage points on
              £500,000 of gain, about £30,000, and only for someone who still has the full £1 million
              of relief unused. Anyone who has already used some BADR, or whose gain sits below
              £500,000, loses less or nothing.
            </P>
            <P>
              Set that against the cost of rushing. A sale brought forward to beat a date can mean a
              weaker price, thinner due diligence or less favourable terms, any of which can cost more
              than the tax saved. Special rules also apply to contracts entered into before 6 April
              2027 but completed afterwards, so exchanging early doesn’t necessarily settle the
              question. A sale timetable shouldn’t be driven by tax alone, but it is worth knowing
              exactly where you stand before planning a business sale.
            </P>

            <H3>Founders’ Relief</H3>
            <P>
              Founders’ Relief is new. It offers a lower Capital Gains Tax rate on qualifying disposals
              of shares from 6 April 2027 for founders and early investors in high-growth companies.
              Budget-day commentary describes a 10% rate on up to £10 million of lifetime gains, but the
              conditions are out to consultation until 30 November 2026, with the relief added to
              Finance Bill 2026-27 by amendment afterwards. For most owner-managed businesses, BADR is
              likely to remain the more relevant relief.
            </P>
          </div>
        </div>
      </section>

      {/* Landlords */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="landlords">Landlords and property investors</H2>
            <P>
              From 6 April 2027, rental profit is taxed at 24%, 44% or 49% rather than at the rates on
              earnings. A higher-rate landlord will pay 44% on property income while their salary is
              taxed at 40%. How relief for finance costs interacts with the new rates is worth checking
              once the Finance Bill is published.
            </P>
            <P>
              The government will also consult on wider third-party reporting of property income,
              which suggests HMRC will see more rental data than it does now. For anyone comparing
              personal and company ownership the numbers shift, but Stamp Duty Land Tax, CGT on
              transfer and mortgage terms mean incorporation is rarely a simple answer. A review of
              your landlord tax position is the sensible first step.
            </P>
          </div>
        </div>
      </section>

      {/* VAT */}
      <section className="py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="vat">VAT and business rates</H2>
            <P>
              The VAT rate stays the same, but collection changes. From October 2027, online
              marketplaces become responsible for collecting VAT on sales by UK VAT-registered
              businesses, and by other UK businesses selling more than £90,000 a year on that platform
              (HMRC). The rules won’t apply to personal sales, second-hand goods or business-to-business
              transactions, and the threshold and start date will be confirmed in secondary
              legislation.
            </P>
            <P>
              From April 2027, the reverse charge on services bought from overseas will only apply to
              VAT-registered UK businesses, so unregistered firms may see overseas suppliers add UK
              VAT. Large private hire operators will charge VAT on the full fare from 2 January 2028.
              VAT e-invoicing and Direct Debit for VAT and PAYE are planned for April 2029, so it is
              worth checking how your VAT returns are prepared before then.
            </P>
            <P>
              In England, the Small Business Rate Relief threshold rises so that a further 70,000
              retail, hospitality and leisure businesses pay no business rates (HM Treasury).
              Budget-day reporting puts the new threshold at £18,000, up from £12,000, with the detail
              to follow in business rates guidance. Other properties in those sectors have their rates
              frozen for two years, and pubs, music venues and social clubs get an extra 20% reduction.
            </P>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="timeline">When do the Budget 2026 tax changes take effect?</H2>
            <P>The changes arrive in stages rather than all at once:</P>
            <ol className="relative list-none p-0 m-0 mt-8 space-y-6 border-l-2 border-slate-200 ml-3">
              {timeline.map((item) => (
                <li key={item.date} className="relative pl-8">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#d2601a] ring-4 ring-white" />
                  <p className="font-bold text-[#1D3C45] mb-1">{item.date}</p>
                  <p className="text-slate-700 leading-relaxed mb-0">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Who is affected */}
      <section className="py-14 lg:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2 id="affected">Who is most affected, and who is largely unaffected</H2>
            <P>
              The people most likely to feel this Budget are higher and additional rate taxpayers with
              significant savings outside ISAs and pensions, individual landlords with substantial
              rental profits, and owner-managers planning a sale with lifetime gains above £500,000.
              Unincorporated businesses with heavy pool spending and employers providing benefits in
              kind also have real work ahead.
            </P>
            <P>
              Employees whose income is mostly salary, basic rate savers who sit within their Personal
              Savings Allowance and most limited companies paying Corporation Tax are largely untouched
              on rates. People with small side incomes may come out slightly ahead.
            </P>
          </div>
        </div>
      </section>

      {/* Action plan */}
      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <H2 id="action-plan">What should businesses and taxpayers do after Budget 2026?</H2>
            <P>
              The table turns the Budget into a starting point for each situation. Many people will
              recognise themselves in more than one row.
            </P>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-6">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#1D3C45] text-white">
                    <th className="p-4 font-semibold">If you are...</th>
                    <th className="p-4 font-semibold">Main Budget 2026 issue</th>
                    <th className="p-4 font-semibold">Type</th>
                    <th className="p-4 font-semibold">What to review now</th>
                  </tr>
                </thead>
                <tbody>
                  {actionPlan.map((row, i) => (
                    <tr key={row.who} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 border-t border-slate-200 font-semibold text-[#1D3C45] align-top">
                        {row.who}
                      </td>
                      <td className="p-4 border-t border-slate-200 text-slate-700 align-top">
                        {row.issue}
                      </td>
                      <td className="p-4 border-t border-slate-200 align-top">
                        <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#8a3f10] whitespace-nowrap">
                          {row.type}
                        </span>
                      </td>
                      <td className="p-4 border-t border-slate-200 text-slate-700 align-top">
                        {row.review}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P className="mt-8">
              The UK Budget 2026 was not dramatic for most earners. Its effect is selective, landing on
              income from assets, larger business sales and the way tax is reported. That selectiveness
              is exactly why a quick review now tends to be more useful than a reaction later.
            </P>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600 mb-0">
                <span className="font-semibold text-[#1D3C45]">Sources:</span> Budget 2026 (HM
                Treasury) and Budget 2026: Overview of tax legislation and rates (HMRC), both published
                28 October 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <H2>Budget 2026 FAQs</H2>
            <div className="space-y-4 mt-8">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-[#d2601a]/30 transition-colors"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 font-semibold text-[#1D3C45] cursor-pointer list-none text-base lg:text-lg">
                    {faq.q}
                    <span className="shrink-0 text-[#d2601a] transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-4 border-t border-slate-100 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <ContactForm source="UK Budget 2026" />
      <ReviewsSlider />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.taxaccolega.co.uk/' },
          { name: 'UK Budget 2026', url: 'https://www.taxaccolega.co.uk/uk-budget-2026-tax-changes/' },
        ]}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </div>
  );
};

export default UkBudget2026;
