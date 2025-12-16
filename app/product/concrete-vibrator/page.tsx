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

export default function ConcreteVibratorPage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.name !== "Concrete Vibrator")
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
              Concrete Vibrator for RCC Construction & Consolidation
            </h1>
            <p className="text-xl text-gray-600 font-medium">2HP Electric Needle Vibrator | 50Hz Frequency | 25+ Years Trusted Supplier</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/images/products/concrete-vibrator-main.webp"
                alt="Hutaib Machinery concrete vibrator 2HP electric needle vibrator consolidating fresh concrete at construction site in South India"
                width={600}
                height={400}
                className="w-full object-cover rounded"
                priority
              />
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Superior Concrete Consolidation Since 1999
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Concrete Vibrator from Hutaib Machinery delivers superior concrete consolidation for RCC construction projects across South India. Also known as a Needle Vibrator or Immersion Vibrator, this equipment features a 2HP single-phase electric motor operating at 50Hz frequency. With flexible shaft options and multiple needle head sizes (25mm to 50mm), it effectively removes air bubbles, eliminates voids, and ensures dense, high-quality concrete in columns, beams, slabs, and foundations throughout Karnataka, Tamil Nadu, Kerala, and Telangana.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features & Benefits:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>2HP Single-Phase Motor</strong> — Reliable power with standard site electrical supply</li>
                  <li><strong>50Hz Vibration Frequency</strong> — Optimal for air bubble removal and consolidation</li>
                  <li><strong>Flexible Shaft Options</strong> — Reaches narrow formwork and congested reinforcement</li>
                  <li><strong>Multiple Needle Sizes</strong> — 25mm, 32mm, 40mm, 50mm for various applications</li>
                  <li><strong>30m/min Working Speed</strong> — Efficient consolidation for large concrete pours</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹10,500</span>
                  <span className="text-gray-500 text-sm">+ GST</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Free delivery across South India</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const concreteVibrator = productsData.products.find(p => p.name === "Concrete Vibrator");
                        const paymentLink = concreteVibrator?.paymentLink || 'https://rzp.io/rzp/TVYJJ5Y';
                        window.open(paymentLink, '_blank')
                      }
                    }}
                  >
                    🛒 BUY NOW!
                  </Button>
                </div>
                
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
                Concrete Vibrator - Engineered for South Indian RCC Construction Excellence
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Impact on Construction Quality Across Karnataka, Tamil Nadu & Kerala
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Concrete vibrators <strong>dramatically improve structural quality</strong> in
                    RCC construction projects throughout South India. By effectively <strong>removing trapped air and consolidating fresh concrete</strong>, they ensure{" "}
                    <strong>dense, void-free structures with maximum strength</strong> in Bengaluru, Chennai, and Hyderabad. Our vibrators help
                    projects <strong>achieve IS standard requirements for concrete density</strong>.
                    Proper vibration eliminates <strong>honeycombing, improves reinforcement bond, and increases concrete strength by 10-15%</strong>,
                    resulting in <strong>durable, high-quality structures</strong> with <strong>extended service life</strong> for buildings and infrastructure across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose Hutaib Machinery - 25+ Years of Excellence
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Choosing <strong>Hutaib Machinery Concrete Vibrators</strong> means investing in{" "}
                    <strong>reliability, performance, and proven results</strong>. Serving South Indian industries since 1999, our vibrators are built for{" "}
                    <strong>durability and consistent performance</strong>. Trusted by{" "}
                    <strong>structural engineers, contractors, and precast manufacturers</strong> across Karnataka, Tamil Nadu, and Kerala, we deliver equipment that meets the demanding requirements of Indian construction projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose HMS Concrete Vibrator?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Optimal Vibration Frequency – 50Hz for effective air removal and consolidation.<br />
                    Reliable Electric Power – 2HP single-phase motor for standard site supply.<br />
                    Flexible Reach – Shaft options for narrow columns and congested reinforcement.<br />
                    Multiple Needle Sizes – 25mm to 50mm for columns, beams, slabs, and mass concrete.<br />
                    Affordable Price – ₹10,500 delivers professional-quality consolidation.<br />
                    Made in India – Built for Indian construction site conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Innovative Engineering for Quality & Efficiency
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    HMS Concrete Vibrators are designed with proven engineering to maximize consolidation effectiveness, ensure operator comfort, and deliver consistent results. Our vibrators seamlessly combine reliable motor technology with ergonomic design, offering superior concrete compaction, operational efficiency, and durability for construction sites across South India.
                  </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Image
                    src="/images/products/concrete-vibrator-1.webp"
                    alt="Concrete vibrator front view showing 2HP motor and flexible shaft connection"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-vibrator-2.webp"
                    alt="Hutaib needle vibrator in operation consolidating column concrete at Bengaluru construction site"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/concrete-vibrator-3.webp"
                    alt="Close-up detail view of concrete vibrator needle head and shaft assembly"
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
              Benefits of Concrete Vibrators
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
              Every concrete vibrator from Hutaib Machinery includes comprehensive support across South India:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ 1-Year Comprehensive Warranty</h3>
                <p className="text-blue-700">Covering parts and labor for complete peace of mind</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Free Delivery Across South India</h3>
                <p className="text-blue-700">Delivered to your site in Karnataka, Tamil Nadu, Kerala, and Telangana</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Lifetime Technical Support</h3>
                <p className="text-blue-700">Available via phone and WhatsApp for ongoing assistance</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Spare Needles & Parts Available</h3>
                <p className="text-blue-700">All needle sizes and replacement parts with same-day dispatch</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our service technicians cover <strong>Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, South Maharashtra, and Goa</strong> with response times typically within <strong>24-48 hours</strong>. Bulk order discounts available for contractors.
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
              Complete your concrete equipment setup with these complementary machines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Concrete Mixer</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty 560L drum capacity mixer for preparing quality concrete on site.
                </p>
                <Link href="/product/concrete-mixer" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Power Trowel</h3>
                <p className="text-gray-600 mb-4">
                  Ride-on power trowel for smooth concrete floor finishing after vibration.
                </p>
                <Link href="/product/ride-on-power-trowel" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Spare Needles & Parts</h3>
                <p className="text-gray-600 mb-4">
                  25mm, 32mm, 40mm, 50mm needle heads and flexible shafts available.
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

