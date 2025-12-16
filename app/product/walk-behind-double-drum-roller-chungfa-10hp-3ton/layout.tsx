import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Walk Behind Double Drum Roller 3 Ton | Chungfa 10HP | ₹1,85,000 | HMS",
  description: "Buy Walk Behind Double Drum Roller at ₹1,85,000. Chungfa 10HP diesel with self-start. Budget-friendly 3-ton compaction. 6-month warranty. South India delivery.",
  openGraph: {
    title: "Walk Behind Double Drum Roller 3 Ton | Chungfa 10HP Diesel | Best Price India",
    description: "Budget-friendly 3-ton double drum roller with Chungfa 10HP diesel engine. Self-start battery included. Same performance at lower cost.",
    images: ["/images/products/double-drum-roller-chungfa-main.webp"],
  },
  keywords: "double drum roller, Chungfa diesel roller, 3 ton road roller price, budget road roller, walk behind compactor, asphalt roller India, vibratory roller, road construction machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-chungfa-10hp-3ton"
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
    "name": "Walk Behind Double Drum Roller - Chungfa 10HP Diesel (3 Ton)",
    "description": "Budget-friendly 3-ton compaction roller with 10HP Chungfa diesel engine and self-start battery. Double drum configuration for professional road and asphalt compaction at lower cost.",
    "sku": "HM-DDR-CHUNGFA-3T",
    "mpn": "DDR-CHF-10HP-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-chungfa-main.webp",
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-chungfa-1.webp",
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-chungfa-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-chungfa-10hp-3ton",
      "price": "185000",
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
          "@id": "https://www.hutaibmachinery.com/category/road-rollers",
          "name": "Road Rollers"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-chungfa-10hp-3ton",
          "name": "Walk Behind Double Drum Roller - Chungfa 10HP"
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
        "name": "What is the difference between Chungfa and Greaves engine models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both deliver 10HP with 3-ton compaction. Greaves is an established Indian brand with wider service network. Chungfa offers similar performance at ₹5,000 lower cost - ideal for budget-conscious buyers."
        }
      },
      {
        "@type": "Question",
        "name": "Is Chungfa engine reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Chungfa engines are widely used in construction equipment across India. Spare parts are readily available. We provide 6-month warranty and after-sales support."
        }
      },
      {
        "@type": "Question",
        "name": "Which model should I choose - Greaves or Chungfa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose Greaves if brand reputation and extensive service network matter most. Choose Chungfa if you want to save ₹5,000 with similar performance and our direct support."
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
    "description": "Authorized dealer for road rollers and compaction equipment in South India since 1999",
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

