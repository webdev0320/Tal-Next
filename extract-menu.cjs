const fs = require('fs');
const mega = fs.readFileSync('src/components/MegaMenu.jsx','utf8');
const ind = fs.readFileSync('src/components/IndustriesMegaMenu.jsx','utf8');
const nav = fs.readFileSync('src/components/Navbar.jsx','utf8');

function extractItems(text) {
  const items = [];
  const re = /\{\s*(?:label:\s*'([^']*)'[^}]*?to:\s*'([^']*)'|to:\s*'([^']*)'[^}]*?label:\s*'([^']*)')[^}]*\}/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const label = m[1] || m[4];
    const to = m[2] || m[3];
    if (label && to) items.push({ label, to });
  }
  return items;
}

function extractCats(text) {
  const cats = [];
  const re = /['"]?([\w\s]+)['"]?\s*:\s*\{\s*\n\s*to:\s*'([^']*)'/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    cats.push({ label: m[1].trim(), to: m[2] });
  }
  return cats;
}

const servicesCats = extractCats(mega);
const servicesItems = extractItems(mega);
const industriesCats = extractCats(ind);
const industriesItems = extractItems(ind);

const pkgItems = [];
const pkgRe = /\{\s*href:\s*'([^']*)',\s*label:\s*'([^']*)'\s*\}/g;
let pm;
while ((pm = pkgRe.exec(nav)) !== null) {
  pkgItems.push({ label: pm[2], to: pm[1] });
}

const result = {
  servicesCategories: servicesCats,
  servicesItems: servicesItems,
  industriesCategories: industriesCats,
  industriesItems: industriesItems,
  packageItems: pkgItems,
};
fs.writeFileSync('menu-extract.json', JSON.stringify(result, null, 2));
console.log('services cats', servicesCats.length, 'items', servicesItems.length);
console.log('industries cats', industriesCats.length, 'items', industriesItems.length);
console.log('packages', pkgItems.length);
