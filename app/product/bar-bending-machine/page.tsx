import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowRight } from "lucide-react";
import SpecificationsTable from "./specifications-table";
import BenefitsSection from "./benefits-section";
import ApplicationsSection from "./applications-section";
import TestimonialsSection from "./testimonials-section";
import FAQSection from "./faq-section";
import Breadcrumbs from "@/components/Breadcrumb";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header>
        <Header />
      </header>
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              HMS Bar Bending Machine
            </h1>
            <p className="text-xl text-gray-600 font-medium">Precision, Efficiency & Reliability</p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose HMS Bar Bending Machine?</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Handles Multiple Steel Bar Sizes – Suitable for all construction needs.</li>
                  <li>• Customizable Bending Angles – Adjustable from 0° to 180°.</li>
                  <li>• High-Precision Digital Control Panel – Reduces material waste.</li>
                  <li>• Dual Operation Modes – Automatic and manual settings.</li>
                  <li>• Reliable Performance – Built for high efficiency and minimal downtime.</li>
                  <li>• Motor Protection with Preventer – Equipped with a preventer to safeguard the motor from power fluctuations, ensuring longer machine life and stable performance.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Innovative Engineering for Efficiency & Operator Comfort</h2>
                <p className="text-gray-600">
                  HMS Bar Bending Machines are designed with advanced engineering innovations to reduce manual labor, enhance operator comfort, and maximize productivity. Our machines seamlessly combine modern technology with traditional craftsmanship, offering superior efficiency, durability, and ease of use.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SpecificationsTable />
            <BenefitsSection />
          </div>

          <ApplicationsSection />
          <TestimonialsSection />
          <FAQSection />

          <div className="text-center mt-12">
            <Link href="/contact">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Contact Us
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div>
  );
}