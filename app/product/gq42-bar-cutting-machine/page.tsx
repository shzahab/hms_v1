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

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function GQ42BarCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "gq42-bar-cutting-machine")
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
              href="/product/bar-rebar-cutting-machine"
              className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
            >
              ← Back to Bar Cutting Machines
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              GQ42 Bar Cutting Machine (8-16mm Capacity)
            </h1>
            <p className="text-xl text-gray-600 font-medium">Compact Steel Bar Cutter | Perfect for Small Contractors & Residential Projects</p>
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
                  <p className="text-gray-400 text-xs mt-1">GQ42 Bar Cutting Machine</p>
                </div>
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Entry-Level Bar Cutter for Residential Projects
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The GQ42 Bar Cutting Machine is engineered for small contractors, individual builders, and residential construction projects. This compact yet powerful machine cuts TMT and HYSD bars from 8mm to 16mm with clean, precise cuts. With its robust construction and safety features, it increases productivity significantly compared to manual cutting methods while ensuring operator safety.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose GQ42:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>8-16mm Cutting Capacity</strong> — Handles common bar sizes for residential construction</li>
                  <li><strong>25-30 Cuts/Minute</strong> — High-speed cutting for maximum productivity</li>
                  <li><strong>Compact & Portable</strong> — 120kg weight allows transport between job sites</li>
                  <li><strong>Safety Features</strong> — Blade guard and emergency stop for operator protection</li>
                  <li><strong>Budget-Friendly</strong> — Most affordable bar cutting machine in our range</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹75,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 3-5 days | Charges as per actuals</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20GQ42%20Bar%20Cutting%20Machine%20at%20Rs.75%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹75,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20GQ42%20Bar%20Cutting%20Machine', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white px-6">
                      Get Quote on WhatsApp
                    </span>
                  </ShimmerButton>
                  <a
                    href="tel:+919886474441"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                      📞 Call: +91 9886474441
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                GQ42 - The Smart Choice for Small-Scale Bar Cutting
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Built for Independent Contractors & Home Builders
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Not every construction project requires heavy-duty industrial cutting equipment. The GQ42 Bar Cutting Machine bridges the gap between manual cutting and expensive high-capacity machines. Whether you&apos;re building a residential house in Bengaluru, constructing a compound wall in Chennai, or working on a small commercial project in Hyderabad, this machine delivers <strong>consistent, professional-quality cuts</strong> at an affordable price point.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Perfect Capacity for Residential Construction
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The 8mm to 16mm capacity covers the most commonly used bar sizes in residential and light commercial construction across Karnataka, Tamil Nadu, Kerala, and other South Indian states. This means you can handle all stirrup cutting (8mm), slab bar cutting (10mm), and column/beam main bars (12mm, 16mm) with a single, affordable machine.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ideal Bar Sizes for Your Projects
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The 8mm to 16mm capacity covers the most commonly used bar sizes in residential and light commercial construction:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>8mm bars</strong> — Stirrups, ties, and secondary reinforcement</li>
                    <li><strong>10mm bars</strong> — Slabs, lintels, and light beams</li>
                    <li><strong>12mm bars</strong> — Columns, beams, and footings for residential buildings</li>
                    <li><strong>16mm bars</strong> — Main reinforcement for G+1 and G+2 structures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Cost-Effective Solution
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At <strong>₹75,000</strong>, the GQ42 offers an affordable entry into mechanized bar cutting. Compare this to manual cutting labor costs over multiple projects, and the machine pays for itself within <strong>3-4 residential projects</strong>. You&apos;ll save on labor, reduce material waste from inconsistent cuts, and complete work faster with cleaner results.
                  </p>
                </div>

                {/* Image Placeholders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-xs">Gallery Image {i}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Benefits of GQ42 Bar Cutting Machine
            </h2>
            <BenefitsSection />
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <ApplicationsSection />
          </div>

          {/* Testimonials Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              What Our Customers Say
            </h2>
            <TestimonialsSection />
          </div>

          {/* Service and Support Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Purchase Terms & Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">📋 6-Month Warranty</h3>
                <p className="text-blue-700">Covers manufacturing defects. Does not cover spares, blades, and damage from overloading/misuse.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🚚 Delivery: 3-5 Days</h3>
                <p className="text-blue-700">Delivery charges as per actuals based on location.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔧 Installation Support</h3>
                <p className="text-blue-700">Phone/video call guidance for installation. On-site installation available at extra cost.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔩 Spare Parts Available</h3>
                <p className="text-blue-700">Blades and spare parts readily available from Bengaluru warehouse.</p>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Buy from Hutaib Machinery?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">300+</div>
                  <div className="text-sm text-gray-600">GQ42 Units Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3-5</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">₹75K</div>
                  <div className="text-sm text-gray-600">Best Price</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <FAQSection />
          </div>

          {/* Compare Models CTA */}
          <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Need More Cutting Capacity?</h2>
            <p className="text-gray-300 mb-6">
              If your projects require cutting bars larger than 16mm, consider our GQ52 model (up to 42mm) or GUTE GQ40 with Indian motor (up to 32mm).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/bar-rebar-cutting-machine">
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
                  View All Bar Cutting Machines
                </Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20bar%20cutting%20machine" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Expert Advice
                </Button>
              </a>
            </div>
          </section>

          {/* Related Equipment Section */}
          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Related Equipment</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Complete your rebar fabrication setup with these complementary machines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bar Bending Machine</h3>
                <p className="text-gray-600 mb-4">
                  Pair with cutter for complete rebar fabrication line. Bend TMT bars with precision foot pedal control.
                </p>
                <Link href="/product/bar-bending-machine" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ring Making Machine</h3>
                <p className="text-gray-600 mb-4">
                  Automated stirrup production for columns and beams. Create perfect rings efficiently.
                </p>
                <Link href="/product/ring-making-machine-spiral-machine" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Spare Parts & Blades</h3>
                <p className="text-gray-600 mb-4">
                  Cutting blades, motor assemblies, and replacement parts available with same-day dispatch.
                </p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  Contact for Parts <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Other Products Section */}
          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">More Construction Equipment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherProducts.map((product) => (
                <Link href={`/product/${product.slug}`} key={product.id}>
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

