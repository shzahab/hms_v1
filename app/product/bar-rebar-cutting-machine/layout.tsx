import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Bar Cutting Machine 42mm - Precision Rebar Cutting | Hutaib Machinery",
  description: "High-performance Bar Cutting Machine with 42mm capacity. 32 cuts/min, safety guards included. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Bar Cutting Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy Bar Cutting Machine in Bengaluru from Hutaib Machinery. Heavy-duty 42mm capacity, 32 cuts/min. Free installation support across South India. Request pricing now.",
    images: ["/images/products/bar-cutting-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bar Cutting Machine 42mm - Precision Rebar Cutting | Hutaib Machinery",
    description: "High-performance Bar Cutting Machine with 42mm capacity. 32 cuts/min, safety guards included. 1-year warranty. Get a quote today!",
    images: ["/images/products/bar-cutting-machine-main.webp"],
  },
  keywords: "bar cutting machine, rebar cutting machine, steel bar cutter, TMT bar cutting machine, bar cutting machine price, bar cutting machine Bengaluru, bar cutting machine Chennai, bar cutting machine Hyderabad, construction equipment, rebar cutter, steel cutting machine, bar cutting machine Karnataka, bar cutting machine Tamil Nadu, automatic bar cutter, portable bar cutting machine, high-speed bar cutter, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/bar-rebar-cutting-machine"
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
    "name": "Bar Cutting Machine 42mm",
    "description": "High-performance bar cutting machine with 42mm capacity and 32 cuts per minute for construction projects across South India. Features comprehensive safety guards and easy blade replacement system.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/bar-cutting-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/bar-cutting-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/bar-cutting-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/bar-cutting-machine-3.webp"
    ],
    "sku": "HM-GQ42",
    "mpn": "GQ42-2024",
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
      "url": "https://www.hutaibmachinery.com/product/bar-rebar-cutting-machine",
      "priceCurrency": "INR",
      "price": "72000",
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
      "reviewCount": "94"
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
        "name": "Bar Cutting Machine",
        "item": "https://www.hutaibmachinery.com/product/bar-rebar-cutting-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What TMT bar grades can this machine cut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bar cutting machine handles all standard Indian TMT grades including Fe415, Fe500, Fe500D, and Fe550D, with clean cuts across varying steel hardness levels. The machine can cut bars from 8mm to 42mm diameter."
        }
      },
      {
        "@type": "Question",
        "name": "What is the power requirement for installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine requires a 3-phase, 415V, 50Hz power supply with a minimum 5kVA connected load. Our installation team assesses your site's electrical infrastructure before delivery across South India."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide operator training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every purchase includes free on-site training for 2-3 operators covering machine operation, blade replacement, and safety procedures. Training is available across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana."
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
      },
      {
        "@type": "Question",
        "name": "How often should cutting blades be replaced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blade life depends on usage volume and steel hardness. Typically, blades last 3-6 months with regular use. Our quick-change blade system allows replacement in under 10 minutes, and spare blades are available with same-day dispatch from Bengaluru."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in bar cutting machines, bar bending machines, and rebar processing equipment.",
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
