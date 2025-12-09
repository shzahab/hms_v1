import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Tamping Rammer 20kN - Jumping Rammer for Trench Compaction | Hutaib Machinery",
  description: "Tamping Rammer with 20kN impact force, 45-70mm jump height. 100kg weight, 300x330mm shoe. 1-year warranty. 25+ years trusted in South India. Get a quote today!",
  openGraph: {
    title: "Tamping Rammer for Trench & Soil Compaction | Hutaib Machinery",
    description: "Buy Tamping Rammer in Bengaluru from Hutaib Machinery. 20kN impact force, ideal for trenches. Free installation across South India. Request pricing now.",
    images: ["/images/products/tamping-rammer-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamping Rammer 20kN - Jumping Rammer for Trench Compaction | Hutaib Machinery",
    description: "Tamping Rammer with 20kN impact force, 45-70mm jump height. 100kg weight, 300x330mm shoe. 1-year warranty. Get a quote today!",
    images: ["/images/products/tamping-rammer-main.webp"],
  },
  keywords: "tamping rammer, jumping rammer, soil rammer, trench compactor, compaction rammer, tamping rammer price, rammer compactor Bengaluru, jumping rammer Chennai, soil rammer Hyderabad, foundation compaction, trench backfill, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/tamping-rammer"
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
    "name": "Tamping Rammer FTR100E",
    "description": "Heavy-duty Tamping Rammer (Jumping Rammer) with 20kN impact force for effective soil compaction in trenches, around foundations, and confined areas. Features 100kg weight and 300x330mm tamping shoe.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/tamping-rammer-main.webp",
      "https://www.hutaibmachinery.com/images/products/tamping-rammer-1.webp",
      "https://www.hutaibmachinery.com/images/products/tamping-rammer-2.webp",
      "https://www.hutaibmachinery.com/images/products/tamping-rammer-3.webp"
    ],
    "sku": "HM-FTR100E",
    "mpn": "FTR100E-2024",
    "brand": {
      "@type": "Brand",
      "name": "Hutaib Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/tamping-rammer",
      "priceCurrency": "INR",
      "price": "36000",
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
      "reviewCount": "118"
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
        "name": "Tamping Rammer",
        "item": "https://www.hutaibmachinery.com/product/tamping-rammer"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the impact force of this tamping rammer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The rammer delivers 20kN impacting force for effective soil compaction in trenches, around foundations, and in confined areas."
        }
      },
      {
        "@type": "Question",
        "name": "What is the shoe size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tamping shoe measures 300mm x 330mm, ideal for confined area work in trenches and around structures."
        }
      },
      {
        "@type": "Question",
        "name": "Is it suitable for trench work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the compact 600mm x 600mm footprint and high impact force make it perfect for trench backfill, pipe bedding, and confined area compaction."
        }
      },
      {
        "@type": "Question",
        "name": "What is the jumping height?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The jumping height ranges from 45-70mm, providing effective compaction energy transfer to the soil for proper consolidation."
        }
      },
      {
        "@type": "Question",
        "name": "Does Hutaib Machinery provide installation and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free on-site installation and comprehensive operator training across South India to ensure your team can operate the machine efficiently and safely from day one."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Tamping Rammer comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in tamping rammers, compaction equipment, and construction machinery.",
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

