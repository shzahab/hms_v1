export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum lifting capacity of this building material hoist?",
      answer: "This building material hoist can safely lift up to 350kg of materials per load. This capacity is suitable for bricks, cement bags, steel bars, tools, and other common construction materials."
    },
    {
      question: "How high can the material hoist lift loads?",
      answer: "With a 60-meter rope length, the hoist can service buildings up to approximately 20 floors. This makes it ideal for multi-story residential, commercial, and high-rise construction projects across South India."
    },
    {
      question: "What safety features does this construction hoist have?",
      answer: "The hoist includes multiple safety features: emergency brakes for instant stopping, a clutch mechanism for controlled descent, weather-resistant construction for outdoor operation, and overload protection to prevent accidents from exceeding capacity."
    },
    {
      question: "What power supply does it require?",
      answer: "The hoist operates on a single-phase power supply with a 3HP motor, making it suitable for most construction sites without requiring special 3-phase electrical infrastructure."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent project requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every hoist includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation assistance. Our service technicians cover all South Indian states with 24-48 hour response times."
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

