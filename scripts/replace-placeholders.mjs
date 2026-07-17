import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync('found-images.json', 'utf-8'));

function getTargetImage(images, keywords) {
  for (const kw of keywords) {
    const match = images.find(img => img.toLowerCase().includes(kw.toLowerCase()));
    if (match) return match;
  }
  // Return a generic fallback from the set if possible, or null
  const generic = images.find(img => img.includes('scaled.webp') || img.includes('scaled.jpg'));
  if (generic) return generic;
  return images[0];
}

const filesToProcess = [
  {
    file: 'src/views/LetPropertyCampaign.jsx',
    images: data['let-property-campaign'],
  },
  {
    file: 'src/views/EmiSchemes.jsx',
    images: data['emi-schemes'],
  },
  {
    file: 'src/views/InheritanceTaxPlanning.jsx',
    images: data['inheritance-tax-planning'],
  },
  {
    file: 'src/views/CryptocurrencyTax.jsx',
    images: data['cryptocurrency'],
  },
  {
    file: 'src/views/Charities.jsx',
    images: data['charities'],
  }
];

for (const p of filesToProcess) {
  if (!fs.existsSync(p.file)) continue;
  let content = fs.readFileSync(p.file, 'utf-8');
  
  // Find all placeholder occurrences and their surrounding context
  // This is a naive but effective replacement for `<PlaceholderImage />` or `src="/placeholder-..."`
  
  let modified = content;
  
  // Custom replacements for LetPropertyCampaign
  if (p.file.includes('LetPropertyCampaign')) {
    modified = modified.replace(
      /<PlaceholderImage \/>/g, 
      (match, offset, string) => {
        // Look at the text around to guess the image
        const context = string.substring(Math.max(0, offset - 300), Math.min(string.length, offset + 300));
        let img = p.images[0];
        if (context.includes('What It Actually Is')) img = getTargetImage(p.images, ['What-It-Actually-Is']);
        else if (context.includes('Prompted and Unprompted')) img = getTargetImage(p.images, ['Prompted-Unprompted']);
        else if (context.includes('Non-UK Resident')) img = getTargetImage(p.images, ['Non-UK-Resident']);
        else if (context.includes('Capital Gains Tax')) img = getTargetImage(p.images, ['Insight-Section']); // fallback
        else if (context.includes('When You Should Speak')) img = getTargetImage(p.images, ['When-You-Should-Speak']);
        else if (context.includes('Speak to Let Property Campaign Accountants')) img = getTargetImage(p.images, ['Speak-to-Let-Property']);
        else if (context.includes('Delay quietly')) img = getTargetImage(p.images, ['Insight-Section']);
        
        return `<img src="${img}" alt="Let Property Campaign" className="rounded-lg shadow-lg w-full object-cover" />`;
      }
    );
  }
  
  // EmiSchemes
  if (p.file.includes('EmiSchemes')) {
    modified = modified.replace(
      /<span className="text-slate-500">EMI[^<]+Placeholder<\/span>/g,
      (match, offset, string) => {
        const context = match;
        let img = p.images[0];
        if (context.includes('Scheme Diagram')) img = getTargetImage(p.images, ['EMI-Scheme-Explained']);
        if (context.includes('Scheme Works Diagram')) img = getTargetImage(p.images, ['How-an-EMI-Share-Scheme-Works']);
        if (context.includes('Eligibility')) img = getTargetImage(p.images, ['EMI-Scheme-Eligibility']);
        if (context.includes('SEIS')) img = getTargetImage(p.images, ['EMI-Schemes-and-SEIS']);
        if (context.includes('Insight')) img = getTargetImage(p.images, ['What-Our-EMI-Scheme-Services-Actually-Change']);
        if (context.includes('Services Image')) img = getTargetImage(p.images, ['What-Our-EMI-Scheme-Services']);
        if (context.includes('Advice Image')) img = getTargetImage(p.images, ['When-Businesses-Should-Speak']);
        if (context.includes('Business Reporting')) img = getTargetImage(p.images, ['Wider-Business-Reporting']);
        if (context.includes('Advisors Contact')) img = getTargetImage(p.images, ['Speak-to-EMI']);
        
        return `<img src="${img}" alt="EMI Scheme" className="rounded-lg shadow-lg w-full object-cover" />`;
      }
    );
    modified = modified.replace(/src="\/placeholder-hero-image\.jpg"/g, `src="${getTargetImage(p.images, ['EMI-Scheme-scaled'])}"`);
  }
  
  // InheritanceTaxPlanning
  if (p.file.includes('InheritanceTaxPlanning')) {
    modified = modified.replace(/src="\/placeholder-[a-z]+-image\.jpg"/g, (match) => {
      let img = p.images[0];
      if (match.includes('hero')) img = getTargetImage(p.images, ['Inheritance-Tax-Accountant-scaled', 'Planning-Advisors-for-Individuals']);
      if (match.includes('review')) img = getTargetImage(p.images, ['What-an-Inheritance-Tax-Advisor-Actually-Reviews']);
      if (match.includes('rule')) img = getTargetImage(p.images, ['Why-Inheritance-Tax-Planning-Often-Gets-Delayed']);
      if (match.includes('insight')) img = getTargetImage(p.images, ['Insight-Families']);
      if (match.includes('property')) img = getTargetImage(p.images, ['Property-Owners']);
      if (match.includes('specialist')) img = getTargetImage(p.images, ['Specialists']);
      if (match.includes('speak')) img = getTargetImage(p.images, ['Speak-to', 'Advice-London']);
      return `src="${img}"`;
    });
  }
  
  fs.writeFileSync(p.file, modified, 'utf-8');
  console.log(`Updated ${p.file}`);
}
