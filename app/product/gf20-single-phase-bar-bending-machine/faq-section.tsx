export default function FAQSection() {
  const faqs = [
    {
      question: "Can the GF20 single phase run on home electricity?",
      answer: "Yes, the GF20 single phase bar bending machine runs on standard 220V single-phase power supply available in homes, shops, and small commercial establishments. You don't need any special electrical setup - just plug into a 15A socket with proper earthing."
    },
    {
      question: "What is the maximum bar diameter the GF20 can bend?",
      answer: "The GF20 single phase model can bend TMT and HYSD bars from 8mm to 16mm diameter. This covers all common bar sizes used in residential construction including stirrups (8mm), slab bars (10mm), and small column/beam main bars (12mm, 16mm)."
    },
    {
      question: "Is the GF20 portable for moving between sites?",
      answer: "Yes, the GF20 single phase weighs approximately 75kg and has a compact design (650mm × 450mm × 700mm). It can easily fit in a small pickup truck, auto-rickshaw, or even a large car. Many contractors move it between sites as needed."
    },
    {
      question: "What is included with the GF20 purchase at ₹33,000?",
      answer: "Your purchase includes: the GF20 machine with motor, foot pedal control, bending accessories and pins, and user manual in English/Hindi. 6-month warranty on manufacturing defects (does not cover spares or damage from manual misuse). Delivery charges as per actuals based on location. Installation and operator training available at additional cost."
    },
    {
      question: "How does the GF20 compare to manual bending?",
      answer: "The GF20 produces consistent, accurate bends at 20-25 bends per minute vs. manual bending which is slow and inconsistent. One worker with GF20 equals 2-3 manual workers. You'll save on labor costs, reduce material waste from wrong angles, and complete projects faster."
    },
    {
      question: "What's the difference between GF20 single phase and three phase?",
      answer: "GF20 Single Phase (₹33,000): Runs on 220V domestic power, 1.5kW motor, ideal for small sites. GF20 Three Phase (₹35,000): Runs on 415V industrial power, 2.2kW motor, better for continuous heavy use. Both bend 8-16mm bars. Choose single phase if you don't have 3-phase power available."
    },
    {
      question: "How long does delivery take and what are the charges?",
      answer: "Delivery typically takes 1-3 days depending on your location. Delivery charges are as per actuals based on distance and location. We'll provide the exact delivery cost before confirming your order."
    },
    {
      question: "What does the warranty cover?",
      answer: "The GF20 comes with a 6-month warranty covering manufacturing defects only. The warranty does not cover spares, consumables, or damage caused by improper use or manual misuse. Spare parts are readily available from our Bengaluru warehouse. For technical support, you can reach us via phone or WhatsApp."
    },
    {
      question: "Can I see a demo before buying?",
      answer: "Yes! Visit our Bengaluru showroom for a live demonstration, or we can arrange a video call demo. Many customers also visit existing users in their area - we can connect you with GF20 owners near you for reference."
    },
    {
      question: "Is financing available?",
      answer: "We don't offer direct financing, but at ₹33,000, many customers pay via UPI, bank transfer, or use their existing business credit lines. Some customers use Bajaj EMI cards or bank personal loans for equipment purchase."
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
          Our team is happy to answer any questions about the GF20 Single Phase bar bending machine.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%20GF20%20Single%20Phase%20Bar%20Bending%20Machine" 
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

