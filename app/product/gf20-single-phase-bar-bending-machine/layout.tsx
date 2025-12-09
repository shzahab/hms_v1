import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GF20 Single Phase Bar Bending Machine 8-16mm | ₹33,000 | HMS",
  description: "Buy GF20 Single Phase Bar Bending Machine at ₹33,000. Ideal for small contractors - bends 8mm to 16mm TMT bars. Runs on single phase power. 6-month warranty. Fast delivery 1-3 days.",
  openGraph: {
    title: "GF20 Single Phase Bar Bending Machine 8-16mm | Best Price India",
    description: "Compact GF20 bar bender for small construction sites. 8-16mm capacity, single phase power, foot pedal control. Perfect for residential projects.",
    images: ["/images/products/gf20-single-phase-main.webp"],
  },
  keywords: "GF20 bar bending machine, single phase bar bender, 16mm bar bending machine, small bar bending machine price, portable rebar bender India, single phase rebar bender, GF20 price India, 8mm to 16mm bar bender, residential construction equipment, small contractor bar bender",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gf20-single-phase-bar-bending-machine"
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
    "name": "GF20 Single Phase Bar Bending Machine 8-16mm",
    "description": "Compact single-phase bar bending machine ideal for small construction sites and residential projects. Bends TMT bars from 8mm to 16mm diameter with precision foot pedal control.",
    "sku": "HM-GF20-1PH",
    "mpn": "GF20-1PH-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gf20-single-phase-main.webp",
      "https://www.hutaibmachinery.com/images/products/gf20-single-phase-1.webp",
      "https://www.hutaibmachinery.com/images/products/gf20-single-phase-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gf20-single-phase-bar-bending-machine",
      "price": "33000",
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
      "ratingValue": "4.7",
      "reviewCount": "48"
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
          "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines",
          "name": "Bar Bending Machines"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/gf20-single-phase-bar-bending-machine",
          "name": "GF20 Single Phase Bar Bending Machine"
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
        "name": "Can the GF20 single phase run on home electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the GF20 single phase bar bending machine runs on standard 220V single phase power supply available in most residential and small commercial establishments across India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum bar diameter the GF20 can bend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GF20 single phase model can bend TMT bars from 8mm to 16mm diameter, making it ideal for residential construction, compound walls, and small commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "Is the GF20 portable for moving between sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the GF20 single phase weighs approximately 75kg and features a compact design that can be transported in a small pickup truck or tempo, making it suitable for contractors working on multiple sites."
        }
      },
      {
        "@type": "Question",
        "name": "What is included with the GF20 purchase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every GF20 purchase includes the machine, foot pedal, bending accessories, and user manual. 6-month warranty on manufacturing defects. Delivery charges as per actuals. Installation and operator training available at additional cost."
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
    "description": "Authorized dealer for GF20 bar bending machines in South India since 1999",
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

