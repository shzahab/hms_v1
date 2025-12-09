export default function FAQSection() {
  const faqs = [
    {
      question: "What is the working width of this power trowel?",
      answer: "The double 36-inch blades provide a 1820mm working width, allowing efficient coverage of large concrete floor areas in fewer passes, significantly reducing finishing time on warehouse and industrial projects."
    },
    {
      question: "What is the blade speed range?",
      answer: "Blade speed is adjustable from 60 to 140 RPM, allowing operators to optimize for different finishing stages - lower speeds for floating and higher speeds for burnishing to achieve the desired surface finish."
    },
    {
      question: "Is this suitable for warehouse floors?",
      answer: "Absolutely. The ride-on design is specifically made for large warehouse, industrial, and commercial floor finishing projects. The 1820mm working width enables efficient coverage of large areas, making it ideal for 5,000+ sqft projects."
    },
    {
      question: "What engine type does it use?",
      answer: "It's powered by an air-cooled 4-cycle gasoline engine for reliable performance on construction sites. This engine type is known for durability and easy maintenance in Indian conditions."
    },
    {
      question: "How many operators are needed?",
      answer: "Only one operator is needed to operate the ride-on trowel. The intuitive controls and comfortable seating allow single-operator efficiency across large floor areas."
    },
    {
      question: "What warranty and support is offered?",
      answer: "Every Ride On Power Trowel comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts and blades are readily available from our Bengaluru warehouse with 24-48 hour delivery across South India."
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

