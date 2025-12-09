export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum bar diameter the GQ52 can cut?",
      answer: "The GQ52 bar cutting machine can cut TMT and HYSD bars from 8mm to 42mm diameter. This covers all bar sizes used in construction - from stirrups to heavy main reinforcement for bridges and high-rises."
    },
    {
      question: "What power supply does the GQ52 require?",
      answer: "The GQ52 operates on 415V, 3-phase, 50Hz power supply with a 4kW motor. You'll need a proper industrial 3-phase electrical connection with minimum 7.5kVA capacity for reliable operation."
    },
    {
      question: "How many cuts can the GQ52 make per minute?",
      answer: "The GQ52 delivers 20-28 cuts per minute depending on bar diameter. Smaller bars (8-16mm) cut at around 28 cuts/minute, while heavy bars (32-42mm) average around 20 cuts/minute."
    },
    {
      question: "What's the difference between GQ42 and GQ52?",
      answer: "GQ42 (₹75,000): Cuts 8-16mm bars, 2.2kW motor, ~120kg weight - good for residential work. GQ52 (₹93,000): Cuts 8-42mm bars, 4kW motor, ~280kg weight - essential for commercial and infrastructure. For ₹18K more, GQ52 gives you 2.6x more cutting capacity."
    },
    {
      question: "Is the GQ52 too heavy to move between sites?",
      answer: "At 280kg, the GQ52 requires proper transport (Tata 407 or similar) and 4-6 workers or a small crane to position. It's designed more as a semi-permanent installation rather than frequent site-to-site movement. For mobile operations, consider our portable models."
    },
    {
      question: "What is included with the GQ52 purchase at ₹93,000?",
      answer: "Your purchase includes: GQ52 machine with 4kW motor, heavy-duty cutting blade, full safety guard, emergency stop, and user manual. 6-month warranty on manufacturing defects (excludes spares, blades, damage from overloading). Delivery charges as per actuals."
    },
    {
      question: "How long does the cutting blade last?",
      answer: "Blade life depends on usage intensity and bar hardness. For typical commercial use (6-8 hours daily), expect 4-6 months blade life. Heavy infrastructure work with 36-42mm bars may require more frequent changes. Always keep spare blades on hand."
    },
    {
      question: "Can GQ52 cut multiple bars at once?",
      answer: "GQ52 is designed for single-bar cutting to ensure clean cuts and operator safety. Attempting to cut multiple bars simultaneously can damage the blade and void warranty. For multi-bar cutting, use bar bunching before feeding single bars."
    },
    {
      question: "What maintenance does the GQ52 need?",
      answer: "Regular maintenance includes: daily blade inspection and cleaning, weekly lubrication of moving parts, monthly check of electrical connections and motor, and blade replacement when cutting quality decreases. Keep the machine clean and dry."
    },
    {
      question: "What does the warranty cover?",
      answer: "6-month warranty covers manufacturing defects in motor, gearbox, and frame. Does not cover: cutting blades, electrical parts damaged by voltage fluctuations, damage from overloading (cutting beyond 42mm capacity), or normal wear and tear. Extended AMC available."
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
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Have More Questions?</h3>
        <p className="text-blue-700 mb-4">
          Our team is happy to answer any questions about the GQ52 Bar Cutting Machine.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20GQ52%20Bar%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a 
            href="tel:+919886474441"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📞 Call: +91 9886474441
          </a>
        </div>
      </div>
    </div>
  );
}

