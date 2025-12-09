import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 280L 1.5HP Handy Type Motor | ₹26,000 | HMS",
  description: "Buy 280L Concrete Mixer with 1.5HP Handy Type Motor at ₹26,000. Slightly larger capacity than 240L. Single phase operation. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "Concrete Mixer 280L 1.5HP Handy Type | Best Price India",
    description: "Compact 280L cement mixer with 1.5HP handy motor. Ideal for residential projects and small construction sites. Budget-friendly at ₹26,000.",
    images: ["/images/products/concrete-mixer-280l-handy-main.webp"],
  },
  keywords: "280L concrete mixer, 1.5HP cement mixer, handy type motor mixer, small concrete mixer price, portable mixer India, residential construction mixer, half bag mixer",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer-280l-1-5hp-handy-type"
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
    "name": "Concrete Mixer 280L 1.5HP Handy Type Motor",
    "description": "Compact concrete mixer with 280-liter drum capacity and 1.5HP handy type electric motor. Ideal for small construction sites and residential projects across South India.",
    "sku": "HM-CM-280-HANDY",
    "mpn": "CM280-HANDY-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-280l-handy-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-280l-handy-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-280l-handy-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer-280l-1-5hp-handy-type",
      "price": "26000",
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
      "reviewCount": "72"
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
          "@id": "https://www.hutaibmachinery.com/category/concrete-mixers",
          "name": "Concrete Mixers"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/concrete-mixer-280l-1-5hp-handy-type",
          "name": "Concrete Mixer 280L 1.5HP Handy Type"
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
        "name": "What is the difference between Handy Type and Staring Type motor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Handy type motors have a direct-on-line (DOL) starting mechanism - simpler construction and slightly more robust for consistent power supplies. Staring type uses star-delta starting which reduces initial current surge, better for weak electrical connections."
        }
      },
      {
        "@type": "Question",
        "name": "What is the mixing capacity of this 280L concrete mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 280L drum capacity allows for approximately 180-200 liters of mixed concrete per batch. This is slightly more than half-bag mixing, giving you better output than the 240L model."
        }
      },
      {
        "@type": "Question",
        "name": "Can this mixer run on single phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 1.5HP handy type motor is designed for single-phase 220V power supply commonly available at residential and small commercial sites across India."
        }
      },
      {
        "@type": "Question",
        "name": "What is included with the ₹26,000 purchase price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price includes the complete mixer with 280L drum, 1.5HP handy type motor, mixing blades, and wheel assembly. 6-month warranty on manufacturing defects. Delivery charges as per actuals."
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
    "description": "Authorized dealer for concrete mixers in South India since 1999",
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

