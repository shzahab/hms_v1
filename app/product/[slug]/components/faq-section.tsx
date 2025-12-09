"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  productName: string;
}

export default function FAQSection({ faqs, productName }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Default FAQs if none provided
  const defaultFaqs: FAQ[] = [
    {
      question: `What warranty does the ${productName} come with?`,
      answer: `All HMS ${productName}s come with a standard 1-year warranty covering manufacturing defects. Extended warranty options are available upon request.`,
    },
    {
      question: "Do you provide installation support?",
      answer: "Yes, we provide comprehensive installation support and training for all our equipment. Our technical team can visit your site to ensure proper setup and operation.",
    },
    {
      question: "What is the delivery timeline?",
      answer: "Standard delivery within India takes 5-7 business days. Express shipping options are available for urgent requirements. Contact us for specific delivery estimates to your location.",
    },
    {
      question: "Are spare parts readily available?",
      answer: "Yes, we maintain a comprehensive inventory of spare parts for all our machines. Most spare parts can be shipped within 24-48 hours of ordering.",
    },
    {
      question: "Do you offer after-sales service?",
      answer: "Absolutely. HMS Machinery provides dedicated after-sales support including maintenance services, technical assistance, and troubleshooting guidance via phone, WhatsApp, and on-site visits.",
    },
  ];

  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div>
      <p className="text-gray-600 mb-6">
        Find answers to common questions about the {productName}. Can&apos;t find
        what you&apos;re looking for? Contact our team for assistance.
      </p>

      <div className="space-y-4">
        {displayFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100">
        <h4 className="font-semibold text-green-900 mb-2">
          Have More Questions?
        </h4>
        <p className="text-green-700 mb-4">
          Our experts are ready to help. Get in touch for personalized assistance.
        </p>
        <a
          href="https://wa.me/918074949635"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

