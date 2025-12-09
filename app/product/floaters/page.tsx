import Image from "next/image";
import Link from "next/link";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";

export default function FloatersPage() {
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
            <li className="text-gray-900 font-medium">Floaters (Walk Behind Power Trowel)</li>
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
                  src="/images/products/floaters-main.webp"
                  alt="Hutaib Machinery Walk Behind Power Trowel FWT48 with 9HP engine for residential and commercial concrete floor finishing"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/images/products/floaters-1.webp"
                  alt="Walk behind trowel finishing residential driveway"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/floaters-2.webp"
                  alt="Power float 48-inch blade system close-up"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/floaters-3.webp"
                  alt="FWT48 concrete floater handle and controls"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Walk Behind Power Trowel 9HP - Concrete Floater for Residential and Commercial Floors
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Hutaib Machinery <strong>Walk Behind Power Trowel (Floater)</strong> delivers <strong>7kW/9HP power</strong> with{" "}
                <strong>70-125 RPM adjustable speed</strong> for professional <strong>concrete floor finishing</strong> on medium-sized projects across South India. With a <strong>48-inch blade</strong> and <strong>maneuverable design</strong>, this <strong>floater machine</strong> is ideal for <strong>driveways, patios, garage floors, and commercial spaces</strong> where ride-on trowels are impractical.
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">₹30,000</span>
                <span className="text-gray-500 ml-2">+ GST</span>
              </div>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  9HP / 7kW Output
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  70-125 RPM
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  48" Blade
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Walk Behind
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  1-Year Warranty
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact?product=floaters"
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
            Ready to Order Your Walk Behind Power Trowel?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for the best price and free delivery across South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?product=floaters"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/918074949635?text=Hi%20I%27m%20interested%20in%20the%20Walk%20Behind%20Power%20Trowel"
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

