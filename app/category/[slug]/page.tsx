import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumb";
import BuyNowButton from "@/components/buy-now-button";
import ProductImage from "@/components/product-image";
import categoriesData from "@/app/data/categories.json";
import productsData from "@/app/data/products.json";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  order: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  benefits: {
    title: string;
    description: string;
  }[];
  featured: boolean;
}

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

function getCategory(slug: string): Category | undefined {
  return categoriesData.categories.find((cat) => cat.slug === slug) as Category | undefined;
}

function getCategoryProducts(categorySlug: string): Product[] {
  return productsData.products.filter(
    (product) => product.categorySlug === categorySlug
  ) as Product[];
}

export async function generateStaticParams() {
  return categoriesData.categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {
      title: "Category Not Found | HMS Machinery",
    };
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords.join(", "),
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const products = getCategoryProducts(slug);

  // JSON-LD structured data for category
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `https://www.hutaibmachinery.com/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
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
    },
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
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-4">
                <Breadcrumbs />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  {category.name}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    {products.length} Products Available
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    Free Shipping Available
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          {category.benefits && category.benefits.length > 0 && (
            <section className="py-12 md:py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                  Why Choose Our {category.name}?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm pl-9">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Products Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Browse {category.name}
              </h2>

              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        className="block"
                      >
                        <div className="aspect-square bg-gray-100 overflow-hidden relative">
                          <ProductImage
                            src={product.mainImage}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            productName={product.name}
                          />
                        </div>
                      </Link>
                      <div className="p-3 md:p-5">
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3 line-clamp-2">
                          {product.shortDescription}
                        </p>
                        <p className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                          {product.price}
                        </p>
                        <div className="space-y-2 md:space-y-3">
                          {product.paymentLink && (
                            <BuyNowButton
                              paymentLink={product.paymentLink}
                              className="w-full h-[32px] md:h-[40px] bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm px-4 md:px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                            />
                          )}
                          <Link
                            href={`/product/${product.slug}`}
                            className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                          >
                            View Details{" "}
                            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <p className="text-gray-600 text-lg">
                    No products available in this category yet.
                  </p>
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Browse all products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  About {category.name} from HMS Machinery
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At HMS Machinery and Spares, we are committed to providing
                  high-quality construction equipment that meets the demands of
                  modern construction projects. Our {category.name.toLowerCase()}{" "}
                  are sourced from trusted manufacturers and undergo rigorous
                  quality checks to ensure reliability and performance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re a contractor, builder, or construction company,
                  our range of products offers solutions for projects of all
                  sizes. Contact us today to discuss your requirements and get
                  expert advice on selecting the right equipment for your needs.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help Choosing the Right Equipment?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our experts are here to help you find the perfect machinery for
                your construction project. Get personalized recommendations and
                competitive quotes.
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

