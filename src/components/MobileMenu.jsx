"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SectionItem = ({ title, to, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        className="flex items-center justify-between w-full px-2 py-3 text-slate-700 font-semibold bg-transparent border-0 appearance-none cursor-pointer focus:outline-none text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d2601a]" />
          {title}
        </span>
        <ChevronDown size={16} className={`text-[#d2601a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="fade-in pl-4 pb-2">
          <Link
            href={to}
            className="block py-2 text-sm font-medium text-[#d2601a] no-underline"
          >
            View all {title} →
          </Link>
          {children}
        </div>
      )}
    </div>
  );
};

const CategoryGroup = ({ name, data, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const items = data.sections.flatMap((s) => s.items);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-slate-600 bg-transparent border-0 appearance-none cursor-pointer focus:outline-none text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          {data.icon}
          {name}
        </span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180 text-[#d2601a]' : 'text-slate-400'}`} />
      </button>

      {open && (
        <div className="fade-in pb-1">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.to}
              onClick={onNavigate}
              className="block py-1.5 pl-9 text-sm text-slate-500 no-underline hover:text-[#d2601a]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const defaultMenu = [
  { id: 'home', title: 'Home', url: '/', type: 'custom', children: [] },
  { id: 'services', title: 'Services', url: '/taxation', type: 'custom', children: [] },
  { id: 'industries', title: 'Who We Assist', url: '/industries', type: 'custom', children: [] },
  { id: 'packages', title: 'Packages', url: '/packages', type: 'custom', children: [] },
  { id: 'blog', title: 'Blog', url: '/blog', type: 'custom', children: [] },
  { id: 'about', title: 'About Us', url: '/about-us', type: 'custom', children: [] },
  { id: 'contact', title: 'Contact Us', url: '/contact-us', type: 'custom', children: [] },
];

const isServices = (item) => /service/i.test(item.title || '');
const isIndustries = (item) => /assist|industr/i.test(item.title || '');
const isPackages = (item) => /package/i.test(item.title || '');
const isContact = (item) => /contact/i.test(item.title || '');

const MobileMenu = ({ menuItems = defaultMenu, services, industries, packages, onNavigate }) => {
  return (
    <div className="lg:hidden mobile-menu-enter pb-4 border-t border-slate-100 max-h-[calc(100vh-90px)] overflow-y-auto">
      {menuItems.map((item) => {
        if (isServices(item)) {
          return (
            <SectionItem key={item.id} title={item.title} to={item.url}>
              {Object.keys(services).map((category) => (
                <CategoryGroup key={category} name={category} data={services[category]} onNavigate={onNavigate} />
              ))}
            </SectionItem>
          );
        }
        if (isIndustries(item)) {
          return (
            <SectionItem key={item.id} title={item.title} to={item.url}>
              {Object.keys(industries).map((category) => (
                <CategoryGroup key={category} name={category} data={industries[category]} onNavigate={onNavigate} />
              ))}
            </SectionItem>
          );
        }
        if (isPackages(item)) {
          return (
            <SectionItem key={item.id} title={item.title} to={item.url}>
              {packages.map((pkg) => (
                <Link
                  key={pkg.href}
                  href={pkg.href}
                  onClick={onNavigate}
                  className="block py-2 pl-3 text-sm text-slate-500 no-underline hover:text-[#d2601a]"
                >
                  {pkg.label}
                </Link>
              ))}
            </SectionItem>
          );
        }
        if (isContact(item)) {
          return (
            <Link
              key={item.id}
              href={item.url}
              onClick={onNavigate}
              className="block text-center mt-4 bg-[#d2601a] text-white font-semibold px-5 py-3 rounded-lg no-underline"
            >
              {item.title}
            </Link>
          );
        }
        return (
          <Link key={item.id} href={item.url} onClick={onNavigate} className="block px-2 py-3 text-slate-700 font-semibold no-underline border-b border-slate-100">
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
