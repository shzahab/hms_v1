import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GF25 Single Phase Bar Bending Machine 8-20mm | ₹35,000 | HMS",
  description: "Buy GF25 Single Phase Bar Bending Machine at ₹35,000. Bends up to 20mm TMT bars on 220V single phase power. Perfect for G+2/G+3 buildings. 6-month warranty. Fast delivery 1-3 days.",
  openGraph: {
    title: "GF25 Single Phase Bar Bending Machine 20mm | Higher Capacity Single Phase",
    description: "GF25 bar bender with 20mm capacity on single phase power. Ideal for larger residential and small commercial projects without 3-phase connection.",
    images: ["/images/products/gf25-single-phase-main.webp"],
  },
  keywords: "GF25 bar bending machine, 20mm bar bender single phase, GF25 single phase price, higher capacity bar bender, 20mm rebar bender India, G+3 building bar bender, medium capacity bar bending machine, single phase 20mm bender",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gf25-single-phase-bar-bending-machine"
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
    "name": "GF25 Single Phase Bar Bending Machine 8-20mm",
    "description": "Higher capacity single-phase bar bending machine that bends TMT bars up to 20mm diameter on standard 220V power. Bridge between entry-level and industrial machines for growing contractors.",
    "sku": "HM-GF25-1PH",
    "mpn": "GF25-1PH-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gf25-single-phase-main.webp",
      "https://www.hutaibmachinery.com/images/products/gf25-single-phase-1.webp",
      "https://www.hutaibmachinery.com/images/products/gf25-single-phase-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gf25-single-phase-bar-bending-machine",
      "price": "35000",
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
      "reviewCount": "41"
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
          "@id": "https://www.hutaibmachinery.com/product/gf25-single-phase-bar-bending-machine",
          "name": "GF25 Single Phase Bar Bending Machine"
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
        "name": "Can the GF25 single phase really bend 20mm bars on home power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the GF25 single phase is specifically engineered with a powerful 2.2kW motor optimized for 220V single phase operation. It can bend TMT bars up to 20mm diameter, making it unique in the single-phase category."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between GF20 and GF25?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GF20 bends bars up to 16mm while GF25 bends up to 20mm. The GF25 has a more powerful motor and larger bending disc, making it suitable for larger buildings (G+2, G+3) that require 20mm main bars in columns and beams."
        }
      },
      {
        "@type": "Question",
        "name": "Is GF25 single phase suitable for small commercial buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 20mm capacity makes the GF25 single phase ideal for small commercial buildings, apartments up to G+3, and projects requiring larger main reinforcement bars while still working on single-phase power."
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

