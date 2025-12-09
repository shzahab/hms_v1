import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Vibrator 2HP Electric - Needle Vibrator | Hutaib Machinery",
  description: "Electric Concrete Vibrator with 2HP motor for perfect consolidation. 50Hz frequency, flexible shaft. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Concrete Vibrator for South Indian Construction | Hutaib Machinery",
    description: "Buy Concrete Vibrator in Bengaluru from Hutaib Machinery. 2HP electric motor, 50Hz frequency. Free installation support across South India. Request pricing now.",
    images: ["/images/products/concrete-vibrator-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Vibrator 2HP Electric - Needle Vibrator | Hutaib Machinery",
    description: "Electric Concrete Vibrator with 2HP motor for perfect consolidation. 50Hz frequency, flexible shaft. 1-year warranty. Get a quote today!",
    images: ["/images/products/concrete-vibrator-main.webp"],
  },
  keywords: "concrete vibrator, needle vibrator, concrete consolidation, immersion vibrator, poker vibrator, concrete vibrator price, needle vibrator Bengaluru, concrete vibrator Chennai, vibrator machine Hyderabad, construction equipment, concrete compaction, RCC vibrator, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-vibrator"
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
    "name": "Concrete Vibrator 2HP Electric",
    "description": "Electric concrete vibrator with 2HP motor and 50Hz frequency for removing air bubbles and consolidating freshly poured concrete. Features flexible shaft options for reaching hard-to-access areas in construction projects across South India.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-vibrator-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-vibrator-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-vibrator-2.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-vibrator-3.webp"
    ],
    "sku": "HM-CV-2HP",
    "mpn": "CV2HP-2024",
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
      "url": "https://www.hutaibmachinery.com/product/concrete-vibrator",
      "priceCurrency": "INR",
      "price": "10500",
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
      "reviewCount": "142"
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
        "name": "Concrete Vibrator",
        "item": "https://www.hutaibmachinery.com/product/concrete-vibrator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the vibration frequency of this concrete vibrator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This concrete vibrator operates at 50Hz frequency, which is optimal for removing air bubbles and consolidating freshly poured concrete to achieve maximum density and strength."
        }
      },
      {
        "@type": "Question",
        "name": "What power supply does the concrete vibrator require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is an electric concrete vibrator with a 2HP single-phase motor. It operates on standard single-phase power supply available at most construction sites across India."
        }
      },
      {
        "@type": "Question",
        "name": "Can this vibrator reach into narrow formwork?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, flexible shaft options are available for reaching hard-to-access areas like narrow columns, dense reinforcement zones, and deep formwork sections."
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
          "text": "Every vibrator includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation guidance. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in concrete vibrators, needle vibrators, and concrete consolidation equipment.",
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

