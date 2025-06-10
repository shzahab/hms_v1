// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import DelayedContactOverlay from "@/components/delayed-contact-overlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS Machinery and Spares | Construction Equipment Specialists",
  description: "Leading supplier of high-quality construction equipment and machinery. Specializing in bar bending machines, concrete mixers, and industrial equipment.",
  keywords: "construction equipment, machinery, bar bending machine, concrete mixer, industrial equipment, HMS machinery",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "HMS Machinery and Spares | Construction Equipment Specialists",
    description: "Premium construction equipment and machinery supplier. Expert solutions for construction industry needs.",
    images: ['/images/products/bar-bending-machine-main.webp'],
    type: 'website',
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-C33Y4WJML3"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C33Y4WJML3');
          `,
        }}
      />
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-11527740144/0-RhCLyQ-tYaEPC17fgq'});
          `,
        }}
      />
      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="9VXkNfUg4NaBwLYL+Cs0fQ"
        async
      ></script>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ySrk2S0BA4MoBEM2PyvwdAqMYRO_pp3f0rEU1WuywAE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRNVHKW4');`
          }}
        />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRNVHKW4"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {children}
        <DelayedContactOverlay />
      </body>
    </html>
  );
}