import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "GUTE Bar Bending Machine 32mm | Premium Import | ₹1,15,000 | HMS",
  description: "Buy GUTE Brand Bar Bending Machine at ₹1,15,000. Premium imported quality, 16-32mm capacity. Superior build, international standards. Authorized dealer in India.",
  openGraph: {
    title: "GUTE Bar Bending Machine | Premium Imported Quality | 32mm Capacity",
    description: "GUTE brand bar bender - premium imported quality with 16-32mm capacity. Superior engineering, international standards. Authorized dealer HMS India.",
    images: ["/images/products/gute-bar-bending-main.webp"],
  },
  keywords: "GUTE bar bending machine, premium bar bender India, imported bar bending machine, GUTE 32mm, high quality bar bender, international bar bending machine, GUTE dealer India, premium construction equipment",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/gute-bar-bending-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GUTE Bar Bending Machine 16-32mm",
    "description": "Premium imported GUTE brand bar bending machine with 16-32mm capacity. Superior build quality, international engineering standards. Authorized dealer in India.",
    "sku": "GUTE-32-IMP",
    "mpn": "GUTE32-2024",
    "brand": { "@type": "Brand", "name": "GUTE" },
    "image": ["https://www.hutaibmachinery.com/images/products/gute-bar-bending-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/gute-bar-bending-machine",
      "price": "115000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "34" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines", "name": "Bar Bending Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/gute-bar-bending-machine", "name": "GUTE Bar Bending Machine" } }
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

