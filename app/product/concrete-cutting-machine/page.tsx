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

export default function ConcreteCuttingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  // Get random products excluding the current one (client-side only to avoid hydration errors)
  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.name !== "Concrete Cutting Machine")
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Concrete Cutting Machine for Road & Floor Construction Projects
            </h1>
            <p className="text-xl text-gray-600 font-medium">Precision Groove Cutting with 240mm Depth | 25+ Years Trusted Supplier</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/images/products/concrete-cutting-machine-main.webp"
                alt="Hutaib Machinery concrete cutting machine 240mm depth cutting expansion joints on road construction site in South India"
                width={600}
                height={400}
                className="w-full object-cover rounded"
                priority
              />
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Professional Concrete & Road Cutting Since 1999
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Concrete Cutting Machine from Hutaib Machinery delivers precision cutting for road construction, floor renovation, and utility installation projects across South India. Also known as a Groove Cutting Machine or Floor Saw, this equipment features a 240mm maximum cutting depth and 600mm diamond blade capacity. With its integrated 35-liter water tank for wet cutting, it reduces dust, extends blade life, and provides clean cuts with minimal chipping—ideal for expansion joints, control joints, and pavement repairs throughout Karnataka, Tamil Nadu, Kerala, and Telangana.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features & Benefits:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>240mm Maximum Cutting Depth</strong> — Handles deep cuts for road joints, utility trenches, and thick concrete slabs</li>
                  <li><strong>600mm Diamond Blade Capacity</strong> — Large blade enables efficient cutting in fewer passes</li>
                  <li><strong>35L Water Tank for Wet Cutting</strong> — Reduces dust by 90%, extends blade life up to 40%</li>
                  <li><strong>Precision Depth Adjustment</strong> — Handle rotation provides exact depth control for graduated cuts</li>
                  <li><strong>Ergonomic Manual Push Design</strong> — Comfortable operation with reduced fatigue on large projects</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹65,000</span>
                  <span className="text-gray-500 text-sm">+ GST</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Free installation & training across South India</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                {/* First Row - BUY NOW Button */}
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const concreteCuttingMachine = productsData.products.find(p => p.name === "Concrete Cutting Machine");
                        const paymentLink = concreteCuttingMachine?.paymentLink || 'https://rzp.io/rzp/GXXPPR1D';
                        window.open(paymentLink, '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW!
                  </Button>
                </div>
                
                {/* Second Row - Get Quote and Download Brochure */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto h-[42px]"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('https://wa.me/918074949635', '_blank')
                      }
                    }}
                  >
                    <span className="text-sm font-medium tracking-tight text-white px-6">
                      Get Quote
                    </span>
                  </ShimmerButton>
                  <a
                    href="/hms-brochure.pdf"
                    download="HMS-Brochure.pdf"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-[42px] flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Brochure
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
                Concrete Cutting Machine - Engineered for South Indian Road & Construction Excellence
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Impact on Infrastructure Projects Across Karnataka, Tamil Nadu & Kerala
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Concrete cutting machines <strong>play a critical role in road construction and maintenance</strong> across
                    South India. By delivering <strong>clean, precise cuts through concrete and asphalt</strong>, they ensure{" "}
                    <strong>professional-quality expansion joints and repair work</strong> in Bengaluru, Chennai, and Hyderabad. Our machines help
                    projects <strong>meet PWD specifications and municipal standards</strong>.
                    Advanced wet cutting technology minimizes <strong>dust pollution, reduces blade wear, and provides cleaner cuts</strong>,
                    resulting in <strong>higher-quality road surfaces</strong> with <strong>longer service life</strong> for infrastructure development across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose Hutaib Machinery - 25+ Years of Excellence
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Choosing <strong>Hutaib Machinery Concrete Cutting Machines</strong> means investing in{" "}
                    <strong>reliability, precision, and proven performance</strong>. Serving South Indian industries since 1999, our machines are engineered for{" "}
                    <strong>durability and consistent results</strong>. Trusted by{" "}
                    <strong>road contractors, municipal corporations, and infrastructure developers</strong> across Karnataka, Tamil Nadu, and Kerala, we deliver equipment that meets the demanding requirements of Indian construction projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Proven Performance in South Indian Climate
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our concrete cutting machines are engineered to perform reliably in the challenging conditions of South Indian construction sites. From the humid coastal regions of Kerala and Goa to the metropolitan road construction projects in Bengaluru and Hyderabad, Hutaib Machinery equipment delivers{" "}
                    <strong>consistent cutting performance, minimal downtime, and long-term durability</strong>. With a{" "}
                    <strong>proven track record spanning over 25 years</strong>, we continue to set{" "}
                    <strong>high standards in concrete cutting technology and operational efficiency</strong> for the South Indian infrastructure industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose HMS Concrete Cutting Machine?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Deep Cutting Capacity – Maximum 240mm depth handles thick slabs and road surfaces.<br />
                    Wet Cutting System – 35L water tank reduces dust by 90% and extends blade life.<br />
                    Versatile Applications – Cuts concrete, reinforced concrete, asphalt, and pavement.<br />
                    Precision Depth Control – Handle rotation enables exact depth adjustment.<br />
                    Reliable Performance – Built for continuous operation in harsh site conditions.<br />
                    Easy Blade Replacement – Quick-change system minimizes downtime between blade swaps.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Innovative Engineering for Efficiency & Clean Operation
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    HMS Concrete Cutting Machines are designed with advanced engineering innovations to maximize cutting precision, reduce environmental impact through dust suppression, and boost productivity. Our machines seamlessly combine modern wet cutting technology with robust construction, offering superior cutting performance, operational reliability, and operator comfort.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Customization for Every Need
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    At HMS, we understand that every project has <strong>unique cutting requirements</strong>.
                    That&apos;s why we offer <strong>comprehensive blade options and support</strong> tailored to your specific needs.
                  </p>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
                    <li><strong>Diamond blades for concrete, reinforced concrete, and asphalt</strong> for <strong>diverse cutting applications</strong></li>
                    <li><strong>Green concrete blades</strong> for cutting fresh concrete before full curing</li>
                    <li><strong>Expert guidance</strong> from our technical team to select the <strong>optimal blade for your project</strong></li>
                  </ul>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Image
                    src="/images/products/concrete-cutting-machine-1.webp"
                    alt="Concrete cutting machine front view showing 600mm blade and water tank for wet cutting"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-cutting-machine-2.webp"
                    alt="Hutaib concrete cutter in operation cutting expansion joints at Bengaluru road construction site"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-cutting-machine-3.webp"
                    alt="Close-up detail view of concrete cutting machine blade and depth adjustment mechanism"
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
              Benefits of Concrete Cutting Machines
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
              Customer Testimonials
            </h2>
            <TestimonialsSection />
          </div>

          {/* Service and Support Section */}
          <div className="bg-white rounded-lg shadow mb-12 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Support and Warranty
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every concrete cutting machine from Hutaib Machinery includes comprehensive support across South India:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ 1-Year Comprehensive Warranty</h3>
                <p className="text-blue-700">Covering parts and labor for complete peace of mind</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Free Installation and Training</h3>
                <p className="text-blue-700">On-site setup and operator training at your location across South India</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Lifetime Technical Support</h3>
                <p className="text-blue-700">Available via phone and WhatsApp for ongoing assistance</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Diamond Blades & Spare Parts</h3>
                <p className="text-blue-700">Same-day dispatch from our Bengaluru warehouse</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our service technicians cover <strong>Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, South Maharashtra, and Goa</strong> with response times typically within <strong>24-48 hours</strong>. Annual Maintenance Contracts available for extended coverage.
            </p>
            
            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Hutaib Machinery?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                  <div className="text-xs text-gray-500">(Since 1999)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
                  <div className="text-sm text-gray-600">States Served</div>
                  <div className="text-xs text-gray-500">South India Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                  <div className="text-xs text-gray-500">Across Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">24-48h</div>
                  <div className="text-sm text-gray-600">Service Response</div>
                  <div className="text-xs text-gray-500">Across South India</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-700 text-center">
                  <strong>📍 Headquarters:</strong> No. 78, N. R. Road, Kalasipalyam, Bengaluru - 560002, Karnataka, India
                </p>
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

          {/* Related Equipment Section */}
          <section className="bg-white rounded-lg shadow p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Related Equipment</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Complete your construction equipment fleet with these complementary machines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Concrete Mixer</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty 560L drum capacity mixer with Kirloskar engine. Perfect for large construction projects.
                </p>
                <Link href="/product/concrete-mixer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Concrete Vibrator</h3>
                <p className="text-gray-600 mb-4">
                  Electric concrete vibrator for proper consolidation. Removes air bubbles for stronger structures.
                </p>
                <Link href="/product/concrete-vibrator" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Diamond Blades & Spare Parts</h3>
                <p className="text-gray-600 mb-4">
                  600mm diamond blades for concrete and asphalt. Replacement parts available with same-day dispatch.
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

