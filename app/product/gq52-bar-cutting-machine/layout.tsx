import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GQ52 Bar Cutting Machine 8-42mm | ₹93,000 | Hutaib Machinery",
  description: "Buy GQ52 Bar Cutting Machine at ₹93,000 + GST. Heavy-duty cutter for 8mm to 42mm TMT bars. Ideal for infrastructure & commercial projects. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "GQ52 Bar Cutting Machine 8-42mm | Heavy-Duty | Best Price India",
    description: "Heavy-duty GQ52 bar cutter for large construction sites. 8-42mm capacity, high-speed cutting, industrial grade. Perfect for infrastructure and commercial projects.",
    images: ["/images/products/gq52-bar-cutting-main.webp"],
  },
  keywords: "GQ52 bar cutting machine, 42mm bar cutting machine, heavy duty bar cutter, rebar cutter India, GQ52 price India, 8mm to 42mm bar cutter, infrastructure construction equipment, commercial bar cutter, TMT bar cutting machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gq52-bar-cutting-machine"
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
    "name": "GQ52 Bar Cutting Machine 8-42mm",
    "description": "Heavy-duty bar cutting machine for infrastructure and commercial projects. Cuts TMT bars from 8mm to 42mm diameter with clean, precise cuts. Industrial grade construction.",
    "sku": "HM-GQ52-BC",
    "mpn": "GQ52-BC-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gq52-bar-cutting-main.webp",
      "https://www.hutaibmachinery.com/images/products/gq52-bar-cutting-1.webp",
      "https://www.hutaibmachinery.com/images/products/gq52-bar-cutting-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gq52-bar-cutting-machine",
      "price": "93000",
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
      "reviewCount": "56"
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
          "@id": "https://www.hutaibmachinery.com/product/gq52-bar-cutting-machine",
          "name": "GQ52 Bar Cutting Machine"
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
        "name": "What is the maximum bar diameter the GQ52 can cut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ52 bar cutting machine can cut TMT and HYSD bars from 8mm to 42mm diameter, making it suitable for infrastructure projects, high-rise buildings, and heavy commercial construction."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cutting speed of the GQ52 bar cutter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ52 delivers approximately 20-28 cuts per minute depending on bar diameter. Smaller bars (8-16mm) cut faster, while larger bars (32-42mm) require slightly more time per cut."
        }
      },
      {
        "@type": "Question",
        "name": "What power supply does the GQ52 require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ52 bar cutting machine operates on 415V, 3-phase, 50Hz power supply with a 4kW motor. A stable industrial 3-phase electrical connection is required."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty comes with the GQ52 bar cutting machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GQ52 comes with a 6-month warranty covering manufacturing defects. Does not cover spares, consumables, blades, or damage from improper use. Delivery charges as per actuals."
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
    "description": "Authorized dealer for GQ52 bar cutting machines in South India since 1999",
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
    "priceRange": "₹₹₹",
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

