
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumb";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const tabs = [
  { id: "description", label: "Description" },
  { id: "specifications", label: "Specifications" },
  { id: "benefits", label: "Benefits" },
  { id: "applications", label: "Applications" },
];

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ProductClient({ product, otherProducts }: any) {
  const [activeTab, setActiveTab] = useState("description");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="mt-16 sm:mt-24">
        <div className="flex justify-center">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Product Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 font-medium">{product.shortDescription}</p>
          </div>

          {/* Product Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600">{product.fullDescription}</p>
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                <div className="space-x-4">
                  <a
                    href={product.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    📄 Download Brochure
                  </a>
                  <ShimmerButton 
                    className="shadow-2xl"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/919740035153', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white lg:text-lg">
                      Get Quote
                    </span>
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-12">
            <div className="md:hidden border-b border-gray-200">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-left bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100 hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-base font-semibold text-blue-900 flex items-center">
                  <span className="mr-2">📑</span>
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-180' : 'animate-bounce'}`}
                />
              </button>
              {isMenuOpen && (
                <div className="border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-800"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden md:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                        ${
                          activeTab === tab.id
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-gray-600">{product.fullDescription}</p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec: any, index: number) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "benefits" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "applications" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.gallery.slice(0, 4).map((image: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white shadow rounded-lg overflow-hidden"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={image}
                          alt={`${product.name} application ${index + 1}`}
                          className="object-cover"
                          fill
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map((relatedProduct: any) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${createSlug(relatedProduct.name)}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.mainImage}
                        alt={relatedProduct.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedProduct.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
