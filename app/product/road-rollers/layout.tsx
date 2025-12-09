import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Road Roller 15kN Vibratory - Compaction Equipment | Hutaib Machinery",
  description: "Heavy-duty Road Roller with 15kN centrifugal force. Vibratory compaction, 0-4 km/h speed. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Road Roller for South Indian Construction | Hutaib Machinery",
    description: "Buy Road Roller in Bengaluru from Hutaib Machinery. 15kN centrifugal force, vibratory compaction. Free installation across South India. Request pricing now.",
    images: ["/images/products/road-rollers-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Roller 15kN Vibratory - Compaction Equipment | Hutaib Machinery",
    description: "Heavy-duty Road Roller with 15kN centrifugal force. Vibratory compaction, 0-4 km/h speed. 1-year warranty. Get a quote today!",
    images: ["/images/products/road-rollers-main.webp"],
  },
  keywords: "road roller, vibratory roller, compaction roller, asphalt roller, construction roller, road roller price, vibratory roller Bengaluru, road roller Chennai, compaction equipment Hyderabad, construction equipment, soil compactor, road construction machinery, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/road-rollers"
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
    "name": "Road Roller 15kN Vibratory",
    "description": "Heavy-duty vibratory road roller with 15kN centrifugal force for soil and asphalt compaction in road construction projects across South India. Features automatic vibrating clutch, air-cooled engine, and 0-4 km/h operating speed.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/road-rollers-main.webp",
      "https://www.hutaibmachinery.com/images/products/road-rollers-1.webp",
      "https://www.hutaibmachinery.com/images/products/road-rollers-2.webp",
      "https://www.hutaibmachinery.com/images/products/road-rollers-3.webp"
    ],
    "sku": "HM-RR-15KN",
    "mpn": "RR15KN-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/road-rollers",
      "priceCurrency": "INR",
      "price": "185000",
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
      "reviewCount": "89"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hutaibmachinery.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.hutaibmachinery.com/product"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Road Rollers",
        "item": "https://www.hutaibmachinery.com/product/road-rollers"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the centrifugal force of this road roller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This road roller delivers 15kN centrifugal force for effective soil and asphalt compaction. This force is suitable for most road construction and foundation preparation work."
        }
      },
      {
        "@type": "Question",
        "name": "What fuel type does the road roller use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The roller runs on an air-cooled 4-cycle engine compatible with both gasoline and diesel fuel, giving you flexibility based on fuel availability and preference."
        }
      },
      {
        "@type": "Question",
        "name": "What is the operating speed range?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operating speed ranges from 0-4 km/h, allowing controlled compaction at the optimal pace for different soil and surface types."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every roller includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "telephone": "+91-8074949635",
    "priceRange": "₹10,000 - ₹5,00,000",
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in road rollers, vibratory compactors, and road construction equipment.",
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
      "latitude": 12.9606,
      "longitude": 77.5773
    },
    "areaServed": [
      {"@type": "State", "name": "Karnataka"},
      {"@type": "State", "name": "Tamil Nadu"},
      {"@type": "State", "name": "Kerala"},
      {"@type": "State", "name": "Andhra Pradesh"},
      {"@type": "State", "name": "Telangana"},
      {"@type": "State", "name": "Maharashtra"},
      {"@type": "State", "name": "Goa"}
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "foundingDate": "1999"
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

