import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "5HP Greaves Diesel Concrete Cutting Machine | ₹55,000 | HMS",
  description: "Buy 5HP Greaves Diesel Concrete Cutting Machine at ₹55,000. Entry-level diesel-powered floor saw with 240mm cutting depth. Ideal for small contractors. 6-month warranty. Fast delivery across South India.",
  openGraph: {
    title: "5HP Greaves Diesel Concrete Cutting Machine | Best Price India",
    description: "Affordable diesel concrete cutter with Greaves 5HP engine. 240mm depth, wet cutting system. Perfect for road joints & floor cutting projects.",
    images: ["/images/products/concrete-cutting-machine-main.webp"],
  },
  keywords: "5HP concrete cutting machine, Greaves diesel concrete cutter, floor saw price India, road cutting machine price, concrete cutter 5HP, diesel concrete cutting machine, Greaves engine concrete cutter, groove cutting machine, expansion joint cutter, affordable concrete saw",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.hutaibmachinery.com/product/5hp-greaves-diesel-concrete-cutting-machine"
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
    "name": "5HP Greaves Diesel Concrete Cutting Machine",
    "description": "Entry-level diesel-powered concrete cutting machine with Greaves 5HP engine. Features 240mm maximum cutting depth, wet cutting system, and precision depth adjustment for road joints and floor cutting.",
    "sku": "HM-CCM-5HP-GREAVES",
    "mpn": "CCM-5HP-GRV-2024",
    "brand": {
      "@type": "Brand",
      "name": "Greaves"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Hutaib Machinery and Spares"
    },
    "image": [
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-main.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-1.webp",
      "https://www.hutaibmachinery.com/images/products/concrete-cutting-machine-2.webp"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://www.hutaibmachinery.com/product/5hp-greaves-diesel-concrete-cutting-machine",
      "price": "55000",
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
      "ratingValue": "4.5",
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
          "@id": "https://www.hutaibmachinery.com/product/concrete-cutting-machine",
          "name": "Concrete Cutting Machines"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://www.hutaibmachinery.com/product/5hp-greaves-diesel-concrete-cutting-machine",
          "name": "5HP Greaves Diesel Concrete Cutting Machine"
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
        "name": "What is the cutting depth of the 5HP Greaves concrete cutter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 5HP Greaves diesel concrete cutting machine offers a maximum cutting depth of 240mm, suitable for most road joints, expansion joints, and floor cutting applications in residential and light commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose diesel over petrol for concrete cutting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diesel engines offer better fuel economy, higher torque at low RPM for consistent cutting, and lower running costs. The Greaves 5HP diesel engine is known for reliability and easy maintenance in Indian conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 5HP Greaves concrete cutter suitable for road work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 5HP Greaves model is ideal for small to medium road projects including expansion joints, control joints, and pavement repairs. For heavy-duty continuous road work, consider our 10HP or 13HP models."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty is provided with this machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The machine comes with a 6-month warranty covering manufacturing defects. The Greaves engine has separate warranty support through authorized Greaves service centers across India."
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
    "description": "Authorized dealer for concrete cutting machines with Greaves engines in South India since 1999",
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
    "priceRange": "₹₹",
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

