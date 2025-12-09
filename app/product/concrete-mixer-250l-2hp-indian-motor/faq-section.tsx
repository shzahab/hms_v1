export default function FAQSection() {
  const faqs = [
    {
      question: "Why is this 250L mixer more expensive than the 280L models?",
      answer: "The price difference reflects build quality, not just capacity. This model has a 2HP motor (vs 1.5HP), heavier gauge steel frame, premium Indian-made components, and construction designed for years of professional daily use. Budget models are fine for light use; this is built for contractors who depend on their equipment."
    },
    {
      question: "What's special about Indian-made motors?",
      answer: "Indian motors are designed specifically for Indian electrical conditions - 220V with fluctuations up to ±10%. They handle dust, humidity, and heat better than imported motors designed for different climates. Most importantly, spare parts are readily available across India, and local mechanics know how to repair them."
    },
    {
      question: "How does 2HP compare to 1.5HP in practical use?",
      answer: "The 2HP motor provides 33% more power, which translates to: faster mixing cycles (saving time), better handling of slightly thicker mixes, less strain on the motor during continuous operation, and longer motor life due to not running at maximum capacity all the time."
    },
    {
      question: "Is this overkill for residential construction?",
      answer: "For occasional residential work (2-3 projects/year), yes - budget models will serve you well. But if you do 5+ projects annually or work daily on construction sites, the durability and reliability of this premium model will save money in the long run through fewer repairs and longer service life."
    },
    {
      question: "What's included in the ₹58,000 price?",
      answer: "Complete mixer assembly: 250L heavy-gauge tilting drum, 2HP Indian motor, premium mixing blades, heavy-duty steel frame, and wheel assembly. 6-month warranty on manufacturing defects. Delivery charges additional based on location."
    },
    {
      question: "How long will this mixer last?",
      answer: "With proper maintenance, expect 8-10 years of professional daily use, compared to 3-5 years for budget models. Many contractors report their quality mixers lasting 15+ years with motor rewinding and basic part replacement."
    },
    {
      question: "Can I use this on single phase power?",
      answer: "Yes, despite the 2HP power, the Indian motor is designed for 220V single-phase operation. It draws more current than 1.5HP models, so ensure your electrical connection can handle the load (20A socket recommended with proper earthing)."
    },
    {
      question: "What maintenance does it require?",
      answer: "Same as any mixer: clean drum after each use, lubricate tilting mechanism weekly, check belt tension monthly. The premium construction means less frequent repairs, but regular maintenance is still essential for maximum service life."
    },
    {
      question: "Is the warranty the same as budget models?",
      answer: "Yes, 6-month warranty on manufacturing defects. However, the quality construction means you're less likely to need warranty service. Many customers report zero issues in the first 2-3 years of use."
    },
    {
      question: "Should I choose this or the 350L 3HP model?",
      answer: "Choose 250L 2HP if: single-phase power is important, you need a balance of capacity and portability, or your typical projects use half-bag to 3/4-bag batches. Choose 350L 3HP if: you need larger capacity for bigger projects and can afford the extra ₹10,000."
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
          Our team is happy to discuss whether the premium 250L 2HP model is right for your needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20250L%202HP%20Indian%20Motor%20Concrete%20Mixer" 
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

