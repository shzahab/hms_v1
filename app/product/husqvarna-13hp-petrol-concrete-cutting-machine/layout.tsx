import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Husqvarna 13HP Petrol Concrete Cutting Machine | ₹65,000 | HMS",
  description: "Buy Husqvarna 13HP Petrol Concrete Cutting Machine at ₹65,000. Swedish engineering, 240mm cutting depth. Best value 13HP petrol cutter. 6-month warranty.",
  openGraph: {
    title: "Husqvarna 13HP Petrol Concrete Cutting Machine | Best Price India",
    description: "Premium Husqvarna-powered concrete cutter. 13HP petrol engine, 240mm depth. Swedish quality at affordable price.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "Husqvarna concrete cutter, 13HP petrol concrete cutting machine, Husqvarna floor saw, Swedish engine concrete cutter, professional road cutting machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/husqvarna-13hp-petrol-concrete-cutting-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Husqvarna 13HP Petrol Concrete Cutting Machine",
    "description": "Professional concrete cutting machine with Husqvarna 13HP petrol engine. Swedish engineering quality with 240mm cutting depth for road and floor cutting.",
    "sku": "HM-CCM-13HP-HUSQ",
    "mpn": "CCM-13HP-HUSQ-2024",
    "brand": { "@type": "Brand", "name": "Husqvarna" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares" },
    "image": ["https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/husqvarna-13hp-petrol-concrete-cutting-machine",
      "price": "65000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Hutaib Machinery and Spares" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "38" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine", "name": "Concrete Cutting Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/husqvarna-13hp-petrol-concrete-cutting-machine", "name": "Husqvarna 13HP Petrol Concrete Cutting Machine" } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What makes Husqvarna engines special?", "acceptedAnswer": { "@type": "Answer", "text": "Husqvarna is a Swedish brand known for professional outdoor power equipment. Their engines feature advanced air filtration, efficient combustion, and are designed for heavy commercial use." } },
      { "@type": "Question", "name": "Why is Husqvarna cheaper than Honda?", "acceptedAnswer": { "@type": "Answer", "text": "While both are premium brands, Husqvarna offers competitive pricing in India. At ₹65,000 vs ₹75,000 for Honda, you get similar 13HP power with excellent Swedish engineering quality." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}

