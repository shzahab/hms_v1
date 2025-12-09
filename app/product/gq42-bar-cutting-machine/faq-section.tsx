export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum bar diameter the GQ42 can cut?",
      answer: "The GQ42 bar cutting machine can cut TMT and HYSD bars from 8mm to 16mm diameter. This covers all common bar sizes used in residential construction including stirrups (8mm), slab bars (10mm), and column/beam main bars (12mm, 16mm)."
    },
    {
      question: "What power supply does the GQ42 require?",
      answer: "The GQ42 operates on 415V, 3-phase, 50Hz power supply. You'll need a proper 3-phase electrical connection at your site. If you only have single-phase power, please contact us for alternative solutions."
    },
    {
      question: "How many cuts can the GQ42 make per minute?",
      answer: "The GQ42 delivers approximately 25-30 cuts per minute depending on bar diameter and hardness. For 8mm bars, you can achieve closer to 30 cuts/minute, while 16mm bars will be around 25 cuts/minute."
    },
    {
      question: "Is the GQ42 portable for moving between sites?",
      answer: "Yes, the GQ42 weighs approximately 120kg and has a compact footprint (750mm × 450mm × 650mm). It can be transported in a small pickup truck or tempo. Many contractors move it between sites as needed."
    },
    {
      question: "What is included with the GQ42 purchase at ₹75,000?",
      answer: "Your purchase includes: the GQ42 machine with motor, blade, safety guard, and user manual. 6-month warranty on manufacturing defects (does not cover spares, blades, or damage from overloading). Delivery charges as per actuals based on location."
    },
    {
      question: "How long does the cutting blade last?",
      answer: "Blade life depends on usage and bar hardness. With normal use on TMT bars, expect 3-6 months of blade life. Replacement blades are readily available from our Bengaluru warehouse. We recommend keeping a spare blade on hand."
    },
    {
      question: "What safety features does the GQ42 have?",
      answer: "The GQ42 includes a protective blade guard that covers the cutting area, an emergency stop button for immediate shutdown, and a stable heavy-duty frame to prevent movement during operation. Always follow safety guidelines during operation."
    },
    {
      question: "What's the difference between GQ42 and GQ52?",
      answer: "GQ42 (₹75,000): Cuts 8-16mm bars, compact size, ideal for small projects. GQ52 (₹93,000): Cuts 8-42mm bars, larger motor, suitable for bigger projects with heavier bars. Choose GQ42 if you mostly work with bars up to 16mm."
    },
    {
      question: "How long does delivery take and what are the charges?",
      answer: "Delivery typically takes 3-5 days to major South Indian cities. Delivery charges are as per actuals based on distance and location. We'll provide the exact delivery cost before confirming your order."
    },
    {
      question: "What does the warranty cover?",
      answer: "The GQ42 comes with a 6-month warranty covering manufacturing defects only. The warranty does not cover spares, consumables, cutting blades, or damage caused by overloading/improper use. Spare parts are readily available from our Bengaluru warehouse."
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
          Our team is happy to answer any questions about the GQ42 Bar Cutting Machine.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20GQ42%20Bar%20Cutting%20Machine" 
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

