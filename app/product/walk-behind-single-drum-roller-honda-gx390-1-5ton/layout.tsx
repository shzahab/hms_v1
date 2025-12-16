import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Walk Behind Single Drum Roller 1.5 Ton | Honda GX390 | ₹1,35,000 | HMS",
  description: "Buy Walk Behind Single Drum Roller at ₹1,35,000 + GST. Honda GX390 petrol engine. 1.5-ton compaction for driveways and pathways. Honda warranty. South India delivery.",
  openGraph: {
    title: "Walk Behind Single Drum Roller 1.5 Ton | Honda GX390 Petrol | Best Price India",
    description: "Compact 1.5-ton single drum roller with legendary Honda GX390 petrol engine. Perfect for driveways, pathways, and light compaction work.",
    images: ["/images/products/single-drum-roller-honda-main.webp"],
  },
  keywords: "single drum roller, Honda GX390 roller, 1.5 ton road roller, petrol road roller, walk behind compactor, driveway roller India, light compaction equipment, Honda engine roller",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/walk-behind-single-drum-roller-honda-gx390-1-5ton"
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
    "name": "Walk Behind Single Drum Roller - Honda GX390 Petrol (1.5 Ton)",
    "description": "Compact 1.5-ton single drum roller with legendary Honda GX390 petrol engine. Perfect for driveways, pathways, and light compaction work.",
    "sku": "HM-SDR-HONDA-1.5T",
    "mpn": "SDR-GX390-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/single-drum-roller-honda-main.webp",
      "https://www.hutaibmachinery.com/images/products/single-drum-roller-honda-1.webp",
      "https://www.hutaibmachinery.com/images/products/single-drum-roller-honda-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/walk-behind-single-drum-roller-honda-gx390-1-5ton",
      "price": "135000",
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
      "reviewCount": "24"
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
          "@id": "https://www.hutaibmachinery.com/product/walk-behind-single-drum-roller-honda-gx390-1-5ton",
          "name": "Walk Behind Single Drum Roller - Honda GX390"
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
        "name": "Why Honda GX390 engine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Honda GX series is the global gold standard for small engines. Known for exceptional reliability, fuel efficiency, easy starting, and lowest maintenance. Parts and service available everywhere."
        }
      },
      {
        "@type": "Question",
        "name": "When to choose 1.5-ton single drum vs 3-ton double drum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose 1.5-ton for driveways, pathways, trenches, and light work. Choose 3-ton for road construction, asphalt laying, and heavy-duty compaction. Single drum is lighter and more maneuverable."
        }
      },
      {
        "@type": "Question",
        "name": "Is GST extra on this model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the price of ₹1,35,000 is ex-GST. Add 18% GST (₹24,300) for total of ₹1,59,300 inclusive of all taxes."
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

