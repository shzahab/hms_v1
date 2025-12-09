import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Concrete Mixer 250L 2HP Indian Motor | ₹58,000 | HMS",
  description: "Buy 250L Concrete Mixer with 2HP Indian Motor at ₹58,000. Premium build quality, heavy-duty frame. Made in India motor for reliable performance. 6-month warranty.",
  openGraph: {
    title: "Concrete Mixer 250L 2HP Indian Motor | Heavy Duty | HMS",
    description: "Premium 250L cement mixer with 2HP Indian motor. Heavy-duty construction for professional contractors. Built to last with Indian manufacturing quality.",
    images: ["/images/products/concrete-mixer-250l-indian-main.webp"],
  },
  keywords: "250L concrete mixer, 2HP cement mixer, Indian motor mixer, heavy duty concrete mixer, professional construction mixer, made in India mixer",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/concrete-mixer-250l-2hp-indian-motor"
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
    "name": "Concrete Mixer 250L 2HP Indian Motor",
    "description": "Premium concrete mixer with 250-liter drum capacity and 2HP Indian-made motor. Heavy-duty construction for professional contractors across South India.",
    "sku": "HM-CM-250-2HP-IND",
    "mpn": "CM250-2HP-IND-2024",
    "brand": {
      "@type": "Brand",
      "name": "HMS Machinery"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-250l-indian-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-250l-indian-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-mixer-250l-indian-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/concrete-mixer-250l-2hp-indian-motor",
      "price": "58000",
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
      "reviewCount": "64"
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
          "@id": "https://www.hutaibmachinery.com/product/concrete-mixer-250l-2hp-indian-motor",
          "name": "Concrete Mixer 250L 2HP Indian Motor"
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
        "name": "Why is the 250L 2HP model more expensive than larger 280L models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ₹58,000 price reflects premium construction - heavier gauge steel frame, quality Indian-made 2HP motor, better bearings, and components built for professional heavy-duty use. It's designed for contractors who need durability over years of daily operation."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Indian motors better for Indian conditions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian-made motors are designed specifically for Indian voltage conditions (220V with fluctuations), dust and humidity levels, and available spare parts. They handle voltage variations better and parts are readily available across the country."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable for commercial construction sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 2HP motor and heavy-duty construction make this ideal for continuous commercial use. The robust frame handles daily site conditions, and the more powerful motor provides faster, more thorough mixing."
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
    "description": "Authorized dealer for concrete mixers in South India since 1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 78, N. R. Road, Kalasipalyam",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560002",
      "addressCountry": "IN"
    },
    "telephone": "+91-9886474441",
    "priceRange": "₹₹₹",
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

