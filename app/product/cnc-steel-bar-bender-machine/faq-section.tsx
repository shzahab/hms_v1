export default function FAQSection() {
  const faqs = [
    {
      question: "What steel bar diameters can this CNC bender handle?",
      answer: "The machine can bend round steel bars from 6-42mm and HRB400 ribbed steel from 6-42mm diameter, making it versatile for various rebar sizes commonly used in construction projects across South India."
    },
    {
      question: "What is the bending speed range?",
      answer: "The bending speed is adjustable from 5-10 r/min, allowing operators to optimize for different bar sizes and bend angles while ensuring precision and consistent results."
    },
    {
      question: "Is this machine suitable for high-volume production?",
      answer: "Yes, with its 400mm working disc and adjustable speed, this semi-automatic CNC bender is designed for efficient high-volume rebar bending in commercial buildings, infrastructure projects, and large construction sites."
    },
    {
      question: "What types of bends can this machine create?",
      answer: "The CNC Steel Bar Bender can create various bend types including stirrups, hooks, U-bends, L-bends, and complex multi-angle shapes. The precision angle control ensures consistent results across all bends."
    },
    {
      question: "What power supply is required?",
      answer: "The CNC Steel Bar Bender requires a 3-phase, 415V, 50Hz power supply. Our installation team will assess your site's electrical infrastructure before delivery and can advise on electrical requirements."
    },
    {
      question: "What warranty and support is offered?",
      answer: "Every CNC Steel Bar Bender comes with a 1-year comprehensive warranty covering parts and labor, along with lifetime technical support via phone and WhatsApp. Spare parts are readily available from our Bengaluru warehouse with 24-48 hour delivery across South India."
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

