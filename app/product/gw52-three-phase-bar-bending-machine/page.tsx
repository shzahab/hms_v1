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

export default function GW52BarBendingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "gw52-three-phase-bar-bending-machine")
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setOtherProducts(randomProducts);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header><Header /></header>
      <main className="mt-20 sm:mt-32 md:mt-40 pb-16">
        <div className="flex justify-center"><Breadcrumbs /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/category/bar-rebar-bending-machines" className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block">
              ← Back to Bar Bending Machines
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              GW52 Bar Bending Machine (16-42mm)
            </h1>
            <p className="text-xl text-gray-600 font-medium">Maximum Capacity | For Bridges, Metro & Heavy Infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Product Image</p>
                  <p className="text-gray-400 text-xs mt-1">GW52 Bar Bending Machine</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Maximum 42mm Capacity for Heavy Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When your projects require the largest TMT bars - 36mm, 40mm, or 42mm - the GW52 is your machine. Built for bridges, flyovers, metro viaducts, and heavy industrial structures, this powerhouse bends the thickest rebars used in Indian construction with ease. The 4HP motor delivers the torque needed for extreme applications.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why GW52 for Heavy Infrastructure:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>42mm Maximum Capacity</strong> — The largest standard TMT bar size in India</li>
                  <li><strong>4HP Industrial Motor</strong> — Serious power for serious applications</li>
                  <li><strong>Heavy-Duty Gearbox</strong> — Engineered for continuous heavy loads</li>
                  <li><strong>Digital Control System</strong> — Precision angles even on thick bars</li>
                  <li><strong>550kg Machine Weight</strong> — Stable platform for heavy bending</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹95,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 1-3 days | Charges as per actuals</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20GW52%20Bar%20Bending%20Machine%20at%20Rs.95%2C000', '_blank')}>
                    🛒 BUY NOW - ₹95,000
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="w-full sm:w-auto h-[42px]"
                    onClick={() => window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20GW52%20Bar%20Bending%20Machine', '_blank')}>
                    <span className="text-sm font-medium tracking-tight text-white px-6">Get Quote on WhatsApp</span>
                  </ShimmerButton>
                  <a href="tel:+919886474441" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                      📞 Call: +91 9886474441
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                GW52 - When 32mm Isn&apos;t Enough
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">For the Heaviest Structural Applications</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Major infrastructure projects specify 36mm to 42mm bars for critical structural elements - bridge piers, metro viaduct columns, dam spillways, and heavy industrial foundations. The GW52 is specifically designed for these applications where the GW42&apos;s 32mm limit isn&apos;t sufficient.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Built for Infrastructure Giants</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At 550kg, the GW52 is a serious machine. The heavy frame ensures stability when bending 42mm bars, while the 4HP motor delivers consistent power through its industrial-grade gearbox. This isn&apos;t a machine for small sites - it&apos;s for contractors building India&apos;s infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">GW52 vs GW42: When to Choose</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">
                      <strong>Choose GW42 (₹75K)</strong> if your largest bars are 32mm or less - covers most building construction.<br/>
                      <strong>Choose GW52 (₹95K)</strong> if you work on bridges, metros, or projects specifying 36mm-42mm bars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2>
            <SpecificationsTable />
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of GW52</h2>
            <BenefitsSection />
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <ApplicationsSection />
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Customer Reviews</h2>
            <TestimonialsSection />
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
            <FAQSection />
          </div>

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
                      <Button variant="link" className="p-0 h-auto text-sm font-medium text-blue-600">Learn More <ArrowRight className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted py-12"><Footer /></footer>
    </div>
  );
}

