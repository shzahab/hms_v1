import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "CNC Steel Bar Bender 40mm - Automatic Rebar Bending Machine | Hutaib Machinery",
  description: "CNC Steel Bar Bender Machine with 6-42mm capacity. Adjustable 5-10r/min speed, 400mm disc. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "CNC Steel Bar Bender Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy CNC Steel Bar Bender in Bengaluru from Hutaib Machinery. 40mm capacity, automatic bending. Free installation across South India. Request pricing now.",
    images: ["/images/products/cnc-steel-bar-bender-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CNC Steel Bar Bender 40mm - Automatic Rebar Bending Machine | Hutaib Machinery",
    description: "CNC Steel Bar Bender Machine with 6-42mm capacity. Adjustable 5-10r/min speed, 400mm disc. 1-year warranty. Get a quote today!",
    images: ["/images/products/cnc-steel-bar-bender-machine-main.webp"],
  },
  keywords: "CNC steel bar bender, automatic rebar bending machine, steel bar bending machine, rebar bender, bar bending machine price, CNC bar bender Bengaluru, steel bending machine Chennai, rebar bender Hyderabad, construction equipment, rebar processing, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/cnc-steel-bar-bender-machine"
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
    "name": "CNC Steel Bar Bender Machine CDRG 45",
    "description": "Semi-automatic CNC Steel Bar Bender Machine with 6-42mm capacity for precise rebar bending in construction projects across South India. Features adjustable 5-10r/min speed and 400mm working disc.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/cnc-steel-bar-bender-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/cnc-steel-bar-bender-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/cnc-steel-bar-bender-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/cnc-steel-bar-bender-machine-3.webp"
    ],
    "sku": "HM-CDRG45",
    "mpn": "CDRG45-2024",
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
      "url": "https://www.hutaibmachinery.com/product/cnc-steel-bar-bender-machine",
      "priceCurrency": "INR",
      "price": "110000",
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
      "reviewCount": "85"
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
        "name": "CNC Steel Bar Bender Machine",
        "item": "https://www.hutaibmachinery.com/product/cnc-steel-bar-bender-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What steel bar diameters can this CNC bender handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine can bend round steel bars from 6-42mm and HRB400 ribbed steel from 6-42mm diameter, making it versatile for various rebar sizes in construction projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the bending speed range?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The bending speed is adjustable from 5-10 r/min, allowing operators to optimize for different bar sizes and bend angles while ensuring precision."
        }
      },
      {
        "@type": "Question",
        "name": "Is this machine suitable for high-volume production?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with its 400mm working disc and adjustable speed, this semi-automatic CNC bender is designed for efficient high-volume rebar bending in commercial and infrastructure projects."
        }
      },
      {
        "@type": "Question",
        "name": "What power supply is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CNC Steel Bar Bender requires a 3-phase, 415V, 50Hz power supply. Our installation team will assess your site's electrical infrastructure before delivery."
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
          "text": "Every CNC Steel Bar Bender comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in CNC steel bar benders, rebar processing machines, and construction equipment.",
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

