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
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        {children}
        <DelayedContactOverlay />
      </body>
    </html>
  );
}