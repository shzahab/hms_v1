export default function FAQSection() {
  const faqs = [
    {
      question: "What TMT bar grades can this machine bend?",
      answer: "Our bar bending machine handles all standard Indian TMT grades including Fe415, Fe500, Fe500D, and Fe550D, with consistent performance across varying steel hardness levels. The machine can bend bars from 8mm to 42mm diameter."
    },
    {
      question: "What is the power requirement for installation?",
      answer: "The machine requires a 3-phase, 415V, 50Hz power supply with a minimum 10kVA connected load. Our installation team assesses your site's electrical infrastructure before delivery across South India."
    },
    {
      question: "Do you provide operator training?",
      answer: "Yes, every purchase includes free on-site training for 2-3 operators covering machine operation, basic maintenance, and safety procedures. Training is available across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana."
    },
    {
      question: "What is the delivery time to Chennai/Hyderabad/Bengaluru?",
      answer: "Standard delivery to major South Indian cities takes 5-7 working days from our Bengaluru warehouse. Express delivery is available for urgent requirements with additional charges."
    },
    {
      question: "What warranty and support is included?",
      answer: "Every machine includes a 1-year comprehensive warranty covering parts and labor, lifetime technical support via phone and WhatsApp, and free installation. Our service technicians cover all South Indian states with 24-48 hour response times."
    },
    {
      question: "Can this machine handle both manual and automatic operation?",
      answer: "Yes, our bar bending machines feature dual operation modes - fully automatic for high-volume production and manual mode for custom bending requirements, making them suitable for projects of all scales."
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