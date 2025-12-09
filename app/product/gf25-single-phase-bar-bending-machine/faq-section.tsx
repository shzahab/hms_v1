export default function FAQSection() {
  const faqs = [
    {
      question: "Can the GF25 single phase really bend 20mm bars on home power?",
      answer: "Yes! The GF25 Single Phase uses a specially designed 2.2kW high-torque motor optimized for 220V single-phase operation. It can bend TMT bars up to 20mm diameter, which is unusual for single-phase machines. This makes it unique in the market."
    },
    {
      question: "What's the difference between GF20 and GF25?",
      answer: "GF20 bends bars up to 16mm while GF25 bends up to 20mm. The GF25 has a more powerful motor (2.2kW vs 1.5kW) and larger bending disc (320mm vs 280mm). For just ₹2,000 more (₹35K vs ₹33K), you get 25% more capacity."
    },
    {
      question: "Is GF25 single phase suitable for G+2 and G+3 buildings?",
      answer: "Absolutely. That's exactly what it's designed for. G+2 and G+3 buildings typically use 20mm main bars in ground floor columns. The GF25 Single Phase handles these along with all the smaller sizes (8-16mm) for stirrups and secondary reinforcement."
    },
    {
      question: "Why would I choose GF25 single phase over three phase?",
      answer: "Choose GF25 Single Phase if your sites don't have three-phase power available. Many residential sites and rural areas only have single-phase connections. The single-phase version gives you 20mm capacity without expensive electrical upgrades."
    },
    {
      question: "How many 20mm bends can I do per day?",
      answer: "For optimal motor life, we recommend up to 100-150 bends of 20mm bars per day with the single-phase model. For smaller sizes (8-16mm), you can do much higher volumes. If you need continuous 20mm bending all day, consider the GF25 Three Phase."
    },
    {
      question: "Is it portable like the GF20?",
      answer: "Yes, at approximately 95kg it's still transportable, though slightly heavier than the GF20 (75kg). It fits in a pickup truck or tempo and can be moved between sites. The compact dimensions (720mm × 500mm × 750mm) allow easy placement."
    },
    {
      question: "What types of bars can it bend?",
      answer: "All standard TMT grades used in Indian construction - Fe415, Fe500, Fe500D, and Fe550D - from 8mm to 20mm diameter. Also handles HYSD bars and plain round bars in the same size range."
    },
    {
      question: "What's included with the purchase?",
      answer: "GF25 machine with 2.2kW motor, foot pedal control, bending accessories and pins, and user manual. 6-month warranty covering manufacturing defects (does not cover spares or damage from manual misuse). Delivery charges as per actuals. Installation and operator training available at additional cost."
    },
    {
      question: "How does it compare to manual bending for 20mm bars?",
      answer: "Manual bending of 20mm bars requires 2-3 workers with significant physical effort and produces inconsistent results. The GF25 lets one operator produce precise, consistent bends with minimal effort. ROI is typically 2-3 projects."
    },
    {
      question: "What if I later get three-phase power at my site?",
      answer: "If you upgrade to three-phase power later, you can continue using the GF25 Single Phase (it will work fine), or contact us about upgrading to a three-phase model. We offer trade-in options for existing customers."
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
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Still Have Questions?</h3>
        <p className="text-blue-700 mb-4">
          The GF25 Single Phase is a unique product. Our team is happy to explain how it can work for your specific situation.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20GF25%20Single%20Phase%20Bar%20Bending%20Machine" 
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

