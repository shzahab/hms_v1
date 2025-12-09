"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

interface HeroSectionProps {
  name: string;
  description: string;
  mainImage: string;
  features: string[];
  paymentLink: string;
  price: string;
}

export default function HeroSection({
  name,
  description,
  mainImage,
  features,
  paymentLink,
  price,
}: HeroSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Product Image */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Image
          src={mainImage}
          alt={`${name} - Professional grade construction equipment from HMS Machinery`}
          width={600}
          height={400}
          className="w-full object-cover rounded"
          priority
        />
      </div>

      {/* Product Quick Details */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <span className="text-3xl font-bold text-green-600">{price}</span>
          <span className="text-sm text-gray-500 ml-2">+ GST</span>
        </div>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {features.slice(0, 5).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          {/* First Row - BUY NOW Button */}
          <div className="flex justify-center">
            <Button
              className="w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => {
                if (typeof window !== "undefined" && paymentLink) {
                  window.open(paymentLink, "_blank");
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
                if (typeof window !== "undefined") {
                  window.open("https://wa.me/918074949635", "_blank");
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
  );
}

