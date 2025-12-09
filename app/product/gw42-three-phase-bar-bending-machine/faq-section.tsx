export default function FAQSection() {
  const faqs = [
    { question: "What is the difference between GW42 and GW52?", answer: "GW42 bends up to 32mm bars, GW52 bends up to 42mm. Choose GW42 for most building and standard infrastructure work. Choose GW52 only if your projects specifically require 36mm-42mm bars (heavy bridges, metro viaducts)." },
    { question: "Why is GW42 the best seller?", answer: "It offers the best balance of capacity (32mm), features (digital control), and price (₹75,000). 32mm covers most infrastructure requirements, making it suitable for the widest range of projects." },
    { question: "What power supply does GW42 need?", answer: "415V three-phase industrial power with minimum 7kVA capacity. This is standard at construction sites and fabrication yards. Please ensure your site has proper electrical setup before purchase." },
    { question: "Can GW42 bend Fe550D grade TMT?", answer: "Yes, the 3.2kW motor provides sufficient torque to bend all TMT grades including Fe550D up to 32mm diameter." },
    { question: "What is the warranty coverage?", answer: "6-month warranty covering manufacturing defects only. Does not cover spares or damage from manual misuse. Delivery charges as per actuals. Installation and operator training available at additional cost." },
    { question: "How heavy is the GW42?", answer: "Approximately 320kg. It requires mechanical assistance (forklift/crane) for positioning. Ensure your site can accommodate the weight and has suitable foundation." },
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Questions?</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">💬 WhatsApp</a>
          <a href="tel:+919886474441" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">📞 Call</a>
        </div>
      </div>
    </div>
  );
}

