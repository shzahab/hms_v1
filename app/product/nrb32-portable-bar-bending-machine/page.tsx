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

export default function NRB32PortableBarBendingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "nrb32-portable-bar-bending-machine")
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
              NRB32 Portable Bar Bending Machine (32mm)
            </h1>
            <p className="text-xl text-gray-600 font-medium">🚚 Portable Design | 32mm Capacity | Easy Site-to-Site Transport</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-5xl">🚚</span>
                  </div>
                  <p className="text-gray-500 text-sm">Product Image</p>
                  <p className="text-gray-400 text-xs mt-1">NRB32 Portable</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="mb-4 inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                🚚 Portable Design
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                32mm Capacity That Moves With You
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The NRB32 gives you the power of a 32mm bar bender in a portable package designed for contractors who work across multiple sites. Unlike fixed heavy machines, the NRB32 features integrated handles, balanced weight distribution, and compact dimensions that make site-to-site transport practical and safe.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose NRB32 Portable:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>Truly Portable 32mm</strong> — Designed for transport, not just possible to move</li>
                  <li><strong>Integrated Carry Handles</strong> — Built-in handles for safe lifting and loading</li>
                  <li><strong>Compact Footprint</strong> — Fits in pickup trucks and small site spaces</li>
                  <li><strong>Quick Setup</strong> — Working within minutes of arrival at site</li>
                  <li><strong>Same 32mm Power</strong> — Full bending capacity despite portable design</li>
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
                  <Button className="w-full sm:w-auto h-[42px] bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20NRB32%20Portable%20Bar%20Bending%20Machine%20at%20Rs.95%2C000%20plus%20GST', '_blank')}>
                    🛒 BUY NOW - ₹95,000 + GST
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="w-full sm:w-auto h-[42px]"
                    onClick={() => window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20NRB32%20Portable%20Bar%20Bending%20Machine', '_blank')}>
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
                NRB32 - Heavy-Duty Bending, Portable Convenience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Designed for Mobile Contractors</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Most 32mm bar benders weigh 280-320kg and need crane assistance to move. The NRB32 is specifically engineered for contractors who work across multiple sites. At under 200kg with integrated handles, <strong>4 workers can load it onto a vehicle</strong>. The compact dimensions mean it fits where bigger machines can&apos;t.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">NRB32 vs GW42: Choose Based on Usage</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 mb-4">Both bend 32mm bars. The difference is in mobility:</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <strong>GW42 (₹75K):</strong> Heavier, more stable for fixed installations. Better for fabrication yards.</li>
                      <li>• <strong>NRB32 (₹95K):</strong> Lighter, truly portable. Better for contractors moving between sites.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Setup, Immediate Work</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Arrive at a new site, unload the NRB32, connect power, and you&apos;re bending within minutes. No crane needed, no complex setup. For contractors who value time and flexibility, this efficiency translates directly to profit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Technical Specifications</h2>
            <SpecificationsTable />
          </div>

          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Benefits of NRB32 Portable</h2>
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
                      <Image src={product.mainImage} alt={product.name} width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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

