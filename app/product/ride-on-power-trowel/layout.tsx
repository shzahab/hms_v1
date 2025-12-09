import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Ride On Power Trowel - Double 36\" Concrete Finishing Machine | Hutaib Machinery",
  description: "Ride On Power Trowel with double 36-inch blades, 1820mm working width. 60-140 RPM speed. Ideal for warehouse & industrial floors. 25+ years trusted in South India. Get a quote!",
  openGraph: {
    title: "Ride On Power Trowel for Large Concrete Floors | Hutaib Machinery",
    description: "Buy Ride On Power Trowel in Bengaluru from Hutaib Machinery. Double 36\" blades, 1820mm width. Free installation across South India. Request pricing now.",
    images: ["/images/products/power-trowel-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ride On Power Trowel - Double 36\" Concrete Finishing Machine | Hutaib Machinery",
    description: "Ride On Power Trowel with double 36-inch blades, 1820mm working width. 60-140 RPM speed. Ideal for warehouse & industrial floors. Get a quote!",
    images: ["/images/products/power-trowel-main.webp"],
  },
  keywords: "ride on power trowel, concrete finishing machine, power trowel machine, floor finishing machine, concrete trowel, power trowel price, ride on trowel Bengaluru, concrete finisher Chennai, floor polisher Hyderabad, industrial floor finishing, warehouse floor, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/ride-on-power-trowel"
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
    "name": "Ride On Power Trowel QUM80",
    "description": "Professional Ride On Power Trowel with double 36-inch blades and 1820mm working width for efficient large-area concrete floor finishing. Features 60-140 RPM adjustable blade speed for different finishing stages.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/power-trowel-main.webp",
      "https://www.hutaibmachinery.com/images/products/power-trowel-1.webp",
      "https://www.hutaibmachinery.com/images/products/power-trowel-2.webp",
      "https://www.hutaibmachinery.com/images/products/power-trowel-3.webp"
    ],
    "sku": "HM-QUM80",
    "mpn": "QUM80-2024",
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
      "url": "https://www.hutaibmachinery.com/product/ride-on-power-trowel",
      "priceCurrency": "INR",
      "price": "320000",
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
      "ratingValue": "4.8",
      "reviewCount": "45"
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
        "name": "Ride On Power Trowel",
        "item": "https://www.hutaibmachinery.com/product/ride-on-power-trowel"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the working width of this power trowel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The double 36-inch blades provide a 1820mm working width, allowing efficient coverage of large concrete floor areas in fewer passes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the blade speed range?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blade speed is adjustable from 60 to 140 RPM, allowing operators to optimize for different finishing stages from floating to burnishing."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for warehouse floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the ride-on design is specifically made for large warehouse, industrial, and commercial floor finishing projects where efficiency is crucial."
        }
      },
      {
        "@type": "Question",
        "name": "What engine type does it use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's powered by an air-cooled 4-cycle gasoline engine for reliable performance on construction sites."
        }
      },
      {
        "@type": "Question",
        "name": "Does Hutaib Machinery provide installation and training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free on-site installation and comprehensive operator training across South India to ensure your team can operate the machine efficiently and safely from day one."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Ride On Power Trowel comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in power trowels, concrete finishing equipment, and floor finishing machinery.",
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

