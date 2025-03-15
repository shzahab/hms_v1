
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMS Bar Bending Machine | Heavy Duty Construction Equipment",
  description: "Professional-grade HMS Bar Bending Machine with digital controls, dual operation modes, and high precision. Perfect for construction and industrial applications.",
  openGraph: {
    title: "HMS Bar Bending Machine | Heavy Duty Construction Equipment",
    description: "Professional-grade HMS Bar Bending Machine with digital controls, dual operation modes, and high precision. Perfect for construction and industrial applications.",
    images: ["/images/products/bar-bending-machine-1.webp"],
  },
  keywords: "bar bending machine, construction equipment, HMS machinery, rebar bender, steel bar bending",
  robots: "index, follow",
  alternates: {
    canonical: "https://hutaib.com/product/bar-bending-machine"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HMS Bar Bending Machine",
    "description": "Professional-grade HMS Bar Bending Machine with digital controls, dual operation modes, and high precision. Perfect for construction and industrial applications.",
    "brand": {
      "@type": "Brand",
      "name": "HMS"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://hutaib.com/images/products/bar-bending-machine-1.webp",
      "https://hutaib.com/images/products/bar-bending-machine-2.webp",
      "https://hutaib.com/images/products/bar-bending-machine-3.webp"
    ],
    "offers": {
      "@type": "Offer",
      "price": "80000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://hutaib.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://hutaib.com/product",
          "name": "Products"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://hutaib.com/product/bar-bending-machine",
          "name": "Bar Bending Machine"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
