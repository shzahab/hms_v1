import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Building Material Hoist 350kg - Construction Lift | Hutaib Machinery",
  description: "Heavy-duty Building Material Hoist with 350kg capacity. 60m rope, 3HP motor, emergency brakes. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Building Material Hoist for South Indian Construction | Hutaib Machinery",
    description: "Buy Building Material Hoist in Bengaluru from Hutaib Machinery. 350kg lifting capacity, 60m height. Free installation across South India. Request pricing now.",
    images: ["/images/products/building-material-hoist-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Material Hoist 350kg - Construction Lift | Hutaib Machinery",
    description: "Heavy-duty Building Material Hoist with 350kg capacity. 60m rope, 3HP motor, emergency brakes. 1-year warranty. Get a quote today!",
    images: ["/images/products/building-material-hoist-main.webp"],
  },
  keywords: "building material hoist, construction hoist, material lift, building lift, construction elevator, material hoist price, construction lift Bengaluru, building hoist Chennai, material elevator Hyderabad, construction equipment, building material lift, tower hoist, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/building-material-hoist"
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
    "name": "Building Material Hoist 350kg",
    "description": "Heavy-duty building material hoist with 350kg lifting capacity and 60m rope length for multi-story construction projects. Features 3HP motor, emergency brakes, and weather-resistant construction for safe material transport across South India.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/building-material-hoist-main.webp",
      "https://www.hutaibmachinery.com/images/products/building-material-hoist-1.webp",
      "https://www.hutaibmachinery.com/images/products/building-material-hoist-2.webp",
      "https://www.hutaibmachinery.com/images/products/building-material-hoist-3.webp"
    ],
    "sku": "HM-BMH-350",
    "mpn": "BMH350-2024",
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
      "url": "https://www.hutaibmachinery.com/product/building-material-hoist",
      "priceCurrency": "INR",
      "price": "34000",
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
      "reviewCount": "73"
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
        "name": "Building Material Hoist",
        "item": "https://www.hutaibmachinery.com/product/building-material-hoist"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the maximum lifting capacity of this building material hoist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This building material hoist can safely lift up to 350kg of materials per load, suitable for bricks, cement bags, steel bars, and other construction materials."
        }
      },
      {
        "@type": "Question",
        "name": "How high can the material hoist lift loads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With a 60-meter rope length, the hoist can service buildings up to approximately 20 floors, making it ideal for multi-story residential and commercial construction projects."
        }
      },
      {
        "@type": "Question",
        "name": "What safety features does this construction hoist have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The hoist includes emergency brakes, a clutch mechanism for controlled descent, weather-resistant construction, and overload protection for safe operation in all conditions."
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
          "text": "Every hoist includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in building material hoists, construction lifts, and material handling equipment.",
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

