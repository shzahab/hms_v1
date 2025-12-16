import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VERX 200L Heavy-Duty Air Compressor | ₹52,000 | Hutaib Machinery",
  description: "Buy VERX 200L Heavy-Duty Air Compressor at ₹52,000. Maximum capacity for factories, large workshops & industrial use. 5 HP motor, 12 bar pressure. 6-month warranty. South India delivery.",
  openGraph: {
    title: "VERX 200L Heavy-Duty Air Compressor | Best Price India",
    description: "Maximum capacity 200-litre industrial air compressor for factories and large workshops. 5 HP motor, 12 bar pressure, 450 LPM air flow. Powers entire production lines.",
    images: ["/images/products/verx-200l-compressor-main.webp"],
  },
  keywords: "VERX 200L air compressor, heavy duty air compressor, 200 litre compressor India, industrial compressor price, factory air compressor, large workshop compressor, VERX 5HP compressor",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/verx-200ltr-air-compressor"
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
    "name": "VERX 200L Heavy-Duty Air Compressor",
    "description": "Maximum capacity 200-litre heavy-duty air compressor for factories, large workshops, and industrial applications. 5 HP motor with 12 bar max pressure and 450 LPM air delivery. Powers entire production lines and multiple workstations.",
    "sku": "HM-VERX-200L",
    "mpn": "VERX200L-2024",
    "brand": {
      "@type": "Brand",
      "name": "VERX"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "VERX"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/verx-200l-compressor-main.webp",
      "https://www.hutaibmachinery.com/images/products/verx-200l-compressor-1.webp",
      "https://www.hutaibmachinery.com/images/products/verx-200l-compressor-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/verx-200ltr-air-compressor",
      "price": "52000",
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
      "ratingValue": "4.9",
      "reviewCount": "28"
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
          "@id": "https://www.hutaibmachinery.com/product/verx-200ltr-air-compressor",
          "name": "VERX 200L Heavy-Duty Air Compressor"
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
        "name": "What applications is the VERX 200L designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 200L is designed for heavy industrial applications including large auto workshops, fabrication factories, CNC machine shops, sandblasting operations, and manufacturing facilities requiring continuous high-volume air supply."
        }
      },
      {
        "@type": "Question",
        "name": "Does the VERX 200L require three-phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the VERX 200L with its 5 HP motor requires a 415V three-phase power supply for optimal performance. Ensure your facility has adequate three-phase infrastructure before purchase."
        }
      },
      {
        "@type": "Question",
        "name": "How many pneumatic tools can it power simultaneously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With 450 LPM air flow and 200L storage, the VERX 200L can power 4-5 pneumatic tools simultaneously, including impact wrenches, spray guns, grinders, and sanders operating at different workstations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duty cycle of the VERX 200L?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VERX 200L is rated for continuous duty operation with proper cooling intervals. The large tank and efficient pump design allow for extended run times with automatic pressure cut-off for motor protection."
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
    "description": "Authorized dealer for VERX heavy-duty industrial air compressors in South India since 1999",
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

