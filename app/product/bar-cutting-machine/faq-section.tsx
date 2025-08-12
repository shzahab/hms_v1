
export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum cutting capacity?",
      answer: "Our machines can cut steel bars up to 50mm in diameter, depending on the model. Different models offer various cutting capacities to suit different requirements."
    },
    {
      question: "How accurate are the cuts?",
      answer: "The machine provides highly accurate cuts with tolerances within ±0.5mm, ensuring precision for all your cutting requirements."
    },
    {
      question: "Can it cut different types of steel?",
      answer: "Yes, our cutting machines can handle various types of steel including mild steel, TMT bars, and reinforcement steel with different grades."
    },
    {
      question: "What is the cutting speed?",
      answer: "Cutting speeds range from 10-18 cuts per minute depending on the bar diameter and model, ensuring high productivity."
    },
    {
      question: "Is the machine suitable for continuous operation?",
      answer: "Yes, the machine is designed for heavy-duty continuous operation with robust construction and efficient cooling systems."
    },
    {
      question: "What safety features are included?",
      answer: "The machine includes emergency stop buttons, safety guards, and automatic shut-off features to ensure operator safety."
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
