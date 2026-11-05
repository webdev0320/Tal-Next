import { Fragment } from 'react';

import ContactForm from './ContactForm';
import ContactSection from './ContactSection';
import Partners from './Partners';
import ReferralForm from './ReferralForm';
import ReviewsSlider from './ReviewsSlider';
import StatsCounter from './StatsCounter';

/** Shared widgets stored as shortcodes in the CMS (e.g. [contact_form]). */
const shortcodes = {
  contact_form: () => <ContactForm source="Website" />,
  contact_section: () => <ContactSection />,
  reviews_slider: () => <ReviewsSlider />,
  partners: () => <Partners />,
  stats_counter: () => <StatsCounter />,
  referral_form: () => <ReferralForm />,
};

const SHORTCODE_PATTERN = /(\[[a-z_][a-z0-9_]*\])/g;
const SHORTCODE_EXACT = /^\[([a-z_][a-z0-9_]*)\]$/;

export default function CmsPageContent({ html }) {
  const parts = String(html || '').split(SHORTCODE_PATTERN).filter((part) => part.trim() !== '');

  return (
    <div className="cms-page-content">
      {parts.map((part, index) => {
        const match = part.match(SHORTCODE_EXACT);
        const widget = match ? shortcodes[match[1]] : null;

        return widget ? (
          <Fragment key={index}>{widget()}</Fragment>
        ) : (
          <div key={index} dangerouslySetInnerHTML={{ __html: part }} />
        );
      })}
    </div>
  );
}
