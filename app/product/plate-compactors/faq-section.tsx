export default function FAQSection() {
  const faqs = [
    {
      question: "What is the compaction force of this plate compactor?",
      answer: "This plate compactor delivers 30kN centrifugal force at 95Hz frequency, providing effective soil consolidation for trenches, backfill, and confined area compaction on construction sites."
    },
    {
      question: "What is the plate size of this compactor?",
      answer: "The plate measures 650mm x 500mm (L x W), ideal for medium to large area compaction while still being maneuverable in confined spaces like trenches and around structures."
    },
    {
      question: "Is this plate compactor suitable for confined spaces?",
      answer: "Yes, its compact design makes it perfect for trenches, areas around structures, pipe bedding, and confined spaces where larger compaction equipment like road rollers cannot access."
    },
    {
      question: "What type of soil is this compactor best suited for?",
      answer: "The 30kN force and 95Hz frequency make it excellent for granular and mixed soils. It's ideal for sand, gravel, crushed stone, and mixed fill materials commonly used in construction backfill."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent project requirements."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every compactor includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation guidance. Our service technicians cover all South Indian states with 24-48 hour response times."
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

