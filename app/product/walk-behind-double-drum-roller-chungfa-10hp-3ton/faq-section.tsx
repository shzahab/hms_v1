export default function FAQSection() {
  const faqs = [
    {
      question: "What is the difference between Chungfa and Greaves engine models?",
      answer: "Both models deliver identical 10HP power and 3-ton compaction capacity. The roller body, drums, vibration mechanism, and all other components are the same. The only difference is the engine brand. Greaves (₹1,90,000) has a more established brand name and wider service network. Chungfa (₹1,85,000) offers the same performance at ₹5,000 lower cost with our direct support."
    },
    {
      question: "Is Chungfa engine reliable?",
      answer: "Yes, Chungfa diesel engines are widely used in construction equipment across India. They have a proven track record in various applications. Many contractors have been using Chungfa-powered equipment for years without issues. We provide 6-month warranty and direct after-sales support from Hutaib Machinery."
    },
    {
      question: "Which model should I choose - Greaves or Chungfa?",
      answer: "Choose Greaves if: brand reputation matters to your clients, you prefer OEM service network, or your contract specifies certain engine brands. Choose Chungfa if: you want to save ₹5,000, you're comfortable with our direct support, or you're focused on results over brand names. Performance-wise, both are identical."
    },
    {
      question: "What support do you provide for Chungfa model?",
      answer: "We provide full after-sales support directly from Hutaib Machinery. Our Bengaluru warehouse stocks common spare parts for both engine and roller components. Technical assistance is available via phone and WhatsApp. You don't need to depend on Chungfa service centers - we handle your support."
    },
    {
      question: "Is the self-start battery included?",
      answer: "Yes, the self-start battery is included at no extra cost. Just like the Greaves model, you get battery-powered electric starting that eliminates manual hand-cranking. Turn the key and the engine starts reliably."
    },
    {
      question: "What is the warranty coverage?",
      answer: "The roller comes with 6-month warranty covering manufacturing defects. The warranty does not cover spares, consumables, or damage from misuse/improper operation. Both engine and roller component issues are handled directly by Hutaib Machinery."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 days depending on your location in South India. Delivery charges are calculated based on actual distance and logistics costs. We'll provide exact delivery cost before confirming your order."
    },
    {
      question: "Are spare parts readily available?",
      answer: "Yes, spare parts for both Chungfa engine and roller components are available from our Bengaluru warehouse. Common parts can be dispatched quickly. For specialized parts, we can source and supply with reasonable lead times."
    },
    {
      question: "What if I later want to upgrade to Greaves?",
      answer: "The roller body is the same for both models. Technically, the Chungfa engine could be replaced with Greaves later, but this is rarely practical or economical. We recommend choosing based on your preference upfront. If brand matters, pay the extra ₹5,000 for Greaves now."
    },
    {
      question: "Is operator training provided?",
      answer: "Yes, basic operator training and demonstration is provided at the time of delivery. We'll show your operators how to start the machine, operate controls, and perform basic daily maintenance. The operation is identical to the Greaves model."
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
          Our team is happy to help you decide between Chungfa and Greaves models.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20Chungfa%20vs%20Greaves%20road%20roller" 
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

