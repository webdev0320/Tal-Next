'use client';

import { useEffect, useState } from 'react';
import { normaliseItems } from './menu';

/**
 * The live site is a static export (plain HTML on LiteSpeed, no Next.js
 * server), so the menu baked in at build time never changes on its own.
 * This hook re-fetches the menu from the public admin API in the browser
 * after the page loads, so position / visibility changes made on the admin
 * Menu Manager page show up without a rebuild.
 *
 * Set NEXT_PUBLIC_ADMIN_API_URL (e.g. https://admin.taxaccolega.co.uk/public/api).
 * If it is unset or the request fails, the build-time menu is kept.
 */
const PUBLIC_API = (process.env.NEXT_PUBLIC_ADMIN_API_URL || '').replace(/\/+$/, '');

export default function useLiveMenu(initialItems) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    if (!PUBLIC_API) return undefined;
    const controller = new AbortController();

    fetch(`${PUBLIC_API}/header-menu`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`API ${res.status}`))))
      .then(({ data }) => {
        const live = normaliseItems(data);
        if (live.length > 0) setItems(live);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return items;
}
