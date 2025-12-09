import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 500L 6HP Kirloskar Diesel Full Bag | ₹1,30,000 | HMS",
  description: "Buy 500L Full Bag Concrete Mixer with 6HP Kirloskar Diesel Engine at ₹1,30,000. True 1-bag capacity. Works without electricity. Trusted Kirloskar engine. 6-month warranty.",
  openGraph: {
    title: "Concrete Mixer 500L 6HP Kirloskar Diesel | Full Bag | HMS",
    description: "Professional 500L full-bag cement mixer powered by reliable Kirloskar 6HP diesel engine. Maximum capacity for commercial and infrastructure projects.",
    images: ["/images/products/concrete-mixer-500l-kirloskar-main.webp"],
  },
  keywords: "500L concrete mixer, 6HP Kirloskar diesel mixer, full bag mixer, 1 bag concrete mixer, diesel cement mixer, commercial concrete mixer, Kirloskar engine mixer",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer-500l-6hp-kirloskar-diesel"
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
    "name": "Concrete Mixer 500L 6HP Kirloskar Diesel Full Bag",
    "description": "Professional full-bag concrete mixer with 500-liter drum capacity powered by reliable Kirloskar 6HP diesel engine. Maximum capacity for commercial and infrastructure projects.",
    "sku": "HM-CM-500-KIRLOSKAR",
    "mpn": "CM500-KIRLOSKAR-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-500l-kirloskar-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-500l-kirloskar-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-500l-kirloskar-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer-500l-6hp-kirloskar-diesel",
      "price": "130000",
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
        "item": {
          "@id": "https://www.hutaibmachinery.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.hutaibmachinery.com/category/concrete-mixers",
          "name": "Concrete Mixers"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/concrete-mixer-500l-6hp-kirloskar-diesel",
          "name": "Concrete Mixer 500L 6HP Kirloskar Diesel"
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
        "name": "What is the actual mixing capacity of this 500L mixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 500L drum produces approximately 350-400 liters of mixed concrete per batch - true full 1-bag (50kg cement) capacity. This is the standard for commercial and infrastructure projects."
        }
      },
      {
        "@type": "Question",
        "name": "Why Kirloskar engine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kirloskar is India's most trusted diesel engine brand with nationwide service network. Parts are available everywhere, mechanics know the engines, and reliability is proven over decades. For construction equipment, Kirloskar is the gold standard."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fuel consumption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 6HP Kirloskar diesel engine consumes approximately 1-1.5 liters of diesel per hour under normal mixing load. Actual consumption varies based on mix thickness and continuous operation."
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
    "description": "Authorized dealer for Kirloskar engine concrete mixers in South India since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 78, N. R. Road, Kalasipalyam",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560002",
      "addressCountry": "IN"
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

