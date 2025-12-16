import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VERX 150L Industrial Air Compressor | ₹40,000 | Hutaib Machinery",
  description: "Buy VERX 150L Industrial Air Compressor at ₹40,000. Heavy-duty for workshops, factories & construction. 3 HP motor, 10 bar pressure. 6-month warranty. Delivery across South India.",
  openGraph: {
    title: "VERX 150L Industrial Air Compressor | Best Price India",
    description: "Heavy-duty 150-litre industrial air compressor for workshops and factories. 3 HP motor, 10 bar pressure, 350 LPM air flow. Powers multiple tools simultaneously.",
    images: ["/images/products/verx-150l-compressor-main.webp"],
  },
  keywords: "VERX 150L air compressor, industrial air compressor, 150 litre compressor India, heavy duty compressor, factory air compressor, workshop compressor price, VERX industrial compressor",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/verx-150ltr-air-compressor"
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
    "name": "VERX 150L Industrial Air Compressor",
    "description": "Heavy-duty 150-litre industrial air compressor for workshops, factories, and construction sites. 3 HP motor with 10 bar max pressure and 350 LPM air delivery. Powers multiple pneumatic tools simultaneously.",
    "sku": "HM-VERX-150L",
    "mpn": "VERX150L-2024",
    "brand": {
      "@type": "Brand",
      "name": "VERX"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VERX"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/verx-150l-compressor-main.webp",
      "https://www.hutaibmachinery.com/images/products/verx-150l-compressor-1.webp",
      "https://www.hutaibmachinery.com/images/products/verx-150l-compressor-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/verx-150ltr-air-compressor",
      "price": "40000",
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
      "ratingValue": "4.8",
      "reviewCount": "36"
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
          "@id": "https://www.hutaibmachinery.com/product/verx-150ltr-air-compressor",
          "name": "VERX 150L Industrial Air Compressor"
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
        "name": "Can the VERX 150L power multiple tools at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the VERX 150L with its 350 LPM air flow and 150L tank can power 2-3 pneumatic tools simultaneously, making it ideal for busy workshops with multiple workstations."
        }
      },
      {
        "@type": "Question",
        "name": "Does the VERX 150L need three-phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 150L is available in both single-phase (220V) and three-phase (415V) variants. For heavy continuous use, three-phase is recommended. Contact us to confirm availability of your preferred variant."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for sandblasting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the VERX 150L provides adequate air flow (350 LPM) and pressure (10 bar) for small to medium sandblasting operations. For heavy industrial sandblasting, consider the 200L model."
        }
      },
      {
        "@type": "Question",
        "name": "What maintenance does the 150L compressor require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular maintenance includes daily tank draining, weekly oil level checks, monthly air filter cleaning, and oil changes every 500 hours. The belt-driven design requires periodic belt tension checks."
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
    "description": "Authorized dealer for VERX industrial air compressors in South India since 1999",
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
    "priceRange": "₹₹₹",
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

