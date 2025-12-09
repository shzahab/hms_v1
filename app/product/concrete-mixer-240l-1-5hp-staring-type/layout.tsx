import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 240L 1.5HP Staring Type Motor | ₹23,000 | HMS",
  description: "Buy 240L Concrete Mixer with 1.5HP Staring Type Motor at ₹23,000. Ideal for small construction sites - perfect for half-bag mixing. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "Concrete Mixer 240L 1.5HP Staring Type | Best Price India",
    description: "Compact 240L cement mixer with 1.5HP staring motor. Perfect for residential projects, compound walls & small sites. Budget-friendly at ₹23,000.",
    images: ["/images/products/concrete-mixer-240l-staring-main.webp"],
  },
  keywords: "240L concrete mixer, 1.5HP cement mixer, half bag mixer, small concrete mixer price, staring type motor mixer, concrete mixer Bengaluru, cement mixer Chennai, portable mixer India, mini concrete mixer, residential construction mixer",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer-240l-1-5hp-staring-type"
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
    "name": "Concrete Mixer 240L 1.5HP Staring Type Motor",
    "description": "Compact concrete mixer with 240-liter drum capacity and 1.5HP staring type electric motor. Ideal for small construction sites, residential projects, and half-bag mixing operations across South India.",
    "sku": "HM-CM-240-STAR",
    "mpn": "CM240-STAR-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-240l-staring-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-240l-staring-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-240l-staring-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer-240l-1-5hp-staring-type",
      "price": "23000",
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
          "@id": "https://www.hutaibmachinery.com/product/concrete-mixer-240l-1-5hp-staring-type",
          "name": "Concrete Mixer 240L 1.5HP Staring Type"
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
        "name": "What does 'Staring Type' motor mean in this concrete mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Staring type motor refers to a star-delta starting mechanism that reduces initial current surge when starting the motor. This makes it easier on your electrical supply and extends motor life, ideal for sites with limited power capacity."
        }
      },
      {
        "@type": "Question",
        "name": "What is the mixing capacity of this 240L concrete mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 240L drum capacity allows for approximately half-bag mixing operations. This is perfect for small construction sites, residential projects, compound walls, and repair work where smaller batches are more practical."
        }
      },
      {
        "@type": "Question",
        "name": "Can this mixer run on single phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 1.5HP staring type motor is designed to work with single-phase 220V power supply commonly available at residential and small commercial sites across India."
        }
      },
      {
        "@type": "Question",
        "name": "What is included with the ₹23,000 purchase price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price includes the complete mixer with 240L drum, 1.5HP staring type motor, mixing blades, and wheel assembly. 6-month warranty on manufacturing defects. Delivery charges as per actuals based on location."
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

