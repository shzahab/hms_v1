import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Walk Behind Double Drum Roller 3 Ton | Greaves 10HP | ₹1,90,000 | HMS",
  description: "Buy Walk Behind Double Drum Roller at ₹1,90,000. Greaves 10HP diesel engine with self-start battery. 3-ton compaction for roads and asphalt. 6-month warranty. South India delivery.",
  openGraph: {
    title: "Walk Behind Double Drum Roller 3 Ton | Greaves 10HP Diesel | Best Price India",
    description: "Heavy-duty 3-ton double drum roller with Greaves 10HP diesel engine. Self-start battery included. Perfect for road construction and asphalt compaction.",
    images: ["/images/products/double-drum-roller-greaves-main.webp"],
  },
  keywords: "double drum roller, walk behind roller, 3 ton road roller, Greaves diesel roller, asphalt compactor, road roller price India, vibratory roller, compaction equipment, road construction machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-greaves-10hp-3ton"
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
    "name": "Walk Behind Double Drum Roller - Greaves 10HP Diesel (3 Ton)",
    "description": "Heavy-duty 3-ton compaction roller with 10HP Greaves diesel engine and self-start battery. Double drum configuration for superior road and asphalt compaction.",
    "sku": "HM-DDR-GREAVES-3T",
    "mpn": "DDR-GRV-10HP-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-greaves-main.webp",
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-greaves-1.webp",
      "https://www.hutaibmachinery.com/images/products/double-drum-roller-greaves-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-greaves-10hp-3ton",
      "price": "190000",
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
          "@id": "https://www.hutaibmachinery.com/category/road-rollers",
          "name": "Road Rollers"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/walk-behind-double-drum-roller-greaves-10hp-3ton",
          "name": "Walk Behind Double Drum Roller - Greaves 10HP"
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
        "name": "Why choose Greaves engine over other brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Greaves is a trusted Indian diesel engine brand with widespread service network and spare parts availability across South India. Known for durability and fuel efficiency in construction equipment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the advantage of double drum over single drum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Double drum rollers provide compaction in both forward and reverse passes, giving more uniform surface finish. Ideal for asphalt work where smooth finish is critical."
        }
      },
      {
        "@type": "Question",
        "name": "Is self-start battery included with the machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the self-start battery is included with the machine. No additional purchase required. The battery-powered self-start eliminates manual cranking."
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

