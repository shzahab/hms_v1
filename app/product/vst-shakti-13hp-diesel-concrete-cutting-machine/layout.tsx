import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "VST Shakti 13HP Diesel Concrete Cutting Machine | ₹1,30,000 | HMS",
  description: "Buy VST Shakti 13HP Diesel Concrete Cutting Machine at ₹1,30,000. Maximum power diesel cutter with premium VST Shakti engine. Heavy infrastructure grade. 6-month warranty.",
  openGraph: {
    title: "VST Shakti 13HP Diesel Concrete Cutting Machine | Best Price India",
    description: "Top-of-the-line diesel concrete cutter with VST Shakti 13HP engine. Maximum power for heavy infrastructure and continuous road work.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "VST Shakti concrete cutter, 13HP diesel concrete cutting machine, heavy duty floor saw, infrastructure road cutter, VST Shakti 13HP price",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/vst-shakti-13hp-diesel-concrete-cutting-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VST Shakti 13HP Diesel Concrete Cutting Machine",
    "description": "Premium heavy-duty concrete cutting machine with VST Shakti 13HP diesel engine. Maximum power for infrastructure projects with 240mm cutting depth and professional-grade construction.",
    "sku": "HM-CCM-13HP-VST",
    "mpn": "CCM-13HP-VST-2024",
    "brand": { "@type": "Brand", "name": "VST Shakti" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares" },
    "image": ["https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/vst-shakti-13hp-diesel-concrete-cutting-machine",
      "price": "130000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Hutaib Machinery and Spares" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "28" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine", "name": "Concrete Cutting Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/vst-shakti-13hp-diesel-concrete-cutting-machine", "name": "VST Shakti 13HP Diesel Concrete Cutting Machine" } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why is VST Shakti 13HP the most expensive?", "acceptedAnswer": { "@type": "Answer", "text": "VST Shakti 13HP combines maximum diesel power with premium Indian engineering. It's designed for heavy infrastructure projects requiring continuous, powerful cutting. The investment is justified for professional contractors with demanding workloads." } },
      { "@type": "Question", "name": "What is VST Shakti known for?", "acceptedAnswer": { "@type": "Answer", "text": "VST Shakti is an established Indian brand known for agricultural and industrial engines. Their 13HP diesel is renowned for high torque, fuel efficiency, and durability in tough Indian conditions." } }
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

