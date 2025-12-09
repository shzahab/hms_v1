import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumb";
import BuyNowButton from "@/components/buy-now-button";
import productsData from "@/app/data/products.json";
import categoriesData from "@/app/data/categories.json";

export const metadata: Metadata = {
  title: "All Products | Construction Machinery | HMS Machinery",
  description:
    "Browse our complete range of construction machinery and equipment. Bar bending machines, concrete mixers, road rollers, and more. Best prices with pan-India delivery.",
  keywords:
    "construction machinery, construction equipment, bar bending machine, concrete mixer, road roller, HMS machinery products",
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
}

export default function ProductsPage() {
  const products = productsData.products as Product[];
  const categories = categoriesData.categories as Category[];

  // Group products by category
  const productsByCategory = categories.map((category) => ({
    category,
    products: products.filter((p) => p.categorySlug === category.slug),
  }));

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HMS Machinery Products",
    description: "Complete range of construction machinery and equipment",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.shortDescription,
        url: `https://www.hutaibmachinery.com/product/${product.slug}`,
        image: `https://www.hutaibmachinery.com${product.mainImage}`,
        offers: {
          "@type": "Offer",
          price: product.price.replace(/[^0-9]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />

        <main className="pt-4 md:pt-[100px]">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-4">
                <Breadcrumbs />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Our Products
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  Explore our complete range of high-quality construction
                  machinery and equipment. Trusted by contractors across India.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    {products.length} Products
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    Free Shipping Available
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Category Quick Links */}
          <section className="py-8 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Products by Category */}
          <div className="container mx-auto px-4 py-12">
            {productsByCategory.map(
              ({ category, products: categoryProducts }) =>
                categoryProducts.length > 0 && (
                  <section key={category.id} className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.name}
                      </h2>
                      <Link
                        href={`/category/${category.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                      >
                        View All <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categoryProducts.map((product) => (
                        <div
                          key={product.id}
                          className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                          <Link
                            href={`/product/${product.slug}`}
                            className="block"
                          >
                            <div className="aspect-square bg-gray-100 overflow-hidden">
                              <Image
                                src={product.mainImage}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </Link>
                          <div className="p-5">
                            <Link href={`/product/${product.slug}`}>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {product.shortDescription}
                            </p>
                            <p className="text-xl font-bold text-gray-900 mb-4">
                              {product.price}
                            </p>
                            <div className="space-y-3">
                              {product.paymentLink && (
                                <BuyNowButton
                                  paymentLink={product.paymentLink}
                                  className="w-full h-[40px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                                />
                              )}
                              <Link
                                href={`/product/${product.slug}`}
                                className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                              >
                                View Details{" "}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )
            )}
          </div>

          {/* CTA Section */}
          <section className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can&apos;t Find What You Need?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team for custom requirements or bulk orders. We can
                source specific machinery based on your project needs.
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
