import type { Metadata } from 'next';
import '../index.css';
import '../../css/styles.css';
export const metadata: Metadata = {
  title: 'Taxaccolega',
  description: 'Chartered Accountants & Tax Advisors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        {/* Bootstrap 5.3 CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          precedence="default"
        />
        {/* Font Awesome 6 */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
          precedence="default"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Outfit:wght@300;400;500;600;700;800&amp;family=Pinyon+Script&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Bootstrap 5 JS Bundle */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async />
      </body>
    </html>
  );
}
