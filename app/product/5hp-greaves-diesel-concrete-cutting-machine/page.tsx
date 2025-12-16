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

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FiveHPGreavesDieselConcreteCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.slug !== "5hp-greaves-diesel-concrete-cutting-machine")
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
              href="/product/concrete-cutting-machine"
              className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
            >
              ← Back to Concrete Cutting Machines
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              5HP Greaves Diesel Concrete Cutting Machine
            </h1>
            <p className="text-xl text-gray-600 font-medium">Affordable Entry-Level Diesel Floor Saw | 240mm Cutting Depth</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                <Image
                  src="/images/products/concrete-cutting-machine-main.webp"
                  alt="5HP Greaves Diesel Concrete Cutting Machine for road joints and floor cutting"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded"
                  priority
                />
              </div>
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Entry-Level Diesel Concrete Cutter with Greaves Engine
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The 5HP Greaves Diesel Concrete Cutting Machine is the most affordable diesel-powered floor saw in our range. Powered by India&apos;s trusted Greaves diesel engine, this machine delivers reliable performance for road joints, floor cutting, and expansion joint work. With 240mm cutting depth, 35L water tank for wet cutting, and precision depth adjustment, it&apos;s perfect for small contractors, plumbers, and construction companies starting their concrete cutting operations across South India.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose 5HP Greaves Diesel:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>Trusted Greaves Engine</strong> — India&apos;s most reliable diesel engine with nationwide service network</li>
                  <li><strong>240mm Cutting Depth</strong> — Handles most road joints, floor cuts, and expansion joint requirements</li>
                  <li><strong>Lowest Running Costs</strong> — Diesel is cheaper than petrol with better fuel economy</li>
                  <li><strong>Wet Cutting System</strong> — 35L water tank reduces dust by 90% and extends blade life</li>
                  <li><strong>Most Affordable Diesel Model</strong> — Best entry point for diesel concrete cutting at ₹55,000</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹55,000</span>
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
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20buy%205HP%20Greaves%20Diesel%20Concrete%20Cutting%20Machine%20at%20Rs.55%2C000', '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW - ₹55,000
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635?text=Hi%2C%20I%20need%20a%20quote%20for%205HP%20Greaves%20Diesel%20Concrete%20Cutting%20Machine', '_blank')
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
                5HP Greaves Diesel - The Smart Entry into Concrete Cutting
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Built for Small Contractors & Cost-Conscious Businesses
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Not every concrete cutting job requires a high-powered machine. The 5HP Greaves Diesel concrete cutter is designed for contractors who need <strong>reliable, economical cutting</strong> for road repairs, floor trenches, and expansion joints. Whether you&apos;re a plumber cutting floor channels in Bengaluru, a road contractor handling colony maintenance in Chennai, or a construction company in Hyderabad looking to add affordable cutting capability, this machine delivers <strong>professional results at the lowest operating cost</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Greaves Diesel Engine?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Greaves is India&apos;s most trusted name in diesel engines with <strong>service centers in every district</strong>. The 5HP model offers the perfect balance of power and fuel economy. Unlike petrol engines that burn expensive fuel and require more frequent maintenance, the Greaves diesel delivers <strong>consistent torque, lower running costs, and years of reliable service</strong>. Spare parts are readily available across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ideal Cutting Applications
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The 240mm cutting depth handles the most common cutting requirements:
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 mt-4">
                    <li><strong>Road expansion joints</strong> — Colony roads, internal roads, parking lots</li>
                    <li><strong>Floor cutting</strong> — Plumbing trenches, electrical conduits, drainage channels</li>
                    <li><strong>Repair work</strong> — Road patching, driveway repairs, floor modifications</li>
                    <li><strong>Control joints</strong> — Preventing concrete cracking in new slabs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Cost Advantage Over Petrol Models
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At current fuel prices, diesel costs <strong>₹15-20 less per liter than petrol</strong>. Combined with better fuel efficiency of diesel engines, operators typically save <strong>₹200-300 per day in fuel costs</strong> compared to equivalent petrol machines. Over a year of regular use, this adds up to <strong>₹50,000-75,000 in savings</strong> - enough to pay for the machine itself.
                  </p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <Image
                    src="/images/products/concrete-cutting-machine-1.webp"
                    alt="5HP Greaves diesel concrete cutter front view showing engine and blade assembly"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-cutting-machine-2.webp"
                    alt="Concrete cutting machine in operation cutting road joints with wet cutting system"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-cutting-machine-3.webp"
                    alt="Close-up of Greaves 5HP diesel engine on concrete cutting machine"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
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
              Benefits of 5HP Greaves Diesel Concrete Cutter
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
                <p className="text-blue-700">Covers manufacturing defects on machine body and components. Greaves engine warranty through authorized service centers.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🚚 Delivery: 3-5 Days</h3>
                <p className="text-blue-700">Dispatch from Bengaluru warehouse. Delivery charges as per actuals based on location.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🔧 Greaves Service Network</h3>
                <p className="text-blue-700">Greaves has authorized service centers across India for engine maintenance and repairs.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">💎 Diamond Blades Available</h3>
                <p className="text-blue-700">We supply quality diamond blades for concrete, asphalt, and green concrete cutting.</p>
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
                  <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">5HP Units Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3-5</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">₹55K</div>
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
            <h2 className="text-2xl font-bold mb-4">Need More Power?</h2>
            <p className="text-gray-300 mb-6">
              For heavy-duty road work or continuous cutting operations, consider our higher HP models with more cutting power and sustained performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product/concrete-cutting-machine">
                <Button variant="outline" className="bg-white text-slate-900 hover:bg-gray-100">
                  View All Concrete Cutting Machines
                </Button>
              </Link>
              <a href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20concrete%20cutting%20machine" target="_blank" rel="noopener noreferrer">
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
                      <ProductImage
                        src={product.mainImage}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        productName={product.name}
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

