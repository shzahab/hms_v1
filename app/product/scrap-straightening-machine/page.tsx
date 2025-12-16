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

export default function ScrapStraighteningMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.name !== "Scrap Straightening Machine")
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
              Scrap Straightening Machine for Steel Bar Recovery
            </h1>
            <p className="text-xl text-gray-600 font-medium">6-14mm Capacity | 30m/min Speed | 25+ Years Trusted Supplier</p>
          </div>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src="/images/products/scrap-straightening-machine-main.webp"
                alt="Hutaib Machinery scrap straightening machine 6-14mm capacity processing bent steel bars for recovery in South India"
                width={600}
                height={400}
                className="w-full object-cover rounded"
                priority
              />
            </div>

            {/* Product Quick Details */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                Maximize Scrap Value Recovery Since 1999
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Scrap Straightening Machine from Hutaib Machinery delivers efficient recovery of bent and curved steel bars for construction sites and recycling operations across South India. With a 6-14mm diameter capacity and 30m/min processing speed, this industrial steel bar straightener transforms construction waste into reusable material. Powered by a robust 9.5kW motor with semi-automatic operation, it increases scrap value by up to 80%—essential for cost-conscious contractors, steel recyclers, and fabrication workshops throughout Karnataka, Tamil Nadu, Kerala, and Telangana.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features & Benefits:</h3>
                <ul className="list-none pl-0 text-gray-600 space-y-3 text-base">
                  <li><strong>6-14mm Diameter Range</strong> — Handles common scrap sizes from construction sites</li>
                  <li><strong>30m/min Processing Speed</strong> — High-volume recovery for large projects</li>
                  <li><strong>9.5kW Powerful Motor</strong> — Straightens heavily bent and curved bars</li>
                  <li><strong>Automated Feed System</strong> — Continuous processing with minimal operator effort</li>
                  <li><strong>Up to 80% Value Recovery</strong> — Transform scrap into reusable material</li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-700">₹1,80,000</span>
                  <span className="text-gray-500 text-sm">+ GST</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Free installation & training across South India</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <Button
                    className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const scrapMachine = productsData.products.find(p => p.name === "Scrap Straightening Machine");
                        const paymentLink = scrapMachine?.paymentLink || 'https://rzp.io/rzp/L5z5Pii';
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
                Scrap Straightening Machine - Engineered for South Indian Steel Recovery
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Impact on Construction Costs Across Karnataka, Tamil Nadu & Kerala
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Scrap straightening machines <strong>dramatically reduce material costs</strong> in
                    construction projects throughout South India. By <strong>recovering bent and curved bars that would otherwise be sold as low-value scrap</strong>, they ensure{" "}
                    <strong>maximum material utilization and cost efficiency</strong> for projects in Bengaluru, Chennai, and Hyderabad. Our machines help
                    contractors <strong>reduce steel procurement costs by recovering up to 80% of scrap value</strong>.
                    On-site processing eliminates <strong>transport costs, maximizes material reuse, and supports sustainable construction practices</strong>,
                    resulting in <strong>significant cost savings</strong> with <strong>environmental benefits</strong> for construction across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose Hutaib Machinery - 25+ Years of Excellence
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Choosing <strong>Hutaib Machinery Scrap Straightening Machines</strong> means investing in{" "}
                    <strong>reliability, efficiency, and proven ROI</strong>. Serving South Indian industries since 1999, our machines are built for{" "}
                    <strong>durability and continuous operation</strong>. Trusted by{" "}
                    <strong>contractors, steel recyclers, and fabrication workshops</strong> across Karnataka, Tamil Nadu, and Kerala, we deliver equipment that maximizes scrap recovery value.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Choose HMS Scrap Straightening Machine?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Versatile Capacity – Handles 6-14mm bars covering common construction scrap sizes.<br />
                    High Speed Processing – 30m/min for efficient large-volume recovery.<br />
                    Powerful Motor – 9.5kW handles heavily bent and curved bars.<br />
                    Automated Feed – Continuous operation with minimal operator effort.<br />
                    Quick ROI – Pays for itself through scrap value recovery.<br />
                    Compact Design – 1800mm × 1500mm footprint fits site and workshop spaces.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Innovative Engineering for Recovery & Efficiency
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    HMS Scrap Straightening Machines are designed with proven engineering to maximize material recovery, minimize operator effort, and deliver consistent results. Our machines seamlessly combine powerful motor technology with automated feed systems, offering superior straightening performance, operational reliability, and fast ROI for construction and recycling operations across South India.
                  </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Image
                    src="/images/products/scrap-straightening-machine-1.webp"
                    alt="Scrap straightening machine front view showing feed system and straightening rollers"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/scrap-straightening-machine-2.webp"
                    alt="Hutaib steel bar straightener in operation processing bent rebar at Bengaluru construction site"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/images/products/scrap-straightening-machine-3.webp"
                    alt="Close-up detail view of scrap straightening machine motor and drive mechanism"
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
              Benefits of Scrap Straightening Machines
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
              Every scrap straightening machine from Hutaib Machinery includes comprehensive support across South India:
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
                <h3 className="text-xl font-semibold text-blue-900 mb-3">✓ Spare Parts Availability</h3>
                <p className="text-blue-700">Rollers, bearings, and components with same-day dispatch</p>
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
              Complete your rebar processing line with these complementary machines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bar Cutting Machine</h3>
                <p className="text-gray-600 mb-4">
                  Cut straightened bars to required lengths. High-speed precision cutting up to 42mm.
                </p>
                <Link href="/product/bar-rebar-cutting-machine" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bar Bending Machine</h3>
                <p className="text-gray-600 mb-4">
                  Bend recovered bars into required shapes. Precision bending up to 42mm diameter.
                </p>
                <Link href="/product/bar-bending-machine" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Spare Parts & Rollers</h3>
                <p className="text-gray-600 mb-4">
                  Straightening rollers, bearings, and replacement parts available with same-day dispatch.
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

