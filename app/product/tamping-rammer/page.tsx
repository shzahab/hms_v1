import Image from "next/image";
import Link from "next/link";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";

export default function TampingRammerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/product" className="text-gray-500 hover:text-gray-700">
                Products
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Tamping Rammer</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/products/tamping-rammer-main.webp"
                  alt="Hutaib Machinery Tamping Rammer FTR100E with 20kN impact force for trench and foundation compaction"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/images/products/tamping-rammer-1.webp"
                  alt="Jumping rammer compacting trench backfill"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/tamping-rammer-2.webp"
                  alt="Tamping rammer shoe and impact mechanism close-up"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/tamping-rammer-3.webp"
                  alt="FTR100E rammer handle and controls"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tamping Rammer 20kN - Jumping Rammer for Trench and Foundation Compaction
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Hutaib Machinery <strong>Tamping Rammer</strong> delivers <strong>20kN impact force</strong> with{" "}
                <strong>45-70mm jumping height</strong> for effective <strong>cohesive soil compaction</strong> in confined spaces across South Indian construction projects. With a <strong>300mm × 330mm shoe</strong> and <strong>100kg weight</strong>, this <strong>jumping rammer</strong> excels in <strong>utility trenches, foundation backfill, and pipe bedding</strong> where plate compactors cannot access.
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">₹36,000</span>
                <span className="text-gray-500 ml-2">+ GST</span>
              </div>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  20kN Impact Force
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  45-70mm Jump
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  300×330mm Shoe
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  100kg Weight
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  1-Year Warranty
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact?product=tamping-rammer"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Get Best Price
                </Link>
                <a
                  href="tel:+918074949635"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Call Now: +91 80749 49635
                </a>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">25+ Years in Business</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">Free Installation</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">Pan-South India Delivery</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <SpecificationsTable />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features and Benefits
          </h2>
          <BenefitsSection />
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ApplicationsSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-600 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order Your Tamping Rammer?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for the best price and free delivery across South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?product=tamping-rammer"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/918074949635?text=Hi%20I%27m%20interested%20in%20the%20Tamping%20Rammer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

