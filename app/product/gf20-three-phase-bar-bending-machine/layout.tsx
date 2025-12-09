import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GF20 Three Phase Bar Bending Machine 8-16mm | ₹35,000 | HMS",
  description: "Buy GF20 Three Phase Bar Bending Machine at ₹35,000. Industrial 415V power for heavy-duty use. Bends 8-16mm TMT bars faster. 6-month warranty. Fast delivery 1-3 days.",
  openGraph: {
    title: "GF20 Three Phase Bar Bending Machine | Industrial Grade Rebar Bender",
    description: "Heavy-duty GF20 bar bender with 3-phase motor for continuous operation. 8-16mm capacity, high-speed bending for fabrication units.",
    images: ["/images/products/gf20-three-phase-main.webp"],
  },
  keywords: "GF20 three phase bar bending machine, industrial bar bender, 3 phase rebar bender India, heavy duty bar bending machine, GF20 3PH price, 16mm bar bender three phase, fabrication unit equipment, construction site bar bender, 415V bar bending machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gf20-three-phase-bar-bending-machine"
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
    "name": "GF20 Three Phase Bar Bending Machine 8-16mm",
    "description": "Industrial-grade three-phase bar bending machine for heavy-duty construction and fabrication use. Bends TMT bars from 8mm to 16mm with high-speed continuous operation on 415V power.",
    "sku": "HM-GF20-3PH",
    "mpn": "GF20-3PH-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/gf20-three-phase-main.webp",
      "https://www.hutaibmachinery.com/images/products/gf20-three-phase-1.webp",
      "https://www.hutaibmachinery.com/images/products/gf20-three-phase-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gf20-three-phase-bar-bending-machine",
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
      "ratingValue": "4.8",
      "reviewCount": "62"
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
          "@id": "https://www.hutaibmachinery.com/product/gf20-three-phase-bar-bending-machine",
          "name": "GF20 Three Phase Bar Bending Machine"
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
        "name": "What is the difference between GF20 single phase and three phase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The GF20 Three Phase has a more powerful 2.2kW motor running on 415V industrial power, providing faster bending speeds and better continuous duty performance compared to the 1.5kW single phase model. Choose three phase for heavy workloads."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need special electrical setup for the GF20 three phase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the GF20 Three Phase requires a 415V, three-phase power connection typically available at industrial sites, fabrication units, and larger construction sites. Please ensure your site has proper electrical setup before purchase."
        }
      },
      {
        "@type": "Question",
        "name": "Is the GF20 three phase better for fabrication units?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the three-phase motor provides better continuous duty rating, meaning it can run for extended periods without overheating. This makes it ideal for fabrication units processing large quantities of stirrups daily."
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

