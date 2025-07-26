import productsData from "@/app/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BuyNowButton from "@/components/buy-now-button";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.products.map((product) => (
            <Link href={`/product/${createSlug(product.name)}`} key={product.id} className="block group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {product.shortDescription}
                </p>
                <p className="text-lg font-bold text-gray-900 mb-4">
                  {product.price}
                </p>
                <div className="space-y-3">
                  {product.paymentLink && (
                    <BuyNowButton 
                      paymentLink={product.paymentLink}
                      className="w-full h-[36px] bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    />
                  )}
                  <div className="flex items-center justify-center text-sm font-medium text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}