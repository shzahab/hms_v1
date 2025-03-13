"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight, ChevronDown } from "lucide-react";
import productsData from "@/app/data/products.json";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";
import Breadcrumbs from "@/components/Breadcrumb";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BarBendingMachinePage() {
  const [activeTab, setActiveTab] = useState("description");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "benefits", label: "Benefits" },
    { id: "applications", label: "Applications" },
  ];

  // Get random products excluding the current one
  const otherProducts = productsData.products
    .filter(p => p.name !== "Bar / Rebar Bending Machine")
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-24 sm:mt-32 md:mt-40 pb-16">
      <div className="ml-[150px] md:ml-[50px] sm:ml-0 sm:flex sm:justify-center">
  <Breadcrumbs />
</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Product Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              HMS Bar Bending Machine
            </h1>
            <p className="text-xl text-gray-600 font-medium">Precision, Efficiency & Reliability</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/images/products/bar-bending-machine-main.webp"
                alt="HMS Bar Bending Machine - High Precision Steel Rebar Bending Equipment"
                width={600}
                height={400}
                className="w-full object-cover rounded"
                priority
              />
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Revolutionizing Construction with Advanced Bending Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The <strong>HMS Bar Bending Machine</strong> is a cutting-edge tool designed for{" "}
                <strong>precision, efficiency, and durability</strong>. It streamlines{" "}
                <strong>steel bar and rebar bending</strong>, making it essential for{" "}
                <strong>high-rise buildings, bridges, highways, and infrastructure projects</strong>.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Advantages of Our Machines:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li><strong>Unmatched Reliability</strong> – Designed for heavy-duty applications with reinforced components</li>
                  <li><strong>Precision Bending</strong> – Supports multiple bar diameters with high accuracy</li>
                  <li><strong>Advanced Safety Features</strong> – Includes hold-button control for safe operation</li>
                  <li><strong>Customization Options</strong> – Tailor the machine to your specific requirements</li>
                  <li><strong>Robust Build & Longevity</strong> – Engineered for low maintenance and extended service life</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features and Performance:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li><strong>Versatile Bending Capabilities</strong> – Handles multiple steel bar sizes and supports various materials</li>
                  <li><strong>Customizable Bending Angles</strong> – Adjustable from 0° to 180°</li>
                  <li><strong>High-Precision Digital Control Panel</strong> – Reduces material waste</li>
                  <li><strong>Dual Operation Modes</strong> – Automatic and manual settings</li>
                  <li><strong>Motor Protection</strong> – Equipped with preventer for power fluctuation protection</li>
                  <li><strong>Hold-Button Safety Feature</strong> – Enhanced operator control and safety</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Support:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li><strong>Dedicated Service Team</strong> – Ensuring long-term operational efficiency</li>
                  <li><strong>Spare Parts Availability</strong> – Readily available components for maintenance</li>
                  <li><strong>Expert Technical Assistance</strong> – Ongoing support to optimize performance</li>
                  <li><strong>Fast & Reliable Delivery</strong> – Quick turnaround times for project deadlines</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li>Rigorous testing and quality control at every stage of production</li>
                  <li>Use of high-grade materials to ensure durability and reliability</li>
                  <li>Commitment to meeting and exceeding industry standards</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ShimmerButton className="w-full sm:w-auto h-[42px]">
                  <span className="text-sm font-medium tracking-tight text-white px-6">
                    Get Quote
                  </span>
                </ShimmerButton>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium h-[42px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description Tabs */}
          <div className="bg-white rounded-lg shadow mb-12">
            {/* Mobile Dropdown */}
            <div className="md:hidden border-b border-gray-200">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-left"
              >
                <span className="text-base font-semibold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${isMenuOpen ? 'transform rotate-180' : ''}`}
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                    HMS Bar Bending Machine - Engineered for Accuracy, Efficiency, and Durability
                  </h2>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      HMS Bar Bending Machine represents the pinnacle of construction engineering excellence. Built for strength, precision, and efficiency, our machines deliver unmatched reliability in heavy-duty applications with reinforced components. The advanced design ensures precise bending across multiple bar diameters while maintaining high accuracy and operational safety.
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Advantages of Our Machines:</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                        <li><strong>Unmatched Reliability</strong> – Designed for heavy-duty applications with reinforced components</li>
                        <li><strong>Precision Bending</strong> – Supports multiple bar diameters with high accuracy</li>
                        <li><strong>Advanced Safety Features</strong> – Includes hold-button control for safe operation</li>
                        <li><strong>Customization Options</strong> – Tailor the machine to your specific requirements</li>
                        <li><strong>Robust Build & Longevity</strong> – Engineered for low maintenance and extended service life</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Unbeatable Value Proposition:</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                        <li><strong>Cost-Effective Solutions</strong> – Competitive pricing without compromising quality</li>
                        <li><strong>Fast & Reliable Delivery</strong> – Quick turnaround times for project deadlines</li>
                        <li><strong>Long-Term Cost Savings</strong> – Low maintenance design reduces operational costs</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Support:</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                        <li><strong>Dedicated Service Team</strong> – Ensuring optimal operational efficiency</li>
                        <li><strong>Spare Parts Availability</strong> – Ready access to maintenance components</li>
                        <li><strong>Expert Technical Assistance</strong> – Ongoing support for performance optimization</li>
                      </ul>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[1, 2, 3].map((i) => (
                        <Image
                          key={i}
                          src={`/images/products/bar-bending-machine-${i}.webp`}
                          alt={`HMS Bar Bending Machine View ${i}`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                  <SpecificationsTable />
                </div>
              )}

              {activeTab === "benefits" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Benefits of Bar Bending Machines
                  </h2>
                  <BenefitsSection />
                </div>
              )}

              {activeTab === "applications" && (
                <div>
                  <ApplicationsSection />
                </div>
              )}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Customer Testimonials
            </h2>
            <TestimonialsSection />
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <FAQSection />
          </div>

          {/* Other Products Section */}
          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Other Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((product) => (
                <Link href={`/product/${createSlug(product.name)}`} key={product.id}>
                  <div className="group bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="aspect-square bg-white overflow-hidden">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        {product.shortDescription}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  );
}