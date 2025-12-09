import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Ring Making Machine 32mm - Stirrup Bender | Hutaib Machinery",
  description: "High-performance Ring Making Machine for stirrups & spirals. 16-32mm capacity, 5-10 rings/min. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Ring Making Machine for South Indian Construction | Hutaib Machinery",
    description: "Buy Ring Making Machine in Bengaluru from Hutaib Machinery. 16-32mm steel capacity, automatic stirrup production. Free installation across South India. Request pricing now.",
    images: ["/images/products/ring-making-machine-main.webp"],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ring Making Machine 32mm - Stirrup Bender | Hutaib Machinery",
    description: "High-performance Ring Making Machine for stirrups & spirals. 16-32mm capacity, 5-10 rings/min. 1-year warranty. Get a quote today!",
    images: ["/images/products/ring-making-machine-main.webp"],
  },
  keywords: "ring making machine, spiral machine, stirrup bending machine, rebar ring bender, steel ring maker, stirrup machine price, ring bender machine Bengaluru, ring making machine Chennai, spiral bending machine Hyderabad, construction equipment, rebar stirrup maker, automatic ring maker, Hutaib Machinery",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/ring-making-machine-spiral-machine"
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
    "name": "Ring Making Machine / Spiral Machine 32mm",
    "description": "Professional ring making machine for creating stirrups and spirals from 16-32mm steel bars. Features adjustable diameter settings and 5-10 rings per minute production speed for construction projects across South India.",
    "image": [
      "https://www.hutaibmachinery.com/images/products/ring-making-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/ring-making-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/ring-making-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/ring-making-machine-3.webp"
    ],
    "sku": "HM-GWH32E",
    "mpn": "GWH32E-2024",
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
      "url": "https://www.hutaibmachinery.com/product/ring-making-machine-spiral-machine",
      "priceCurrency": "INR",
      "price": "75000",
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
      "ratingValue": "4.7",
      "reviewCount": "52"
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
        "name": "Ring Making Machine",
        "item": "https://www.hutaibmachinery.com/product/ring-making-machine-spiral-machine"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What steel bar diameters can this ring making machine handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This machine can bend round steel bars from 16-32mm diameter and HRB400 ribbed steel from 16-28mm diameter, covering all standard stirrup sizes used in Indian construction."
        }
      },
      {
        "@type": "Question",
        "name": "What is the production speed of this stirrup bending machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine operates at 5-10 rings per minute depending on the material diameter and ring size, significantly faster than manual stirrup production."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum ring diameter this machine can produce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine can produce rings with working diameter greater than 300mm. Adjustable diameter settings allow creating various ring sizes for different column and beam requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty and support is included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every machine includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999. Specializing in ring making machines, stirrup benders, and rebar processing equipment.",
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

