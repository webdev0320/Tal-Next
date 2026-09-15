"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { industriesMenuData } from './IndustriesMegaMenu';
import { industryServiceLinks } from '../data/industryServicePages';

const normalizePath = (path) => path.replace(/\/$/, '');

const getPageLinks = (pathname) => {
  const normalized = normalizePath(pathname);

  const categories = Object.entries(industriesMenuData);
  const direct = categories.find(([, data]) => normalizePath(data.to) === normalized);

  const categoryForPage = direct || categories.find(([, data]) =>
    data.sections.some((section) =>
      section.items.some((item) => normalizePath(item.to) === normalized)
    )
  );

  if (categoryForPage) {
    return categoryForPage[1].sections
      .flatMap((section) => section.items)
      .map((item) => ({ label: item.label, to: item.to }));
  }

  return industryServiceLinks;
};

const IndustryLinksBar = () => {
  const pathname = usePathname();
  const links = getPageLinks(pathname);

  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map(({ label, to }) => {
            const isActive = normalizePath(pathname) === normalizePath(to);

            return (
              <Link
                key={label}
                href={to}
                className={`accounts-link-pill btn btn-brand ${isActive ? 'active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryLinksBar;
