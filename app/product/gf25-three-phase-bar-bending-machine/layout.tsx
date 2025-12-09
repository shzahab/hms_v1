import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GF25 Three Phase Bar Bending Machine 8-20mm | ₹38,000 | HMS",
  description: "Buy GF25 Three Phase Bar Bending Machine at ₹38,000. Industrial 20mm capacity with 415V power for high-volume work. Best for medium contractors. 6-month warranty. Fast delivery.",
  openGraph: {
    title: "GF25 Three Phase Bar Bending Machine | Industrial 20mm Rebar Bender",
    description: "Heavy-duty GF25 with 20mm bending capacity and industrial 3-phase power. Perfect for contractors handling multiple projects and fabrication units.",
    images: ["/images/products/gf25-three-phase-main.webp"],
  },
  keywords: "GF25 three phase bar bending machine, industrial 20mm bar bender, 3 phase 20mm rebar bender, GF25 3PH price India, medium contractor bar bender, fabrication yard equipment, 415V 20mm bar bender, professional bar bending machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gf25-three-phase-bar-bending-machine"
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
    "name": "GF25 Three Phase Bar Bending Machine 8-20mm",
    "description": "Professional-grade three-phase bar bending machine with 20mm capacity for medium-scale contractors and fabrication units. Industrial 415V motor for continuous heavy-duty operation.",
    "sku": "HM-GF25-3PH",
    "mpn": "GF25-3PH-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gf25-three-phase-main.webp",
      "https://www.hutaibmachinery.com/images/products/gf25-three-phase-1.webp",
      "https://www.hutaibmachinery.com/images/products/gf25-three-phase-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gf25-three-phase-bar-bending-machine",
      "price": "38000",
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
      "ratingValue": "4.9",
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
          "@id": "https://www.hutaibmachinery.com/product/gf25-three-phase-bar-bending-machine",
          "name": "GF25 Three Phase Bar Bending Machine"
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
        "name": "Why choose GF25 three phase over single phase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GF25 three phase has a more powerful 3kW motor with better continuous duty rating. If you're running a fabrication unit or handling high volumes daily, the three phase motor won't overheat and provides faster, more consistent bending."
        }
      },
      {
        "@type": "Question",
        "name": "Is GF25 three phase suitable for multi-story building projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 20mm capacity handles main reinforcement for buildings up to G+4. Combined with three-phase power for continuous operation, it's ideal for contractors working on apartment complexes and commercial buildings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use GF25 three phase for both stirrups and main bars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The 8-20mm range covers both stirrup sizes (8mm, 10mm) and main bar sizes (12mm, 16mm, 20mm), making it a versatile all-in-one solution for most medium-scale construction projects."
        }
      }
    ]
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
      {children}
    </>
  );
}

