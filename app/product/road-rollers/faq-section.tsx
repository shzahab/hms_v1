export default function FAQSection() {
  const faqs = [
    {
      question: "What is the centrifugal force of this road roller?",
      answer: "This road roller delivers 15kN centrifugal force for effective soil and asphalt compaction. This force is suitable for most road construction, foundation preparation, and surface compaction work."
    },
    {
      question: "What fuel type does the road roller use?",
      answer: "The roller runs on an air-cooled 4-cycle engine compatible with both gasoline and diesel fuel, giving you flexibility based on fuel availability and cost preference at your project site."
    },
    {
      question: "What is the operating speed range?",
      answer: "Operating speed ranges from 0-4 km/h, allowing controlled compaction at the optimal pace for different soil and surface types. The variable speed enables precision work on various compaction requirements."
    },
    {
      question: "Can this roller compact asphalt surfaces?",
      answer: "Yes, the vibratory roller is excellent for asphalt compaction. The 15kN centrifugal force and controlled speed provide proper compaction for freshly laid asphalt on roads, parking lots, and driveways."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent project requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every roller includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
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

