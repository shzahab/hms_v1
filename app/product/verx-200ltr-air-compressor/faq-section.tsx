export default function FAQSection() {
  const faqs = [
    {
      question: "What makes the VERX 200L different from other models?",
      answer: "The 200L is our flagship model featuring two-stage compression for maximum efficiency, 5 HP motor with 450 LPM air flow, 12 bar pressure, and 200L tank. It's designed for heavy industrial applications requiring continuous high-volume air supply."
    },
    {
      question: "Does the VERX 200L require three-phase power?",
      answer: "Yes, the 5 HP motor requires 415V three-phase power supply. This is standard in industrial facilities but may not be available in smaller establishments. Verify your electrical infrastructure before purchase."
    },
    {
      question: "What is two-stage compression and why does it matter?",
      answer: "Two-stage compression uses two cylinders where air is compressed in the first stage, cooled, then compressed again in the second stage. This delivers higher pressure more efficiently, with cooler operation and better air quality compared to single-stage designs."
    },
    {
      question: "How many pneumatic tools can the 200L power simultaneously?",
      answer: "The VERX 200L can power 4-5 pneumatic tools simultaneously depending on their CFM requirements. This includes multiple impact wrenches, spray guns, grinders, and sanders operating across different workstations without pressure drop."
    },
    {
      question: "Is the 200L suitable for heavy sandblasting?",
      answer: "Yes, the VERX 200L with 450 LPM air flow and 12 bar pressure is excellent for industrial sandblasting operations. It can sustain the high air volume needed for blasting large structural components and heavy equipment."
    },
    {
      question: "What installation requirements does the 200L have?",
      answer: "Requirements include: 415V three-phase power with appropriate starter, level floor space of at least 1.5m × 0.7m, adequate ventilation for motor cooling, proper air piping to workstations, and foundation or anti-vibration mounts recommended."
    },
    {
      question: "What is the duty cycle of the 200L?",
      answer: "The VERX 200L is rated for continuous duty operation. The large tank, efficient two-stage pump, and robust motor design allow extended operation typical in industrial environments. Automatic pressure cut-off protects the motor."
    },
    {
      question: "Does HMS provide installation services?",
      answer: "Yes, professional installation services are available at additional cost. This includes positioning, electrical connection, air piping, commissioning, and operator training. Installation charges depend on location and complexity."
    },
    {
      question: "What warranty and after-sales support is included?",
      answer: "The VERX 200L includes 6-month warranty on manufacturing defects. HMS maintains spare parts inventory and provides technical support. Annual Maintenance Contracts (AMC) are strongly recommended for industrial equipment to ensure optimal performance."
    },
    {
      question: "What is the lead time for the 200L?",
      answer: "Due to the specialized nature of this industrial equipment, please contact us to confirm current stock availability and lead time. Delivery typically takes 7-10 days within South India. Installation scheduling arranged after delivery."
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
      
      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mt-8">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Industrial Equipment Consultation</h3>
        <p className="text-purple-700 mb-4">
          For heavy industrial equipment, we provide comprehensive consultation including site assessment, electrical requirements review, and installation planning.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20consultation%20for%20VERX%20200L%20Heavy-Duty%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a 
            href="tel:+919886474441"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            📞 Call: +91 9886474441
          </a>
        </div>
      </div>
    </div>
  );
}

