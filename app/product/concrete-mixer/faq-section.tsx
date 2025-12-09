export default function FAQSection() {
  const faqs = [
    {
      question: "What is the drum capacity of this concrete mixer?",
      answer: "The drum has a 560-liter capacity, suitable for 1-bag mixing operations. This is ideal for small to medium construction sites requiring consistent concrete supply throughout the workday."
    },
    {
      question: "What engine brand powers this concrete mixer?",
      answer: "It's powered by a reliable Kirloskar engine, known for durability and performance in Indian conditions. The engine provides consistent power for continuous mixing operations and is well-supported by service networks across South India."
    },
    {
      question: "Is this concrete mixer portable?",
      answer: "Yes, it features sturdy wheels for easy site mobility despite its 1000kg weight. The portable design allows movement around construction sites as work progresses between different pour locations."
    },
    {
      question: "What concrete grades can this mixer produce?",
      answer: "The mixer can produce all standard concrete grades including M15, M20, M25, and higher grades. It handles both 20mm and 40mm aggregate sizes and is compatible with all Indian cement brands for custom mix ratios."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent project requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every mixer includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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

