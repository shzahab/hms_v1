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

export default function HMSMadeInIndiaBarCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "hms-made-in-india-bar-cutting-machine")
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
              HMS Made in India Bar Cutting Machine (8-32mm)
            </h1>
            <p className="text-xl text-gray-600 font-medium">🇮🇳 Premium Indian Manufacturing | Built for 15-20 Years | Atmanirbhar Bharat</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-yellow-50 rounded flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">🇮🇳</span>
                  </div>
                  <p className="text-orange-600 text-sm font-bold">100% MADE IN INDIA</p>
                  <p className="text-gray-400 text-xs mt-1">HMS Premium Bar Cutting Machine</p>
                </div>
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                🇮🇳 FLAGSHIP PREMIUM MODEL
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                The Finest Indian-Made Bar Cutting Machine
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our flagship Made in India bar cutting machine represents the pinnacle of Indian engineering. Built with premium Bhilai steel, CNC machined components, and designed for 15-20 years of professional daily use. This is not just a machine - it&apos;s a generational investment.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose HMS Made in India:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>Premium Bhilai Steel Frame</strong> — Extra-thick, no flex, built to last decades</li>
                  <li><strong>CNC Machined Components</strong> — Perfect tolerances, minimal wear</li>
                  <li><strong>15-20 Year Service Life</strong> — Designed for generational use</li>
                  <li><strong>100% Made in India</strong> — Qualifies for government tenders</li>
                  <li><strong>Direct Factory Support</strong> — From HMS Bengaluru, no middlemen</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-orange-700">₹1,55,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Premium investment for 15-20 years of service</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20HMS%20Made%20in%20India%20Bar%20Cutting%20Machine%20at%20Rs.1%2C55%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹1,55,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20HMS%20Made%20in%20India%20Bar%20Cutting%20Machine', '_blank')
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
                HMS Made in India - Premium Indian Engineering at Its Finest
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why This Machine Costs More - And Why It&apos;s Worth It
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The HMS Made in India bar cutting machine is our most expensive model - and there&apos;s a reason for that. Every component is built to last: <strong>extra-thick Bhilai steel frame</strong> that won&apos;t flex or wear, <strong>CNC machined gears with perfect tolerances</strong>, <strong>heat-treated components</strong> for extended wear life, and <strong>premium sealed bearings</strong> throughout. This isn&apos;t about premium pricing - it&apos;s about premium materials and engineering.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    15-20 Year Service Life
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    While budget machines might last 5-8 years with heavy repairs, the HMS Made in India model is engineered for <strong>15-20 years of professional daily use</strong>. We have customers with HMS machines still running strong after 10+ years of daily operation. This is a machine you buy once and pass down to the next generation.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    100% Made in India - Atmanirbhar Bharat
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every component of this machine is manufactured in India. This means:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>Qualifies for government tenders</strong> requiring Indian-manufactured equipment</li>
                    <li><strong>No import documentation</strong> - Indian origin certificates available</li>
                    <li><strong>Support Indian manufacturing</strong> - contribute to Atmanirbhar Bharat</li>
                    <li><strong>No forex or import delays</strong> for parts or service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    The Math: Why Premium Actually Costs Less
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong>₹1,55,000 ÷ 15 years = ₹10,333 per year</strong><br />
                    <strong>₹75,000 ÷ 5 years = ₹15,000 per year + more repairs</strong><br /><br />
                    Over time, the premium machine delivers lower cost per year, better performance, and zero stress about unexpected breakdowns. When your business depends on your equipment, reliability is worth the investment.
                  </p>
                </div>

                {/* Image Placeholders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-orange-50 rounded-lg flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-2 bg-orange-100 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-orange-400 text-xs">HMS India Quality Image {i}</p>
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
              Benefits of HMS Made in India Bar Cutting Machine
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
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">📋 6-Month Warranty + AMC</h3>
                <p className="text-orange-700">6-month warranty on manufacturing defects. Extended Annual Maintenance Contract (AMC) available.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">🚚 Delivery: 5-7 Days</h3>
                <p className="text-orange-700">Premium packaging. Heavy machine - proper transport arranged. Charges as per actuals.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">🏭 Direct Factory Support</h3>
                <p className="text-orange-700">Direct support from HMS Bengaluru. No middlemen, no dealers - talk to the manufacturer.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">📜 Indian Origin Certificate</h3>
                <p className="text-orange-700">Documentation available for government tenders and Make in India compliance.</p>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200 mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🇮🇳 Why Buy HMS Made in India?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15-20</div>
                  <div className="text-sm text-gray-600">Years Service Life</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Made in India</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">Direct</div>
                  <div className="text-sm text-gray-600">Factory Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">₹1.55L</div>
                  <div className="text-sm text-gray-600">Long-term Value</div>
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
          <section className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg shadow p-8 mb-12 text-white">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Model?</h2>
            <p className="text-orange-100 mb-6">
              We have bar cutting machines from ₹75,000 to ₹1,55,000. Let us help you choose the right one for your needs and budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/bar-rebar-cutting-machine">
                <Button variant="outline" className="bg-white text-orange-600 hover:bg-gray-100 border-white">
                  View All Bar Cutting Machines
                </Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20bar%20cutting%20machine%20for%20my%20needs" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white/20 hover:bg-white/30 border border-white">
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
                      <ProductImage src={product.mainImage} alt={product.name} width={500} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" productName={product.name} />
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

