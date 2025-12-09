import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "NRB32 Portable Bar Bending Machine 32mm | ₹95,000 + GST | HMS",
  description: "Buy NRB32 Portable Bar Bending Machine at ₹95,000 + 18% GST. 32mm capacity in a portable design. Easy site-to-site transport. Perfect for mobile contractors.",
  openGraph: {
    title: "NRB32 Portable Bar Bending Machine | 32mm Capacity | Mobile Design",
    description: "Portable 32mm bar bender for contractors who move between sites. Same capacity as GW42, designed for easy transport. NRB32 at ₹95,000 + GST.",
    images: ["/images/products/nrb32-portable-main.webp"],
  },
  keywords: "NRB32 portable bar bending machine, portable bar bender 32mm, mobile bar bending machine, site portable rebar bender, NRB32 price India, transportable bar bender, construction site bar bender",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/nrb32-portable-bar-bending-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NRB32 Portable Bar Bending Machine 32mm",
    "description": "Portable bar bending machine with 32mm capacity designed for easy site-to-site transport. Ideal for contractors working on multiple locations.",
    "sku": "NRB32-PORT",
    "mpn": "NRB32-2024",
    "brand": { "@type": "Brand", "name": "HMS Machinery" },
    "image": ["https://www.hutaibmachinery.com/images/products/nrb32-portable-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/nrb32-portable-bar-bending-machine",
      "price": "95000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "priceSpecification": { "@type": "PriceSpecification", "price": "95000", "priceCurrency": "INR", "valueAddedTaxIncluded": false }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "45" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines", "name": "Bar Bending Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/nrb32-portable-bar-bending-machine", "name": "NRB32 Portable Bar Bending Machine" } }
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

