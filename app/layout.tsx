// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Breadcrumb from "../components/Breadcrumb";
import Script from 'next/script';
import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm'; // Import the existing contact form component

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

// Google Analytics Script
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

const DelayedContactOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 10000); // Show overlay after 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    showOverlay && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <button onClick={() => setShowOverlay(false)} className="absolute top-4 right-4">
            Close
          </button>
          <ContactForm /> {/* Use the existing contact form */}
        </div>
      </div>
    )
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