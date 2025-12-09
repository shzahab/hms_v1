"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What TMT bar grades can this machine bend?",
    answer: "Our bar bending machine handles all standard Indian TMT grades including Fe415, Fe500, Fe500D, and Fe550D, with consistent performance across varying steel hardness levels. The machine can bend bars from 8mm to 42mm diameter."
  },
  {
    question: "What is the power requirement for installation?",
    answer: "The machine requires a 3-phase, 415V, 50Hz power supply with a minimum 10kVA connected load. Our installation team assesses your site's electrical infrastructure before delivery across South India."
  },
  {
    question: "Do you provide operator training?",
    answer: "Yes, every purchase includes free on-site training for 2-3 operators covering machine operation, basic maintenance, and safety procedures. Training is available across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana."
  },
  {
    question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
    answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements with additional charges."
  },
  {
    question: "What warranty and support is included?",
    answer: "Every machine includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
  },
  {
    question: "Can this machine handle both manual and automatic operation?",
    answer: "Yes, our bar bending machines feature dual operation modes - fully automatic for high-volume production and manual mode for custom bending requirements, making them suitable for projects of all scales."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? "bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl" 
                : "bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-4">
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                  openIndex === index 
                    ? "bg-blue-500 text-white" 
                    : "bg-slate-200 text-slate-600"
                }`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={`font-semibold transition-colors ${
                  openIndex === index ? "text-white" : "text-slate-900"
                }`}>
                  {faq.question}
                </h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 flex-shrink-0 ml-4 transition-all duration-300 ${
                  openIndex === index 
                    ? "text-white rotate-180" 
                    : "text-slate-400"
                }`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-48" : "max-h-0"
            }`}>
              <div className="px-5 pb-5 pl-17">
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
