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

export default function ConcreteMixer250L2HPIndianPage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "concrete-mixer-250l-2hp-indian-motor")
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
              href="/category/concrete-mixers"
              className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
            >
              ← Back to Concrete Mixers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Concrete Mixer 250L with 2HP Indian Motor
            </h1>
            <p className="text-xl text-gray-600 font-medium">Premium Build Quality | Heavy-Duty Construction | Made in India Motor</p>
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
                  <p className="text-gray-400 text-xs mt-1">250L 2HP Indian Motor - Premium Build</p>
                </div>
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Professional Grade for Serious Contractors
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The 250L Concrete Mixer with 2HP Indian Motor is <strong>built for professional contractors who need reliable equipment</strong> that performs day after day, year after year. The premium price reflects superior construction - heavier gauge steel, quality Indian motor designed for Indian conditions, better bearings, and components that survive demanding site conditions across Bengaluru, Chennai, Hyderabad, and all of South India.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Features:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>2HP Indian Motor</strong> — 33% more power than 1.5HP, built for Indian voltage</li>
                  <li><strong>Heavy-Duty Frame</strong> — Thicker gauge steel, built for rough site conditions</li>
                  <li><strong>250L Drum Capacity</strong> — Solid output for professional work</li>
                  <li><strong>Premium Components</strong> — Better bearings, gears, and construction</li>
                  <li><strong>Single Phase Operation</strong> — 220V power with 20A recommended</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-blue-700">₹58,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Premium build quality | Delivery: 3-5 days</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20250L%202HP%20Indian%20Motor%20Concrete%20Mixer%20at%20Rs.58%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹58,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20250L%202HP%20Indian%20Motor%20Concrete%20Mixer', '_blank')
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
                Why Professional Contractors Choose Premium Equipment
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    The Real Cost of Cheap Equipment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Budget mixers cost ₹23,000-26,000 and work fine for light, occasional use. But professional contractors who use equipment <strong>daily for years</strong> understand the hidden costs of cheap equipment: frequent breakdowns costing project time, repairs and part replacements, shorter service life requiring earlier replacement, and the stress of unreliable equipment. The ₹58,000 250L 2HP Indian Motor mixer is <strong>built to avoid these problems</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    2HP Indian Motor - More Than Just Power
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The <strong>2HP Indian-made motor</strong> isn&apos;t just about more horsepower. Indian motors are specifically designed for:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>Indian voltage conditions</strong> — Handle 220V with fluctuations up to ±10%</li>
                    <li><strong>Local climate</strong> — Designed for Indian heat, dust, and humidity</li>
                    <li><strong>Spare parts availability</strong> — Available at any electrical shop across India</li>
                    <li><strong>Local repair expertise</strong> — Every electrician knows Indian motors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Heavy-Duty Construction Throughout
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every component is built heavier than budget models:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>Thicker gauge steel</strong> for frame and drum - won&apos;t bend or dent</li>
                    <li><strong>Better quality bearings</strong> - smoother operation, longer life</li>
                    <li><strong>Stronger gears</strong> - reliable power transmission</li>
                    <li><strong>Robust tilting mechanism</strong> - handles years of use</li>
                  </ul>
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
              Benefits of Premium 2HP Indian Motor Mixer
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
                <p className="text-blue-700">Covers manufacturing defects. Premium build means fewer warranty claims.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🚚 Delivery: 3-5 Days</h3>
                <p className="text-blue-700">Delivery charges as per actuals based on location.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔧 Indian Motor Spares</h3>
                <p className="text-blue-700">Motor parts available at any electrical shop across India.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">📞 Technical Support</h3>
                <p className="text-blue-700">Phone and WhatsApp support for troubleshooting.</p>
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
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Mixers Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">2HP</div>
                  <div className="text-sm text-gray-600">Indian Motor</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">₹58K</div>
                  <div className="text-sm text-gray-600">Premium Quality</div>
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
            <h2 className="text-2xl font-bold mb-4">Need Different Capacity?</h2>
            <p className="text-gray-300 mb-6">
              Compare with budget models or the larger 350L 3HP option to find your perfect match.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/concrete-mixer-280l-1-5hp-handy-type">
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
                  View Budget 280L Option
                </Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20between%20250L%20and%20350L%20mixers" target="_blank" rel="noopener noreferrer">
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

