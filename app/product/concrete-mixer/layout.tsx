import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 560L - 1 Bag Tilting Drum Kirloskar | Hutaib Machinery",
  description: "Heavy-duty Concrete Mixer with 560L drum capacity. Kirloskar engine, tilting drum design. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Concrete Mixer for South Indian Construction | Hutaib Machinery",
    description: "Buy Concrete Mixer in Bengaluru from Hutaib Machinery. 560L drum, Kirloskar engine, tilting mechanism. Free installation across South India. Request pricing now.",
    images: ["/images/products/concrete-mixer-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Mixer 560L - 1 Bag Tilting Drum Kirloskar | Hutaib Machinery",
    description: "Heavy-duty Concrete Mixer with 560L drum capacity. Kirloskar engine, tilting drum design. 1-year warranty. Get a quote today!",
    images: ["/images/products/concrete-mixer-main.webp"],
  },
  keywords: "concrete mixer, cement mixer, concrete mixer machine, 1 bag mixer, tilting drum mixer, concrete mixer price, cement mixer Bengaluru, concrete mixer Chennai, mixer machine Hyderabad, construction equipment, Kirloskar mixer, portable concrete mixer, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer"
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
    "name": "Concrete Mixer 560L - 1 Bag",
    "description": "Heavy-duty concrete mixer with 560-liter drum capacity and Kirloskar engine for construction sites across South India. Features tilting drum mechanism for easy discharge, 14 r/min drum speed, and portable design with sturdy wheels.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-2.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-3.webp"
    ],
    "sku": "HM-CM-560",
    "mpn": "CM560-2024",
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
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer",
      "priceCurrency": "INR",
      "price": "122000",
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
      "reviewCount": "156"
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
        "name": "Concrete Mixer",
        "item": "https://www.hutaibmachinery.com/product/concrete-mixer"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the drum capacity of this concrete mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The drum has a 560-liter capacity, suitable for 1-bag mixing operations. This is ideal for small to medium construction sites requiring consistent concrete supply."
        }
      },
      {
        "@type": "Question",
        "name": "What engine brand powers this concrete mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's powered by a reliable Kirloskar engine, known for durability and performance in Indian conditions. The engine provides consistent power for continuous mixing operations."
        }
      },
      {
        "@type": "Question",
        "name": "Is this concrete mixer portable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it features sturdy wheels for easy site mobility despite its 1000kg weight. The portable design allows movement around construction sites as work progresses."
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
          "text": "Every mixer includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in concrete mixers, cement mixers, and concrete equipment.",
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

