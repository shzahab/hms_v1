import Image from "next/image";
import Link from "next/link";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";

export default function PlateCompactorPage() {
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
            <li className="text-gray-900 font-medium">Plate Compactors</li>
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
                  src="/images/products/plate-compactors-main.webp"
                  alt="Hutaib Machinery Plate Compactor 30kN vibratory compactor with 650x500mm plate for trench backfill and paver base preparation"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/images/products/plate-compactors-1.webp"
                  alt="Plate compactor being used for trench compaction in utility installation"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/plate-compactors-2.webp"
                  alt="Vibratory plate compactor preparing base layer for paver installation"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/plate-compactors-3.webp"
                  alt="FPC160 plate compactor compacting soil around foundation"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Plate Compactor 30kN - Vibratory Soil Compactor for Trenches and Confined Areas
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Hutaib Machinery <strong>Plate Compactor</strong> delivers <strong>30kN centrifugal force</strong> at{" "}
                <strong>95Hz frequency</strong> for effective <strong>trench backfill, paver base preparation, and confined area compaction</strong> across South Indian construction projects. With a <strong>650mm × 500mm plate</strong> and <strong>250kg weight</strong>, this <strong>vibratory compactor</strong> reaches areas where larger equipment cannot access, making it essential for <strong>utility contractors, landscapers, and building contractors</strong>.
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">₹38,000</span>
                <span className="text-gray-500 ml-2">+ GST</span>
              </div>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  30kN Force
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  95Hz Frequency
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  650×500mm Plate
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  250kg Weight
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  1-Year Warranty
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact?product=plate-compactors"
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
            Ready to Order Your Plate Compactor?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for the best price and free delivery across South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?product=plate-compactors"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/918074949635?text=Hi%20I%27m%20interested%20in%20the%20Plate%20Compactor"
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

