import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GQ42 Bar Cutting Machine 8-16mm | ₹75,000 | Hutaib Machinery",
  description: "Buy GQ42 Bar Cutting Machine at ₹75,000 + GST. Cuts 8mm to 16mm TMT bars with precision. Ideal for small contractors & residential projects. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "GQ42 Bar Cutting Machine 8-16mm | Best Price India",
    description: "Compact GQ42 bar cutter for small construction sites. 8-16mm capacity, high-speed cutting, robust construction. Perfect for residential and small commercial projects.",
    images: ["/images/products/gq42-bar-cutting-main.webp"],
  },
  keywords: "GQ42 bar cutting machine, 16mm bar cutting machine, small bar cutting machine price, rebar cutter India, GQ42 price India, 8mm to 16mm bar cutter, residential construction equipment, small contractor bar cutter, TMT bar cutting machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gq42-bar-cutting-machine"
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
    "name": "GQ42 Bar Cutting Machine 8-16mm",
    "description": "Compact bar cutting machine ideal for small construction sites and residential projects. Cuts TMT bars from 8mm to 16mm diameter with clean, precise cuts.",
    "sku": "HM-GQ42-BC",
    "mpn": "GQ42-BC-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gq42-bar-cutting-main.webp",
      "https://www.hutaibmachinery.com/images/products/gq42-bar-cutting-1.webp",
      "https://www.hutaibmachinery.com/images/products/gq42-bar-cutting-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gq42-bar-cutting-machine",
      "price": "75000",
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
      "ratingValue": "4.6",
      "reviewCount": "42"
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
          "@id": "https://www.hutaibmachinery.com/category/bar-cutting-machines",
          "name": "Bar Cutting Machines"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/gq42-bar-cutting-machine",
          "name": "GQ42 Bar Cutting Machine"
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
        "name": "What is the maximum bar diameter the GQ42 can cut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ42 bar cutting machine can cut TMT and HYSD bars from 8mm to 16mm diameter, making it ideal for residential construction, compound walls, and small commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cutting speed of the GQ42 bar cutter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ42 delivers approximately 25-30 cuts per minute depending on bar diameter, significantly faster than manual cutting methods."
        }
      },
      {
        "@type": "Question",
        "name": "What power supply does the GQ42 require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ42 bar cutting machine operates on 415V, 3-phase, 50Hz power supply. A stable 3-phase electrical connection is required for optimal performance."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty comes with the GQ42 bar cutting machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ42 comes with a 6-month warranty covering manufacturing defects. Does not cover spares, consumables, or damage from improper use. Delivery charges as per actuals."
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
    "description": "Authorized dealer for GQ42 bar cutting machines in South India since 1999",
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

