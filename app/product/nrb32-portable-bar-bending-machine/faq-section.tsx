export default function FAQSection() {
  const faqs = [
    { question: "How portable is the NRB32 really?", answer: "At 180kg with integrated handles, 4 workers can lift and position it. Compare to GW42 at 320kg which typically needs mechanical assistance. The NRB32 fits in pickup trucks and can be moved without cranes." },
    { question: "Why does portable cost more than GW42?", answer: "Engineering for portability adds cost: lighter yet strong materials, integrated handles, balanced design, compact dimensions. The ₹20K premium buys genuine portability that standard machines don't have." },
    { question: "Does portability compromise bending power?", answer: "No, the NRB32 delivers full 32mm bending capacity. The 3kW motor handles all TMT grades up to 32mm. You get the same results as fixed machines." },
    { question: "Is it suitable for permanent installation?", answer: "It can be, but you'd be paying for portability you don't use. If the machine will stay in one place, GW42 at ₹75K offers better value." },
    { question: "What is included with purchase?", answer: "Machine with motor, foot pedal, bending accessories, and 6-month warranty covering manufacturing defects (does not cover spares or manual misuse damage). Delivery charges as per actuals. Installation and operator training available at additional cost." },
    { question: "Power requirements?", answer: "415V three-phase, 50Hz with minimum 7kVA capacity. Same as other 32mm machines." },
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Questions?</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">💬 WhatsApp</a>
          <a href="tel:+919886474441" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">📞 Call</a>
        </div>
      </div>
    </div>
  );
}

