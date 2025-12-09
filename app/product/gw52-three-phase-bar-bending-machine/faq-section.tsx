export default function FAQSection() {
  const faqs = [
    { question: "When do I need GW52 instead of GW42?", answer: "Only if your projects specify 36mm, 40mm, or 42mm bars. These sizes are used in major bridges, metro viaducts, heavy industrial foundations, and dam works. For building construction (even high-rises), GW42's 32mm capacity is usually sufficient." },
    { question: "How heavy is the GW52?", answer: "Approximately 550kg. You will need crane assistance for positioning. Ensure your site has suitable foundation and access for heavy equipment. Delivery charges as per actuals." },
    { question: "What power requirements?", answer: "415V three-phase with minimum 10kVA capacity. The 4HP motor requires more power than smaller machines. Verify electrical capacity before ordering." },
    { question: "Is the price difference from GW42 worth it?", answer: "Only if you actually need 36mm+ capacity. The ₹20K premium (₹95K vs ₹75K) only makes sense if your projects require the larger bars. For 32mm and below, GW42 is more cost-effective." },
    { question: "What is the warranty?", answer: "6-month warranty covering manufacturing defects only. Does not cover spares or damage from manual misuse. Delivery charges as per actuals. Installation and operator training available at additional cost." },
    { question: "Can it bend all bar sizes?", answer: "Yes, it handles 16mm to 42mm. You can bend the full range of infrastructure bar sizes on one machine." },
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

