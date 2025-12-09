import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Honda 13HP GX390 Concrete Cutting Machine | ₹75,000 | HMS",
  description: "Buy Honda 13HP GX390 Concrete Cutting Machine at ₹75,000. Premium Honda engine, 240mm cutting depth, wet cutting system. Reliable performance for professional contractors. 6-month warranty.",
  openGraph: {
    title: "Honda 13HP GX390 Concrete Cutting Machine | Best Price India",
    description: "Professional concrete cutter with legendary Honda GX390 engine. 13HP power, 240mm depth. Trusted by contractors across South India.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "Honda GX390 concrete cutter, 13HP concrete cutting machine, Honda engine floor saw, professional concrete cutter, GX390 road cutting machine, Honda concrete saw price India",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/honda-13hp-gx390-concrete-cutting-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Honda 13HP GX390 Concrete Cutting Machine",
    "description": "Professional-grade concrete cutting machine powered by Honda GX390 13HP petrol engine. 240mm cutting depth with wet cutting system for road joints and floor cutting.",
    "sku": "HM-CCM-13HP-HONDA",
    "mpn": "CCM-13HP-GX390-2024",
    "brand": { "@type": "Brand", "name": "Honda" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares" },
    "image": ["https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/honda-13hp-gx390-concrete-cutting-machine",
      "price": "75000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Hutaib Machinery and Spares" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "45" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine", "name": "Concrete Cutting Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/honda-13hp-gx390-concrete-cutting-machine", "name": "Honda 13HP GX390 Concrete Cutting Machine" } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why choose Honda GX390 engine?", "acceptedAnswer": { "@type": "Answer", "text": "Honda GX390 is the world's most reliable small engine. Known for easy starting, fuel efficiency, low maintenance, and exceptional durability. Trusted globally for commercial equipment." } },
      { "@type": "Question", "name": "What is the fuel consumption?", "acceptedAnswer": { "@type": "Answer", "text": "The Honda GX390 consumes approximately 2-2.5 liters of petrol per hour under normal cutting load, offering excellent power-to-fuel efficiency." } },
      { "@type": "Question", "name": "Is Honda service available in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Honda has an extensive service network across India. Genuine parts and authorized service centers are available in all major cities." } }
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

