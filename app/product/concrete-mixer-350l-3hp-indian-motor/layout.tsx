import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 350L 3HP Indian Motor | ₹68,000 | HMS",
  description: "Buy 350L Concrete Mixer with 3HP Indian Motor at ₹68,000. Large capacity for 3/4 bag mixing. Premium heavy-duty construction. 6-month warranty. Fast delivery South India.",
  openGraph: {
    title: "Concrete Mixer 350L 3HP Indian Motor | Large Capacity | HMS",
    description: "Large 350L cement mixer with powerful 3HP Indian motor. Perfect for G+3 buildings and commercial projects. Heavy-duty construction for professional use.",
    images: ["/images/products/concrete-mixer-350l-indian-main.webp"],
  },
  keywords: "350L concrete mixer, 3HP cement mixer, large concrete mixer, Indian motor mixer, three quarter bag mixer, commercial construction mixer",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer-350l-3hp-indian-motor"
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
    "name": "Concrete Mixer 350L 3HP Indian Motor",
    "description": "Large capacity concrete mixer with 350-liter drum and 3HP Indian-made motor. Heavy-duty construction for commercial and multi-floor residential projects.",
    "sku": "HM-CM-350-3HP-IND",
    "mpn": "CM350-3HP-IND-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-350l-indian-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-350l-indian-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-350l-indian-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer-350l-3hp-indian-motor",
      "price": "68000",
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
      "reviewCount": "58"
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
          "@id": "https://www.hutaibmachinery.com/product/concrete-mixer-350l-3hp-indian-motor",
          "name": "Concrete Mixer 350L 3HP Indian Motor"
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
        "name": "How much concrete can the 350L mixer produce per batch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 350L drum produces approximately 230-260 liters of mixed concrete per batch - roughly 3/4 bag capacity. This is significantly more than 250L models and ideal for larger pours."
        }
      },
      {
        "@type": "Question",
        "name": "Does the 3HP motor require three-phase power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the 3HP Indian motor is designed for single-phase 220V operation. However, it draws significant current, so a 25-30A dedicated connection with proper earthing is recommended."
        }
      },
      {
        "@type": "Question",
        "name": "What projects is this mixer best suited for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 350L 3HP is ideal for G+3/G+4 residential buildings, commercial construction, apartment complexes, and any project requiring larger batch sizes without going to full 500L 1-bag diesel mixers."
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

