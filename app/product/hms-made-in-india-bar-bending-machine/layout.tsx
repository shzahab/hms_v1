import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "HMS Made in India Bar Bending Machine 32mm | Premium ₹1,55,000",
  description: "Buy HMS Made in India Bar Bending Machine at ₹1,55,000. Top-tier Indian manufacturing, 16-32mm capacity. Best-in-class durability, premium materials. Make in India.",
  openGraph: {
    title: "HMS Made in India Bar Bending Machine | Premium Indian Manufacturing",
    description: "Top-tier Made in India bar bender with 16-32mm capacity. Premium materials, best-in-class durability. Supporting Indian manufacturing.",
    images: ["/images/products/hms-india-bar-bending-main.webp"],
  },
  keywords: "HMS Made in India bar bending machine, premium Indian bar bender, Make in India construction equipment, top quality bar bending machine, HMS India 32mm, best Indian bar bender, domestic manufacturing",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-bending-machine"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HMS Made in India Bar Bending Machine 16-32mm",
    "description": "Premium Made in India bar bending machine with 16-32mm capacity. Top-tier Indian manufacturing with best-in-class durability and premium materials.",
    "sku": "HMS-IND-32",
    "mpn": "HMSIND32-2024",
    "brand": { "@type": "Brand", "name": "HMS India" },
    "manufacturer": { "@type": "Organization", "name": "Hutaib Machinery and Spares", "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "image": ["https://www.hutaibmachinery.com/images/products/hms-india-bar-bending-main.webp"],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-bending-machine",
      "price": "155000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "28" },
    "countryOfOrigin": "India"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.hutaibmachinery.com", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.hutaibmachinery.com/category/bar-rebar-bending-machines", "name": "Bar Bending Machines" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-bending-machine", "name": "HMS Made in India Bar Bending Machine" } }
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

