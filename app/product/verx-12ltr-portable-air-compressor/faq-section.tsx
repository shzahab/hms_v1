export default function FAQSection() {
  const faqs = [
    {
      question: "What can I use the VERX 12L air compressor for?",
      answer: "The VERX 12L is ideal for tyre inflation (cars, bikes, autos), spray painting small items, powering air guns for cleaning and dusting, operating small pneumatic tools like staplers and brad nailers, and airbrush work for hobbies."
    },
    {
      question: "Does the VERX 12L compressor run on home electricity?",
      answer: "Yes, the VERX 12L runs on standard 220V single-phase power available in homes, shops, and small workshops across India. Just plug into a 15A socket with proper earthing - no special electrical setup required."
    },
    {
      question: "Is this compressor oil-free or does it need oil?",
      answer: "The VERX 12L is an oil-lubricated compressor. This design provides longer motor life, quieter operation, and better cooling compared to oil-free models. It requires periodic oil level checks (weekly) and oil changes (every 500 hours or 6 months)."
    },
    {
      question: "How long does it take to fill the 12L tank?",
      answer: "The 1 HP motor fills the empty 12L tank to full pressure (8 bar) in approximately 2-3 minutes. Recovery time after use depends on how much air was consumed."
    },
    {
      question: "Can I use this for continuous spray painting?",
      answer: "For brief spray painting jobs on small items, yes. However, the 12L tank will empty quickly during continuous spraying, requiring frequent pauses for refilling. For regular spray painting work, we recommend the 24L or 50L models which provide longer run time between refills."
    },
    {
      question: "What maintenance does the VERX 12L need?",
      answer: "Basic maintenance includes: (1) Check oil level weekly through sight glass, (2) Drain water from tank after each use via drain valve, (3) Clean/replace air filter monthly, (4) Change oil every 500 hours or 6 months, (5) Check all connections for leaks periodically."
    },
    {
      question: "What is the warranty on VERX compressors?",
      answer: "The VERX 12L comes with a 6-month warranty covering manufacturing defects. Warranty does not cover consumables (oil, filters), wear parts, or damage from improper use, voltage fluctuations, or lack of maintenance."
    },
    {
      question: "What accessories come with the compressor?",
      answer: "The VERX 12L includes the compressor unit, standard air hose connection, and user manual. Accessories like air guns, tyre inflator attachments, and spray guns are sold separately. We stock compatible accessories at competitive prices."
    },
    {
      question: "How noisy is this compressor?",
      answer: "The VERX 12L operates at approximately 70 dB, similar to a vacuum cleaner. It's suitable for indoor use in workshops and garages. The oil-lubricated design makes it quieter than many oil-free models of similar capacity."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-5 days depending on your location within South India. We ship from our Bengaluru warehouse. Delivery charges are calculated based on distance and will be confirmed before order placement."
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
          Our team is happy to answer any questions about the VERX 12L Air Compressor or help you choose the right model for your needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20VERX%2012L%20Air%20Compressor" 
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

