export default function FAQSection() {
  const faqs = [
    {
      question: "Why choose GF25 three phase over the single phase version?",
      answer: "The GF25 Three Phase has a more powerful 3kW motor (vs 2.2kW) with continuous duty rating. It bends faster (25-30 vs 18-22 bends/min) and can run all day without overheating. Choose three phase if you have industrial power and need high-volume or continuous production."
    },
    {
      question: "Is GF25 three phase suitable for apartment building projects?",
      answer: "Yes, it's ideal. G+3 and G+4 apartment buildings use significant quantities of 20mm main bars plus 16mm secondary bars and 8-10mm stirrups. The GF25 3-Phase handles all of these efficiently with its industrial duty cycle."
    },
    {
      question: "How does GF25 compare to larger machines like GW42?",
      answer: "GF25 (8-20mm, ₹38K) is for most residential and small commercial work. GW42 (16-32mm, ₹75K) is for heavy infrastructure with 25mm+ bars. If your projects don't require bars above 20mm, the GF25 saves you ₹37,000 while meeting your needs."
    },
    {
      question: "What's the production capacity per day?",
      answer: "With continuous three-phase operation, expect 800-1000+ bends per day across all sizes. The machine can run 8-10 hours daily without issues. Actual output depends on bar sizes and operator efficiency."
    },
    {
      question: "Can one machine handle both stirrups and main bars?",
      answer: "Yes, the 8-20mm range covers both stirrup work (8mm, 10mm) and main bar bending (12mm, 16mm, 20mm) in one machine. This is one of the key advantages - no need for separate machines for different tasks."
    },
    {
      question: "What power connection is required?",
      answer: "415V three-phase, 50Hz with minimum 7kVA capacity. This is standard at industrial facilities, fabrication yards, and most commercial construction sites. Please ensure your site has proper electrical setup before purchase."
    },
    {
      question: "Is this good for starting a fabrication business?",
      answer: "Excellent choice. At ₹38,000, it's affordable enough to start with, yet capable enough to serve multiple contractor clients. The 20mm capacity and industrial duty cycle make it a serious production machine."
    },
    {
      question: "What warranty and support is included?",
      answer: "6-month warranty covering manufacturing defects only (does not cover spares or damage from manual misuse). Delivery charges as per actuals. Installation and operator training available at additional cost. Contact us via phone or WhatsApp for technical support."
    },
    {
      question: "How does delivery and installation work?",
      answer: "Delivery typically takes 1-3 days depending on your location. Delivery charges are as per actuals. Please ensure your site has three-phase power available. Installation and operator training available at additional cost."
    },
    {
      question: "Can I upgrade from GF20 to GF25 later?",
      answer: "Yes, we offer trade-in options for existing customers. If your projects grow to require 20mm capacity, contact us about upgrading. Many customers start with GF20 and upgrade to GF25 as their business grows."
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
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Order?</h3>
        <p className="text-green-700 mb-4">
          The GF25 Three Phase at ₹38,000 is our best value professional machine. 
          Get in touch to place your order or ask any questions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GF25%20Three%20Phase%20Bar%20Bending%20Machine%20at%20Rs.38%2C000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            🛒 Order Now on WhatsApp
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

