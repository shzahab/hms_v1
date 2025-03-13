export default function FAQSection() {
  const faqs = [
    {
      question: "What types of bars can this machine bend?",
      answer: "Our machine supports steel bars, rebars, and TMT bars of various diameters, making it versatile for different construction needs."
    },
    {
      question: "Can I use this machine for small-scale projects?",
      answer: "Yes, its dual operation modes (automatic and manual) make it suitable for both large and small projects, offering flexibility in usage."
    },
    {
      question: "Does the digital control panel require training?",
      answer: "No, the user-friendly interface allows quick setup and operation. The intuitive design makes it easy for both new and experienced operators."
    },
    {
      question: "What is the power consumption?",
      answer: "The machine uses an energy-efficient motor designed for optimal performance while minimizing power consumption."
    },
    {
      question: "What is the maximum bending capacity?",
      answer: "The machine can handle bars up to 42mm in diameter, depending on the model."
    },
    {
      question: "Is maintenance difficult?",
      answer: "No, the machine is designed for easy maintenance with readily available spare parts."
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