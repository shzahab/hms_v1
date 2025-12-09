export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Bought this for our government highway project - needed Made in India equipment. But honestly, even if that wasn't required, this machine is exceptional. Running 3 years, zero major issues.",
      name: "Prasad Constructions",
      role: "Highway Contractor, Bengaluru",
      project: "NHAI Project"
    },
    {
      quote: "My father bought our first HMS machine in 2008. Still running! When we expanded, there was no question - bought another HMS. That's 16 years of proof.",
      name: "Vinay Kumar",
      role: "Second-Gen Fabrication Owner, Hubli",
      project: "Family Business"
    },
    {
      quote: "We compared 5 brands before buying. HMS was most expensive but the build quality was obviously different - thicker steel, better finishing. You can see where the money goes.",
      name: "Anand Engineering Works",
      role: "Engineering Contractor, Chennai",
      project: "Industrial Projects"
    },
    {
      quote: "Needed Indian origin certificate for Smart City tender. HMS provided all documentation. Machine quality exceeded expectations - this is genuinely premium, not just expensive.",
      name: "Rajesh Infrastructure",
      role: "Smart City Contractor, Pune",
      project: "Government Project"
    },
    {
      quote: "Running 10-hour shifts daily at our yard. After 5 years, still cutting like new. Changed blades, did regular maintenance - that's it. Try getting that from a budget machine.",
      name: "Steel Solutions",
      role: "Large Fabrication Yard, Hyderabad",
      project: "Commercial Fabrication"
    },
    {
      quote: "Expensive? Yes. But calculate cost per year over 15-20 years - it's actually cheaper than replacing budget machines every 5 years. Plus zero downtime stress.",
      name: "Mahesh Builders",
      role: "Construction Company, Mysuru",
      project: "Multi-Project Operations"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-orange-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">🇮🇳 Join the Premium Indian Quality Movement</h3>
            <p className="text-gray-600">Built to last 15-20 years - a true long-term investment</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20HMS%20Made%20in%20India%20Bar%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Order Now - ₹1,55,000
          </a>
        </div>
      </div>
    </div>
  );
}

