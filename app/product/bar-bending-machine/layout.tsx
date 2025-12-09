
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Bar Bending Machine 42mm - Precision Rebar | Hutaib",
  description: "High-performance Bar Bender with 0-180° capacity. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
  openGraph: {
    title: "Bar Bending Machine 42mm - Precision Rebar Forming | Hutaib Machinery",
    description: "High-performance Bar Bender with 0-180° capacity. 1-year warranty. 25+ years trusted supplier in South India. Get a quote today!",
    images: ["/images/products/bar-bending-machine-1.webp"],
  },
  keywords: "bar bending machine, rebar bender Bengaluru, construction equipment South India, bar bending machine Chennai, steel bar bending Hyderabad, reinforcement bar bender Karnataka, TMT bar bending machine, construction machinery Tamil Nadu, bar bender dealer India, automatic bar bending machine, rebar bending equipment Kerala, steel fabrication machine, civil engineering equipment, industrial bending machine Telangana",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/bar-bending-machine"
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
    "name": "Bar Bending Machine 42mm",
    "description": "Professional-grade Bar Bending Machine with 0-180° capacity, digital controls, and dual operation modes. Perfect for construction and industrial applications across South India.",
    "sku": "HM-BB-42",
    "mpn": "BB42-2024",
    "brand": {
      "@type": "Brand",
      "name": "Hutaib Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/bar-bending-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/bar-bending-machine-2.webp",
      "https://www.hutaibmachinery.com/images/products/bar-bending-machine-3.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/bar-bending-machine",
      "price": "80000",
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
      "ratingValue": "4.8",
      "reviewCount": "32"
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
          "@id": "https://www.hutaibmachinery.com/product",
          "name": "Products"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/bar-bending-machine",
          "name": "Bar Bending Machine"
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
        "name": "What TMT bar grades can this machine bend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bar bending machine handles all standard Indian TMT grades including Fe415, Fe500, Fe500D, and Fe550D, with consistent performance across varying steel hardness levels up to 42mm diameter."
        }
      },
      {
        "@type": "Question",
        "name": "What is the power requirement for installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine requires a 3-phase, 415V, 50Hz power supply. Our installation team assesses your site's electrical infrastructure before delivery across South India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time to Chennai/Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery to major South Indian cities like Chennai, Hyderabad, and Bengaluru takes 5-7 working days. Express delivery is available for urgent requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide operator training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every purchase includes free on-site training for 2-3 operators covering machine operation, basic maintenance, and safety procedures across Karnataka, Tamil Nadu, Kerala, and Telangana."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/IndustrialBusiness",
    "name": "Hutaib Machinery and Spares",
    "image": "https://www.hutaibmachinery.com/images/logo.png",
    "url": "https://www.hutaibmachinery.com",
    "description": "Industrial machinery and construction equipment supplier serving South India since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 78, N. R. Road, Kalasipalyam",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560002",
      "addressCountry": "IN"
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
