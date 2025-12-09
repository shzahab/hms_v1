export default function FAQSection() {
  const faqs = [
    { question: "Why is this the most expensive 32mm machine?", answer: "Premium Indian materials (Bhilai steel, CNC machined gears, heavy-duty bearings), extra-thick construction, and extensive quality testing. Built for 15-20 years of service, not 5-7 years." },
    { question: "How is it different from GW42?", answer: "GW42 uses standard components for good value. HMS Made in India uses premium components - thicker steel, hardened gears, better bearings. Same 32mm capacity, significantly longer expected life." },
    { question: "Is it really 100% Made in India?", answer: "Yes, every component is sourced from Indian manufacturers. Steel from Bhilai, gears from Bangalore, motors from Coimbatore. True Atmanirbhar Bharat manufacturing." },
    { question: "What is the expected service life?", answer: "With proper maintenance, 15-20 years. We have customers still running 15+ year old HMS machines with original components." },
    { question: "Spare parts availability?", answer: "Immediate availability from our factory. Since we manufacture it, we always have parts. No waiting for imports or dealer inventory." },
    { question: "For whom is this machine recommended?", answer: "Long-term operators who view equipment as a 15-20 year investment, patriotic entrepreneurs supporting Indian manufacturing, and contractors who prioritize reliability over initial cost." },
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
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Questions?</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">💬 WhatsApp</a>
          <a href="tel:+919886474441" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">📞 Call</a>
        </div>
      </div>
    </div>
  );
}

