import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Cutting Machine 240mm - Road & Floor Saw | Hutaib Machinery",
  description: "High-performance Concrete Cutting Machine with 240mm depth. 600mm blade, wet cutting system. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Concrete Cutting Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy Concrete Cutting Machine in Bengaluru from Hutaib Machinery. 240mm cutting depth, 35L water tank. Free installation support across South India. Request pricing now.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Cutting Machine 240mm - Road & Floor Saw | Hutaib Machinery",
    description: "High-performance Concrete Cutting Machine with 240mm depth. 600mm blade, wet cutting system. 1-year warranty. Get a quote today!",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "concrete cutting machine, road cutting machine, groove cutting machine, floor saw, concrete saw, concrete cutter price, road cutter machine, concrete cutting machine Bengaluru, concrete cutting machine Chennai, concrete cutting machine Hyderabad, expansion joint cutting machine, pavement cutting machine, asphalt cutting machine, concrete saw machine, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-cutting-machine"
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
    "name": "Concrete Cutting Machine 240mm",
    "description": "Professional concrete cutting machine with 240mm maximum depth and 600mm blade for road construction, expansion joints, and utility installations across South India. Features wet cutting system with 35L water tank.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-3.webp"
    ],
    "sku": "HM-CCM-240",
    "mpn": "CCM240-2024",
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
      "url": "https://www.hutaibmachinery.com/product/concrete-cutting-machine",
      "priceCurrency": "INR",
      "price": "65000",
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
      "reviewCount": "67"
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
        "name": "Concrete Cutting Machine",
        "item": "https://www.hutaibmachinery.com/product/concrete-cutting-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the maximum cutting depth of this concrete cutting machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This concrete cutting machine offers a maximum cutting depth of 240mm, suitable for most road construction, floor cutting, and expansion joint applications. The cutting depth is adjustable via handle rotation for precise control."
        }
      },
      {
        "@type": "Question",
        "name": "Does the machine support wet cutting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the machine features a built-in 35-liter water tank for wet cutting operations. Wet cutting reduces dust, extends blade life by up to 40%, and provides cleaner cuts with better visibility for operators."
        }
      },
      {
        "@type": "Question",
        "name": "What blade size does this concrete cutter use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine accepts 600mm (24-inch) diameter diamond blades. We supply compatible blades for cutting concrete, asphalt, and reinforced concrete. Replacement blades are available with same-day dispatch from Bengaluru."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements with additional charges."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every machine includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in concrete cutting machines, road cutting equipment, and construction machinery.",
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

