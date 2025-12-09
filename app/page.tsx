import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsData from "@/app/data/products.json";
import categoriesData from "@/app/data/categories.json";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BuyNowButton from "@/components/buy-now-button";

export const metadata: Metadata = {
  title: "HMS Machinery and Spares | Construction Equipment Specialists",
  description:
    "HMS Machinery and Spares offers high-quality construction machinery and equipment. Bar bending machines, concrete mixers, road rollers, and more. Serving contractors across India.",
  keywords:
    "construction machinery, bar bending machine, concrete mixer, road roller, HMS machinery, construction equipment India",
  openGraph: {
    title: "HMS Machinery and Spares | Construction Equipment Specialists",
    description:
      "High-quality construction machinery and equipment for efficient construction solutions.",
    images: [
      {
        url: "/images/products/bar-bending-machine-main.webp",
        width: 1200,
        height: 630,
        alt: "HMS Machinery and Spares",
      },
    ],
  },
};

interface Product {
  id: number;
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  price: string;
  paymentLink: string;
  mainImage: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
}

export default function HomePage() {
  const products = productsData.products as Product[];
  const categories = categoriesData.categories as Category[];

  // JSON-LD structured data for organization
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HMS Machinery and Spares",
    url: "https://www.hutaibmachinery.com",
    logo: "https://www.hutaibmachinery.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9886474441",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Header />

        <main className="pt-4 md:pt-[100px] pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  Hutaib Machinery and Spares
                </h1>
                <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                  With over two decades of experience, Hutaib Machinery and Spares has been at the forefront of industrial innovation. We specialize in providing high-quality machinery and spare parts that drive efficiency and productivity across various industries. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses worldwide.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Browse Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Shop by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="group p-4 md:px-6 md:py-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 text-sm md:text-base">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                      {category.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* All Products Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Our Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product.id}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <p className="text-xl font-bold text-gray-900 mb-4">
                        {product.price}
                      </p>
                      <div className="space-y-3 mt-auto">
                        {product.paymentLink && (
                          <BuyNowButton
                            paymentLink={product.paymentLink}
                            className="w-full h-[40px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                          />
                        )}
                        <Button
                          variant="link"
                          className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose HMS Machinery?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    20+ Years Experience
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Trusted by contractors across India for over two decades
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality Assured
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Rigorous quality testing on every machine we sell
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pan-India Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fast and reliable shipping to all major cities
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Expert Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dedicated after-sales service and technical assistance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Custom Solutions?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We specialize in tailoring our products to meet your specific
                requirements. Contact us to discuss how we can help optimize
                your construction operations.
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
