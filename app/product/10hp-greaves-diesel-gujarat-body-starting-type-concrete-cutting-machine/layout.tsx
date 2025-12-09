import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "10HP Greaves Diesel Gujarat Body Starting Type Concrete Cutter | ₹1,15,000 | HMS",
  description: "Buy 10HP Greaves Diesel Starting Type Concrete Cutting Machine with Gujarat Body at ₹1,15,000. Electric start, heavy-duty construction. Premium choice for contractors.",
  openGraph: {
    title: "10HP Greaves Diesel Gujarat Body Starting Type | Best Price India",
    description: "Premium concrete cutter with electric start Greaves 10HP diesel and Gujarat body. One-button start convenience for professional contractors.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "10HP Greaves starting type, electric start concrete cutter, Gujarat body floor saw, self start diesel cutter, premium road cutting machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-starting-type-concrete-cutting-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "10HP Greaves Diesel Gujarat Body Starting Type Concrete Cutting Machine",
    "description": "Premium concrete cutting machine with Greaves 10HP diesel engine featuring electric start and robust Gujarat body. One-button start convenience with professional-grade construction.",
    "sku": "HM-CCM-10HP-GRV-GUJ-ST",
    "mpn": "CCM-10HP-GRV-GUJ-ST-2024",
    "brand": { "@type": "Brand", "name": "Greaves" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares" },
    "image": ["https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-starting-type-concrete-cutting-machine",
      "price": "115000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": { "@type": "Organization", "name": "Hutaib Machinery and Spares" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "35" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine", "name": "Concrete Cutting Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/10hp-greaves-diesel-gujarat-body-starting-type-concrete-cutting-machine", "name": "10HP Greaves Gujarat Body Starting Type" } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Starting Type?", "acceptedAnswer": { "@type": "Answer", "text": "Starting Type means electric start - press a button to start the engine instead of manual hand cranking. Includes battery, starter motor, and charging system." } },
      { "@type": "Question", "name": "Is the extra ₹20,000 worth it?", "acceptedAnswer": { "@type": "Answer", "text": "For professional daily use, absolutely. Electric start saves time, reduces operator fatigue, and eliminates hand-crank injuries. The convenience pays for itself over the machine's lifetime." } }
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

