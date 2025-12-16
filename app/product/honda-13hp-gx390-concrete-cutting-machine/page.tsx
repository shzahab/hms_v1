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

export default function Honda13HPConcreteCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);
  useEffect(() => {
    const randomProducts = productsData.products.filter(p => p.slug !== "honda-13hp-gx390-concrete-cutting-machine").sort(() => 0.5 - Math.random()).slice(0, 4);
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Honda 13HP GX390 Concrete Cutting Machine</h1>
            <p className="text-xl text-gray-600 font-medium">World&apos;s Most Reliable Engine | Premium Professional Cutter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/images/products/concrete-cutting-machine-main.webp" alt="Honda GX390 13HP Concrete Cutting Machine" width={600} height={600} className="w-full h-full object-cover rounded" priority />
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">Premium Concrete Cutter with Legendary Honda Engine</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">The Honda 13HP GX390 Concrete Cutting Machine is the premium choice for contractors who demand the world&apos;s most reliable engine. The Honda GX390 is legendary for easy starting, exceptional fuel efficiency, and thousands of hours of trouble-free operation. With 240mm cutting depth and 35L wet cutting system, this machine delivers professional results backed by Honda&apos;s global service network.</p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Honda GX390:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>World&apos;s Most Reliable Engine</strong> — Honda GX series is the global standard for small engine reliability</li>
                  <li><strong>13HP Maximum Power</strong> — Excellent cutting power for thick concrete and reinforced slabs</li>
                  <li><strong>Easy One-Pull Starting</strong> — Starts on first or second pull, even in cold conditions</li>
                  <li><strong>Global Service Network</strong> — Honda service and genuine parts available everywhere in India</li>
                  <li><strong>Best Resale Value</strong> — Honda equipment holds value better than any other brand</li>
                </ul>
              </div>
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-gray-50 rounded-lg border border-red-200">
                <div className="flex items-baseline gap-2"><span className="text-3xl font-bold text-red-700">₹75,000</span><span className="text-gray-500 text-sm">+ GST (18%)</span></div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 3-5 days | Charges as per actuals</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20Honda%20GX390%2013HP%20Concrete%20Cutting%20Machine%20at%20Rs.75%2C000', '_blank') } }}>🛒 BUY NOW - ₹75,000</Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="w-full sm:w-auto h-[42px]" onClick={() => { if (typeof window !== 'undefined') { window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20Honda%20GX390%2013HP%20Concrete%20Cutting%20Machine', '_blank') } }}><span className="text-sm font-medium tracking-tight text-white px-6">Get Quote on WhatsApp</span></ShimmerButton>
                  <a href="tel:+919886474441" className="w-full sm:w-auto"><Button variant="outline" className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">📞 Call: +91 9886474441</Button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Honda GX390 - The Global Standard for Reliability</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">The Honda GX390 engine is not just an engine - it&apos;s the <strong>benchmark against which all other small engines are measured</strong>. Used by commercial equipment manufacturers worldwide, the GX series has earned its reputation through decades of consistent, reliable performance in the most demanding applications.</p>
              <p className="text-lg text-gray-600 leading-relaxed">For professional contractors in Bengaluru, Chennai, Hyderabad, and across South India, choosing Honda means <strong>zero compromise on reliability</strong>. When your equipment must work every single day without fail, when downtime costs you money and reputation, Honda GX390 delivers the peace of mind that only comes from the world&apos;s most trusted engine brand.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <Image src="/images/products/concrete-cutting-machine-1.webp" alt="Honda GX390 engine detail" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-2.webp" alt="Honda concrete cutter in operation" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <Image src="/images/products/concrete-cutting-machine-3.webp" alt="Road cutting with Honda powered machine" width={400} height={300} className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2><SpecificationsTable /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of Honda GX390 13HP</h2><BenefitsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><ApplicationsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">What Our Customers Say</h2><TestimonialsSection /></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Purchase Terms & Support</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div className="bg-red-50 p-6 rounded-lg border border-red-100"><h3 className="text-xl font-semibold text-red-900 mb-3">📋 6-Month Warranty + Honda</h3><p className="text-red-700">Machine warranty plus separate Honda engine warranty through authorized centers.</p></div><div className="bg-red-50 p-6 rounded-lg border border-red-100"><h3 className="text-xl font-semibold text-red-900 mb-3">🚚 Delivery: 3-5 Days</h3><p className="text-red-700">Dispatch from Bengaluru. Delivery charges based on location.</p></div><div className="bg-red-50 p-6 rounded-lg border border-red-100"><h3 className="text-xl font-semibold text-red-900 mb-3">🔧 Honda Service Network</h3><p className="text-red-700">Authorized Honda service centers across India for engine support.</p></div><div className="bg-red-50 p-6 rounded-lg border border-red-100"><h3 className="text-xl font-semibold text-red-900 mb-3">💎 Diamond Blades Available</h3><p className="text-red-700">Quality diamond blades for concrete, asphalt, and green concrete cutting.</p></div></div></div>
          <div className="bg-white rounded-lg shadow mb-12 p-8"><h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2><FAQSection /></div>

          <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Compare Other Options</h2>
            <p className="text-gray-300 mb-6">Want to explore alternatives? We have options from ₹55,000 to ₹1,30,000 to match every budget and requirement.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/concrete-cutting-machine"><Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">View All Concrete Cutting Machines</Button></Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20between%20Honda%20and%20other%20options" target="_blank" rel="noopener noreferrer"><Button className="bg-green-600 hover:bg-green-700">Get Expert Advice</Button></a>
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

