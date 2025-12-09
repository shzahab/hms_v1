import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GW52 Bar Bending Machine 42mm Capacity | ₹95,000 | HMS India",
  description: "Buy GW52 Three Phase Bar Bending Machine at ₹95,000. Maximum 42mm capacity for heavy infrastructure. Bridges, flyovers, metro projects. 6-month warranty. Fast delivery 1-3 days.",
  openGraph: {
    title: "GW52 Bar Bending Machine 42mm | Maximum Capacity for Heavy Infrastructure",
    description: "Industrial GW52 bar bender with 42mm maximum capacity. For bridges, flyovers, metro construction. 4HP motor, digital controls.",
    images: ["/images/products/gw52-bar-bending-main.webp"],
  },
  keywords: "GW52 bar bending machine, 42mm bar bender, heavy infrastructure bar bender, bridge construction equipment, GW52 price India, metro project bar bender, flyover construction machine, maximum capacity bar bender",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gw52-three-phase-bar-bending-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GW52 Three Phase Bar Bending Machine 16-42mm",
    "description": "Maximum capacity bar bending machine for heavy infrastructure projects. Bends TMT bars from 16mm to 42mm diameter. Ideal for bridges, flyovers, and metro construction.",
    "sku": "HM-GW52-3PH",
    "mpn": "GW52-2024",
    "brand": { "@type": "Brand", "name": "HMS Machinery" },
    "image": ["https://www.hutaibmachinery.com/images/products/gw52-bar-bending-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gw52-three-phase-bar-bending-machine",
      "price": "95000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "67" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines", "name": "Bar Bending Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/gw52-three-phase-bar-bending-machine", "name": "GW52 Bar Bending Machine" } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

