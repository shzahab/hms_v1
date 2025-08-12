
"use client";

import { useState, useEffect } from "react";
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

export default function BarCuttingMachinePage() {
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
    .filter(p => p.name !== "Bar / Rebar Cutting Machine")
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-20 sm:mt-32 md:mt-40 pb-16">
      <div className="flex justify-center">
        <Breadcrumbs />
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Product Title Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              HMS Bar Cutting Machine
            </h1>
            <p className="text-xl text-gray-600 font-medium">Precision Cutting, Maximum Efficiency & Unmatched Reliability</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/images/products/bar-cutting-machine-main.webp"
                alt="HMS Bar Cutting Machine - Professional grade rebar cutting equipment with precision cutting capabilities and dual operation modes"
                width={600}
                height={400}
                className="w-full object-cover rounded"
                priority
              />
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Revolutionizing Steel Processing with Advanced Cutting Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The <strong>HMS Bar Cutting Machine</strong> is a state-of-the-art cutting solution designed for{" "}
                <strong>precision, speed, and durability</strong>. It streamlines{" "}
                <strong>steel bar and rebar cutting operations</strong>, making it indispensable for{" "}
                <strong>construction projects, steel fabrication, and industrial applications</strong>.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 text-lg">
                  <li>Cuts multiple steel bar sizes up to 32mm</li>
                  <li>High-speed cutting for maximum productivity</li>
                  <li>Precision cutting with minimal material waste</li>
                  <li>Dual operation modes (automatic & manual)</li>
                  <li>Heavy-duty construction for industrial use</li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                {/* First Row - BUY NOW Button */}
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const barCuttingMachine = productsData.products.find(p => p.name === "Bar / Rebar Cutting Machine");
                        const paymentLink = barCuttingMachine?.paymentLink || 'https://rzp.io/rzp/nqqImPY2';
                        window.open(paymentLink, '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW!
                  </Button>
                </div>
                
                {/* Second Row - Get Quote and Download Brochure */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/919740035153', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white px-6">
                      Get Quote
                    </span>
                  </ShimmerButton>
                  <a
                    href="/hms-brochure.pdf"
                    download="HMS-Brochure.pdf"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
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
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description Tabs */}
          <div className="bg-white rounded-lg shadow mb-12">
            {/* Mobile Dropdown */}
            <div className="md:hidden border-b border-gray-200">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-left bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100 hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-base font-semibold text-blue-900 flex items-center">
                  <span className="mr-2">✂️</span>
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-180' : 'animate-bounce'}`}
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
                    HMS Bar Cutting Machine - Engineered for Speed, Precision, and Reliability
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Impact on Steel Processing Operations
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Bar cutting machines <strong>revolutionize steel processing workflows</strong> by delivering{" "}
                        <strong>consistent, precise cuts</strong> at high speeds. They ensure{" "}
                        <strong>minimal material waste</strong> and <strong>superior cut quality</strong>, helping
                        operations <strong>meet tight deadlines</strong> while maintaining the highest standards.
                        Advanced cutting technology minimizes <strong>burr formation and deformation</strong>,
                        resulting in <strong>cleaner finishes</strong> and <strong>optimized material utilization</strong>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Company Advantages
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Choosing <strong>HMS Bar Cutting Machines</strong> means investing in{" "}
                        <strong>cutting-edge technology, unmatched reliability, and proven performance</strong>. Built for{" "}
                        <strong>heavy-duty industrial applications</strong>, our machines are trusted by{" "}
                        <strong>steel fabricators, contractors, and manufacturing facilities</strong> worldwide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        The Excellence of HMS Bar Cutting Machines
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        In the competitive world of <strong>steel processing equipment</strong>, <strong>HMS</strong> represents{" "}
                        <strong>innovation, quality, and dependability</strong>. With decades of{" "}
                        <strong>engineering expertise</strong>, we continue to deliver{" "}
                        <strong>industry-leading cutting solutions</strong> that exceed expectations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Why Choose HMS Bar Cutting Machine?
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        High-Speed Cutting – Processes multiple bars quickly for maximum productivity.<br />
                        Precision Engineering – Ensures clean, accurate cuts with minimal waste.<br />
                        Robust Construction – Built to withstand heavy industrial use.<br />
                        Dual Operation Modes – Flexible automatic and manual operation settings.<br />
                        Energy Efficient – Optimized power consumption without compromising performance.<br />
                        Safety Features – Advanced safety mechanisms protect operators and equipment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Advanced Engineering for Maximum Productivity
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        HMS Bar Cutting Machines incorporate advanced engineering innovations to maximize cutting speed, minimize operator fatigue, and ensure consistent results. Our machines represent the perfect fusion of traditional craftsmanship with modern automation technology.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Customization for Every Industrial Need
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        At HMS, we understand that every operation has <strong>unique cutting requirements</strong>.
                        That&apos;s why we offer <strong>customized solutions</strong> tailored to your specific applications.
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
                        <li><strong>Variable cutting capacities</strong> for different <strong>bar diameters and materials</strong></li>
                        <li><strong>Programmable cutting lengths</strong> for <strong>batch processing efficiency</strong></li>
                        <li><strong>Enhanced automation features</strong> based on <strong>industry feedback</strong> for <strong>streamlined operations</strong></li>
                      </ul>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[1, 2, 3].map((i) => (
                        <Image
                          key={i}
                          src={`/images/products/bar-cutting-machine-${i}.webp`}
                          alt={`HMS Bar Cutting Machine View ${i}`}
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
                    Benefits of Bar Cutting Machines
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
