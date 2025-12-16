import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VERX 50L Air Compressor | ₹13,500 | Hutaib Machinery",
  description: "Buy VERX 50L Air Compressor at ₹13,500. Perfect for auto garages, fabrication shops & spray painting. 2 HP motor, 8 bar pressure. 6-month warranty. Fast delivery South India.",
  openGraph: {
    title: "VERX 50L Air Compressor | Best Price India",
    description: "Professional 50-litre air compressor for garages and workshops. 2 HP motor, 8 bar pressure, 220 LPM air flow. Ideal for continuous spray painting and pneumatic tools.",
    images: ["/images/products/verx-50l-compressor-main.webp"],
  },
  keywords: "VERX 50L air compressor, 50 litre compressor, garage air compressor, professional compressor India, auto workshop compressor, spray painting compressor, VERX compressor price",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/verx-50ltr-air-compressor"
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
    "name": "VERX 50L Air Compressor",
    "description": "Professional 50-litre air compressor for auto garages, fabrication shops, and continuous spray painting. 2 HP motor with 8 bar max pressure and 220 LPM air delivery.",
    "sku": "HM-VERX-50L",
    "mpn": "VERX50L-2024",
    "brand": {
      "@type": "Brand",
      "name": "VERX"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VERX"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/verx-50l-compressor-main.webp",
      "https://www.hutaibmachinery.com/images/products/verx-50l-compressor-1.webp",
      "https://www.hutaibmachinery.com/images/products/verx-50l-compressor-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/verx-50ltr-air-compressor",
      "price": "13500",
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
      "ratingValue": "4.7",
      "reviewCount": "58"
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
          "@id": "https://www.hutaibmachinery.com/product/verx-50ltr-air-compressor",
          "name": "VERX 50L Air Compressor"
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
        "name": "Is the VERX 50L suitable for auto garages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the VERX 50L is ideal for auto garages. It can power impact wrenches for tyre changes, spray guns for painting, and air tools for general maintenance work."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for continuous spray painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 50L tank combined with 220 LPM air flow provides sufficient capacity for extended spray painting sessions. It's suitable for painting vehicle panels, furniture, and equipment."
        }
      },
      {
        "@type": "Question",
        "name": "What power supply does the VERX 50L need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 50L operates on 220V single-phase power supply. Ensure your electrical circuit can handle the 2 HP (1.5 kW) motor load with appropriate wiring and MCB."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 50L compare to the 24L model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 50L has a larger tank (50L vs 24L), more powerful motor (2 HP vs 1.5 HP), and higher air flow (220 LPM vs 170 LPM). It's better for continuous use and larger pneumatic tools."
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

