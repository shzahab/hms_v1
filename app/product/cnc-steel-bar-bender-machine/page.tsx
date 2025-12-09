import Image from "next/image";
import Link from "next/link";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";

export default function CNCBarBenderPage() {
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
            <li className="text-gray-900 font-medium">CNC Steel Bar Bender Machine</li>
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
                  src="/images/products/cnc-steel-bar-bender-machine-main.webp"
                  alt="Hutaib Machinery CNC Steel Bar Bender CDRG 45 with 6-42mm capacity for automatic rebar bending"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/images/products/cnc-steel-bar-bender-machine-1.webp"
                  alt="CNC bar bender producing stirrups for construction reinforcement"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/cnc-steel-bar-bender-machine-2.webp"
                  alt="Steel bar bending machine control panel and working disc"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/products/cnc-steel-bar-bender-machine-3.webp"
                  alt="CDRG 45 bar bender bending heavy-gauge rebar"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CNC Steel Bar Bender 40mm - Semi-Automatic Rebar Bending Machine for High-Volume Production
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Hutaib Machinery <strong>CNC Steel Bar Bender</strong> handles <strong>6-42mm round and ribbed steel</strong> with{" "}
                <strong>adjustable 5-10r/min bending speed</strong> for precise <strong>stirrup, hook, and bent bar production</strong> across South Indian construction sites. With a <strong>400mm working disc</strong> and <strong>380kg heavy-duty construction</strong>, this <strong>semi-automatic bender</strong> delivers consistent results for <strong>high-rise buildings, infrastructure projects, and rebar fabrication yards</strong>.
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">₹1,10,000</span>
                <span className="text-gray-500 ml-2">+ GST</span>
              </div>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  6-42mm Capacity
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  5-10 r/min Speed
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  400mm Working Disc
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Semi-Automatic
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  1-Year Warranty
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact?product=cnc-steel-bar-bender-machine"
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
            Ready to Order Your CNC Steel Bar Bender?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for the best price and free delivery across South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?product=cnc-steel-bar-bender-machine"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Quote
            </Link>
            <a
              href="https://wa.me/918074949635?text=Hi%20I%27m%20interested%20in%20the%20CNC%20Steel%20Bar%20Bender"
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

