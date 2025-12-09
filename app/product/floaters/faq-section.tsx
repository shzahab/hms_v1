export default function FAQSection() {
  const faqs = [
    {
      question: "What is the power output of this floater?",
      answer: "The machine delivers 7.0kW (9HP) for effective concrete finishing on medium-sized floors, providing ample power for residential and commercial projects."
    },
    {
      question: "What speed range does it operate at?",
      answer: "Operating speed ranges from 70-125 RPM, adjustable for different finishing stages. Lower speeds for initial floating and higher speeds for final finishing and polishing."
    },
    {
      question: "Is it suitable for residential projects?",
      answer: "Yes, the walk-behind design is perfect for medium-sized residential projects like driveways, patios, garage floors, and home foundations, as well as smaller commercial spaces."
    },
    {
      question: "How does this compare to ride-on trowels?",
      answer: "Walk-behind trowels are ideal for smaller to medium areas (up to 2,000-5,000 sqft), edges, and detail work. Ride-on trowels are better for large warehouse floors over 10,000 sqft."
    },
    {
      question: "What blade size does it use?",
      answer: "The floater uses 48-inch (1220mm) blades, providing good coverage while remaining maneuverable in confined areas and around obstacles."
    },
    {
      question: "What warranty and support is offered?",
      answer: "Every Walk Behind Power Trowel comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts and blades are readily available from our Bengaluru warehouse with 24-48 hour delivery across South India."
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

