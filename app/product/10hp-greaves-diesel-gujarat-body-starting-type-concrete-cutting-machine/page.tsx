"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

export default function TenHPGreavesGujaratBodyStartingTypeConcreteCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);
  useEffect(() => {
    const randomProducts = productsData.products.filter(p => p.slug !== "10hp-greaves-diesel-gujarat-body-starting-type-concrete-cutting-machine").sort(() => 0.5 - Math.random()).slice(0, 4);
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">10HP Greaves Diesel Gujarat Body Starting Type</h1>
            <p className="text-xl text-gray-600 font-medium">Electric Start Convenience | Professional Heavy-Duty Cutter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/images/products/concrete-cutting-machine-main.webp" alt="10HP Greaves Diesel Gujarat Body Starting Type Concrete Cutting Machine" width={600} height={600} className="w-full h-full object-cover rounded" priority />
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">Premium Diesel Cutter with Electric Start</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">The 10HP Greaves Diesel Gujarat Body with Starting Type (Electric Start) is the premium version of our professional-grade diesel cutter. Same proven 10HP Greaves engine and heavy-duty Gujarat body, plus the convenience of one-button electric starting. No more hand cranking - just press and start. For operators who start their machine dozens of times daily, the ₹20,000 extra pays for itself in time and convenience.</p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Starting Type Model:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>⚡ Electric Start</strong> — One-button starting, no hand cranking required</li>
                  <li><strong>Same 10HP Greaves</strong> — Identical engine performance and reliability</li>
                  <li><strong>Gujarat Heavy-Duty Body</strong> — Professional-grade construction</li>
                  <li><strong>Cold Start Ready</strong> — Electric starter works reliably in all conditions</li>
                  <li><strong>Safety First</strong> — No kickback injury risk from hand cranking</li>
                </ul>
              </div>
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-gray-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2"><span className="text-3xl font-bold text-green-700">₹1,15,000</span><span className="text-gray-500 text-sm">+ GST (18%)</span></div>
                <p className="text-sm text-gray-600 mt-1">₹20,000 for electric start convenience | Delivery: 3-5 days</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button className="w-full sm:w-auto h-[42px] bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%2010HP%20Greaves%20Starting%20Type%20Concrete%20Cutting%20Machine%20at%20Rs.1%2C15%2C000', '_blank') } }}>🛒 BUY NOW - ₹1,15,000</Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="w-full sm:w-auto h-[42px]" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%2010HP%20Greaves%20Starting%20Type%20Concrete%20Cutting%20Machine', '_blank') } }}><span className="text-sm font-medium tracking-tight text-white px-6">Get Quote on WhatsApp</span></ShimmerButton>
                  <a href="tel:+919886474441" className="w-full sm:w-auto"><Button variant="outline" className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">📞 Call: +91 9886474441</Button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Electric Start - The Smart Upgrade for Daily Users</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">If you&apos;re starting your concrete cutter <strong>10, 15, 20+ times a day</strong>, the Starting Type model transforms your daily experience. Instead of physically cranking the engine each time - pulling against compression, risking kickback - you simply <strong>press a button and the engine starts instantly</strong>.</p>
              <p className="text-lg text-gray-600 leading-relaxed">The ₹20,000 premium for electric start might seem like an extra expense, but calculate the value: <strong>thousands of hand cranks avoided per year, no cold-start struggles, no kickback injury risk, faster startup between cuts</strong>. For professional daily users, it&apos;s an investment in convenience and safety that pays dividends every working day.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <Image src="/images/products/concrete-cutting-machine-1.webp" alt="Electric start system" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-2.webp" alt="One-button starting" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-3.webp" alt="Professional operation" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2><SpecificationsTable /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of Starting Type Model</h2><BenefitsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><ApplicationsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">What Our Customers Say</h2><TestimonialsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Purchase Terms & Support</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div className="bg-green-50 p-6 rounded-lg border border-green-100"><h3 className="text-xl font-semibold text-green-900 mb-3">📋 6-Month Warranty + Greaves</h3><p className="text-green-700">Machine + electric start system warranty. Greaves engine through authorized centers.</p></div><div className="bg-green-50 p-6 rounded-lg border border-green-100"><h3 className="text-xl font-semibold text-green-900 mb-3">🚚 Delivery: 3-5 Days</h3><p className="text-green-700">Dispatch from Bengaluru. Delivery charges based on location.</p></div><div className="bg-green-50 p-6 rounded-lg border border-green-100"><h3 className="text-xl font-semibold text-green-900 mb-3">🔧 Nationwide Greaves Service</h3><p className="text-green-700">Greaves service centers in every district across India.</p></div><div className="bg-green-50 p-6 rounded-lg border border-green-100"><h3 className="text-xl font-semibold text-green-900 mb-3">🔋 Standard 12V Battery</h3><p className="text-green-700">Replacement batteries available at any auto shop when needed.</p></div></div></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2><FAQSection /></div>

          <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Save ₹20,000 with Manual Start?</h2>
            <p className="text-gray-300 mb-6">If you don&apos;t need electric start convenience, the manual start version is ₹95,000.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/10hp-greaves-diesel-gujarat-body-concrete-cutting-machine"><Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">View Manual Start Model - ₹95,000</Button></Link>
              <Link href="/product/concrete-cutting-machine"><Button className="bg-green-600 hover:bg-green-700">Compare All Models</Button></Link>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">More Construction Equipment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((product) => (<Link href={`/product/${product.slug}`} key={product.id}><div className="group bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"><div className="aspect-square bg-white overflow-hidden"><Image src={product.mainImage} alt={product.name} width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div><div className="p-4 flex flex-col flex-grow"><h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3><p className="text-sm text-gray-600 mb-4 flex-grow">{product.shortDescription}</p><Button variant="link" className="p-0 h-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">Learn More<ArrowRight className="h-4 w-4" /></Button></div></div></Link>))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted py-12"><Footer /></footer>
    </div>
  );
}

