import { Inter, Outfit } from 'next/font/google';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingConsultationButton from '../components/FloatingConsultationButton';
import ScrollProgress from '../components/ScrollProgress';
import IDVerificationModal from '../components/IDVerificationModal';
import JsonLd from '../components/JsonLd';
import Analytics from '../components/Analytics';
import { buildRootMetadata, getGlobalSeo } from '../lib/seo-settings';
import { getHeaderMenu } from '../lib/menu';
import '../tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export async function generateMetadata() {
  return buildRootMetadata();
}

export default async function RootLayout({ children }) {
  const [seoSettings, menuItems] = await Promise.all([getGlobalSeo(), getHeaderMenu()]);

  return (
    <html lang={seoSettings.site?.language || 'en-GB'} className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Fallback: send www visitors to the non-www site (server 301 in .htaccess is the primary fix) */}
        <script dangerouslySetInnerHTML={{ __html: "if(location.hostname==='www.taxaccolega.co.uk'){location.replace('https://taxaccolega.co.uk'+location.pathname+location.search+location.hash)}" }} />
        <Analytics verification={seoSettings.verification} analytics={seoSettings.analytics} />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <JsonLd org={seoSettings.organization} social={seoSettings.social} />
        <TopBar />
        <Navbar menuItems={menuItems} />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingConsultationButton />
        <IDVerificationModal />
      </body>
    </html>
  );
}
