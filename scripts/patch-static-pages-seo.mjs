/**
 * Patches staticPages.js — fills in descriptions for pages that only have a title.
 * Uses high-quality curated copy for UK accounting service pages.
 */
import fs from 'fs';

const PATCHES = {
  '/': {
    title: 'Chartered Accountants London | Tax & Accounting Firm Online UK',
    description: 'Award-winning London chartered accountants for tax, bookkeeping, payroll, VAT and company accounts. Fixed-fee packages, 5-star rated. Book a free consultation today.',
    keywords: ['chartered accountants london', 'accountants near me', 'tax accountants uk', 'online accounting firm'],
  },
  '/about-us': {
    title: 'About Us | London Chartered Accountants',
    description: 'Meet Taxaccolega — trusted London chartered accountants serving SMEs, contractors and landlords with proactive tax and accounting advice since 2009.',
    keywords: ['about taxaccolega', 'chartered accountants croydon', 'accountancy firm london'],
  },
  '/awards-accolades-accreditations': {
    title: 'Awards, Accolades & Accreditations | Taxaccolega',
    description: 'Taxaccolega awards, professional accreditations and industry recognition. ACCA chartered accountants trusted by UK businesses and consistently rated 5-stars.',
    keywords: ['accountant awards uk', 'ACCA accountants', 'trusted accountants london'],
  },
  '/blog': {
    title: 'Tax & Accounting Blog | UK Business Insights',
    description: 'Practical tax, VAT and accounting guides for UK business owners, landlords and contractors. Expert insights from Taxaccolega chartered accountants.',
    keywords: ['accounting blog', 'tax advice uk', 'hmrc guides'],
  },
  '/company-formation': {
    title: 'Company Formation Services UK | Register a Limited Company',
    description: 'Fast UK company formation with registered office, share structure and Companies House filing. Start your limited company with expert accountant support.',
    keywords: ['company formation uk', 'register limited company', 'companies house formation'],
  },
  '/company-secretarial': {
    title: 'Company Secretarial Services UK',
    description: 'Company secretarial support including confirmation statements, director changes, share transfers and statutory registers. Stay compliant with Companies House.',
    keywords: ['company secretarial', 'confirmation statement', 'companies house compliance'],
  },
  '/contact-us': {
    title: 'Contact Us | Book a Free Consultation',
    description: 'Contact Taxaccolega in Croydon, London. Call 020 8127 0728 or book a free consultation for tax, accounts and business advisory services.',
    keywords: ['contact accountant london', 'taxaccolega contact', 'accountant consultation'],
  },
  '/employment-agreement': {
    title: 'Employment Agreement & Contract Services',
    description: 'Employment contracts and agreements drafted for UK employers. Compliant documentation for hiring staff, directors and contractors.',
    keywords: ['employment agreement uk', 'employment contract', 'hr documentation'],
  },
  '/legal': {
    title: 'Legal Information & Terms | Taxaccolega',
    description: 'Legal information, disclaimers and terms relating to Taxaccolega website and professional services.',
    keywords: ['legal information', 'accountant terms'],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Taxaccolega',
    description: 'Privacy policy for Taxaccolega. How we collect, use and protect your personal data in accordance with UK GDPR.',
    keywords: ['privacy policy', 'data protection'],
  },
  '/refer-a-friend': {
    title: 'Refer a Friend | Accountant Referral Scheme',
    description: 'Refer a friend to Taxaccolega and earn rewards when they become a client. Share trusted accounting services across your network.',
    keywords: ['refer a friend', 'accountant referral'],
  },
  '/refer-and-earn': {
    title: 'Refer and Earn | Client Referral Rewards',
    description: 'Refer and earn with Taxaccolega. Recommend our chartered accountancy services and receive referral rewards.',
    keywords: ['refer and earn', 'accountant referral scheme'],
  },
  '/registered-address': {
    title: 'Registered Office Address Service UK',
    description: 'Affordable registered office address service for UK limited companies. Mail handling for HMRC and Companies House correspondence.',
    keywords: ['registered office address', 'companies house address', 'virtual office uk'],
  },
  '/schedule-a-phone-call-or-video-meeting': {
    title: 'Schedule a Call | Free Accountant Consultation',
    description: 'Book a phone or video consultation with a London chartered accountant. Discuss tax, accounts, payroll or company setup at a time that suits you.',
    keywords: ['book accountant call', 'free tax consultation', 'video meeting accountant'],
  },
  '/share-transfer': {
    title: 'Share Transfer & Company Share Changes',
    description: 'Share transfer services for UK limited companies including stock transfer forms, board resolutions and Companies House updates.',
    keywords: ['share transfer uk', 'company shares', 'stock transfer form'],
  },
  '/software': {
    title: 'Accounting Software Setup & Integration UK',
    description: 'Accounting software advice and setup for Xero, QuickBooks, Sage, FreeAgent and Dext. Cloud bookkeeping integration for UK businesses.',
    keywords: ['accounting software uk', 'xero accountant', 'quickbooks setup'],
  },
  '/switch-accountant': {
    title: 'Switch Accountant | Hassle-Free Transfer',
    description: 'Switch to Taxaccolega with a smooth, hassle-free transfer. We liaise with HMRC, migrate records and get your accounts back on track.',
    keywords: ['switch accountant', 'change accountant uk', 'transfer accounting records'],
  },
  '/taxation/worldwide-disclosure-facility': {
    title: 'Worldwide Disclosure Facility | HMRC Offshore Tax',
    description: 'Confidential HMRC Worldwide Disclosure Facility support for undeclared offshore income. Reduce penalties with structured voluntary disclosure.',
    keywords: ['worldwide disclosure facility', 'offshore tax disclosure', 'hmrc voluntary disclosure'],
  },
  '/taxation/cryptocurrency': {
    title: 'Cryptocurrency Tax Accountants UK | Crypto Tax Returns',
    description: 'Cryptocurrency tax reporting for traders, investors and businesses. Capital gains, staking income and HMRC-compliant crypto tax returns.',
    keywords: ['cryptocurrency tax uk', 'crypto tax accountant', 'bitcoin tax return'],
  },
  '/taxation/let-property-campaign': {
    title: 'Let Property Campaign | HMRC Landlord Disclosure',
    description: 'HMRC Let Property Campaign disclosure for undeclared rental income. Correct historic landlord tax errors before HMRC investigation.',
    keywords: ['let property campaign', 'landlord tax disclosure', 'rental income hmrc'],
  },
  '/accounts/annual-accounts': {
    title: 'Annual Accounts Preparation & Filing UK',
    description: 'Year-end annual accounts prepared and filed accurately for limited companies and sole traders. HMRC and Companies House compliant reporting.',
    keywords: ['annual accounts', 'year end accounts', 'company accounts filing'],
  },
  '/accounts/bookkeeping': {
    title: 'Bookkeeping Services For UK Businesses',
    description: 'Outsource bookkeeping to qualified UK accountants. Accurate records, bank reconciliations and VAT-ready data for SMEs. Fixed monthly fees available.',
    keywords: ['bookkeeping services uk', 'small business bookkeeper', 'online bookkeeping'],
  },
  '/accounts/self-assessment': {
    title: 'Self Assessment Tax Return Accountants UK',
    description: 'Expert self assessment tax return preparation for directors, landlords and freelancers. Avoid HMRC penalties with accurate filing and proactive tax planning.',
    keywords: ['self assessment accountant', 'tax return uk', 'hmrc self assessment'],
  },
  '/accounts/hmrc-self-assessment-tax-returns-accountant': {
    title: 'HMRC Self Assessment Tax Returns | Expert Accountants',
    description: 'Professional HMRC self assessment tax return service for UK taxpayers. Directors, landlords and contractors. Accurate filing, maximum reliefs claimed.',
    keywords: ['hmrc self assessment accountant', 'self assessment tax return', 'self assessment help'],
  },
  '/pricing': {
    title: 'Accounting Fees & Pricing | Fixed-Fee Packages UK',
    description: 'Transparent fixed-fee accounting packages for sole traders, limited companies, contractors and landlords. No hidden costs. View our pricing.',
    keywords: ['accountant fees uk', 'accounting packages pricing', 'fixed fee accountant'],
  },
  '/contractors': {
    title: 'Contractor Accountants UK | IR35-Aware Services',
    description: 'Specialist contractor accounting services in London. IR35 reviews, limited company setup, dividend planning and self assessment for UK contractors.',
    keywords: ['contractor accountant uk', 'ir35 accountant', 'contractor limited company'],
  },
  '/dentists': {
    title: 'Accountants for Dentists UK | Dental Practice Accounting',
    description: 'Specialist accountants for NHS and private dentists. Dental associate and practice accounts, tax planning and payroll from expert UK accountants.',
    keywords: ['dentist accountant uk', 'dental practice accounting', 'nhs dentist tax'],
  },
  '/self-employed': {
    title: 'Self-Employed Accountants UK | Sole Trader Support',
    description: 'Accounting support for self-employed professionals in the UK. Self assessment, bookkeeping, expenses and tax planning from Taxaccolega.',
    keywords: ['self employed accountant', 'sole trader accounting', 'self employed tax uk'],
  },
  '/freelancers': {
    title: 'Accountants for Freelancers UK | Freelance Tax Support',
    description: 'Expert freelancer accounting services. Tax returns, invoicing, expenses and IR35 guidance for UK freelancers and independent professionals.',
    keywords: ['freelancer accountant uk', 'freelance tax return', 'freelance accounting'],
  },
  '/small-business': {
    title: 'Small Business Accountants UK | SME Accounting Services',
    description: 'Dedicated small business accountant services in the UK. Bookkeeping, accounts, payroll, VAT and tax planning for SMEs at fixed monthly fees.',
    keywords: ['small business accountant uk', 'sme accountant', 'small business tax'],
  },
  '/business-start-up': {
    title: 'Business Start-Up Accountants UK | New Company Support',
    description: 'Expert accounting support for UK business start-ups. Company formation, registered office, first-year accounts and HMRC registration from day one.',
    keywords: ['start up accountant uk', 'new company accounting', 'business start up support'],
  },
  '/construction-industry-scheme': {
    title: 'Construction Industry Scheme (CIS) Accountants UK',
    description: 'CIS tax return and subcontractor accounting services for UK construction workers. Monthly CIS deductions, self assessment and tax reclaims.',
    keywords: ['cis accountant uk', 'construction industry scheme', 'subcontractor tax return'],
  },
  '/ir35-contractors-review': {
    title: 'IR35 Status Review for UK Contractors',
    description: 'Independent IR35 status reviews for UK contractors and end-clients. Contract analysis, working practice checks and HMRC-compliant assessments.',
    keywords: ['ir35 review uk', 'ir35 status check', 'off payroll working'],
  },
  '/contractors-insurance': {
    title: 'Contractors Insurance Guidance UK',
    description: 'Professional insurance guidance for UK contractors. Professional indemnity, public liability and IR35-supporting business insurance explained.',
    keywords: ['contractor insurance uk', 'professional indemnity contractor', 'public liability'],
  },
  '/start-ups-basic': {
    title: 'Basic Start-Up Accounting Package UK',
    description: 'Affordable accounting package for new UK businesses. Company registration, first accounts, HMRC setup and ongoing bookkeeping support.',
    keywords: ['startup accounting uk', 'new business accountant', 'start-up accounts'],
  },
  '/business-plan': {
    title: 'Business Plan Services | Financial Projections UK',
    description: 'Professional business plan preparation with cash flow forecasts, P&L projections and market analysis. Ideal for bank finance and investor presentations.',
    keywords: ['business plan accountant uk', 'financial projections', 'business plan writing'],
  },
  '/e-commerce': {
    title: 'E-Commerce Accountants UK | Online Business Tax',
    description: 'Specialist accountants for UK e-commerce businesses. VAT for online sellers, marketplace tax, bookkeeping and accounts for Shopify, Amazon and eBay sellers.',
    keywords: ['ecommerce accountant uk', 'online seller tax', 'vat for online business'],
  },
  '/amazon-seller': {
    title: 'Amazon Seller Accountants UK | FBA Tax & VAT',
    description: 'Tax and VAT accounting for Amazon FBA sellers in the UK. Marketplace VAT obligations, self assessment and bookkeeping for Amazon traders.',
    keywords: ['amazon seller accountant uk', 'fba tax uk', 'amazon vat'],
  },
  '/shopify': {
    title: 'Shopify Accountants UK | E-Commerce Tax Support',
    description: 'Accounting and tax services for Shopify store owners. UK VAT, self assessment, bookkeeping and accounts for Shopify sellers.',
    keywords: ['shopify accountant uk', 'shopify vat', 'ecommerce tax shopify'],
  },
  '/saas': {
    title: 'SaaS Company Accountants UK | Tech Business Tax',
    description: 'Accounting and tax services for UK SaaS businesses. Revenue recognition, R&D tax credits, VAT and annual accounts for software companies.',
    keywords: ['saas accountant uk', 'tech company accountant', 'software business tax'],
  },
  '/ebay-seller': {
    title: 'eBay Seller Accountants UK | Marketplace Tax',
    description: 'Tax and accounting for eBay sellers in the UK. VAT registration, self assessment, bookkeeping and HMRC compliance for online marketplace sellers.',
    keywords: ['ebay seller accountant uk', 'ebay seller tax', 'marketplace vat uk'],
  },
  '/woocommerce': {
    title: 'WooCommerce Accountants UK | WordPress Store Tax',
    description: 'Accounting and VAT support for WooCommerce store owners. UK online business tax, bookkeeping and accounts for WordPress e-commerce.',
    keywords: ['woocommerce accountant uk', 'wordpress shop tax', 'woocommerce vat'],
  },
  '/dropshipping': {
    title: 'Dropshipping Accountants UK | Online Business Tax',
    description: 'Tax and accounting for UK dropshipping businesses. VAT on digital goods, international sales, bookkeeping and self assessment for dropshippers.',
    keywords: ['dropshipping accountant uk', 'dropshipping tax uk', 'dropshipping vat'],
  },
  '/xero': {
    title: 'Xero Accountants UK | Certified Xero Partners',
    description: 'Certified Xero accounting partners in London. Xero setup, training, bookkeeping and tax compliance using Xero cloud accounting software.',
    keywords: ['xero accountant uk', 'certified xero partner', 'xero bookkeeping'],
  },
  '/quickbooks': {
    title: 'QuickBooks Accountants UK | QuickBooks Setup & Support',
    description: 'QuickBooks accounting support for UK businesses. Setup, migration, bookkeeping and tax compliance using QuickBooks Online.',
    keywords: ['quickbooks accountant uk', 'quickbooks online setup', 'quickbooks support'],
  },
  '/sage': {
    title: 'Sage Accountants UK | Sage Business Cloud Support',
    description: 'Sage accounting support for UK businesses. Sage Business Cloud setup, bookkeeping, payroll and tax using Sage accounting software.',
    keywords: ['sage accountant uk', 'sage business cloud', 'sage payroll support'],
  },
  '/freeagent': {
    title: 'FreeAgent Accountants UK | FreeAgent Setup & Support',
    description: 'FreeAgent accounting support for freelancers and small businesses. Setup, tax filing and bookkeeping using FreeAgent cloud accounting.',
    keywords: ['freeagent accountant uk', 'freeagent setup', 'freeagent bookkeeping'],
  },
  '/dext': {
    title: 'Dext (Receipt Bank) UK | Paperless Bookkeeping',
    description: 'Dext (formerly Receipt Bank) integration for UK businesses. Automated receipt capture, expense management and bookkeeping with Dext.',
    keywords: ['dext accountant uk', 'receipt bank uk', 'automated bookkeeping'],
  },
  '/taxcalc': {
    title: 'TaxCalc Software UK | Tax Return Software',
    description: 'TaxCalc tax return software support for UK accountants and businesses. Self assessment, corporation tax and partnership returns.',
    keywords: ['taxcalc software uk', 'tax return software', 'taxcalc support'],
  },
  '/btc-software': {
    title: 'BTC Software UK | Tax & Accounts Software',
    description: 'BTC Software accounting and tax software support for UK accountants. Accounts production, tax and practice management tools.',
    keywords: ['btc software uk', 'accounting software support', 'practice management software'],
  },
  '/flow': {
    title: 'Flow Finance UK | Business Cash Flow Management',
    description: 'Cash flow management and financial planning tools for UK businesses. Improve working capital and manage business finances effectively.',
    keywords: ['cash flow management uk', 'flow finance uk', 'business finance tools'],
  },
  '/anna': {
    title: 'ANNA Money Business Account | UK Business Banking',
    description: 'ANNA Money business account for UK sole traders and small businesses. Expense management, invoicing and business banking in one app.',
    keywords: ['anna money uk', 'anna business account', 'business banking app uk'],
  },
  '/tide': {
    title: 'Tide Business Account | UK Business Banking',
    description: 'Tide business bank account for UK SMEs and sole traders. Free business current account with expense tracking and invoicing tools.',
    keywords: ['tide business account uk', 'tide bank uk', 'small business bank account'],
  },
  '/mettle': {
    title: 'Mettle Business Account | NatWest for Sole Traders',
    description: 'Mettle business account by NatWest for UK sole traders and small businesses. Free business banking with FreeAgent integration.',
    keywords: ['mettle business account', 'natwest mettle uk', 'sole trader bank account'],
  },
  '/monzo': {
    title: 'Monzo Business Account UK | Business Banking',
    description: 'Monzo Business bank account for UK entrepreneurs and small businesses. Business current account with smart spending tools and integrations.',
    keywords: ['monzo business account uk', 'monzo business bank', 'business current account'],
  },
  '/revolut': {
    title: 'Revolut Business Account UK | Business Banking',
    description: 'Revolut Business account for UK companies. Multi-currency accounts, expense management and international payments for growing businesses.',
    keywords: ['revolut business account uk', 'revolut business banking', 'multi currency business account'],
  },
  '/starling': {
    title: 'Starling Bank Business Account UK | Award-Winning Banking',
    description: 'Starling Bank business account for UK SMEs and sole traders. Award-winning business banking with accounting integrations and no monthly fees.',
    keywords: ['starling bank business account', 'starling business banking uk', 'sole trader bank account'],
  },
  '/property-landlords': {
    title: 'Landlord Accountants UK | Property Tax Services',
    description: 'Specialist landlord accountants for UK property investors. Rental income tax, self assessment, capital gains and Section 24 mortgage interest advice.',
    keywords: ['landlord accountant uk', 'property tax accountant', 'rental income tax'],
  },
  '/furnished-holiday-letting': {
    title: 'Furnished Holiday Letting Accountants UK',
    description: 'Tax and accounting for UK furnished holiday lettings (FHL). FHL qualifying conditions, capital allowances, rollover relief and self assessment.',
    keywords: ['furnished holiday letting accountant', 'fhl tax uk', 'holiday let accounting'],
  },
  '/hotels-restaurants-bars': {
    title: 'Accountants for Hotels, Restaurants & Bars UK',
    description: 'Specialist hospitality accountants for hotels, restaurants, cafes and bars. VAT, payroll, cash accounting and sector-specific tax advice.',
    keywords: ['hospitality accountant uk', 'restaurant accountant', 'hotel accounting'],
  },
  '/hairdressers-beauty-barbers': {
    title: 'Accountants for Hairdressers, Beauty & Barbers UK',
    description: 'Accounting services for hairdressers, barbers and beauty salons. Booth rental tax, VAT, payroll and self assessment for beauty industry professionals.',
    keywords: ['hairdresser accountant uk', 'beauty salon accounting', 'barber tax return'],
  },
  '/jewellers': {
    title: 'Accountants for Jewellers UK | Retail Jewellery Tax',
    description: 'Specialist accountants for UK jewellers and precious metal dealers. VAT on jewellery, inventory accounting and retail sector tax advice.',
    keywords: ['jeweller accountant uk', 'jewellery business tax', 'precious metals vat'],
  },
  '/construction-builders': {
    title: 'Accountants for Builders & Construction UK | CIS Tax',
    description: 'Specialist accountants for UK builders and construction companies. CIS tax, VAT domestic reverse charge, payroll and subcontractor payments.',
    keywords: ['builder accountant uk', 'construction accountant', 'cis tax builder'],
  },
  '/media-creative-industries': {
    title: 'Accountants for Media & Creative Industries UK',
    description: 'Specialist accountants for UK media, creative and digital agencies. Film tax relief, R&D credits, freelancer tax and creative sector accounting.',
    keywords: ['media accountant uk', 'creative industry accountant', 'film tax relief uk'],
  },
  '/optician-optometrists': {
    title: 'Accountants for Opticians & Optometrists UK',
    description: 'Specialist accountants for opticians, optometrists and optical practices. NHS and private practice accounts, tax planning and payroll support.',
    keywords: ['optician accountant uk', 'optometrist accounting', 'optical practice tax'],
  },
  '/autumn-budget-2024': {
    title: 'Autumn Budget 2024 | Key Tax Changes for UK Businesses',
    description: 'Detailed analysis of Autumn Budget 2024 tax changes for UK businesses, landlords and employees. Key announcements on NIC, CGT and inheritance tax.',
    keywords: ['autumn budget 2024', 'budget 2024 tax changes', 'uk budget 2024'],
  },
  '/spvs': {
    title: 'SPV Company Accountants UK | Property SPV Tax',
    description: 'Specialist accountants for Special Purpose Vehicle (SPV) limited companies. Property SPV setup, corporation tax, annual accounts and compliance.',
    keywords: ['spv accountant uk', 'property spv tax', 'special purpose vehicle accounting'],
  },
  '/core-package': {
    title: 'Core Accounting Package UK | Essential Business Accounts',
    description: 'Core accounting package for UK businesses. Essential annual accounts, corporation tax, payroll and bookkeeping support at a fixed monthly fee.',
    keywords: ['core accounting package uk', 'essential business accounts', 'fixed fee accounting'],
  },
  '/testimonial': {
    title: 'Client Testimonials | Taxaccolega Reviews',
    description: 'Read what our clients say about Taxaccolega. Trusted reviews from UK business owners, landlords and contractors who use our accounting services.',
    keywords: ['taxaccolega reviews', 'accountant testimonials uk', 'client reviews'],
  },
  '/team-member': {
    title: 'Our Team | Taxaccolega Chartered Accountants',
    description: 'Meet the Taxaccolega team of chartered accountants, tax advisors and bookkeepers serving UK businesses from our Croydon office.',
    keywords: ['taxaccolega team', 'chartered accountant team', 'accounting firm staff'],
  },
};

// Read existing file
const existing = fs.readFileSync('src/data/seo/staticPages.js', 'utf-8');

// Parse existing staticPages object (simple string approach)
let updated = existing;

for (const [path, patch] of Object.entries(PATCHES)) {
  // Check if the path exists in the file
  const pathKey = `'${path}'`;
  if (!updated.includes(pathKey)) continue;

  // Find the block for this path
  const blockStart = updated.indexOf(pathKey + ': {');
  if (blockStart === -1) continue;
  const blockEnd = updated.indexOf('  },', blockStart) + 4;
  const block = updated.substring(blockStart, blockEnd);

  // Build new block
  let newBlock = `${pathKey}: {\n`;
  newBlock += `    title: ${JSON.stringify(patch.title)},\n`;
  newBlock += `    description: ${JSON.stringify(patch.description)},\n`;
  if (patch.keywords?.length) {
    newBlock += `    keywords: [${patch.keywords.map(k => JSON.stringify(k)).join(', ')}],\n`;
  }
  newBlock += `  },`;

  updated = updated.replace(block, newBlock);
}

fs.writeFileSync('src/data/seo/staticPages.js', updated, 'utf-8');
console.log(`Patched staticPages.js with ${Object.keys(PATCHES).length} curated entries`);
