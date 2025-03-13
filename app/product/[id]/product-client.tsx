"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumb";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ProductClient({ product, otherProducts }: any) {
  const [mainImage, setMainImage] = useState(product.mainImage);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
        <div className="container mx-auto px-5">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <Image
                src={mainImage}
                alt={product.name}
                width={600}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
              <h2 className="text-2xl font-semibold mt-6">Product Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {product.gallery.map((image: string, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full rounded-lg shadow cursor-pointer hover:opacity-80 transition"
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <p className="text-2xl font-semibold text-green-600 mb-2">
                Starting from {product.price}
              </p>
              <p className="text-gray-700 mb-4">{product.fullDescription}</p>

              {/* Specifications */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Product Specifications
                </h2>
                <table className="w-full border border-gray-300 bg-white rounded-lg shadow">
                  <tbody>
                    {product.specifications.map((spec: any, index: number) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 text-sm sm:text-base"
                      >
                        <td className="p-3 font-semibold text-gray-700 border-r border-gray-300">
                          {spec.label}
                        </td>
                        <td className="p-3 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="/hms-brochure.pdf"
                  download="HMS-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-[30px] font-sembold shadow hover:bg-green-700 transition-all"
                >
                  📄 Download Brochure
                </a>
                <ShimmerButton className="shadow-2xl">
                  <span className="text-sm font-medium tracking-tight text-white lg:text-lg">
                    Request a Quote
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </div>

          {/* Other Products Section */}
          <h2 className="text-2xl font-semibold mt-12">Other Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {otherProducts.map((p: any) => (
              <div key={p.id} className="group ease-in duration-75 hover:bg-gray-100 rounded-lg p-2 ">
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden ">
                  <Image
                    src={p.mainImage}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {p.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">
                  {p.shortDescription}
                </p>
                <Link href={`/product/${createSlug(p.name)}`}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm sm:text-base font-medium text-primary group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  );
}
