export default function FAQSection() {
  const faqs = [
    { question: "Why is GUTE more expensive than GW42?", answer: "GUTE uses precision-ground gears, imported bearings, premium motor, and superior materials. The build quality results in longer life, fewer repairs, and better precision. The higher price reflects genuine quality differences." },
    { question: "Is the premium worth it?", answer: "Depends on your usage. For fabrication yards running 8+ hours daily, the premium quality means less downtime and longer life - often better TCO. For occasional use, GW42 may be more cost-effective." },
    { question: "What warranty and support?", answer: "6-month warranty covering manufacturing defects only. Does not cover spares or damage from manual misuse. Delivery charges as per actuals. Installation and operator training available at additional cost. We stock spare parts and provide service support." },
    { question: "Where is GUTE manufactured?", answer: "GUTE is an imported international brand known for precision construction equipment. HMS is the authorized dealer in India providing sales and service support." },
    { question: "How does precision differ from GW42?", answer: "GUTE's tighter manufacturing tolerances mean more accurate and consistent bends. For projects with strict angle specifications, this precision can prevent rejection of bent bars." },
    { question: "Spare parts availability?", answer: "HMS maintains GUTE spare parts inventory in India. Standard parts available immediately, specialized parts within 2-3 weeks." },
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mt-8">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Questions?</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">💬 WhatsApp</a>
          <a href="tel:+919886474441" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">📞 Call</a>
        </div>
      </div>
    </div>
  );
}

