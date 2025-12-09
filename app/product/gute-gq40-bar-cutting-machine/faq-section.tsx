export default function FAQSection() {
  const faqs = [
    {
      question: "What makes GUTE GQ40 different from standard bar cutters?",
      answer: "GUTE is a globally recognized brand known for precision engineering. The GQ40 features precision-ground gears, superior bearings, tighter manufacturing tolerances, and better material quality. This translates to smoother operation, cleaner cuts, longer service life, and lower total cost of ownership."
    },
    {
      question: "Why does this model have an Indian motor instead of imported?",
      answer: "The Indian motor is specifically designed for Indian voltage conditions (415V with fluctuations common in construction sites). Benefits: easy spare parts availability across India, local mechanics can service it, no import delays for repairs, and lower motor replacement cost if ever needed."
    },
    {
      question: "What is the cutting capacity of GUTE GQ40?",
      answer: "The GUTE GQ40 cuts TMT and HYSD bars from 8mm to 32mm diameter. This covers approximately 95% of commercial construction needs. Only heavy infrastructure work (bridges, metros) with 36-42mm bars requires larger capacity."
    },
    {
      question: "Why is GUTE GQ40 more expensive than GQ52 despite lower capacity?",
      answer: "You're paying for build quality, not capacity. GUTE GQ40 uses precision-manufactured components that last 30-50% longer than standard machines. The premium is in tolerances, materials, and engineering - not marketing. Over the machine's lifetime, the cost per cut is often lower."
    },
    {
      question: "How long will the GUTE GQ40 last?",
      answer: "With proper maintenance, GUTE machines typically deliver 10-15 years of heavy professional use - significantly longer than standard machines. The premium components (bearings, gears, blade system) are designed for extended service intervals."
    },
    {
      question: "What power supply does the GUTE GQ40 require?",
      answer: "The GQ40 operates on 415V, 3-phase, 50Hz power supply with a 3.5kW motor. Minimum recommended electrical capacity is 7kVA. The Indian motor handles voltage fluctuations better than imported motors."
    },
    {
      question: "What is included with the purchase at ₹1,10,000?",
      answer: "Your purchase includes: GUTE GQ40 machine with precision gearbox, Indian 3.5kW motor, premium alloy blade, full safety guard system, emergency stop, and user manual. 6-month warranty on manufacturing defects. Delivery charges as per actuals."
    },
    {
      question: "How does blade life compare to standard machines?",
      answer: "The GUTE blade system maintains alignment better, resulting in more consistent cuts and 20-30% longer blade life compared to standard machines. The precision blade holder reduces uneven wear."
    },
    {
      question: "Is service support available across India?",
      answer: "Yes. While the machine body is GUTE (imported), the Indian motor can be serviced by any qualified electrician anywhere in India. For machine body issues, HMS provides support via phone/video and can dispatch technicians to major South Indian cities."
    },
    {
      question: "Should I choose GUTE GQ40 or GQ52?",
      answer: "Choose GQ40 if: You value build quality over maximum capacity, your work rarely needs 36-42mm bars, and you can invest ₹17K extra for premium components. Choose GQ52 if: You need full 42mm capacity for infrastructure work and budget is the primary concern."
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
          Our team is happy to answer any questions about the GUTE GQ40 Bar Cutting Machine.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20GUTE%20GQ40%20Bar%20Cutting%20Machine" 
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

