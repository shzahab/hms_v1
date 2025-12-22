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

export default function GF25ThreePhaseBarBendingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "gf25-three-phase-bar-bending-machine")
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
              href="/category/bar-rebar-bending-machines"
              className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
            >
              ← Back to Bar Bending Machines
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              GF25 Three Phase Bar Bending Machine (8-20mm)
            </h1>
            <p className="text-xl text-gray-600 font-medium">Professional Grade | 20mm Capacity with Industrial 3-Phase Power</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                <Image
                  src="/images/products/gf25-main.webp"
                  alt="GF25 Three Phase Bar Bending Machine"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                The Professional&apos;s Choice for Medium-Scale Projects
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The GF25 Three Phase combines the best of both worlds: 20mm bending capacity with industrial three-phase power for continuous heavy-duty operation. This is the machine for serious contractors handling multiple projects, apartment buildings, and medium-scale commercial construction. The 3kW motor delivers consistent power for bending larger bars all day long.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose GF25 Three Phase:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>20mm Maximum Capacity</strong> — Handle main bars for G+3/G+4 buildings</li>
                  <li><strong>3kW Three-Phase Motor</strong> — Industrial power for continuous operation</li>
                  <li><strong>Best for Multi-Project Contractors</strong> — Reliable workhorse for daily use</li>
                  <li><strong>Fabrication Unit Ready</strong> — Excellent duty cycle for high-volume work</li>
                  <li><strong>Complete 8-20mm Range</strong> — One machine for stirrups and main bars</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹38,000</span>
                  <span className="text-gray-500 text-sm">+ GST (18%)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Delivery: 1-3 days | Charges as per actuals</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%20GF25%20Three%20Phase%20Bar%20Bending%20Machine%20at%20Rs.38%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹38,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%20GF25%20Three%20Phase%20Bar%20Bending%20Machine', '_blank')
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
                GF25 Three Phase - Built for Growing Construction Businesses
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    The Right Machine for Scaling Up
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    When your construction business grows from single houses to apartment buildings and commercial projects, your equipment needs to grow too. The <strong>GF25 Three Phase</strong> is designed for contractors who&apos;ve outgrown entry-level machines but don&apos;t yet need the heavy-duty industrial equipment. It&apos;s the sweet spot - capable enough for serious work, affordable enough for medium-scale operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why This Machine Makes Business Sense
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">For Multi-Project Contractors</h4>
                      <p className="text-gray-600 text-sm">
                        Running 3-4 sites simultaneously? The GF25 3-Phase handles the load. Process stirrups for multiple buildings without breaking a sweat.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">For Small Fabrication Units</h4>
                      <p className="text-gray-600 text-sm">
                        Supplying bent rebar to other contractors? This machine handles the volume with its industrial duty cycle.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">For Apartment Building Projects</h4>
                      <p className="text-gray-600 text-sm">
                        G+3 and G+4 buildings need 20mm main bars. Process them efficiently along with all your stirrups on one machine.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">For Long-Term Investment</h4>
                      <p className="text-gray-600 text-sm">
                        Three-phase motors last longer under heavy use. Buy once, use for years across dozens of projects.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Complete Model Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Model</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Capacity</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Power</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-3 text-sm">GF20 1-Phase</td>
                          <td className="px-4 py-3 text-sm">8-16mm</td>
                          <td className="px-4 py-3 text-sm">220V</td>
                          <td className="px-4 py-3 text-sm">₹33,000</td>
                          <td className="px-4 py-3 text-sm">Small houses</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm">GF20 3-Phase</td>
                          <td className="px-4 py-3 text-sm">8-16mm</td>
                          <td className="px-4 py-3 text-sm">415V</td>
                          <td className="px-4 py-3 text-sm">₹35,000</td>
                          <td className="px-4 py-3 text-sm">High-volume 16mm work</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm">GF25 1-Phase</td>
                          <td className="px-4 py-3 text-sm">8-20mm</td>
                          <td className="px-4 py-3 text-sm">220V</td>
                          <td className="px-4 py-3 text-sm">₹35,000</td>
                          <td className="px-4 py-3 text-sm">G+2/G+3 without 3-phase</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="px-4 py-3 text-sm font-bold text-green-800">GF25 3-Phase ⭐</td>
                          <td className="px-4 py-3 text-sm font-bold text-green-800">8-20mm</td>
                          <td className="px-4 py-3 text-sm font-bold text-green-800">415V</td>
                          <td className="px-4 py-3 text-sm font-bold text-green-800">₹38,000</td>
                          <td className="px-4 py-3 text-sm font-bold text-green-800">Professional contractors</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={`/images/products/gf25-${i}.webp`}
                        alt={`GF25 Three Phase Bar Bending Machine - Image ${i}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
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
              Benefits of GF25 Three Phase
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

          {/* Service Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Purchase Terms & Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">📋 6-Month Warranty</h3>
                <p className="text-blue-700">Covers manufacturing defects. Does not cover spares and damage from manual misuse.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🚚 Delivery: 1-3 Days</h3>
                <p className="text-blue-700">Delivery charges as per actuals based on location.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔧 Installation (Optional)</h3>
                <p className="text-blue-700">Professional installation available at extra cost if required.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">📚 Operator Training (Paid)</h3>
                <p className="text-blue-700">On-site training available at additional cost.</p>
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

