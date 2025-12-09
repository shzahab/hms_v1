import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GUTE GQ40 Bar Cutting Machine 8-32mm | Indian Motor | ₹1,10,000 | HMS",
  description: "Buy GUTE GQ40 Bar Cutting Machine with Indian Motor at ₹1,10,000 + GST. Premium imported brand, 8-32mm capacity. Superior build quality, longer service life. 6-month warranty.",
  openGraph: {
    title: "GUTE GQ40 Bar Cutting Machine | Premium Import with Indian Motor",
    description: "Premium GUTE brand bar cutter with Indian motor. 8-32mm capacity, precision-engineered components, superior durability. The professional's choice.",
    images: ["/images/products/gute-gq40-bar-cutting-main.webp"],
  },
  keywords: "GUTE bar cutting machine, GQ40 bar cutter, premium bar cutting machine, imported bar cutter India, GUTE GQ40 price, 32mm bar cutter, professional rebar cutter, Indian motor bar cutter",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gute-gq40-bar-cutting-machine"
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
    "name": "GUTE GQ40 Bar Cutting Machine with Indian Motor",
    "description": "Premium GUTE brand bar cutting machine with Indian motor. Cuts TMT bars from 8mm to 32mm diameter with superior precision and durability.",
    "sku": "HM-GUTE-GQ40-BC",
    "mpn": "GUTE-GQ40-IN-2024",
    "brand": {
      "@type": "Brand",
      "name": "GUTE"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "GUTE (Imported) with Indian Motor"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gute-gq40-bar-cutting-main.webp",
      "https://www.hutaibmachinery.com/images/products/gute-gq40-bar-cutting-1.webp",
      "https://www.hutaibmachinery.com/images/products/gute-gq40-bar-cutting-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gute-gq40-bar-cutting-machine",
      "price": "110000",
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
      "ratingValue": "4.8",
      "reviewCount": "34"
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
          "@id": "https://www.hutaibmachinery.com/product/gute-gq40-bar-cutting-machine",
          "name": "GUTE GQ40 Bar Cutting Machine"
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
        "name": "What makes GUTE GQ40 different from standard bar cutters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GUTE is a globally recognized brand known for precision engineering. The GQ40 features precision-ground gears, superior bearings, tighter tolerances, and better build quality than standard machines, resulting in longer service life and more consistent cuts."
        }
      },
      {
        "@type": "Question",
        "name": "Why does this model have an Indian motor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Indian motor is specifically designed for Indian voltage conditions (415V with fluctuations). It offers reliable performance, easy spare parts availability across India, and local mechanics can service it easily."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cutting capacity of GUTE GQ40?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GUTE GQ40 cuts TMT and HYSD bars from 8mm to 32mm diameter, covering the majority of bar sizes used in commercial and residential construction."
        }
      },
      {
        "@type": "Question",
        "name": "Is the GUTE GQ40 worth the premium over GQ52?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you prioritize build quality and long service life over maximum capacity, yes. GUTE GQ40 offers 32mm capacity with premium components that typically last 30-50% longer than standard machines, making it cost-effective over time."
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
    "description": "Authorized dealer for GUTE bar cutting machines in South India since 1999",
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

