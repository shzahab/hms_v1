import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VERX 24L Air Compressor | ₹9,500 | Hutaib Machinery",
  description: "Buy VERX 24L Air Compressor at ₹9,500. Ideal for spray painting, pneumatic tools & workshops. 1.5 HP motor, 8 bar pressure. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "VERX 24L Air Compressor | Best Price India",
    description: "Mid-range 24-litre air compressor for workshops and commercial use. 1.5 HP motor, 8 bar pressure, 170 LPM air flow. Perfect for spray painting and pneumatic tools.",
    images: ["/images/products/verx-24l-compressor-main.webp"],
  },
  keywords: "VERX 24L air compressor, 24 litre compressor, workshop air compressor, spray painting compressor, pneumatic tools compressor, air compressor price India, VERX compressor Bengaluru",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/verx-24ltr-air-compressor"
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
    "name": "VERX 24L Air Compressor",
    "description": "Mid-range 24-litre air compressor ideal for workshops, spray painting, and pneumatic tools. 1.5 HP motor with 8 bar max pressure and 170 LPM air delivery.",
    "sku": "HM-VERX-24L",
    "mpn": "VERX24L-2024",
    "brand": {
      "@type": "Brand",
      "name": "VERX"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VERX"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/verx-24l-compressor-main.webp",
      "https://www.hutaibmachinery.com/images/products/verx-24l-compressor-1.webp",
      "https://www.hutaibmachinery.com/images/products/verx-24l-compressor-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/verx-24ltr-air-compressor",
      "price": "9500",
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
      "ratingValue": "4.6",
      "reviewCount": "45"
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
          "@id": "https://www.hutaibmachinery.com/product/verx-24ltr-air-compressor",
          "name": "VERX 24L Air Compressor"
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
        "name": "What is the VERX 24L compressor best suited for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 24L is ideal for small workshops, spray painting projects, operating pneumatic tools like impact wrenches, nail guns, and staplers, and commercial tyre inflation services."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I spray paint continuously with the 24L tank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With the 24L tank and 170 LPM air flow, you can spray paint for approximately 5-8 minutes continuously before the compressor needs to refill. For longer sessions, consider the 50L model."
        }
      },
      {
        "@type": "Question",
        "name": "Does the VERX 24L require three-phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the VERX 24L runs on standard 220V single-phase power. It's designed for locations with regular domestic or commercial electrical supply."
        }
      },
      {
        "@type": "Question",
        "name": "What is the warranty coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 24L comes with a 6-month warranty covering manufacturing defects. Consumables, wear parts, and damage from misuse are not covered."
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

