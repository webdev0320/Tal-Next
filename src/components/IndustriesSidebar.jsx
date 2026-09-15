"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { industriesMenuData } from './IndustriesMegaMenu';

const normalizePath = (path) => path.replace(/\/$/, '');

const IndustriesSidebar = () => {
  const pathname = usePathname();
  const current = normalizePath(pathname);

  return (
    <aside
      className="d-none d-lg-block position-sticky align-self-start"
      style={{ top: '5.5rem', zIndex: 2, maxHeight: 'calc(100vh - 6.5rem)', overflowY: 'auto', overscrollBehavior: 'contain' }}
    >
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3 industry-sidebar-card menu-enter">
          <div
            className="text-white text-uppercase small fw-bold tracking-wider px-3 py-2"
            style={{ background: '#1d3c45', letterSpacing: '1px' }}
          >
            Industries
          </div>
          <ul className="list-unstyled mb-0">
            {Object.entries(industriesMenuData).map(([category, data]) => {
              const isActive = current === normalizePath(data.to);

              return (
                <li key={category} className="border-bottom border-light">
                  <Link
                    href={data.to}
                    className={`industry-sidebar-link d-flex align-items-center gap-2 px-3 py-2 text-decoration-none small fw-semibold ${
                      isActive ? 'is-active text-brand-orange' : 'text-brand-dark'
                    }`}
                  >
                    <span className="industry-sidebar-icon d-inline-flex shrink-0">
                      {React.cloneElement(data.icon, { size: 16 })}
                    </span>
                    <span className="text-truncate">{category}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
      </div>
    </aside>
  );
};

export default IndustriesSidebar;