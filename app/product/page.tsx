
import { productsData } from "../data/products.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <div key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
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
                <p className="text-sm text-gray-600 mb-4">
                  {product.shortDescription}
                </p>
                <Link href={`/product/${createSlug(product.name)}`}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm font-medium text-primary group-hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
