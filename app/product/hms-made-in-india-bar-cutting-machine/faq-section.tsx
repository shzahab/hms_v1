export default function FAQSection() {
  const faqs = [
    {
      question: "Why is the HMS Made in India bar cutter the most expensive in your range?",
      answer: "The price reflects premium Indian manufacturing: extra-thick Bhilai steel frame (25-40% more material), CNC machined and heat-treated gears, premium bearings throughout, and engineering designed for 15-20 years of daily professional use. It's the lowest cost per year over the machine's lifetime."
    },
    {
      question: "How long will this machine actually last?",
      answer: "With proper maintenance, the HMS Made in India model is designed for 15-20 years of professional service. We have customers with HMS machines still running strong after 10+ years of daily use. The premium construction is specifically engineered for extreme longevity."
    },
    {
      question: "Does this machine qualify for government tenders?",
      answer: "Yes. Being 100% Made in India, it qualifies for all government tenders and projects requiring Indian-manufactured equipment under Make in India and Atmanirbhar Bharat initiatives. We provide Indian origin certificates and all required documentation."
    },
    {
      question: "What is the cutting capacity?",
      answer: "The HMS Made in India bar cutter cuts TMT and HYSD bars from 8mm to 32mm diameter. This covers all common construction bar sizes for commercial and residential projects. Only heavy infrastructure with 36-42mm bars requires larger capacity."
    },
    {
      question: "What makes this 'premium' compared to other machines?",
      answer: "Specific differences: Extra-thick Bhilai steel frame (no flex), CNC machined gears (perfect tolerances), heat-treated components (longer wear life), premium sealed bearings (less friction/heat), reinforced blade holder (maintains alignment), and premium 4kW Indian motor (built for continuous duty)."
    },
    {
      question: "What support do I get as an HMS Made in India customer?",
      answer: "Direct factory support from HMS Bengaluru - no middlemen or dealers. Priority phone/WhatsApp support, video call troubleshooting, same-day parts dispatch from our warehouse, and technician visits to major South Indian cities. Extended AMC available."
    },
    {
      question: "Is ₹1,55,000 really justified for a 32mm cutter?",
      answer: "Do the math: ₹1,55,000 ÷ 15 years = ₹10,333/year. A ₹75,000 machine lasting 5 years costs ₹15,000/year plus more repairs and downtime. Premium costs less per year while delivering better performance and zero stress about breakdowns."
    },
    {
      question: "What power supply does it need?",
      answer: "415V, 3-phase, 50Hz with a 4kW motor. Recommended electrical capacity is 7.5kVA minimum. The premium Indian motor is designed for voltage fluctuations common at Indian construction sites."
    },
    {
      question: "What is included with the purchase?",
      answer: "Complete HMS Made in India machine with premium 4kW motor, heavy-duty blade, full safety guard system, emergency stop, motor protection, and documentation (including Indian origin certificate if needed). 6-month warranty + extended AMC available. Delivery charges as per actuals."
    },
    {
      question: "Can I see this machine before buying?",
      answer: "Yes! Visit our Bengaluru showroom to see the HMS Made in India machine alongside other models. You can physically compare the build quality difference. We can also arrange video calls showing the machine in detail and connect you with existing customers for references."
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
        <h3 className="text-lg font-semibold text-orange-800 mb-2">Have More Questions?</h3>
        <p className="text-orange-700 mb-4">
          Our team is happy to answer any questions about the HMS Made in India Bar Cutting Machine.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20HMS%20Made%20in%20India%20Bar%20Cutting%20Machine" 
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

