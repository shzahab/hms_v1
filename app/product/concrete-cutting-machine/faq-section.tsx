export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum cutting depth of this concrete cutting machine?",
      answer: "This concrete cutting machine offers a maximum cutting depth of 240mm, suitable for most road construction, floor cutting, and expansion joint applications. The cutting depth is adjustable via handle rotation for precise control."
    },
    {
      question: "Does the machine support wet cutting?",
      answer: "Yes, the machine features a built-in 35-liter water tank for wet cutting operations. Wet cutting reduces dust, extends blade life by up to 40%, and provides cleaner cuts with better visibility for operators."
    },
    {
      question: "What blade size does this concrete cutter use?",
      answer: "The machine accepts 600mm (24-inch) diameter diamond blades. We supply compatible blades for cutting concrete, asphalt, and reinforced concrete. Replacement blades are available with same-day dispatch from Bengaluru."
    },
    {
      question: "Can it cut through reinforced concrete with steel rebar?",
      answer: "Yes, with the appropriate diamond blade, this machine can cut through reinforced concrete containing steel reinforcement bars. We recommend using premium diamond blades specifically designed for reinforced concrete for optimal results and blade longevity."
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

