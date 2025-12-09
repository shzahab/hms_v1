export default function FAQSection() {
  const faqs = [
    {
      question: "What is the actual concrete output per batch?",
      answer: "The 500L drum produces approximately 350-400 liters of mixed concrete per batch - true full 1-bag (50kg cement) capacity. This is the industry standard for commercial and infrastructure projects requiring high-volume output."
    },
    {
      question: "Why is Kirloskar engine specified?",
      answer: "Kirloskar is India's most trusted diesel engine brand with over 75 years of heritage. Benefits include: nationwide service network, parts available at any diesel mechanic, proven reliability in Indian conditions, fuel efficiency, and brand acceptance for government contracts. We specifically choose Kirloskar for these reasons."
    },
    {
      question: "What is the fuel consumption?",
      answer: "The 6HP Kirloskar diesel engine consumes approximately 1-1.5 liters of diesel per hour under normal mixing load. For an 8-hour workday, expect 8-12 liters of diesel. Actual consumption varies based on mix thickness, continuous vs intermittent operation, and engine condition."
    },
    {
      question: "How does this compare to 350L electric mixer?",
      answer: "Choose 500L diesel if: you need full 1-bag capacity, work at sites without electricity, need maximum output, or do infrastructure work. Choose 350L electric if: budget is limited (₹68K vs ₹1.3L), you have reliable power, want lower running costs, or 3/4 bag is sufficient."
    },
    {
      question: "What maintenance does the diesel engine require?",
      answer: "Regular maintenance includes: daily fuel and oil level check, weekly air filter cleaning, oil change every 100-150 hours of operation, fuel filter change every 200-300 hours, and periodic injector servicing. Follow Kirloskar maintenance schedule for optimal performance."
    },
    {
      question: "What's included in the ₹1,30,000 price?",
      answer: "Complete mixer assembly: 500L heavy-gauge tilting drum, 6HP Kirloskar diesel engine, mixing blades, industrial-grade steel frame, heavy-duty wheels, and fuel tank. 6-month warranty on mixer, Kirloskar engine warranty as per their terms. Delivery charges additional."
    },
    {
      question: "Is the engine easy to start?",
      answer: "Yes, Kirloskar engines are known for easy starting. Hand-crank start with decompression lever. In good maintenance condition, they start reliably in 1-2 pulls. Cold morning starts may take a few more pulls. Electric start not available on this model."
    },
    {
      question: "What about noise levels?",
      answer: "Diesel engines are louder than electric motors. Expect 80-90 dB during operation. If noise is a concern (residential area restrictions), consider our electric models. For commercial and infrastructure sites, noise is typically not an issue."
    },
    {
      question: "Can I use this mixer for ready-mix supply?",
      answer: "The 500L is suitable for small-scale ready-mix supply or site batching. For large ready-mix operations, consider multiple mixers or industrial batching plants. One 500L mixer can produce approximately 15-20 cubic meters per 8-hour shift."
    },
    {
      question: "What's the delivery time and process?",
      answer: "Delivery typically takes 7-10 days due to the larger size and weight. Charges vary based on distance from Bengaluru - typically ₹5,000-15,000 depending on location. Delivered by truck; unloading assistance may be needed at your site."
    }
  ];

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
      
      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Have More Questions?</h3>
        <p className="text-orange-700 mb-4">
          Our team can help you decide if the 500L Kirloskar diesel mixer is right for your projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20500L%20Kirloskar%20Diesel%20Mixer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a 
            href="tel:+919886474441"
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            📞 Call: +91 9886474441
          </a>
        </div>
      </div>
    </div>
  );
}

