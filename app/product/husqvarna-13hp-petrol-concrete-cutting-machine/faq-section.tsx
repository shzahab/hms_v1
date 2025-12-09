export default function FAQSection() {
  const faqs = [
    { question: "What makes Husqvarna a good choice?", answer: "Husqvarna is a premium Swedish brand with 330+ years of manufacturing heritage. Their engines feature advanced air filtration, efficient combustion, and are designed for heavy commercial use. At ₹65,000, it offers 13HP professional power at the best price in our range." },
    { question: "How does Husqvarna compare to Honda?", answer: "Both are premium international brands with comparable performance. Key difference is price: Husqvarna is ₹65,000 vs Honda at ₹75,000. Honda has wider service network and better resale value. Husqvarna offers same power for ₹10,000 less." },
    { question: "Is Husqvarna service available in India?", answer: "Husqvarna has been expanding in India with service centers in major cities. While not as extensive as Honda, parts and service are increasingly available. For critical operations in remote areas, consider Honda for wider service coverage." },
    { question: "What is the fuel consumption?", answer: "The Husqvarna 13HP engine consumes approximately 2-2.5 liters of petrol per hour under normal cutting load, similar to other 13HP petrol engines in this class." },
    { question: "Why choose Husqvarna over diesel models?", answer: "Petrol advantages: Easier cold starting, lighter weight, lower initial cost. Diesel advantages: Lower fuel cost per liter, better fuel economy, higher torque. Choose petrol for easier operation; choose diesel for lowest running costs." },
    { question: "What warranty is provided?", answer: "6-month warranty covers manufacturing defects on the complete machine including engine. Warranty does not cover diamond blades, consumables, or damage from improper use. Keep purchase invoice for warranty claims." },
    { question: "What cutting specifications does it offer?", answer: "Maximum cutting depth: 240mm. Blade capacity: Up to 600mm diameter. Water tank: 35 liters for wet cutting. Same specifications as Honda model at ₹10,000 less." },
    { question: "Who should buy Husqvarna instead of Honda?", answer: "Choose Husqvarna if: (1) You want to save ₹10,000, (2) You operate in areas with Husqvarna service, (3) You don't need Honda brand for client perception, (4) You're expanding fleet and want better value per machine." }
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200"><h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help Deciding?</h3>
        <p className="text-blue-700 mb-4">We can help you compare Husqvarna with other options for your specific needs.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20Husqvarna%2013HP%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919886474441" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📞 Call: +91 9886474441</a>
        </div>
      </div>
    </div>
  );
}

