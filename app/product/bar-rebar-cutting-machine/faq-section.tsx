
export default function FAQSection() {
  const faqs = [
    {
      question: "What is the maximum cutting capacity of this machine?",
      answer: "Our machine can cut steel bars up to 60mm in diameter, making it suitable for various construction and fabrication needs."
    },
    {
      question: "How fast does the machine cut steel bars?",
      answer: "The machine operates at high speed with a cutting rate of 32 cuts per minute, significantly improving productivity."
    },
    {
      question: "Is the machine safe to operate?",
      answer: "Yes, it comes with comprehensive safety guards and emergency stop mechanisms to ensure operator protection at all times."
    },
    {
      question: "How easy is blade replacement?",
      answer: "The machine features a quick-change blade system that allows for easy replacement with minimal downtime, keeping operations efficient."
    },
    {
      question: "Can this machine be used on construction sites?",
      answer: "Absolutely. The portable design makes it ideal for on-site use, providing flexibility for various project locations."
    },
    {
      question: "What types of steel can this machine cut?",
      answer: "The machine can cut various types of steel including TMT bars, rebars, and round steel bars of different grades."
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
