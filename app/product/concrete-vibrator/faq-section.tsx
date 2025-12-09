export default function FAQSection() {
  const faqs = [
    {
      question: "What is the vibration frequency of this concrete vibrator?",
      answer: "This concrete vibrator operates at 50Hz frequency, which is optimal for removing air bubbles and consolidating freshly poured concrete to achieve maximum density and strength as per IS standards."
    },
    {
      question: "What power supply does the concrete vibrator require?",
      answer: "This is an electric concrete vibrator with a 2HP single-phase motor. It operates on standard single-phase power supply available at most construction sites across India, no special electrical infrastructure needed."
    },
    {
      question: "Can this vibrator reach into narrow formwork?",
      answer: "Yes, flexible shaft options are available in multiple lengths for reaching hard-to-access areas like narrow columns, dense reinforcement zones, and deep formwork sections. Various needle head sizes (25mm to 50mm) are also available."
    },
    {
      question: "How does concrete vibration improve structural quality?",
      answer: "Vibration removes trapped air bubbles and voids from freshly poured concrete, increasing density and strength. Properly vibrated concrete achieves better compaction, reduced permeability, and improved bond with reinforcement steel."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every vibrator includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation guidance. Our service technicians cover all South Indian states with 24-48 hour response times."
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

