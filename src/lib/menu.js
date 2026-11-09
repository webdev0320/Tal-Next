/**
 * Header menu source for the frontend.
 *
 * ISR mode (primary): fetches the menu saved on the admin panel's
 * Menu Manager page from the Laravel admin API (`ADMIN_API_URL/header-menu`)
 * and lets Next.js cache it with `next: { revalidate, tags: ['header-menu'] }`.
 *
 * Fallback: if the API is unreachable (e.g. backend not running locally),
 * the static menu below is served so the header never breaks.
 *
 * Server-only: uses Next.js fetch caching; the result is passed to <Navbar />
 * from the root layout as a prop.
 */

const ADMIN_API_URL = (process.env.ADMIN_API_URL || 'http://127.0.0.1:8000/api').replace(/\/+$/, '');
const MENU_REVALIDATE_SECONDS = Number(process.env.MENU_REVALIDATE || 60);

/** Same shape the admin API returns for one menu item. Used by <Navbar /> as a fallback. */
export const fallbackMenu = [
  { id: 'home', title: 'Home', url: '/', type: 'custom', children: [] },
  { id: 'services', title: 'Services', url: '/taxation', type: 'custom', children: [] },
  { id: 'industries', title: 'Who We Assist', url: '/industries', type: 'custom', children: [] },
  { id: 'packages', title: 'Packages', url: '/packages', type: 'custom', children: [] },
  { id: 'blog', title: 'Blog', url: '/blog', type: 'custom', children: [] },
  { id: 'about', title: 'About Us', url: '/about-us', type: 'custom', children: [] },
  { id: 'contact', title: 'Contact Us', url: '/contact-us', type: 'custom', children: [] },
];

export function normaliseItems(items) {
  return (Array.isArray(items) ? items : [])
    .filter((item) => item && item.title)
    .map((item, index) => ({
      id: item.id ?? index,
      title: String(item.title),
      url: item.url || '/',
      target: item.target || '_self',
      type: item.type || 'custom',
      children: normaliseItems(item.children),
    }));
}

/**
 * The menu items configured on the admin Menu Manager page, newest save
 * first. Cached by Next.js' fetch cache with the `header-menu` tag and
 * revalidated every MENU_REVALIDATE seconds (60s default). The admin panel
 * also pings /api/revalidate on every menu save to drop this cache early.
 */
export async function getHeaderMenu() {
  try {
    const res = await fetch(`${ADMIN_API_URL}/header-menu`, {
      next: { revalidate: MENU_REVALIDATE_SECONDS, tags: ['header-menu'] },
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const { data, menu } = await res.json();
    const items = normaliseItems(data);
    if (items.length === 0) throw new Error(`API returned no items (is_active=${menu?.is_active})`);
    return items;
  } catch (err) {
    // API down or no menu published -> serve the static fallback.
    console.warn(`[menu] API unavailable (${err.message}); falling back to static menu`);
    return fallbackMenu;
  }
}
