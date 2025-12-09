export default function FAQSection() {
  const faqs = [
    { question: "What is Gujarat body and why does it matter?", answer: "Gujarat body refers to machine frames manufactured in Gujarat, known for superior build quality: thicker steel (typically 20-30% more), better welding quality, reinforced stress points, and components built for 10+ years of professional daily use. It's noticeably heavier and more rigid than standard bodies." },
    { question: "Why 10HP over 5HP Greaves?", answer: "10HP provides double the cutting power: (1) Handles sustained heavy cutting without strain, (2) Better for reinforced concrete sections, (3) Faster cutting through thick slabs, (4) Designed for professional daily use vs occasional use. Worth the extra ₹40,000 for regular contractors." },
    { question: "What are the running cost savings vs petrol?", answer: "Diesel typically costs ₹15-20 less per liter than petrol. Combined with better fuel efficiency, you save approximately ₹200-300 per day of operation. Over a year of regular use, this adds up to ₹50,000-75,000 in savings." },
    { question: "Is Greaves service readily available?", answer: "Yes, Greaves has the widest diesel engine service network in India - service centers and parts available in virtually every district. This is a major advantage over imported petrol engines for operators in smaller towns and rural areas." },
    { question: "What's the difference from the Starting Type model?", answer: "This model (₹95,000) uses manual hand crank starting. The Starting Type model (₹1,15,000) adds electric start - press a button instead of hand cranking. Extra ₹20,000 for one-button convenience. Both have identical cutting performance." },
    { question: "What warranty is provided?", answer: "6-month warranty on machine body and Gujarat frame components. Greaves engine warranty is handled separately through authorized Greaves service centers. Does not cover diamond blades, consumables, or misuse damage." },
    { question: "What blade and cutting specs?", answer: "Maximum cutting depth: 240mm. Blade capacity: Up to 600mm diameter. Water tank: 35 liters for wet cutting. Depth adjustment via handle rotation with graduated markings." },
    { question: "How does delivery work?", answer: "Dispatch from Bengaluru warehouse. Delivery 3-5 days for South India. Charges based on location. Machine arrives assembled - add diesel, engine oil, and mount blade. Operating guidance provided." }
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200"><h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Questions About Diesel Models?</h3>
        <p className="text-blue-700 mb-4">We can help you choose between our diesel options based on your work requirements.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%2010HP%20Greaves%20Gujarat%20Body%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919886474441" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📞 Call: +91 9886474441</a>
        </div>
      </div>
    </div>
  );
}

