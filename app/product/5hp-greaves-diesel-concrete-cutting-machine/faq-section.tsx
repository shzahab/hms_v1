export default function FAQSection() {
  const faqs = [
    {
      question: "What is the cutting depth of the 5HP Greaves concrete cutter?",
      answer: "The 5HP Greaves diesel concrete cutting machine offers a maximum cutting depth of 240mm. This is sufficient for most road joints, expansion joints, floor cutting, and residential/light commercial applications. For deeper cuts, you may need to make multiple passes."
    },
    {
      question: "Why choose diesel over petrol for concrete cutting?",
      answer: "Diesel engines offer several advantages: (1) Better fuel economy - diesel costs ₹15-20 less per liter than petrol, (2) Higher torque at low RPM provides consistent cutting power, (3) Diesel is available everywhere in India, (4) Lower running costs over the machine's lifetime, (5) Greaves diesel engines are known for reliability and easy maintenance."
    },
    {
      question: "Is the 5HP power sufficient for road cutting work?",
      answer: "Yes, 5HP is adequate for small to medium road projects including expansion joints in residential roads, colony streets, parking lots, and driveways. For large highway projects or continuous heavy-duty cutting, consider our 10HP Greaves or 13HP models which provide more sustained power."
    },
    {
      question: "What blades can I use with this machine?",
      answer: "This machine accepts diamond blades up to 500mm diameter. You can use blades for concrete, reinforced concrete, asphalt, and green concrete depending on your cutting application. We supply quality diamond blades separately - contact us for blade recommendations based on your specific needs."
    },
    {
      question: "How does the wet cutting system work?",
      answer: "The machine has a 35-liter water tank that supplies water to the blade during cutting. This wet cutting: (1) Reduces dust by up to 90%, (2) Extends blade life by 30-40%, (3) Provides cleaner cuts with less chipping, (4) Keeps the blade cool for consistent performance. Simply fill the tank before starting work."
    },
    {
      question: "What maintenance does the Greaves engine require?",
      answer: "The Greaves 5HP diesel engine requires standard diesel engine maintenance: (1) Daily - check oil level and fuel, (2) Every 50 hours - change engine oil, (3) Every 100 hours - clean air filter, (4) Every 200 hours - check/replace fuel filter. Greaves service centers are available across India for any major servicing."
    },
    {
      question: "What is included with the ₹55,000 purchase?",
      answer: "Your purchase includes: the complete concrete cutting machine with Greaves 5HP diesel engine, 35L water tank for wet cutting, handle assembly, depth adjustment mechanism, and user manual. Diamond blade is NOT included and purchased separately based on your cutting requirements. 6-month warranty on manufacturing defects. Delivery charges as per actuals."
    },
    {
      question: "What warranty is provided?",
      answer: "The machine comes with a 6-month warranty covering manufacturing defects on the machine body, frame, and mechanical components. The Greaves engine has separate warranty support through Greaves authorized service centers. Warranty does not cover diamond blades, consumables, wear parts, or damage from improper use."
    },
    {
      question: "How does this compare to the 10HP Greaves model?",
      answer: "5HP Greaves (₹55,000): Entry-level, best fuel economy, ideal for small projects and intermittent use. 10HP Greaves (₹95,000): More power, handles deeper cuts and reinforced concrete better, suitable for regular professional use. Choose 5HP if budget is primary concern or for light-duty work; choose 10HP for regular road contractor work."
    },
    {
      question: "What is the delivery time and process?",
      answer: "Delivery typically takes 3-5 days for South Indian locations (Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana). We dispatch from our Bengaluru warehouse via transport. Delivery charges are calculated based on your location and will be communicated before order confirmation."
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
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Have More Questions?</h3>
        <p className="text-blue-700 mb-4">
          Our team is ready to help you choose the right concrete cutting machine for your needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20the%205HP%20Greaves%20Diesel%20Concrete%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp Us
          </a>
          <a 
            href="tel:+919886474441"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📞 Call: +91 9886474441
          </a>
        </div>
      </div>
    </div>
  );
}

