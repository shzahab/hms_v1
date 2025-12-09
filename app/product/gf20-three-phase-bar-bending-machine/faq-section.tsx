export default function FAQSection() {
  const faqs = [
    {
      question: "What's the difference between GF20 single phase and three phase?",
      answer: "The GF20 Three Phase has a more powerful 2.2kW motor (vs 1.5kW) running on 415V industrial power. This provides 45% more power, faster bending speeds (28-32 vs 20-25 bends/min), and continuous duty capability for all-day operation. Choose three phase if you have industrial power and need high-volume production."
    },
    {
      question: "Do I need special electrical setup for three phase?",
      answer: "Yes, you need a 415V three-phase power connection with minimum 5kVA capacity. This is standard at industrial sites, fabrication units, and larger construction sites. Please ensure your site has proper electrical setup before purchase."
    },
    {
      question: "Can the three phase motor handle continuous operation?",
      answer: "Yes, that's the main advantage. Three-phase motors are designed for industrial continuous duty. You can run the GF20 3-Phase for 8-10 hours daily without overheating issues that might occur with single-phase motors under similar loads."
    },
    {
      question: "Is the bending capacity different from single phase?",
      answer: "No, both GF20 models have the same 8-16mm bending capacity. The difference is in power and speed - the three phase version bends faster and can run continuously. If you need higher capacity (20mm+), look at the GF25 models."
    },
    {
      question: "How much faster is three phase compared to single phase?",
      answer: "The GF20 Three Phase achieves 28-32 bends per minute compared to 20-25 on single phase - roughly 30% faster. Over an 8-hour shift, this translates to significantly higher output."
    },
    {
      question: "Is the GF20 three phase good for a fabrication unit?",
      answer: "Yes, it's excellent for small to medium fabrication units processing 8-16mm bars. The continuous duty rating means reliable daily production. For 20mm capacity, consider the GF25 Three Phase."
    },
    {
      question: "What warranty and support is included?",
      answer: "6-month warranty covering manufacturing defects only (does not cover spares or damage from manual misuse). Delivery charges as per actuals. Installation and operator training available at additional cost. Spare parts available from our Bengaluru warehouse."
    },
    {
      question: "How does delivery work for three phase machines?",
      answer: "Delivery typically takes 1-3 days depending on your location. Delivery charges are as per actuals based on distance. Please ensure your site has three-phase power available before purchase. Installation is available at additional cost."
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
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help Deciding?</h3>
        <p className="text-blue-700 mb-4">
          Not sure whether single phase or three phase is right for your operation? 
          Our team can assess your requirements and recommend the best option.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20need%20help%20choosing%20between%20GF20%20single%20phase%20and%20three%20phase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 Ask on WhatsApp
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

