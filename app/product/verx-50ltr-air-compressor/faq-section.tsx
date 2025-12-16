export default function FAQSection() {
  const faqs = [
    {
      question: "Why is the VERX 50L popular for auto garages?",
      answer: "The 50L offers the ideal balance of capacity and price for garage work. The 2 HP motor and 220 LPM air flow handle impact wrenches for tyre changes and spray guns for panel painting. Belt-drive design runs cooler for extended use."
    },
    {
      question: "What is the advantage of belt drive over direct drive?",
      answer: "Belt-driven compressors run the pump at lower RPM, resulting in cooler operation, longer component life, and quieter performance. They're better suited for continuous professional use compared to direct-drive models."
    },
    {
      question: "Can I use the VERX 50L for continuous spray painting?",
      answer: "Yes, the 50L is designed for professional spray painting. The large tank and high air flow provide extended spray sessions suitable for painting vehicle panels, furniture, and equipment without frequent interruptions."
    },
    {
      question: "What size impact wrench can the 50L power?",
      answer: "The VERX 50L comfortably powers 3/8\" and 1/2\" impact wrenches used in auto garages. For heavy-duty 3/4\" or 1\" impact wrenches, consider the 150L model with higher air flow."
    },
    {
      question: "Does the 50L need three-phase power?",
      answer: "No, the VERX 50L operates on standard 220V single-phase power. This is a key advantage for workshops without three-phase infrastructure. Ensure your circuit can handle the 2 HP motor load."
    },
    {
      question: "How does the 50L compare to 150L model?",
      answer: "The 50L (₹13,500) has 2 HP with 220 LPM, while 150L (₹40,000) has 3 HP with 350 LPM and 10 bar pressure. Choose 150L for multi-station use, sandblasting, or running 3+ tools simultaneously."
    },
    {
      question: "What maintenance does the belt-drive system need?",
      answer: "In addition to regular oil checks and tank draining, belt-drive compressors require periodic belt tension checks. Inspect belt condition monthly and adjust tension or replace if worn. Properly maintained belts last 2-3 years."
    },
    {
      question: "Is the VERX 50L suitable for sandblasting?",
      answer: "For light sandblasting work, the 50L can handle it with breaks between sessions. For regular or heavy sandblasting, we recommend the 150L or 200L models which provide sustained higher air flow."
    },
    {
      question: "What warranty and support is included?",
      answer: "The VERX 50L comes with 6-month warranty covering manufacturing defects. HMS provides spare parts from our Bengaluru warehouse and technical support via phone/WhatsApp. AMC options available for extended coverage."
    },
    {
      question: "How long does delivery take and what are the charges?",
      answer: "Delivery typically takes 3-5 days within South India. Delivery charges are calculated based on your location and will be confirmed before placing the order. Installation guidance is provided via phone/video call."
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
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Need Help Choosing?</h3>
        <p className="text-green-700 mb-4">
          Not sure if 50L is right for your garage? Our team can assess your needs and recommend the best model.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20VERX%2050L%20Air%20Compressor" 
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

