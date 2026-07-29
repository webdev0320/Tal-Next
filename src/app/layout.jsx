import { Inter, Outfit } from 'next/font/google';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingConsultationButton from '../components/FloatingConsultationButton';
import IDVerificationModal from '../components/IDVerificationModal';
import JsonLd from '../components/JsonLd';
import Analytics from '../components/Analytics';
import { rootMetadata } from '../lib/seo';
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

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Analytics />
        <meta name="google-site-verification" content="LVXkLoL3h9hRA_dNK2JMNtJEZTStezytJnyeB_7jwkA" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">
        <JsonLd />
        <TopBar />
        <Navbar />
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
