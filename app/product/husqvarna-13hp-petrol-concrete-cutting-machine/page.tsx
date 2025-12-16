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

export default function Husqvarna13HPConcreteCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);
  useEffect(() => {
    const randomProducts = productsData.products.filter(p => p.slug !== "husqvarna-13hp-petrol-concrete-cutting-machine").sort(() => 0.5 - Math.random()).slice(0, 4);
    setOtherProducts(randomProducts);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header><Header /></header>
      <main className="mt-20 sm:mt-32 md:mt-40 pb-16">
        <div className="flex justify-center"><Breadcrumbs /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link href="/product/concrete-cutting-machine" className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block">← Back to Concrete Cutting Machines</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Husqvarna 13HP Petrol Concrete Cutting Machine</h1>
            <p className="text-xl text-gray-600 font-medium">Swedish Engineering at Best Value | 13HP Professional Cutter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/images/products/concrete-cutting-machine-main.webp" alt="Husqvarna 13HP Petrol Concrete Cutting Machine" width={600} height={600} className="w-full h-full object-cover rounded" priority />
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">Best Value 13HP Petrol Concrete Cutter</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">The Husqvarna 13HP Petrol Concrete Cutting Machine delivers Swedish engineering quality at the best price in our 13HP range. At ₹65,000, you get premium 13HP professional power for ₹10,000 less than Honda - same cutting performance with excellent Husqvarna build quality. Perfect for value-conscious contractors who want premium performance without premium pricing.</p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Husqvarna 13HP:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>Best Value 13HP</strong> — Same power as Honda for ₹10,000 less</li>
                  <li><strong>Swedish Engineering</strong> — 330+ years of manufacturing heritage</li>
                  <li><strong>13HP Professional Power</strong> — Full cutting capability for any job</li>
                  <li><strong>Advanced Air Filtration</strong> — Extended engine life in dusty conditions</li>
                  <li><strong>Smart Money Choice</strong> — Premium quality, practical pricing</li>
                </ul>
              </div>
              <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-gray-50 rounded-lg border border-orange-200">
                <div className="flex items-baseline gap-2"><span className="text-3xl font-bold text-orange-700">₹65,000</span><span className="text-gray-500 text-sm">+ GST (18%)</span></div>
                <p className="text-sm text-gray-600 mt-1">₹10,000 savings vs Honda | Delivery: 3-5 days</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button className="w-full sm:w-auto h-[42px] bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20Husqvarna%2013HP%20Petrol%20Concrete%20Cutting%20Machine%20at%20Rs.65%2C000', '_blank') } }}>🛒 BUY NOW - ₹65,000</Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="w-full sm:w-auto h-[42px]" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20Husqvarna%2013HP%20Petrol%20Concrete%20Cutting%20Machine', '_blank') } }}><span className="text-sm font-medium tracking-tight text-white px-6">Get Quote on WhatsApp</span></ShimmerButton>
                  <a href="tel:+919886474441" className="w-full sm:w-auto"><Button variant="outline" className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">📞 Call: +91 9886474441</Button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Husqvarna - Swedish Quality, Smart Pricing</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">Husqvarna has been manufacturing since 1689 - over 330 years of Swedish engineering heritage. While perhaps less known than Honda in India, Husqvarna is a <strong>globally respected premium brand</strong> used by professionals worldwide for outdoor power equipment.</p>
              <p className="text-lg text-gray-600 leading-relaxed">For contractors across South India who want <strong>13HP professional cutting power without the Honda premium price</strong>, Husqvarna delivers the perfect balance. Same cutting depth, same blade capacity, same wet cutting system - just ₹10,000 less in your pocket.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <Image src="/images/products/concrete-cutting-machine-1.webp" alt="Husqvarna engine concrete cutter" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-2.webp" alt="Road cutting operation" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-3.webp" alt="Floor cutting work" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2><SpecificationsTable /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of Husqvarna 13HP</h2><BenefitsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><ApplicationsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">What Our Customers Say</h2><TestimonialsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Purchase Terms & Support</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div className="bg-orange-50 p-6 rounded-lg border border-orange-100"><h3 className="text-xl font-semibold text-orange-900 mb-3">📋 6-Month Warranty</h3><p className="text-orange-700">Complete machine warranty covering manufacturing defects.</p></div><div className="bg-orange-50 p-6 rounded-lg border border-orange-100"><h3 className="text-xl font-semibold text-orange-900 mb-3">🚚 Delivery: 3-5 Days</h3><p className="text-orange-700">Dispatch from Bengaluru. Delivery charges based on location.</p></div><div className="bg-orange-50 p-6 rounded-lg border border-orange-100"><h3 className="text-xl font-semibold text-orange-900 mb-3">🔧 Growing Service Network</h3><p className="text-orange-700">Husqvarna service expanding in India. HMS provides technical support.</p></div><div className="bg-orange-50 p-6 rounded-lg border border-orange-100"><h3 className="text-xl font-semibold text-orange-900 mb-3">💎 Diamond Blades Available</h3><p className="text-orange-700">Quality diamond blades for all cutting applications.</p></div></div></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2><FAQSection /></div>

          <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Compare With Other Options</h2>
            <p className="text-gray-300 mb-6">Explore our full range from entry-level ₹55,000 to premium ₹1,30,000 models.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/concrete-cutting-machine"><Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">View All Concrete Cutting Machines</Button></Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20comparing%20Husqvarna%20with%20other%20options" target="_blank" rel="noopener noreferrer"><Button className="bg-green-600 hover:bg-green-700">Get Expert Advice</Button></a>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">More Construction Equipment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((product) => (<Link href={`/product/${product.slug}`} key={product.id}><div className="group bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"><div className="aspect-square bg-white overflow-hidden"><ProductImage src={product.mainImage} alt={product.name} width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" productName={product.name} /></div><div className="p-4 flex flex-col flex-grow"><h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3><p className="text-sm text-gray-600 mb-4 flex-grow">{product.shortDescription}</p><Button variant="link" className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">Learn More<ArrowRight className="h-4 w-4" /></Button></div></div></Link>))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted py-12"><Footer /></footer>
    </div>
  );
}

