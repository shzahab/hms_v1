export default function FAQSection() {
  const faqs = [
    {
      question: "How much concrete does 350L produce per batch?",
      answer: "The 350L drum produces approximately 230-260 liters of mixed concrete per batch - roughly 3/4 bag capacity. This is about 40% more than the 250L model and significantly reduces the number of batches needed for larger pours."
    },
    {
      question: "Does the 3HP motor require three-phase power?",
      answer: "No, our 3HP Indian motor is specifically designed for single-phase 220V operation. However, 3HP is at the upper limit of single-phase loads, so we recommend a dedicated 25-30A electrical connection with proper earthing. Check with an electrician if your site's wiring can handle the load."
    },
    {
      question: "Why choose 350L electric over 500L diesel?",
      answer: "Choose 350L electric if: you have reliable power, want lower running costs (electricity vs diesel), prefer simpler maintenance, need quieter operation, or have budget constraints (₹68K vs ₹1.3L). Choose diesel if: you need full 1-bag capacity, work at sites without power, or require maximum output."
    },
    {
      question: "Is this suitable for commercial construction?",
      answer: "Yes, the 350L 3HP is excellent for small to medium commercial projects - shops, offices, showrooms, small factories. For large commercial or infrastructure work requiring continuous high-volume output, consider the 500L diesel mixer."
    },
    {
      question: "What's included in the ₹68,000 price?",
      answer: "Complete mixer assembly: 350L extra-heavy-gauge tilting drum, 3HP Indian motor, premium mixing blades, heavy-duty steel frame, and wheel assembly. 6-month warranty on manufacturing defects. Delivery charges additional based on location."
    },
    {
      question: "How does running cost compare to diesel mixers?",
      answer: "Electric running cost is significantly lower. At ₹8-10/kWh, the 3HP motor costs roughly ₹20-25/hour to run. A diesel engine consuming 1-1.5L/hour costs ₹90-135/hour in fuel alone. Over a year of regular use, electric saves substantial money."
    },
    {
      question: "Can I run this on a generator if power fails?",
      answer: "Yes, but you need a generator of at least 5-7 kVA capacity to handle the 3HP motor starting current. A smaller generator will trip or damage the motor. If power reliability is a concern, consider the diesel mixer which is self-powered."
    },
    {
      question: "What electrical setup do I need?",
      answer: "Recommended: dedicated 25-30A MCB, proper earthing, adequate cable size (4 sq mm minimum for short runs). The 3HP motor draws significant starting current, so ensure your electrical infrastructure can handle it. Have an electrician verify before purchase."
    },
    {
      question: "How does this compare to two smaller mixers?",
      answer: "One 350L mixer is more practical than two 250L mixers in most cases - less crew needed, one setup, one maintenance schedule. However, two smaller mixers offer redundancy (if one fails, work continues) and flexibility for split-site work."
    },
    {
      question: "What's the delivery time and charges?",
      answer: "Delivery typically takes 5-7 days given the larger size. Charges vary based on distance from Bengaluru - typically ₹3,000-8,000 depending on location. We'll confirm exact delivery cost before order confirmation."
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
          Our team can help you decide between 350L electric and 500L diesel based on your specific needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20350L%203HP%20Concrete%20Mixer" 
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

