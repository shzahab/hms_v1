import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GW42 Bar Bending Machine 32mm Capacity | ₹75,000 | HMS India",
  description: "Buy GW42 Three Phase Bar Bending Machine at ₹75,000. Heavy-duty 16-32mm capacity for infrastructure projects. 3.2kW motor, digital controls. 6-month warranty. Fast delivery 1-3 days.",
  openGraph: {
    title: "GW42 Bar Bending Machine 32mm | Heavy-Duty Infrastructure Equipment",
    description: "Industrial GW42 bar bender for large construction and infrastructure. 16-32mm capacity, 415V three-phase, digital control panel. Best price in India.",
    images: ["/images/products/gw42-bar-bending-main.webp"],
  },
  keywords: "GW42 bar bending machine, 32mm bar bender, heavy duty bar bending machine, infrastructure bar bender, GW42 price India, 32mm rebar bender, construction equipment India, bridge construction bar bender, flyover rebar machine",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gw42-three-phase-bar-bending-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GW42 Three Phase Bar Bending Machine 16-32mm",
    "description": "Heavy-duty bar bending machine for infrastructure and large construction projects. Bends TMT bars from 16mm to 32mm diameter with digital control panel and 3.2kW three-phase motor.",
    "sku": "HM-GW42-3PH",
    "mpn": "GW42-2024",
    "brand": { "@type": "Brand", "name": "HMS Machinery" },
    "image": ["https://www.hutaibmachinery.com/images/products/gw42-bar-bending-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gw42-three-phase-bar-bending-machine",
      "price": "75000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "89" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines", "name": "Bar Bending Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/gw42-three-phase-bar-bending-machine", "name": "GW42 Bar Bending Machine" } }
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

