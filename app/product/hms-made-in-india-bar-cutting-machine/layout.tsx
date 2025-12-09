import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "HMS Made in India Bar Cutting Machine 8-32mm | ₹1,55,000 | Premium Quality",
  description: "Buy HMS Made in India Bar Cutting Machine at ₹1,55,000 + GST. Premium Indian manufacturing, 8-32mm capacity. Built for 15-20 years service life. 6-month warranty. Atmanirbhar Bharat.",
  openGraph: {
    title: "HMS Made in India Bar Cutting Machine | Premium Indian Quality",
    description: "Our flagship Made in India bar cutter. Premium Bhilai steel, CNC machined components, built for 15-20 years of daily operation. The finest Indian-made bar cutting machine.",
    images: ["/images/products/hms-india-bar-cutting-main.webp"],
  },
  keywords: "HMS Made in India bar cutting machine, premium Indian bar cutter, Atmanirbhar Bharat, best Indian bar cutting machine, 32mm bar cutter India, long life bar cutter, professional rebar cutter",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-cutting-machine"
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
    "name": "HMS Made in India Bar Cutting Machine 8-32mm",
    "description": "Premium 100% Made in India bar cutting machine. Built with Bhilai steel frame, CNC machined gears, designed for 15-20 years of professional service.",
    "sku": "HM-HMS-BC-INDIA",
    "mpn": "HMS-BC32-INDIA-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS India"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares (Made in India)"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/hms-india-bar-cutting-main.webp",
      "https://www.hutaibmachinery.com/images/products/hms-india-bar-cutting-1.webp",
      "https://www.hutaibmachinery.com/images/products/hms-india-bar-cutting-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-cutting-machine",
      "price": "155000",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Hutaib Machinery and Spares"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "28"
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
          "@id": "https://www.hutaibmachinery.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.hutaibmachinery.com/category/bar-cutting-machines",
          "name": "Bar Cutting Machines"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/hms-made-in-india-bar-cutting-machine",
          "name": "HMS Made in India Bar Cutting Machine"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes HMS Made in India bar cutter the most expensive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium Indian materials (Bhilai steel frame), extra-thick construction, CNC machined components throughout, and engineering designed for 15-20 years of daily professional use. Lower total cost of ownership over time."
        }
      },
      {
        "@type": "Question",
        "name": "How long will the HMS Made in India bar cutter last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper maintenance, the HMS Made in India model is designed for 15-20 years of professional service. Many customers report their machines running strong after 10+ years of daily use."
        }
      },
      {
        "@type": "Question",
        "name": "Is this bar cutter eligible for government tenders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, being 100% Made in India, the HMS bar cutting machine qualifies for government tenders and projects requiring Indian-manufactured equipment under Make in India and Atmanirbhar Bharat initiatives."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cutting capacity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The HMS Made in India bar cutter cuts TMT and HYSD bars from 8mm to 32mm diameter, covering all common construction bar sizes with premium quality cuts."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/Store",
    "name": "Hutaib Machinery and Spares",
    "image": "https://www.hutaibmachinery.com/images/logo.png",
    "url": "https://www.hutaibmachinery.com",
    "description": "Manufacturer of premium Made in India bar cutting machines since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 78, N. R. Road, Kalasipalyam",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "telephone": "+91-9886474441",
    "priceRange": "₹₹₹₹",
    "areaServed": ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}

