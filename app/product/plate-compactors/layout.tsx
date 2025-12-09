import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Plate Compactor 30kN - Vibratory Soil Compactor | Hutaib Machinery",
  description: "Heavy-duty Plate Compactor with 30kN centrifugal force. 95Hz frequency, 250kg weight. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Plate Compactor for South Indian Construction | Hutaib Machinery",
    description: "Buy Plate Compactor in Bengaluru from Hutaib Machinery. 30kN force, 650x500mm plate. Free installation across South India. Request pricing now.",
    images: ["/images/products/plate-compactors-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plate Compactor 30kN - Vibratory Soil Compactor | Hutaib Machinery",
    description: "Heavy-duty Plate Compactor with 30kN centrifugal force. 95Hz frequency, 250kg weight. 1-year warranty. Get a quote today!",
    images: ["/images/products/plate-compactors-main.webp"],
  },
  keywords: "plate compactor, vibratory plate compactor, soil compactor, ground compactor, compaction equipment, plate compactor price, vibratory compactor Bengaluru, plate compactor Chennai, soil compactor Hyderabad, construction equipment, trench compactor, paver compactor, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/plate-compactors"
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
    "name": "Plate Compactor 30kN Vibratory",
    "description": "Heavy-duty vibratory plate compactor with 30kN centrifugal force for soil compaction in trenches and confined areas across South India. Features 95Hz frequency, 650x500mm plate size, and 250kg weight for effective compaction.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/plate-compactors-main.webp",
      "https://www.hutaibmachinery.com/images/products/plate-compactors-1.webp",
      "https://www.hutaibmachinery.com/images/products/plate-compactors-2.webp",
      "https://www.hutaibmachinery.com/images/products/plate-compactors-3.webp"
    ],
    "sku": "HM-FPC160",
    "mpn": "FPC160-2024",
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
      "url": "https://www.hutaibmachinery.com/product/plate-compactors",
      "priceCurrency": "INR",
      "price": "38000",
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
      "reviewCount": "98"
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
        "name": "Plate Compactors",
        "item": "https://www.hutaibmachinery.com/product/plate-compactors"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the compaction force of this plate compactor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This plate compactor delivers 30kN centrifugal force at 95Hz frequency, providing effective soil consolidation for trenches, backfill, and confined area compaction."
        }
      },
      {
        "@type": "Question",
        "name": "What is the plate size of this compactor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The plate measures 650mm x 500mm (L x W), ideal for medium to large area compaction while still being maneuverable in confined spaces."
        }
      },
      {
        "@type": "Question",
        "name": "Is this plate compactor suitable for confined spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, its compact design makes it perfect for trenches, areas around structures, and confined spaces where larger compaction equipment cannot access."
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
          "text": "Every compactor includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation guidance. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in plate compactors, vibratory compactors, and soil compaction equipment.",
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

