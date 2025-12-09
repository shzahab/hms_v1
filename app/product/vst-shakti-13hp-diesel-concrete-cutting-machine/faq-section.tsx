export default function FAQSection() {
  const faqs = [
    { question: "Why is VST Shakti 13HP the most expensive diesel model?", answer: "VST Shakti 13HP offers: (1) Maximum 13HP diesel power, (2) Water-cooled engine for sustained heavy operation, (3) Premium VST brand quality, (4) Built for infrastructure-grade work. The price reflects top-tier diesel cutting capability for demanding professional applications." },
    { question: "What is the advantage of water cooling?", answer: "Water-cooled engines maintain consistent temperature during sustained heavy operation. Air-cooled engines can overheat during continuous cutting in hot weather. For 8+ hours of daily cutting, especially in Indian summers, water cooling prevents overheating and extends engine life." },
    { question: "Who is VST Shakti?", answer: "VST Tillers Tractors Ltd is a renowned Indian manufacturer established in 1967. They're known for agricultural equipment and industrial engines. VST has extensive dealer network across India with good parts availability and service support." },
    { question: "When do I need 13HP diesel vs 10HP?", answer: "Choose 13HP VST Shakti if: (1) Heavy infrastructure work - airports, highways, ports, (2) Continuous 8+ hour daily operation, (3) Cutting through heavily reinforced concrete, (4) Hot climate sustained operation. 10HP Greaves is sufficient for standard road contractor work." },
    { question: "How does fuel consumption compare to 10HP?", answer: "VST Shakti 13HP consumes approximately 1.8-2.2 liters/hour vs 1.5-2 liters/hour for 10HP Greaves. The extra fuel cost is offset by faster cutting and ability to handle heavy jobs that 10HP would struggle with." },
    { question: "What warranty is provided?", answer: "6-month warranty on machine body and components. VST Shakti engine warranty through authorized VST service centers. Does not cover diamond blades, consumables, or damage from improper use." },
    { question: "Is VST service available widely?", answer: "Yes, VST has extensive dealer network across India, particularly strong in agricultural regions. Service centers and parts available in most districts. Better coverage than international brands in rural areas." },
    { question: "VST Shakti vs Honda GX390 - which is better?", answer: "Different tools for different jobs. Honda GX390 (₹75,000): 13HP petrol, easier starting, lighter. VST Shakti (₹1,30,000): 13HP diesel, water-cooled, lower running costs, sustained heavy operation. Choose petrol for convenience; choose diesel for economy and heavy infrastructure work." }
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200"><h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Questions About Heavy-Duty Diesel Cutting?</h3>
        <p className="text-blue-700 mb-4">Let us help you determine if VST Shakti 13HP is right for your infrastructure projects.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20VST%20Shakti%2013HP%20Diesel%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919886474441" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📞 Call: +91 9886474441</a>
        </div>
      </div>
    </div>
  );
}

