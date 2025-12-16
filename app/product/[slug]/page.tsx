import { Metadata } from "next";
import Image from "next/image";
import ProductImage from "@/components/product-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import productsData from "@/app/data/products.json";
import categoriesData from "@/app/data/categories.json";
import HeroSection from "./components/hero-section";
import SpecificationsSection from "./components/specifications-section";
import ApplicationsSection from "./components/applications-section";
import BenefitsSection from "./components/benefits-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import ProductTabs from "./product-tabs";

interface Product {
  id: number;
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  price: string;
  paymentLink: string;
  fullDescription: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  category: string;
  specifications: { label: string; value: string }[];
  brochureUrl: string;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  applications?: string[];
  faq?: { question: string; answer: string }[];
}

function getProduct(slug: string): Product | undefined {
  return productsData.products.find((p) => p.slug === slug) as Product | undefined;
}

function getRelatedProducts(currentSlug: string, categorySlug: string): Product[] {
  // Get products from the same category, excluding current product
  const categoryProducts = productsData.products.filter(
    (p) => p.categorySlug === categorySlug && p.slug !== currentSlug
  ) as Product[];

  // If not enough, add random products
  if (categoryProducts.length < 4) {
    const otherProducts = productsData.products.filter(
      (p) => p.slug !== currentSlug && !categoryProducts.find((cp) => cp.slug === p.slug)
    ) as Product[];
    return [...categoryProducts, ...otherProducts].slice(0, 4);
  }

  return categoryProducts.slice(0, 4);
}

function getCategoryName(categorySlug: string): string {
  const category = categoriesData.categories.find((c) => c.slug === categorySlug);
  return category?.name || "Products";
}

// Products with dedicated SEO-optimized pages (exclude from dynamic route)
const DEDICATED_PRODUCT_PAGES = [
  'bar-bending-machine',
  'bar-rebar-cutting-machine',
  'concrete-cutting-machine',
  'ring-making-machine-spiral-machine',
  'building-material-hoist',
  'concrete-vibrator',
  'scrap-straightening-machine',
  'concrete-mixer',
  'road-rollers',
  'plate-compactors',
  'cnc-steel-bar-bender-machine',
  'threading-machine',
  'ride-on-power-trowel',
  'floaters',
  'tamping-rammer',
  'gf20-single-phase-bar-bending-machine',
  'gf20-three-phase-bar-bending-machine',
  'gf25-single-phase-bar-bending-machine',
  'gf25-three-phase-bar-bending-machine',
  'gw42-three-phase-bar-bending-machine',
  'gw52-three-phase-bar-bending-machine',
  'gute-bar-bending-machine',
  'hms-made-in-india-bar-bending-machine',
  'nrb32-portable-bar-bending-machine',
  'walk-behind-double-drum-roller-greaves-10hp-3ton',
  'walk-behind-double-drum-roller-chungfa-10hp-3ton',
  'walk-behind-single-drum-roller-honda-gx390-1-5ton',
];

// Disable dynamic params - only pre-defined slugs will work
export const dynamicParams = false;

export async function generateStaticParams() {
  // Only generate params for products WITHOUT dedicated pages
  const dynamicProducts = productsData.products
    .filter((product) => !DEDICATED_PRODUCT_PAGES.includes(product.slug))
    .map((product) => ({
      slug: product.slug,
    }));
  
  // If all products have dedicated pages, return a placeholder to satisfy Next.js
  // This route won't actually be used since all products have dedicated folders
  if (dynamicProducts.length === 0) {
    return [{ slug: '_placeholder' }];
  }
  
  return dynamicProducts;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | HMS Machinery",
    };
  }

  const seoTitle = product.seo?.title || `${product.name} | HMS Machinery`;
  const seoDescription =
    product.seo?.description ||
    `Buy ${product.name} at best prices. ${product.shortDescription} Free delivery across India.`;
  const seoKeywords = product.seo?.keywords?.join(", ") || product.name;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [product.mainImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [product.mainImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug, product.categorySlug);
  const categoryName = getCategoryName(product.categorySlug);

  // JSON-LD structured data for product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription,
    image: `https://www.hutaibmachinery.com${product.mainImage}`,
    brand: {
      "@type": "Brand",
      name: "HMS Machinery",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.hutaibmachinery.com/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "HMS Machinery and Spares",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  // FAQ structured data
  const faqJsonLd = product.faq && product.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hutaibmachinery.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `https://www.hutaibmachinery.com/category/${product.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.hutaibmachinery.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        <main className="pt-4 md:pt-[100px] pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumbs */}
            <div className="flex justify-center mb-6">
              <Breadcrumbs />
            </div>

            {/* Product Title */}
            <div className="mb-8">
              <Link
                href={`/category/${product.categorySlug}`}
                className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
              >
                ← Back to {categoryName}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mt-2">{product.shortDescription}</p>
            </div>

            {/* Hero Section */}
            <HeroSection
              name={product.name}
              description={product.fullDescription}
              mainImage={product.mainImage}
              features={product.features}
              paymentLink={product.paymentLink}
              price={product.price}
            />

            {/* Product Tabs */}
            <ProductTabs
              product={product}
              relatedProducts={relatedProducts}
            />

            {/* Testimonials Section */}
            <section className="bg-white rounded-lg shadow-lg mb-12 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Customer Reviews
              </h2>
              <TestimonialsSection productName={product.name} />
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-lg shadow-lg mb-12 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <FAQSection faqs={product.faq || []} productName={product.name} />
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      href={`/product/${relatedProduct.slug}`}
                      key={relatedProduct.id}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                        <div className="aspect-square bg-white overflow-hidden relative">
                          <ProductImage
                            src={relatedProduct.mainImage}
                            alt={relatedProduct.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            productName={relatedProduct.name}
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
                            {relatedProduct.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-gray-900 mb-2">
                            {relatedProduct.price}
                          </p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                          >
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Order Your {product.name}?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Get in touch with our team for the best prices and expert guidance
                on selecting the right equipment for your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918074949635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919886474441"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Call: +91 9886474441
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

