import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Walk Behind Power Trowel - Concrete Floater Machine 9HP | Hutaib Machinery",
  description: "Walk Behind Power Trowel (Floater) with 7kW/9HP output, 70-125 RPM. Perfect for medium-sized floors. 1-year warranty. 25+ years trusted in South India. Get a quote today!",
  openGraph: {
    title: "Walk Behind Power Trowel for Concrete Finishing | Hutaib Machinery",
    description: "Buy Walk Behind Power Trowel in Bengaluru from Hutaib Machinery. 9HP output, adjustable speed. Free installation across South India. Request pricing now.",
    images: ["/images/products/floaters-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk Behind Power Trowel - Concrete Floater Machine 9HP | Hutaib Machinery",
    description: "Walk Behind Power Trowel (Floater) with 7kW/9HP output, 70-125 RPM. Perfect for medium-sized floors. 1-year warranty. Get a quote today!",
    images: ["/images/products/floaters-main.webp"],
  },
  keywords: "walk behind power trowel, concrete floater, power float, floor finishing machine, concrete smoother, power trowel price, floater machine Bengaluru, concrete finisher Chennai, floor polisher Hyderabad, residential floor finishing, commercial floor, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/floaters"
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
    "name": "Walk Behind Power Trowel FWT48",
    "description": "Professional Walk Behind Power Trowel (Concrete Floater) with 7.0kW/9HP output and 70-125 RPM adjustable speed for medium-sized concrete floor finishing. Ideal for residential and commercial projects.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/floaters-main.webp",
      "https://www.hutaibmachinery.com/images/products/floaters-1.webp",
      "https://www.hutaibmachinery.com/images/products/floaters-2.webp",
      "https://www.hutaibmachinery.com/images/products/floaters-3.webp"
    ],
    "sku": "HM-FWT48",
    "mpn": "FWT48-2024",
    "brand": {
      "@type": "Brand",
      "name": "Hutaib Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/floaters",
      "priceCurrency": "INR",
      "price": "30000",
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
      "ratingValue": "4.6",
      "reviewCount": "92"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hutaibmachinery.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.hutaibmachinery.com/product"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Floaters",
        "item": "https://www.hutaibmachinery.com/product/floaters"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the power output of this floater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine delivers 7.0kW (9HP) for effective concrete finishing on medium-sized floors."
        }
      },
      {
        "@type": "Question",
        "name": "What speed range does it operate at?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operating speed ranges from 70-125 RPM, adjustable for different finishing stages from floating to final finishing."
        }
      },
      {
        "@type": "Question",
        "name": "Is it suitable for residential projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the walk-behind design is perfect for medium-sized residential driveways, patios, and floors, as well as commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "What are the machine dimensions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The floater measures 2080mm × 1250mm × 1020mm (L×W×H), providing a good balance of coverage area and maneuverability."
        }
      },
      {
        "@type": "Question",
        "name": "Does Hutaib Machinery provide installation and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free on-site installation and comprehensive operator training across South India to ensure your team can operate the machine efficiently from day one."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Walk Behind Power Trowel comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse."
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
    "telephone": "+91-8074949635",
    "priceRange": "₹10,000 - ₹5,00,000",
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in power trowels, concrete floaters, and floor finishing equipment.",
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
      "latitude": 12.9606,
      "longitude": 77.5773
    },
    "areaServed": [
      {"@type": "State", "name": "Karnataka"},
      {"@type": "State", "name": "Tamil Nadu"},
      {"@type": "State", "name": "Kerala"},
      {"@type": "State", "name": "Andhra Pradesh"},
      {"@type": "State", "name": "Telangana"},
      {"@type": "State", "name": "Maharashtra"},
      {"@type": "State", "name": "Goa"}
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "foundingDate": "1999"
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

