export default function FAQSection() {
  const faqs = [
    {
      question: "What is the difference between Handy Type and Staring Type motor?",
      answer: "Handy type motors use Direct-On-Line (DOL) starting - the motor starts at full power immediately. Staring type uses star-delta starting which reduces initial current by 33%. Choose handy type if you have stable power supply; choose staring type if your electrical connection is weak or shared with other equipment."
    },
    {
      question: "How much more concrete does 280L produce compared to 240L?",
      answer: "The 280L mixer produces approximately 180-200 liters per batch compared to 160-180 liters for the 240L model. That's about 20 liters more per batch, which adds up significantly over a full day of work."
    },
    {
      question: "Can this mixer run on home electricity?",
      answer: "Yes, the 1.5HP handy type motor runs on standard 220V single-phase power available in homes and small commercial establishments. It requires a 15A socket with proper earthing."
    },
    {
      question: "Is ₹26,000 worth it compared to ₹23,000 for 240L?",
      answer: "Yes, if you regularly need slightly larger batches. For ₹3,000 more, you get 40L extra drum capacity and about 20L more output per batch. The handy type motor is also simpler in design with less maintenance needs."
    },
    {
      question: "What's included in the ₹26,000 price?",
      answer: "The price includes the complete mixer assembly: 280L tilting drum, 1.5HP handy type motor, mixing blades, steel frame, and wheel assembly. 6-month warranty on manufacturing defects is included. Delivery charges are additional, based on actual transport cost to your location."
    },
    {
      question: "How do I maintain this concrete mixer?",
      answer: "After each use: rinse the drum with water while rotating to prevent concrete buildup. Weekly: check and lubricate the tilting mechanism. Monthly: inspect mixing blades for wear, check belt tension, and ensure motor mounting is secure. The handy type motor requires minimal maintenance."
    },
    {
      question: "Is this mixer portable?",
      answer: "Yes, the mixer comes with sturdy wheels and can be moved around the site by 1-2 workers. For transport between sites, it fits in a small pickup truck or auto."
    },
    {
      question: "What's the warranty coverage?",
      answer: "6-month warranty covers manufacturing defects in the drum, frame, and motor (excluding burnout due to voltage issues). Normal wear items like mixing blades, belts, and bearings are not covered. Warranty is void if the mixer is overloaded beyond capacity."
    },
    {
      question: "Should I choose 280L Handy or 240L Staring?",
      answer: "Choose 280L Handy if: you have stable power supply, need slightly more capacity, and want simpler motor design. Choose 240L Staring if: your power supply is weak/fluctuating, or you share electrical connection with other heavy equipment."
    },
    {
      question: "What's the delivery time to my location?",
      answer: "Delivery typically takes 3-5 days for locations in Karnataka, and 5-7 days for other South Indian states. Delivery charges vary based on distance from our Bengaluru warehouse."
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
          Our team is happy to answer any questions about the 280L Concrete Mixer with Handy Type Motor.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20280L%20Concrete%20Mixer%20(Handy%20Type)" 
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

