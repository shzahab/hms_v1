import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Threading Machine 40mm - Rebar Thread Rolling Machine | Hutaib Machinery",
  description: "Threading Machine for 16-40mm rebar with 100mm max rolling length. 40-62 r/m shaft speed. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Rebar Threading Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy Threading Machine in Bengaluru from Hutaib Machinery. 40mm capacity, multiple thread pitches. Free installation across South India. Request pricing now.",
    images: ["/images/products/threading-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Threading Machine 40mm - Rebar Thread Rolling Machine | Hutaib Machinery",
    description: "Threading Machine for 16-40mm rebar with 100mm max rolling length. 40-62 r/m shaft speed. 1-year warranty. Get a quote today!",
    images: ["/images/products/threading-machine-main.webp"],
  },
  keywords: "threading machine, rebar threading machine, thread rolling machine, steel bar threading, coupler threading machine, threading machine price, rebar threader Bengaluru, threading machine Chennai, bar threading Hyderabad, construction equipment, mechanical splicing, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/threading-machine"
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
    "name": "Threading Machine CDRG 45",
    "description": "Semi-automatic Rebar Threading Machine with 16-40mm capacity for creating threaded ends on steel bars for mechanical splicing and coupler connections across South India. Features 40-62 r/m shaft speed and 100mm max rolling length.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/threading-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/threading-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/threading-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/threading-machine-3.webp"
    ],
    "sku": "HM-TM-CDRG45",
    "mpn": "TM-CDRG45-2024",
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
      "url": "https://www.hutaibmachinery.com/product/threading-machine",
      "priceCurrency": "INR",
      "price": "95000",
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
      "reviewCount": "72"
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
        "name": "Threading Machine",
        "item": "https://www.hutaibmachinery.com/product/threading-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What rebar diameters can this threading machine handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This threading machine handles rebar from 16-40mm diameter, covering all common bar sizes used in construction for mechanical splicing applications."
        }
      },
      {
        "@type": "Question",
        "name": "What thread pitches are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine supports multiple thread pitches: 1.75mm, 2.0mm, 2.5mm, and 3.0mm, compatible with standard rebar couplers used in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum thread length?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The maximum rolling length is 100mm, sufficient for standard coupler connections and mechanical splicing requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is this machine suitable for site use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, at 380kg the machine is transportable and can be set up on construction sites for on-site threading. It requires a 3-phase 415V power supply."
        }
      },
      {
        "@type": "Question",
        "name": "Does Hutaib Machinery provide installation and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free on-site installation and comprehensive operator training across South India to ensure your team can operate the machine efficiently from day one."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Threading Machine comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts and dies are readily available from our Bengaluru warehouse."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in threading machines, rebar processing equipment, and mechanical splicing tools.",
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

