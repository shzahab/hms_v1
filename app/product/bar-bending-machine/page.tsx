"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProductImage from "@/components/product-image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight, Download, Phone, MessageCircle, ShoppingCart, CheckCircle2, MapPin, Clock, Users, Award } from "lucide-react";
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

export default function BarBendingMachinePage() {
  const [otherProducts, setOtherProducts] = useState<any[]>([]);

  useEffect(() => {
    const randomProducts = productsData.products
      .filter(p => p.name !== "Bar / Rebar Bending Machine")
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setOtherProducts(randomProducts);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="mt-20 sm:mt-32 md:mt-40 pb-16">
        <div className="flex justify-center mb-6">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                25+ Years of Excellence Since 1999
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                Bar Bending Machine for South Indian Construction Projects
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Precision Rebar Forming | 25+ Years Trusted Supplier
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/products/bar-bending-machine-main.webp"
                      alt="Hutaib Machinery bar bending machine 42mm bending TMT steel rebar at construction site in South India"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                    {["180° Bending", "42mm Capacity", "Digital Control", "Dual Mode"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-medium shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg group cursor-pointer">
                      <Image
                        src={`/images/products/bar-bending-machine-${num}.webp`}
                        alt={`Bar bending machine view ${num}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    Trusted Bar Bending Solutions Since 1999
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The Bar Bending Machine from Hutaib Machinery delivers precision rebar forming for construction projects across South India. Designed for rebar fabricators, construction contractors, and infrastructure developers, this machine bends steel bars up to 42mm diameter with 180-degree accuracy. With digital control automation, it increases productivity by up to 40% compared to manual bending methods while ensuring consistent quality for TMT and HYSD bars used in Indian construction standards.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "180-Degree Bending Capacity — Achieves full stirrup formation in single operation, reducing labor time",
                      "42mm Maximum Bar Diameter — Handles all standard TMT bar sizes used in Indian construction (8mm to 42mm)",
                      "Digital Control System — Programmable angles for repeatable accuracy across large projects",
                      "Heavy-Duty Steel Frame — Built for 24/7 operation in harsh construction site conditions",
                      "Dual Operation Modes — Automatic and manual settings for flexibility across project scales"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-5 mb-6 border border-emerald-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-emerald-600">₹75,000</span>
                      <span className="text-slate-500">+ GST</span>
                    </div>
                    <p className="text-sm text-slate-600">Free installation & training across South India</p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          const barBendingMachine = productsData.products.find(p => p.name === "Bar / Rebar Bending Machine");
                          const paymentLink = barBendingMachine?.paymentLink || 'https://rzp.io/rzp/nqqImPY2';
                          window.open(paymentLink, '_blank')
                        }
                      }}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now - Secure Checkout
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <ShimmerButton 
                        className="w-full h-12"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.open('https://wa.me/918074949635', '_blank')
                          }
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium text-white">Get Quote</span>
                      </ShimmerButton>
                      
                      <a href="/hms-brochure.pdf" download="HMS-Brochure.pdf" className="w-full">
                        <Button 
                          variant="outline" 
                          className="w-full h-12 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Brochure
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "24-48h Service", sublabel: "Response Time" },
                    { icon: MapPin, label: "7 States", sublabel: "South India" },
                    { icon: Users, label: "1000+", sublabel: "Happy Customers" },
                    { icon: Award, label: "1 Year", sublabel: "Warranty" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-lg text-center group hover:shadow-xl transition-shadow">
                      <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-lg font-bold text-slate-900">{stat.label}</div>
                      <div className="text-xs text-slate-500">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                  Bar Bending Machine - Engineered for South Indian Construction Excellence
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">01</span>
                      Impact on Construction Projects Across Karnataka, Tamil Nadu & Kerala
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      Bar bending machines <strong className="text-slate-900">significantly improve productivity and safety</strong> in
                      construction projects throughout South India. By ensuring <strong className="text-slate-900">uniform bends</strong>, they contribute to the{" "}
                      <strong className="text-slate-900">strength and longevity</strong> of reinforced concrete structures in Bengaluru, Chennai, and Hyderabad, helping
                      projects <strong className="text-slate-900">comply with IS standards and safety regulations</strong>.
                      Additionally, automated bending minimizes <strong className="text-slate-900">errors, material waste, and manual inconsistencies</strong>,
                      resulting in <strong className="text-slate-900">higher-quality construction</strong> with <strong className="text-slate-900">optimized resources</strong> for infrastructure development across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">02</span>
                      Why Choose Hutaib Machinery - 25+ Years of Excellence
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      Choosing <strong className="text-slate-900">Hutaib Machinery Bar Bending Machines</strong> means investing in{" "}
                      <strong className="text-slate-900">reliability, performance, and innovation</strong>. Serving South Indian industries since 1999, our machines are built for{" "}
                      <strong className="text-slate-900">precision and durability</strong>. Trusted by{" "}
                      <strong className="text-slate-900">contractors, engineers, and infrastructure developers</strong> across Karnataka, Tamil Nadu, and Kerala, we deliver equipment that meets the demanding requirements of Indian construction projects.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">03</span>
                      Proven Performance in South Indian Climate
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      Our bar bending machines are engineered to perform reliably in the challenging conditions of South Indian construction sites. From the humid coastal regions of Kerala and Goa to the metropolitan construction boom in Bengaluru and Hyderabad, Hutaib Machinery equipment delivers{" "}
                      <strong className="text-slate-900">consistent performance, minimal downtime, and long-term durability</strong>. With a{" "}
                      <strong className="text-slate-900">proven track record spanning over 25 years</strong>, we continue to set{" "}
                      <strong className="text-slate-900">high standards in performance and efficiency</strong> for the South Indian construction industry.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">04</span>
                      Why Choose HMS Bar Bending Machine?
                    </h3>
                    <div className="text-slate-600 leading-relaxed pl-11 space-y-1">
                      <p>Handles Multiple Steel Bar Sizes – Suitable for all construction needs.</p>
                      <p>Customizable Bending Angles – Adjustable from 0° to 180°.</p>
                      <p>High-Precision Digital Control Panel – Reduces material waste.</p>
                      <p>Dual Operation Modes – Automatic and manual settings.</p>
                      <p>Reliable Performance – Built for high efficiency and minimal downtime.</p>
                      <p>Motor Protection with Preventer – Equipped with a preventer to safeguard the motor from power fluctuations, ensuring longer machine life and stable performance.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">05</span>
                      Innovative Engineering for Efficiency & Operator Comfort
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      HMS Bar Bending Machines are designed with advanced engineering innovations to reduce manual labor, enhance operator comfort, and maximize productivity. Our machines seamlessly combine modern technology with traditional craftsmanship, offering superior efficiency, durability, and ease of use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">06</span>
                      Customization for Every Need
                    </h3>
                    <div className="pl-11">
                      <p className="text-slate-600 leading-relaxed mb-4">
                        At HMS, we understand that every project has <strong className="text-slate-900">unique bending requirements</strong>.
                        That&apos;s why we offer <strong className="text-slate-900">custom-built solutions</strong> tailored to your specific needs.
                      </p>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <strong className="text-slate-900">Specific bar diameters and bending angles</strong> for varied construction needs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <strong className="text-slate-900">Automated and manual configurations</strong> to suit different project scales
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <strong className="text-slate-900">Enhanced machine settings</strong> based on customer feedback for optimized performance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Technical Specifications</h2>
                <p className="text-slate-500 mt-2">Select a model to view detailed specifications</p>
              </div>
              <SpecificationsTable />
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Benefits of Bar Bending Machines
                </h2>
              </div>
              <BenefitsSection />
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <ApplicationsSection />
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Customer Testimonials
                </h2>
                <p className="text-slate-500 mt-2">What our customers say about us</p>
              </div>
              <TestimonialsSection />
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 md:p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Support and Warranty
                  </h2>
                  <p className="text-slate-300 mt-2">Every bar bending machine from Hutaib Machinery includes comprehensive support across South India</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "1-Year Comprehensive Warranty", desc: "Covering parts and labor for complete peace of mind" },
                    { title: "Free Installation and Training", desc: "On-site setup and operator training at your location across South India" },
                    { title: "Lifetime Technical Support", desc: "Available via phone and WhatsApp for ongoing assistance" },
                    { title: "Spare Parts Availability", desc: "Same-day dispatch from our Bengaluru warehouse" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-slate-300 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-300 text-center mb-8">
                  Our service technicians cover <strong className="text-white">Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, South Maharashtra, and Goa</strong> with response times typically within <strong className="text-white">24-48 hours</strong>. Annual Maintenance Contracts available for extended coverage.
                </p>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-center mb-6">Why Hutaib Machinery?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { value: "25+", label: "Years in Business", sublabel: "(Since 1999)" },
                      { value: "7", label: "States Served", sublabel: "South India Coverage" },
                      { value: "1000+", label: "Happy Customers", sublabel: "Across Industries" },
                      { value: "24-48h", label: "Service Response", sublabel: "Across South India" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                        <div className="text-sm text-white">{stat.label}</div>
                        <div className="text-xs text-slate-400">{stat.sublabel}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-slate-300">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      <strong>Headquarters:</strong> No. 78, N. R. Road, Kalasipalyam, Bengaluru - 560002, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-500 mt-2">Everything you need to know about our bar bending machines</p>
              </div>
              <FAQSection />
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Related Equipment</h2>
              <p className="text-slate-600 mb-8">
                Complete your rebar fabrication line with these complementary machines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Bar Cutting Machine", desc: "Pair with bender for complete rebar fabrication line. Cut TMT bars up to 42mm with precision.", link: "/product/bar-rebar-cutting-machine", linkText: "View Details" },
                  { title: "Concrete Mixer", desc: "Essential companion for construction sites. Available in 500L capacity for large projects.", link: "/product", linkText: "View All Products" },
                  { title: "Spare Parts & Accessories", desc: "Bending pins, motor assemblies, and replacement parts available with same-day dispatch.", link: "/contact", linkText: "Contact for Parts" }
                ].map((item, i) => (
                  <div key={i} className="group bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.desc}</p>
                    <Link href={item.link} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-2 transition-all">
                      {item.linkText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">More Construction Equipment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {otherProducts.map((product) => (
                  <Link href={`/product/${createSlug(product.name)}`} key={product.id}>
                    <div className="group bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                      <div className="aspect-square bg-white overflow-hidden relative">
                        <ProductImage
                          src={product.mainImage}
                          alt={product.name}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          productName={product.name}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 flex-grow">
                          {product.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                          View Details <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
