"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SpecificationsSection from "./components/specifications-section";
import ApplicationsSection from "./components/applications-section";
import BenefitsSection from "./components/benefits-section";

interface Product {
  id: number;
  slug: string;
  name: string;
  fullDescription: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  applications?: string[];
}

interface ProductTabsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "benefits", label: "Benefits" },
    { id: "applications", label: "Applications" },
  ];

  // Default applications if none provided
  const applications = product.applications || [
    "Construction and infrastructure projects",
    "Manufacturing and fabrication",
    "Heavy engineering applications",
    "Industrial and commercial use",
    "Residential construction",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg mb-12">
      {/* Mobile Dropdown */}
      <div className="md:hidden border-b border-gray-200">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-between w-full px-4 py-4 text-left bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100 hover:bg-blue-50 transition-all duration-300"
        >
          <span className="text-base font-semibold text-blue-900 flex items-center">
            <span className="mr-2">📑</span>
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </span>
          <ChevronDown
            className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
              isMenuOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
        {isMenuOpen && (
          <div className="border-t border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full px-4 py-3 text-left text-base ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-colors flex-1 md:flex-none md:px-8`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Contents */}
      <div className="p-8">
        {activeTab === "description" && (
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {product.name} - Product Overview
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Key Features of {product.name}
                </h3>
                <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why Choose HMS {product.name}?
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At HMS Machinery and Spares, we are committed to delivering
                  high-quality construction equipment that meets the demanding
                  requirements of modern construction projects. Our {product.name}{" "}
                  is designed for reliability, efficiency, and ease of use,
                  making it an ideal choice for contractors, builders, and
                  construction companies across India.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every {product.name} from HMS undergoes rigorous quality testing
                  to ensure optimal performance and durability. We source
                  components from trusted suppliers and maintain strict quality
                  control standards throughout the manufacturing process.
                </p>
              </div>

              {/* Gallery */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Product Gallery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.gallery.slice(0, 3).map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`${product.name} View ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "specifications" && (
          <SpecificationsSection
            specifications={product.specifications}
            productName={product.name}
          />
        )}

        {activeTab === "benefits" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Benefits of {product.name}
            </h2>
            <BenefitsSection
              productName={product.name}
              features={product.features}
            />
          </div>
        )}

        {activeTab === "applications" && (
          <ApplicationsSection
            applications={applications}
            productName={product.name}
            images={product.gallery || [product.mainImage]}
          />
        )}
      </div>
    </div>
  );
}

