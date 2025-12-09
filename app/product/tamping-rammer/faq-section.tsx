export default function FAQSection() {
  const faqs = [
    {
      question: "What is the impact force of this tamping rammer?",
      answer: "The rammer delivers 20kN impacting force for effective soil compaction in trenches, around foundations, and in confined areas where larger compaction equipment cannot access."
    },
    {
      question: "What is the shoe size?",
      answer: "The tamping shoe measures 300mm x 330mm, providing a compact footprint ideal for confined area work in trenches, around structures, and for utility installations."
    },
    {
      question: "Is it suitable for trench work?",
      answer: "Absolutely. The compact 600mm x 600mm footprint and high 20kN impact force make it perfect for trench backfill, pipe bedding, and confined area compaction where plate compactors cannot fit."
    },
    {
      question: "What is the jumping height?",
      answer: "The jumping height ranges from 45-70mm, providing effective compaction energy transfer to the soil for proper consolidation in layers."
    },
    {
      question: "What type of soils can this compact?",
      answer: "The 20kN impact force is effective for cohesive soils, clay, mixed soils, and granular materials. It's particularly suited for soil types where vibratory compaction alone isn't sufficient."
    },
    {
      question: "What warranty and support is offered?",
      answer: "Every Tamping Rammer comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse with 24-48 hour delivery across South India."
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

