export default function FAQSection() {
  const faqs = [
    { question: "Why is Honda GX390 considered the best engine?", answer: "Honda GX390 is the global standard for small engine reliability. Features include: easy one-pull starting, exceptional fuel efficiency, low noise/vibration, thousands of hours of service life, and the widest service network in the world. It's the preferred choice for commercial equipment manufacturers globally." },
    { question: "What is the fuel consumption of Honda GX390?", answer: "The Honda GX390 consumes approximately 2-2.5 liters of petrol per hour under normal cutting load. The 6.1L fuel tank provides 2-3 hours of continuous operation before refueling." },
    { question: "Is Honda service available across India?", answer: "Yes, Honda has one of the most extensive service networks in India. Authorized dealers and service centers are available in all major cities and many smaller towns. Genuine Honda parts are readily available nationwide." },
    { question: "Honda vs Husqvarna - which should I choose?", answer: "Honda GX390 (₹75,000): Best for brand reputation, resale value, and widest service network. Husqvarna (₹65,000): Best value - same 13HP power for ₹10,000 less. Both are excellent; Honda is premium, Husqvarna is smart money." },
    { question: "What warranty is provided?", answer: "The machine body comes with 6-month warranty covering manufacturing defects. The Honda GX390 engine carries separate Honda warranty through authorized Honda service centers. Keep purchase documents for warranty claims." },
    { question: "What cutting depth can I achieve?", answer: "Maximum cutting depth is 240mm. The machine accepts blades up to 600mm diameter. For depths greater than 240mm, you'll need to make cuts from both sides or use larger equipment." },
    { question: "Is the Honda model suitable for diesel users?", answer: "This is a petrol (gasoline) engine machine. If you prefer diesel for lower running costs, consider our Greaves 10HP diesel (₹95,000) or VST Shakti 13HP diesel (₹1,30,000) models instead." },
    { question: "How does delivery and installation work?", answer: "Delivery takes 3-5 days for South Indian locations. Delivery charges are based on your location. The machine arrives assembled - you just need to add fuel, oil, and mount your blade. Operating instructions included." }
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200"><h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Have More Questions?</h3>
        <p className="text-blue-700 mb-4">Our team can help you decide if Honda GX390 is right for your needs.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%20Honda%20GX390%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919886474441" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📞 Call: +91 9886474441</a>
        </div>
      </div>
    </div>
  );
}

