import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "10HP Greaves Diesel Gujarat Body Concrete Cutting Machine | ₹95,000 | HMS",
  description: "Buy 10HP Greaves Diesel Concrete Cutting Machine with Gujarat Body at ₹95,000. Heavy-duty construction, 240mm depth. Professional road contractor choice. 6-month warranty.",
  openGraph: {
    title: "10HP Greaves Diesel Gujarat Body Concrete Cutter | Best Price India",
    description: "Heavy-duty concrete cutter with Greaves 10HP diesel and robust Gujarat body. Built for professional road contractors.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "10HP Greaves concrete cutter, Gujarat body concrete cutting machine, diesel floor saw, heavy duty road cutter, Greaves 10HP price India",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-concrete-cutting-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "10HP Greaves Diesel Gujarat Body Concrete Cutting Machine",
    "description": "Heavy-duty concrete cutting machine with Greaves 10HP diesel engine and robust Gujarat-made body. Professional grade for road contractors with 240mm cutting depth.",
    "sku": "HM-CCM-10HP-GRV-GUJ",
    "mpn": "CCM-10HP-GRV-GUJ-2024",
    "brand": { "@type": "Brand", "name": "Greaves" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares" },
    "image": ["https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-concrete-cutting-machine",
      "price": "95000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Hutaib Machinery and Spares" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "52" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine", "name": "Concrete Cutting Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-concrete-cutting-machine", "name": "10HP Greaves Diesel Gujarat Body" } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Gujarat body?", "acceptedAnswer": { "@type": "Answer", "text": "Gujarat body refers to heavy-duty machine frames manufactured in Gujarat, known for robust construction using thicker steel, better welding, and superior build quality compared to standard bodies." } },
      { "@type": "Question", "name": "Why 10HP over 5HP?", "acceptedAnswer": { "@type": "Answer", "text": "10HP provides double the power for sustained heavy cutting. Better for continuous road work, reinforced concrete, and professional daily use without straining the engine." } }
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

