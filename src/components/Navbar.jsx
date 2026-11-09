"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu, { servicesMenuData } from './MegaMenu';
import IndustriesMegaMenu, { industriesMenuData } from './IndustriesMegaMenu';
import MobileMenu from './MobileMenu';
import { fallbackMenu as defaultMenu } from '../lib/menu';
import useLiveMenu from '../lib/useLiveMenu';

const packageLinks = [
  { href: '/packages/sole-trader-pricing', label: 'Sole Trader' },
  { href: '/packages/ltd-company-pricing', label: 'LTD Company' },
  { href: '/packages/contractor-ltd-pricing', label: 'Contractor LTD' },
  { href: '/packages/landlords-3', label: 'Landlords' },
  { href: '/packages/spvs-ltd-pricing', label: 'SPVs & Property LTDs' },
  { href: '/packages/charities-pricing', label: 'Charities & Non-Profits' },
];

/** Packages dropdown: children set on the admin Menu Manager, else the built-in list. */
const packageLinksFor = (item) =>
  item.children && item.children.length > 0
    ? item.children.map((c) => ({ href: c.url, label: c.title }))
    : packageLinks;

const isServices = (item) => /service/i.test(item.title || '');
const isIndustries = (item) => /assist|industr/i.test(item.title || '');
const isPackages = (item) => /package/i.test(item.title || '');
const isContact = (item) => /contact/i.test(item.title || '');
const isHome = (item) => /^home$/i.test((item.title || '').trim());

const Navbar = ({ menuItems: initialMenuItems = defaultMenu }) => {
  const menuItems = useLiveMenu(initialMenuItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showIndustriesMegaMenu, setShowIndustriesMegaMenu] = useState(false);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setShowMegaMenu(false);
    setShowIndustriesMegaMenu(false);
  };

  const contactItem = menuItems.find(isContact);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" onClick={closeAll} className="shrink-0">
            <img src="/images/logo/Tal-Logo.webp" alt="TAL Logo" width="186" height="48" className="h-12 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {menuItems.map((item) => {
              if (isServices(item)) {
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <button className={`nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors ${showMegaMenu ? 'text-[#d2601a]' : ''}`}>
                      {item.title} <ChevronDown size={14} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showMegaMenu && <MegaMenu />}
                  </li>
                );
              }
              if (isIndustries(item)) {
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setShowIndustriesMegaMenu(true)}
                    onMouseLeave={() => setShowIndustriesMegaMenu(false)}
                  >
                    <button className={`nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors ${showIndustriesMegaMenu ? 'text-[#d2601a]' : ''}`}>
                      {item.title} <ChevronDown size={14} className={`transition-transform duration-300 ${showIndustriesMegaMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showIndustriesMegaMenu && <IndustriesMegaMenu />}
                  </li>
                );
              }
              if (isPackages(item)) {
                return (
                  <li key={item.id} className="relative group">
                    <button className="nav-link flex items-center gap-1 px-4 py-2 text-slate-600 font-medium bg-transparent border-0 appearance-none cursor-pointer focus:outline-none hover:text-[#d2601a] transition-colors">
                      {item.title} <ChevronDown size={14} />
                    </button>
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-white border border-slate-100 rounded-xl shadow-xl p-2 w-64 z-50 list-none m-0">
                      {packageLinksFor(item).map((pkg) => (
                        <li key={pkg.href}>
                          <Link
                            href={pkg.href}
                            className="block px-4 py-2 rounded-lg text-sm text-slate-600 no-underline hover:bg-orange-50 hover:text-[#d2601a] transition-colors"
                          >
                            {pkg.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              if (isContact(item)) {
                return null;
              }
              return (
                <li key={item.id}>
                  <Link href={item.url} className="nav-link px-4 py-2 text-slate-600 font-medium no-underline hover:text-[#d2601a] transition-colors">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {contactItem && (
            <Link
              href={contactItem.url}
              className="hidden lg:inline-block bg-[#d2601a] text-white font-semibold px-5 py-2 rounded-lg no-underline hover:bg-[#243d45] transition-colors"
            >
              {contactItem.title}
            </Link>
          )}

          <button
            className="lg:hidden p-2 text-slate-700 bg-transparent border-0 appearance-none cursor-pointer focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
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
