export default function FAQSection() {
  const faqs = [
    { question: "What does 'Starting Type' mean?", answer: "Starting Type means electric start - the engine has a battery, starter motor, and charging system. Press a button to start instead of hand cranking. Also called self-start or electric start. Manual hand crank backup is still available if battery is low." },
    { question: "Is the extra ₹20,000 for electric start worth it?", answer: "For daily professional use, yes. Benefits include: (1) Instant starting with button press, (2) No physical effort - start 20+ times/day easily, (3) Reliable cold starting, (4) No kickback injury risk, (5) Any operator can start it easily. The convenience compounds over years of daily use." },
    { question: "What if the battery dies?", answer: "Manual hand crank backup is included. If battery ever runs low (rare with the charging system), you can start manually. Battery typically lasts 2-3 years with normal use. Standard 12V battery available at any auto shop." },
    { question: "Does electric start affect engine reliability?", answer: "No, the Greaves 10HP engine is identical to the manual start version. Electric start is an additional system - it doesn't change the engine itself. Both models have the same cutting performance and engine longevity." },
    { question: "How does the charging system work?", answer: "The engine has a built-in alternator that charges the battery while running. Normal operation keeps the battery charged automatically. No external charging needed under normal use." },
    { question: "What warranty covers the electric start system?", answer: "The electric start components (starter motor, wiring, switches) are covered under the 6-month machine warranty. Battery is a consumable item and not covered. Greaves engine warranty is separate through authorized service centers." },
    { question: "Who specifically benefits most from Starting Type?", answer: "Best for: (1) Daily professional users - frequent start-stop, (2) Older operators - no hand cranking strain, (3) Multi-operator businesses - anyone can start it, (4) Cold climate/early morning work, (5) Safety-conscious operations - no kickback risk." },
    { question: "Can I upgrade manual start to electric start later?", answer: "Technically possible but expensive and complex - requires engine modifications, battery mounting, wiring, etc. Better to buy Starting Type from the beginning if you might want it. The ₹20,000 difference is much less than retrofit cost." }
  ];
  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200"><h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Manual vs Starting Type - Need Help Deciding?</h3>
        <p className="text-blue-700 mb-4">We can help you evaluate if electric start is worth the extra investment for your usage pattern.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20have%20questions%20about%2010HP%20Greaves%20Starting%20Type%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">💬 WhatsApp Us</a>
          <a href="tel:+919886474441" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">📞 Call: +91 9886474441</a>
        </div>
      </div>
    </div>
  );
}

