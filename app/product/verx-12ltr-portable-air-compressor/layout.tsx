import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VERX 12L Portable Air Compressor | ₹6,000 | Hutaib Machinery",
  description: "Buy VERX 12L Portable Air Compressor at ₹6,000. Ideal for tyre inflation, spray guns & small pneumatic tools. Compact design, single phase operation. Fast delivery across South India.",
  openGraph: {
    title: "VERX 12L Portable Air Compressor | Best Price India",
    description: "Compact 12-litre air compressor for workshops and small applications. 8 bar pressure, 115 LPM air flow. Perfect for tyre inflation and spray painting.",
    images: ["/images/products/verx-12l-compressor-main.webp"],
  },
  keywords: "VERX air compressor, 12 litre compressor, portable air compressor, small air compressor price India, tyre inflator compressor, spray painting compressor, workshop compressor, air compressor Bengaluru",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/verx-12ltr-portable-air-compressor"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VERX 12L Portable Air Compressor",
    "description": "Compact 12-litre portable air compressor ideal for tyre inflation, spray guns, and small pneumatic tools. 8 bar max pressure with 115 LPM air delivery.",
    "sku": "HM-VERX-12L",
    "mpn": "VERX12L-2024",
    "brand": {
      "@type": "Brand",
      "name": "VERX"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VERX"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/verx-12l-compressor-main.webp",
      "https://www.hutaibmachinery.com/images/products/verx-12l-compressor-1.webp",
      "https://www.hutaibmachinery.com/images/products/verx-12l-compressor-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/verx-12ltr-portable-air-compressor",
      "price": "6000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Hutaib Machinery and Spares"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "32"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://www.hutaibmachinery.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.hutaibmachinery.com/category/air-compressors-verx",
          "name": "Air Compressors"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/verx-12ltr-portable-air-compressor",
          "name": "VERX 12L Portable Air Compressor"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What can I use the VERX 12L air compressor for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 12L is ideal for tyre inflation (cars, bikes, autos), spray painting small items, powering air guns for cleaning and dusting, operating small pneumatic tools like staplers and nailers, and airbrush work."
        }
      },
      {
        "@type": "Question",
        "name": "Does the VERX 12L compressor run on home electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the VERX 12L runs on standard 220V single-phase power available in homes, shops, and small workshops across India. No special electrical setup required."
        }
      },
      {
        "@type": "Question",
        "name": "Is this compressor oil-free or does it need oil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 12L is an oil-lubricated compressor, which provides longer life and quieter operation. It requires periodic oil level checks and changes as per the maintenance schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What is the warranty on VERX compressors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 12L comes with a 6-month warranty covering manufacturing defects. Warranty does not cover consumables, wear parts, or damage from improper use."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/Store",
    "name": "Hutaib Machinery and Spares",
    "image": "https://www.hutaibmachinery.com/images/logo.png",
    "url": "https://www.hutaibmachinery.com",
    "description": "Authorized dealer for VERX air compressors in South India since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 78, N. R. Road, Kalasipalyam",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "telephone": "+91-9886474441",
    "priceRange": "₹₹",
    "areaServed": ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}

