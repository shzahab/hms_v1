export default function FAQSection() {
  const faqs = [
    {
      question: "What is the main advantage of VERX 24L over 12L?",
      answer: "The 24L offers double the tank capacity and 50% more air flow (170 LPM vs 115 LPM) for just ₹3,500 extra. This means longer continuous use, faster refill for tools, and better performance for spray painting and pneumatic tools."
    },
    {
      question: "Can the VERX 24L handle spray painting work?",
      answer: "Yes, the 24L is suitable for regular spray painting of furniture, grilles, auto parts, and small to medium items. The larger tank provides 5-8 minutes of continuous spraying before the motor kicks in to refill."
    },
    {
      question: "Does the VERX 24L run on home electricity?",
      answer: "Yes, the VERX 24L operates on standard 220V single-phase power available in homes, shops, and small commercial establishments. Ensure your electrical circuit has adequate capacity for the 1.5 HP motor."
    },
    {
      question: "Is the 24L portable or stationary?",
      answer: "The VERX 24L weighs approximately 28 kg, making it still portable for workshop use. Many models include wheels for easier mobility. It can be transported in a small vehicle if needed."
    },
    {
      question: "What pneumatic tools can the 24L power?",
      answer: "The VERX 24L can power nail guns, staplers, small impact wrenches (3/8\"), die grinders, rotary tools, air blow guns, and medium spray guns. For larger tools like 1/2\" impact wrenches, consider the 50L model."
    },
    {
      question: "How often does the 24L need maintenance?",
      answer: "Basic maintenance includes: check oil level weekly, drain water from tank after each use, clean air filter monthly, and change oil every 500 hours or 6 months. The direct-drive design requires minimal maintenance."
    },
    {
      question: "What is included with the VERX 24L purchase?",
      answer: "The purchase includes the compressor unit with motor, pressure gauge, safety valve, and user manual. Air hoses, quick couplers, and pneumatic tools are sold separately. 6-month warranty on manufacturing defects."
    },
    {
      question: "How does 24L compare to 50L model?",
      answer: "The 24L (₹9,500) has 1.5 HP motor with 170 LPM, while the 50L (₹13,500) has 2 HP motor with 220 LPM and belt drive. Choose 50L for professional/continuous use; 24L is sufficient for regular workshop tasks."
    },
    {
      question: "What warranty does VERX 24L come with?",
      answer: "The VERX 24L comes with a 6-month warranty covering manufacturing defects. This does not cover consumables like oil, air filters, or damage from improper use, voltage fluctuations, or lack of maintenance."
    },
    {
      question: "How long is delivery to my location?",
      answer: "Delivery typically takes 3-5 days within South India (Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana). Delivery charges are calculated based on location and will be confirmed before order placement."
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
          Our team can help you decide if the VERX 24L is right for your needs or recommend an alternative.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20VERX%2024L%20Air%20Compressor" 
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

