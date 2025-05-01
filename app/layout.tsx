// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import DelayedContactOverlay from "@/components/delayed-contact-overlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS Machinery and Spares",
  description: "HMS Machinery and Spares - Construction Equipment and Machinery",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
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