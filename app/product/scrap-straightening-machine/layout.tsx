import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Scrap Straightening Machine 6-14mm - Steel Bar Straightener | Hutaib",
  description: "Industrial Scrap Straightening Machine for reclaiming bent steel bars. 6-14mm capacity, 30m/min speed, 9.5kW motor. 1-year warranty. 25+ years trusted supplier. Get quote!",
  openGraph: {
    title: "Scrap Straightening Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy Scrap Straightening Machine in Bengaluru from Hutaib Machinery. 6-14mm capacity, 30m/min processing speed. Free installation across South India. Request pricing now.",
    images: ["/images/products/scrap-straightening-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Straightening Machine 6-14mm - Steel Bar Straightener | Hutaib",
    description: "Industrial Scrap Straightening Machine for reclaiming bent steel bars. 6-14mm capacity, 30m/min speed. 1-year warranty. Get a quote today!",
    images: ["/images/products/scrap-straightening-machine-main.webp"],
  },
  keywords: "scrap straightening machine, steel bar straightener, rebar straightening machine, metal straightener, wire straightening machine, scrap straightener price, bar straightening machine Bengaluru, rebar straightener Chennai, steel straightener Hyderabad, construction equipment, scrap recovery machine, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/scrap-straightening-machine"
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
    "name": "Scrap Straightening Machine 6-14mm",
    "description": "Industrial scrap straightening machine for reclaiming bent and curved steel bars from 6-14mm diameter. Features 9.5kW motor, 30m/min processing speed, and semi-automatic operation for construction waste recovery across South India.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/scrap-straightening-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/scrap-straightening-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/scrap-straightening-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/scrap-straightening-machine-3.webp"
    ],
    "sku": "HM-GX6-14A",
    "mpn": "GX614A-2024",
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
      "url": "https://www.hutaibmachinery.com/product/scrap-straightening-machine",
      "priceCurrency": "INR",
      "price": "180000",
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
      "reviewCount": "38"
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
        "name": "Scrap Straightening Machine",
        "item": "https://www.hutaibmachinery.com/product/scrap-straightening-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What diameter range can this scrap straightening machine handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This machine handles steel bars from 6mm to 14mm diameter, covering the most common sizes of scrap rebar generated on construction sites and in fabrication workshops."
        }
      },
      {
        "@type": "Question",
        "name": "What is the processing speed of this steel bar straightener?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine operates at 30 meters per minute, enabling high-volume scrap recovery and processing for construction sites and steel recycling yards."
        }
      },
      {
        "@type": "Question",
        "name": "Is this machine fully automatic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's semi-automatic with an automated feed system for continuous operation while allowing operator control for different material types and conditions."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in scrap straightening machines, bar processing equipment, and steel recycling machinery.",
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

