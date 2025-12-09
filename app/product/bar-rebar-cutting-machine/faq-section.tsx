export default function FAQSection() {
  const faqs = [
    {
      question: "What TMT bar grades can this machine cut?",
      answer: "Our bar cutting machine handles all standard Indian TMT grades including Fe415, Fe500, Fe500D, and Fe550D, with clean cuts across varying steel hardness levels. The machine can cut bars from 8mm to 42mm diameter."
    },
    {
      question: "What is the power requirement for installation?",
      answer: "The machine requires a 3-phase, 415V, 50Hz power supply with a minimum 5kVA connected load. Our installation team assesses your site's electrical infrastructure before delivery across South India."
    },
    {
      question: "Do you provide operator training?",
      answer: "Yes, every purchase includes free on-site training for 2-3 operators covering machine operation, blade replacement, and safety procedures. Training is available across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana."
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
      question: "How often should cutting blades be replaced?",
      answer: "Blade life depends on usage volume and steel hardness. Typically, blades last 3-6 months with regular use. Our quick-change blade system allows replacement in under 10 minutes, and spare blades are available with same-day dispatch from Bengaluru."
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
