
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="bg-muted rounded-lg overflow-hidden">
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {product.gallery && product.gallery.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`rounded-md overflow-hidden border-2 ${
                      mainImage === image ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-auto object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Description</h2>
                <p className="text-muted-foreground">{product.fullDescription}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Key Features</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features && product.features.map((feature: string, index: number) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Specifications</h2>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-border">
                    <tbody className="divide-y divide-border">
                      {product.specifications && product.specifications.map((spec: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                          <td className="px-4 py-2 font-medium">{spec.label}</td>
                          <td className="px-4 py-2 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2">Interested in this product?</h3>
                <Link href="/contact" className="inline-block">
                  <Button size="lg">Contact Us</Button>
                </Link>
                
                {product.brochureUrl && (
                  <Link href={product.brochureUrl} className="inline-block ml-4">
                    <Button variant="outline" size="lg">Download Brochure</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {otherProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {otherProducts.map((otherProduct: any) => (
                  <Link href={`/product/${createSlug(otherProduct.name)}`} key={otherProduct.id}>
                    <div className="group bg-card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                      <div className="aspect-square bg-muted overflow-hidden">
                        <Image
                          src={otherProduct.mainImage}
                          alt={otherProduct.name}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                          {otherProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {otherProduct.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  );
}
