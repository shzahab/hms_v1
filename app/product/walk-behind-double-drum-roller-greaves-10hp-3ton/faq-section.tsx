export default function FAQSection() {
  const faqs = [
    {
      question: "Why choose Greaves engine over other brands?",
      answer: "Greaves is a trusted Indian diesel engine brand with over 160 years of heritage. They have the widest service network across South India - you'll find authorized Greaves service centers in virtually every district of Karnataka, Tamil Nadu, Kerala, and Andhra Pradesh. This means quick access to spare parts and technical support whenever needed."
    },
    {
      question: "What is the advantage of double drum over single drum roller?",
      answer: "Double drum rollers provide compaction in both forward and reverse passes, giving more uniform surface finish. Single drum rollers only compact on the forward pass. For asphalt work especially, double drum is preferred as it delivers smoother finish with fewer passes. This means faster work and better results."
    },
    {
      question: "Is the self-start battery included with the machine?",
      answer: "Yes, the self-start battery is included at no extra cost. The battery-powered electric start eliminates manual hand-cranking, saving time and reducing operator fatigue. Simply turn the key and the 10HP Greaves diesel engine starts reliably."
    },
    {
      question: "What is the fuel consumption of this roller?",
      answer: "The Greaves 10HP diesel engine is known for fuel efficiency. Actual consumption varies based on soil conditions and working intensity, but typically ranges from 1.5-2.5 liters per hour of operation. This makes it economical for extended use on road projects."
    },
    {
      question: "Can this roller compact asphalt as well as soil?",
      answer: "Yes, this 3-ton double drum roller is designed for both asphalt compaction and soil/gravel base preparation. The included water sprinkler system prevents hot asphalt from sticking to the drums. The vibratory compaction feature enhances density for both applications."
    },
    {
      question: "What is the warranty coverage?",
      answer: "The roller comes with 6-month warranty covering manufacturing defects. The warranty does not cover spares, consumables, or damage from misuse/improper operation. Greaves engine warranty is handled through Greaves authorized service centers."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 days depending on your location in South India. Delivery charges are calculated based on actual distance and logistics costs. We'll provide exact delivery cost before confirming your order."
    },
    {
      question: "Is operator training provided?",
      answer: "Yes, basic operator training and demonstration is provided at the time of delivery. We'll show your operators how to start the machine, operate controls, and perform basic daily maintenance. Extended training can be arranged if needed."
    },
    {
      question: "What's the difference between Greaves and Chungfa models?",
      answer: "Both models have identical 10HP power and 3-ton compaction capacity. The Greaves model (₹1,90,000) offers the advantage of Greaves' extensive service network and brand reputation. The Chungfa model (₹1,85,000) saves ₹5,000 while delivering similar performance. Choose based on your preference for service network vs cost savings."
    },
    {
      question: "What maintenance is required?",
      answer: "Regular maintenance includes: daily checking of engine oil, water, and fuel levels; weekly cleaning of air filter; oil change every 100-150 hours of operation; and periodic inspection of drums and vibration mechanism. We provide a maintenance guide with the machine."
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
          Our team is happy to answer any questions about the Greaves 10HP Double Drum Roller.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20Greaves%2010HP%20Double%20Drum%20Road%20Roller" 
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

