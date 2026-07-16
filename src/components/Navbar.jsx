"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';

const industryLinks = [
  { href: '/industries/it-professionals', label: 'IT Professionals & Contractors' },
  { href: '/industries/real-estate', label: 'Real Estate & Property' },
  { href: '/industries/ecommerce', label: 'Ecommerce' },
  { href: '/industries/construction', label: 'Construction' },
  { href: '/industries/automobile', label: 'Automobile & Dealerships' },
  { href: '/industries/restaurants', label: 'Restaurants & Catering' },
  { href: '/industries/wholesellers-retailers', label: 'Wholesalers & Retailers' },
  { href: '/industries/healthcare-professionals', label: 'Healthcare Professionals' },
  { href: '/industries/leisure-industry', label: 'Leisure Industry' },
  { href: '/industries/non-uk-resident-taxation', label: 'Non-UK Resident Taxation' },
  { href: '/industries/logistics', label: 'Logistics & Transport' },
  { href: '/industries/expatriates', label: 'Expatriates' },
  { href: '/industries/charities', label: 'Charities' },
];

const packageLinks = [
  { href: '/packages/sole-trader-pricing', label: 'Sole Trader' },
  { href: '/packages/ltd-company-pricing', label: 'LTD Company' },
  { href: '/packages/contractor-ltd-pricing', label: 'Contractor LTD' },
  { href: '/packages/landlords-3', label: 'Landlords' },
  { href: '/packages/spvs-ltd-pricing', label: 'SPVs & Property LTDs' },
  { href: '/packages/charities-pricing', label: 'Charities & Non-Profits' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAssistOpen, setMobileAssistOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileAssistOpen(false);
    setMobilePackagesOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="shrink-0">
            <img src="/images/logo/Tal Logo.png" alt="TAL Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            <li>
              <Link href="/" className="px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                Home
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors">
                Services <ChevronDown size={14} />
              </button>
              {showMegaMenu && <MegaMenu />}
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors">
                Who We Assist <ChevronDown size={14} />
              </button>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white border border-slate-100 rounded-xl shadow-xl p-2 w-72 z-50 list-none m-0">
                {industryLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-sm text-slate-600 no-underline hover:bg-orange-50 hover:text-[#d2601a] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors">
                Packages <ChevronDown size={14} />
              </button>
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white border border-slate-100 rounded-xl shadow-xl p-2 w-64 z-50 list-none m-0">
                {packageLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-sm text-slate-600 no-underline hover:bg-orange-50 hover:text-[#d2601a] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/blog" className="px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                About Us
              </Link>
            </li>
          </ul>

          <Link
            href="/contact-us"
            className="hidden lg:inline-block bg-[#d2601a] text-white font-semibold px-5 py-2 rounded-lg no-underline hover:bg-[#243d45] transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile hamburger - visible icon, no Bootstrap dependency */}
          <button
            className="lg:hidden p-2 text-slate-700 bg-transparent border-0 appearance-none cursor-pointer focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100">
            <Link href="/" onClick={closeAll} className="block px-2 py-3 text-slate-700 font-medium no-underline border-b border-slate-50">
              Home
            </Link>

            <button
              className="flex items-center justify-between w-full px-2 py-3 text-slate-700 font-medium bg-transparent border-t-0 border-l-0 border-r-0 border-b border-slate-50 appearance-none cursor-pointer focus:outline-none text-left"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                <Link href="/taxation" onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">Taxation</Link>
                <Link href="/accounts" onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">Accounts</Link>
                <Link href="/legal" onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">Legal</Link>
                <Link href="/software" onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">Software</Link>
                <Link href="/banks" onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">Banks</Link>
              </div>
            )}

            <button
              className="flex items-center justify-between w-full px-2 py-3 text-slate-700 font-medium bg-transparent border-t-0 border-l-0 border-r-0 border-b border-slate-50 appearance-none cursor-pointer focus:outline-none text-left"
              onClick={() => setMobileAssistOpen((prev) => !prev)}
            >
              Who We Assist
              <ChevronDown size={16} className={`transition-transform ${mobileAssistOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAssistOpen && (
              <div className="pl-4 py-2 flex flex-col gap-1 max-h-64 overflow-y-auto">
                {industryLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              className="flex items-center justify-between w-full px-2 py-3 text-slate-700 font-medium bg-transparent border-t-0 border-l-0 border-r-0 border-b border-slate-50 appearance-none cursor-pointer focus:outline-none text-left"
              onClick={() => setMobilePackagesOpen((prev) => !prev)}
            >
              Packages
              <ChevronDown size={16} className={`transition-transform ${mobilePackagesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobilePackagesOpen && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {packageLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll} className="block py-2 text-sm text-slate-600 no-underline">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/blog" onClick={closeAll} className="block px-2 py-3 text-slate-700 font-medium no-underline border-b border-slate-50">
              Blog
            </Link>
            <Link href="/about-us" onClick={closeAll} className="block px-2 py-3 text-slate-700 font-medium no-underline border-b border-slate-50">
              About Us
            </Link>

            <Link
              href="/contact-us"
              onClick={closeAll}
              className="block text-center mt-4 bg-[#d2601a] text-white font-semibold px-5 py-3 rounded-lg no-underline"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;