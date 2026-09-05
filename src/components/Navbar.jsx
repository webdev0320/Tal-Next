"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu, { servicesMenuData } from './MegaMenu';
import IndustriesMegaMenu, { industriesMenuData } from './IndustriesMegaMenu';
import MobileMenu from './MobileMenu';

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
  const [showIndustriesMegaMenu, setShowIndustriesMegaMenu] = useState(false);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setShowMegaMenu(false);
    setShowIndustriesMegaMenu(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="shrink-0">
            <img src="/images/logo/Tal-Logo.webp" alt="TAL Logo" width="186" height="48" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            <li>
              <Link href="/" className="nav-link px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                Home
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className={`nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors ${showMegaMenu ? 'text-[#d2601a]' : ''}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
              </button>
              {showMegaMenu && <MegaMenu />}
            </li>

            <li
              className="relative"
              onMouseEnter={() => setShowIndustriesMegaMenu(true)}
              onMouseLeave={() => setShowIndustriesMegaMenu(false)}
            >
              <button className={`nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors ${showIndustriesMegaMenu ? 'text-[#d2601a]' : ''}`}>
                Who We Assist <ChevronDown size={14} className={`transition-transform duration-300 ${showIndustriesMegaMenu ? 'rotate-180' : ''}`} />
              </button>
              {showIndustriesMegaMenu && <IndustriesMegaMenu />}
            </li>

            <li className="relative group">
              <button className="nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors">
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
              <Link href="/blog" className="nav-link px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="nav-link px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
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
          <MobileMenu
            services={servicesMenuData}
            industries={industriesMenuData}
            packages={packageLinks}
            onNavigate={closeAll}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;