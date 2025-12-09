export default function FAQSection() {
  const faqs = [
    {
      question: "What steel bar diameters can this ring making machine handle?",
      answer: "This machine can bend round steel bars from 16-32mm diameter and HRB400 ribbed steel from 16-28mm diameter, covering all standard stirrup sizes used in Indian construction projects."
    },
    {
      question: "What is the production speed of this stirrup bending machine?",
      answer: "The machine operates at 5-10 rings per minute depending on the material diameter and ring size. This is significantly faster than manual stirrup production, increasing your output by up to 10x."
    },
    {
      question: "What is the minimum ring diameter this machine can produce?",
      answer: "The machine can produce rings with working diameter greater than 300mm. Adjustable diameter settings allow creating various ring sizes for different column and beam requirements in construction projects."
    },
    {
      question: "Can it create both flat rings and 3D spirals?",
      answer: "Yes, this machine is capable of creating both flat rings (stirrups) and 3D spirals for column reinforcement. Quick tooling changes allow switching between different production modes efficiently."
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

