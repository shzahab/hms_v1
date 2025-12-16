export default function FAQSection() {
  const faqs = [
    {
      question: "Can the VERX 150L power multiple workstations?",
      answer: "Yes, the VERX 150L with its 350 LPM air flow and 150L tank can power 2-3 pneumatic workstations simultaneously. It's designed for multi-station workshops where several technicians work at the same time."
    },
    {
      question: "Is the VERX 150L available in single phase?",
      answer: "Yes, the VERX 150L is available in both 220V single-phase and 415V three-phase variants. Single-phase is suitable for lighter use; three-phase is recommended for heavy continuous operation. Confirm your requirement when ordering."
    },
    {
      question: "Is the 150L suitable for sandblasting?",
      answer: "Yes, the VERX 150L with 350 LPM air flow and 10 bar pressure handles small to medium sandblasting operations effectively. For heavy industrial sandblasting, consider the 200L model with higher capacity."
    },
    {
      question: "What makes the 150L different from the 50L?",
      answer: "The 150L offers significantly more capacity: 3 HP vs 2 HP motor, 350 LPM vs 220 LPM air flow, 10 bar vs 8 bar pressure, and 150L vs 50L tank. It's designed for industrial multi-station use while the 50L is for single-station professional work."
    },
    {
      question: "What electrical infrastructure does the 150L need?",
      answer: "For single-phase version: 220V supply with adequate MCB capacity for 3 HP motor. For three-phase version: 415V supply with DOL starter or star-delta starter for the 3 HP motor. Consult an electrician for proper installation."
    },
    {
      question: "Can the 150L be used for CNC machines?",
      answer: "Yes, CNC machines commonly use compressed air for pneumatic clamping, tool changers, and chip blowing. The 150L provides adequate volume and pressure. For CNC applications, we recommend adding an air dryer to remove moisture."
    },
    {
      question: "What maintenance schedule does the 150L require?",
      answer: "Daily: drain tank water. Weekly: check oil level, inspect belt tension. Monthly: clean air filter, check all connections. Every 500 hours: change oil, inspect valves. Annually: professional service inspection recommended."
    },
    {
      question: "Is installation included with purchase?",
      answer: "Installation is available at additional cost. The 150L requires proper placement with adequate ventilation, electrical connection by qualified electrician, and air piping setup. We provide installation guidance and can arrange professional installation."
    },
    {
      question: "What warranty and support is provided?",
      answer: "The VERX 150L comes with 6-month warranty on manufacturing defects. HMS maintains spare parts inventory in Bengaluru for quick support. Annual maintenance contracts (AMC) are available for extended coverage and regular servicing."
    },
    {
      question: "What is the lead time for delivery?",
      answer: "Stock units typically ship within 2-3 days with delivery in 5-7 days across South India. For specific configurations or during high demand, lead time may extend. Contact us to confirm current availability and delivery timeline."
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
      
      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Industrial Sales Consultation</h3>
        <p className="text-orange-700 mb-4">
          For industrial equipment purchases, we offer site assessment and technical consultation to ensure the right fit for your operations.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20consultation%20for%20VERX%20150L%20Industrial%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a 
            href="tel:+919886474441"
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            📞 Call: +91 9886474441
          </a>
        </div>
      </div>
    </div>
  );
}

