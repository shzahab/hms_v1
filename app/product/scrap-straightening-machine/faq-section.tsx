export default function FAQSection() {
  const faqs = [
    {
      question: "What diameter range can this scrap straightening machine handle?",
      answer: "This machine handles steel bars from 6mm to 14mm diameter, covering the most common sizes of scrap rebar generated on construction sites, fabrication workshops, and steel recycling operations."
    },
    {
      question: "What is the processing speed of this steel bar straightener?",
      answer: "The machine operates at 30 meters per minute, enabling high-volume scrap recovery and processing. This speed is suitable for both construction site waste recovery and dedicated steel recycling operations."
    },
    {
      question: "Is this machine fully automatic?",
      answer: "It's semi-automatic with an automated feed system for continuous operation while allowing operator control for different material types, bar conditions, and straightening requirements."
    },
    {
      question: "What types of bent steel can this machine straighten?",
      answer: "The machine can straighten bent TMT bars (Fe415, Fe500, Fe500D), plain round bars, wire rod coils, and cold-drawn steel bars. It handles various bend types including U-bends, curves, and partially straightened scrap."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every machine includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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
    </div>
  );
}

