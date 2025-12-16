export default function FAQSection() {
  const faqs = [
    {
      question: "Why Honda GX390 engine?",
      answer: "Honda GX series is the global gold standard for small engines - used in everything from generators to construction equipment worldwide. The GX390 delivers 13HP with exceptional reliability, starts on the first pull even in cold weather, and runs for years with minimal maintenance. Honda authorized service centers and genuine parts are available across India."
    },
    {
      question: "When to choose 1.5-ton single drum vs 3-ton double drum?",
      answer: "Choose 1.5-ton for: driveways, pathways, trenches, landscaping, and light compaction. Choose 3-ton for: road construction, asphalt laying, parking lots, and heavy-duty compaction. The 1.5-ton is lighter, more maneuverable, and easier to transport. The 3-ton delivers more compaction force for professional road work."
    },
    {
      question: "Is GST extra on this model?",
      answer: "Yes, the price of ₹1,35,000 is exclusive of GST. Add 18% GST (₹24,300) for a total of ₹1,59,300 inclusive of all taxes. This is the complete cost - no hidden charges."
    },
    {
      question: "What is the warranty on Honda engine?",
      answer: "Honda engine warranty is as per Honda India's policy - typically covers manufacturing defects. Engine warranty service is handled through authorized Honda service centers across India. We can guide you to the nearest Honda service center for any engine-related support."
    },
    {
      question: "Is this petrol or diesel?",
      answer: "This is a petrol engine - Honda GX390 runs on regular petrol. Petrol engines offer easier starting, cleaner operation, lower maintenance, and quieter running compared to diesel. Ideal for residential areas where diesel fumes would be problematic."
    },
    {
      question: "How does petrol compare to diesel for compaction?",
      answer: "For the same HP rating, both deliver similar power. Petrol advantages: easier starting, cleaner exhaust, lower maintenance, quieter operation, lighter engine. Diesel advantages: better fuel economy for extended use, higher torque. For light-duty work like driveways, petrol is often preferred."
    },
    {
      question: "What about spare parts availability?",
      answer: "Honda engine parts are available at authorized Honda service centers across India - one of the widest service networks for any engine brand. Roller body parts are available from Hutaib Machinery. This combination ensures you're never stranded."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 days depending on your location in South India. Delivery charges are calculated based on actual distance and logistics costs. We'll provide exact delivery cost before confirming your order."
    },
    {
      question: "Can I use this for asphalt work?",
      answer: "The 1.5-ton can handle light asphalt patching and small areas. However, for professional asphalt road laying, we recommend 3-ton double drum rollers which provide more compaction force and smoother finish on asphalt surfaces."
    },
    {
      question: "What fuel consumption can I expect?",
      answer: "The Honda GX390 is known for excellent fuel efficiency. Actual consumption varies based on work intensity, but typically ranges from 1.5-2.5 liters per hour. Honda's engineering focuses on optimal fuel efficiency while maintaining full power output."
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
          Our team is happy to answer any questions about the Honda GX390 Single Drum Roller.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20Honda%20GX390%20Single%20Drum%20Roller" 
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

