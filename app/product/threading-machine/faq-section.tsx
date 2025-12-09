export default function FAQSection() {
  const faqs = [
    {
      question: "What rebar diameters can this threading machine handle?",
      answer: "This threading machine handles rebar from 16-40mm diameter, covering all common bar sizes used in construction for mechanical splicing applications in columns, beams, and foundations."
    },
    {
      question: "What thread pitches are available?",
      answer: "The machine supports multiple thread pitches: 1.75mm, 2.0mm, 2.5mm, and 3.0mm, compatible with standard rebar couplers and mechanical splices used across India."
    },
    {
      question: "What is the maximum thread length?",
      answer: "The maximum rolling length is 100mm, sufficient for standard coupler connections and mechanical splicing requirements as per IS 16172 guidelines for rebar mechanical splicing."
    },
    {
      question: "Is this machine suitable for construction site use?",
      answer: "Yes, at 380kg the machine is transportable and can be set up on construction sites for on-site threading. It requires a 3-phase 415V power supply which is standard on most construction sites."
    },
    {
      question: "What is the production speed?",
      answer: "With a main shaft speed of 40-62 r/m, the machine can thread a bar end in approximately 30-60 seconds depending on bar diameter and thread length, enabling efficient high-volume production."
    },
    {
      question: "What warranty and support is offered?",
      answer: "Every Threading Machine comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts and threading dies are readily available from our Bengaluru warehouse with 24-48 hour delivery."
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

