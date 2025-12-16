"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProductImage from "@/components/product-image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight } from "lucide-react";
import productsData from "@/app/data/products.json";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";
import Breadcrumbs from "@/components/Breadcrumb";

export default function VERX200LCompressorPage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "verx-200ltr-air-compressor")
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setOtherProducts(randomProducts);
  }, []);

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
            <Link
              href="/category/air-compressors-verx"
              className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
            >
              ← Back to Air Compressors
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              VERX 200L Heavy-Duty Air Compressor
            </h1>
            <p className="text-xl text-gray-600 font-medium">Flagship Industrial Compressor | Maximum Capacity for Heavy Operations</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Product Image</p>
                  <p className="text-gray-400 text-xs mt-1">VERX 200L Heavy-Duty Compressor</p>
                </div>
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Maximum Capacity for Maximum Demands
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The VERX 200L Heavy-Duty Air Compressor is our flagship industrial unit, engineered for factories and large-scale operations requiring continuous high-volume air supply. With a 5 HP three-phase motor, two-stage compression delivering 450 LPM at 12 bar, and 200-litre tank, it powers entire production floors and 4-5 workstations simultaneously.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose VERX 200L:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>200L Tank Capacity</strong> — Maximum air reserve in VERX range</li>
                  <li><strong>5 HP Three-Phase Motor</strong> — Industrial-grade continuous duty</li>
                  <li><strong>Two-Stage Compression</strong> — 12 bar pressure, higher efficiency</li>
                  <li><strong>450 LPM Air Flow</strong> — Power 4-5 stations simultaneously</li>
                  <li><strong>Heavy Sandblasting Ready</strong> — Sustained high-volume delivery</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-purple-700">₹52,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 7-10 days | Professional installation available</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20VERX%20200L%20Heavy-Duty%20Air%20Compressor%20at%20Rs.52%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹52,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20VERX%20200L%20Heavy-Duty%20Air%20Compressor', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white px-6">
                      Get Quote on WhatsApp
                    </span>
                  </ShimmerButton>
                  <a href="tel:+919886474441" className="w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                    >
                      📞 Call: +91 9886474441
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Three-Phase Warning */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800">Three-Phase Power Required</h3>
                <p className="text-yellow-700">
                  The VERX 200L requires 415V three-phase power supply. Ensure your facility has adequate three-phase infrastructure before purchase. 
                  Contact us to discuss electrical requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2>
            <SpecificationsTable />
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of VERX 200L Heavy-Duty Compressor</h2>
            <BenefitsSection />
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <ApplicationsSection />
          </div>

          {/* Testimonials Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">What Our Customers Say</h2>
            <TestimonialsSection />
          </div>

          {/* Service and Support Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Purchase Terms & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">📋 6-Month Warranty</h3>
                <p className="text-purple-700">Covers manufacturing defects. Excludes consumables, belts, and damage from improper use or voltage issues.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">🚚 Delivery: 7-10 Days</h3>
                <p className="text-purple-700">Delivery, installation, and commissioning charges calculated based on location and requirements.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">🔧 Professional Installation</h3>
                <p className="text-purple-700">Installation services include positioning, electrical connection, piping, commissioning, and operator training.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">🛠️ AMC Recommended</h3>
                <p className="text-purple-700">Annual Maintenance Contracts strongly recommended for industrial equipment. Ensures optimal performance and priority support.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
            <FAQSection />
          </div>

          {/* Compare Models CTA */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Compare All VERX Models</h2>
            <p className="text-gray-300 mb-6">
              The 200L is our flagship model. For smaller operations, explore our 12L, 24L, 50L, and 150L compressors suited for different capacity needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/category/air-compressors-verx">
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">View All VERX Compressors</Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20industrial%20compressor%20consultation%20for%20VERX%20200L" target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 hover:bg-purple-700">Get Industrial Consultation</Button>
              </a>
            </div>
          </section>

          {/* Other Products Section */}
          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">More Equipment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((product) => (
                <Link href={`/product/${product.slug}`} key={product.id}>
                  <div className="group bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="aspect-square bg-white overflow-hidden">
                      <ProductImage src={product.mainImage} alt={product.name} width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" productName={product.name} />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">{product.shortDescription}</p>
                      <Button variant="link" className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                        Learn More <ArrowRight className="h-4 w-4" />
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

