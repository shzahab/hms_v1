export default function FAQSection() {
  const faqs = [
    {
      question: "What does 'Staring Type' motor mean?",
      answer: "Staring type refers to a star-delta starting mechanism. When the motor starts, it initially runs in 'star' configuration which uses less current, then automatically switches to 'delta' for full power operation. This reduces the initial power surge by about 33%, making it easier on your electrical supply and preventing MCB trips on weak connections."
    },
    {
      question: "What is the actual mixing output of the 240L mixer?",
      answer: "The 240L is drum capacity. Actual mixing output per batch is approximately 160-180 liters of concrete. This is roughly equivalent to half-bag (25kg cement) mixing operations. You can produce 8-12 batches per hour depending on loading and discharge time."
    },
    {
      question: "Can this mixer run on home electricity?",
      answer: "Yes, the 1.5HP staring type motor runs on standard 220V single-phase power available in homes and small commercial establishments. It requires a 15A socket with proper earthing. The star-delta start mechanism specifically helps prevent tripping on residential electrical connections."
    },
    {
      question: "How much concrete can I produce in a day?",
      answer: "With efficient operation (loading, mixing, discharge), you can produce approximately 60-80 batches per 8-hour day, which translates to roughly 10-14 cubic meters of concrete. Actual output depends on your team's efficiency and site conditions."
    },
    {
      question: "What's included in the ₹23,000 price?",
      answer: "The price includes the complete mixer assembly: 240L tilting drum, 1.5HP staring type motor, mixing blades, steel frame, and wheel assembly. 6-month warranty on manufacturing defects is included. Delivery charges are additional, based on actual transport cost to your location."
    },
    {
      question: "How do I maintain this concrete mixer?",
      answer: "After each use: rinse the drum with water while rotating to prevent concrete buildup. Weekly: check and lubricate the tilting mechanism. Monthly: inspect mixing blades for wear, check belt tension, and ensure motor mounting is secure. With basic care, the mixer will serve you for many years."
    },
    {
      question: "Is this mixer portable? Can I move it between sites?",
      answer: "Yes, the mixer comes with sturdy wheels and can be moved around the site by 1-2 workers. For transport between sites, it fits in a small pickup truck or auto. The compact size makes it one of the most portable mixers in its class."
    },
    {
      question: "What's the warranty coverage?",
      answer: "6-month warranty covers manufacturing defects in the drum, frame, and motor (excluding burnout due to voltage issues). Normal wear items like mixing blades, belts, and bearings are not covered. Warranty is void if the mixer is overloaded beyond capacity or operated without proper electrical protection."
    },
    {
      question: "How does this compare to manual mixing?",
      answer: "Machine mixing is 3-4x faster than manual mixing with 2-3 workers. More importantly, it produces consistent concrete quality every batch - manual mixing often results in uneven water-cement ratios. One worker with this mixer equals output of 3 manual workers with better quality."
    },
    {
      question: "What's the delivery time to my location?",
      answer: "Delivery typically takes 3-5 days for locations in Karnataka, and 5-7 days for other South Indian states. Delivery charges vary based on distance from our Bengaluru warehouse. We'll confirm exact charges before processing your order."
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
          Our team is happy to answer any questions about the 240L Concrete Mixer with Staring Type Motor.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20240L%20Concrete%20Mixer%20(Staring%20Type)" 
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

