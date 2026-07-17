import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_SITE_VERIFICATION;

export default function Analytics() {
  return (
    <>
      {GSC_VERIFICATION && (
        <meta name="google-site-verification" content={GSC_VERIFICATION} />
      )}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}
