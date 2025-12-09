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

export default function GuteGQ40BarCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "gute-gq40-bar-cutting-machine")
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
              GUTE GQ40 Bar Cutting Machine with Indian Motor (8-32mm)
            </h1>
            <p className="text-xl text-gray-600 font-medium">Premium Imported Quality | Indian Motor Reliability | Professional Grade</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="text-blue-600 text-sm font-semibold">PREMIUM QUALITY</p>
                  <p className="text-gray-400 text-xs mt-1">GUTE GQ40 Bar Cutting Machine</p>
                </div>
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                🏆 PREMIUM GUTE BRAND
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Premium Build Quality with Local Motor Reliability
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The GUTE GQ40 combines internationally-recognized precision engineering with an Indian motor designed for local conditions. Precision-ground gears, superior bearings, and tighter tolerances deliver consistently clean cuts and longer service life. The Indian motor ensures easy serviceability anywhere in India.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose GUTE GQ40:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>Premium GUTE Engineering</strong> — Globally recognized for precision manufacturing</li>
                  <li><strong>Indian Motor</strong> — Designed for local voltage, easy service anywhere</li>
                  <li><strong>8-32mm Capacity</strong> — Covers 95% of commercial construction needs</li>
                  <li><strong>Superior Components</strong> — Precision gears, better bearings, longer life</li>
                  <li><strong>Cleaner Cuts</strong> — Tighter tolerances mean less burrs, better results</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-700">₹1,10,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 3-5 days | Premium quality investment</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20GUTE%20GQ40%20Bar%20Cutting%20Machine%20at%20Rs.1%2C10%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹1,10,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20GUTE%20GQ40%20Bar%20Cutting%20Machine', '_blank')
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
                GUTE GQ40 - Premium International Quality, Local Reliability
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why GUTE is Different
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    GUTE is a globally recognized brand synonymous with precision engineering. Unlike standard manufacturers, GUTE machines feature <strong>precision-ground gears, superior quality bearings, and tighter manufacturing tolerances</strong>. The result? Smoother operation, cleaner cuts, less vibration, and significantly longer service life. When you choose GUTE, you&apos;re choosing international quality standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Indian Motor Advantage
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    This model pairs GUTE&apos;s premium machine body with an Indian motor specifically designed for local conditions. Why? Indian motors handle voltage fluctuations better, spare parts are available in every town, and any local electrician can service them. You get <strong>premium quality with zero import headaches</strong> for motor maintenance.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Professional Grade Capacity
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The 8-32mm cutting capacity covers approximately 95% of commercial construction needs:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>8-12mm bars</strong> — Stirrups, ties, slab reinforcement</li>
                    <li><strong>16-20mm bars</strong> — Beam and column secondary bars</li>
                    <li><strong>25-32mm bars</strong> — Main reinforcement for columns and beams</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Investment in Quality
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At <strong>₹1,10,000</strong>, the GUTE GQ40 costs ₹17,000 more than the standard GQ52. But consider: premium components typically last 30-50% longer, require fewer repairs, and deliver consistently better cuts. Over the machine&apos;s lifetime, the cost per cut is often lower than budget alternatives.
                  </p>
                </div>

                {/* Image Placeholders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-blue-50 rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-blue-400 text-xs">GUTE Quality Image {i}</p>
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
              Benefits of GUTE GQ40 Bar Cutting Machine
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
                <p className="text-blue-700">Covers manufacturing defects. Indian motor backed by nationwide service network.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🚚 Delivery: 3-5 Days</h3>
                <p className="text-blue-700">Premium packaging. Delivery charges as per actuals based on location.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔧 Easy Motor Service</h3>
                <p className="text-blue-700">Indian motor serviced by any local electrician. Parts available everywhere.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔩 Premium Blades Available</h3>
                <p className="text-blue-700">GUTE-quality replacement blades for optimal cutting performance.</p>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200 mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Buy GUTE from Hutaib Machinery?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">GUTE</div>
                  <div className="text-sm text-gray-600">Authorized Dealer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">Indian</div>
                  <div className="text-sm text-gray-600">Motor Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">₹1.1L</div>
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
            <h2 className="text-2xl font-bold mb-4">Want Even More Premium?</h2>
            <p className="text-gray-300 mb-6">
              For the ultimate in Indian manufacturing quality and 15-20 year service life, check out our HMS Made in India model (₹1,55,000).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/bar-rebar-cutting-machine">
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
                  View All Bar Cutting Machines
                </Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20between%20GUTE%20and%20HMS%20India" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Expert Advice
                </Button>
              </a>
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

