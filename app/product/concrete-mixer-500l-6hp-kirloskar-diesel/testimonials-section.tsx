export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Running this mixer on road construction projects for 3 years. Kirloskar engine never fails - reliable start every morning, consistent performance all day. Worth every rupee.",
      name: "Karnataka State Contractor",
      role: "Road Construction, Bengaluru",
      project: "Infrastructure Projects"
    },
    {
      quote: "We do commercial buildings - shopping complexes, office towers. Full bag capacity is essential. This mixer keeps up with our demanding schedules. Kirloskar engine is the best choice.",
      name: "Prestige Constructions",
      role: "Commercial Builder, Chennai",
      project: "Shopping Complexes"
    },
    {
      quote: "Working at remote site where electricity is unreliable. Diesel mixer was the only option. Kirloskar engine gives us independence - fuel it and forget about power problems.",
      name: "Raghavendra Projects",
      role: "Infrastructure Contractor, Hyderabad",
      project: "Bridge Construction"
    },
    {
      quote: "Renting out this mixer generates good income. Customers specifically ask for Kirloskar engine - the brand trust is real. Higher rental rate than Chinese engine mixers.",
      name: "Suresh Equipment Rentals",
      role: "Rental Business, Coimbatore",
      project: "Equipment Rental"
    },
    {
      quote: "Large apartment complex project - 200+ units. The 500L capacity made a real difference. Completed concrete work faster than estimated. Good investment.",
      name: "Sobha Developers",
      role: "Real Estate Builder, Bengaluru",
      project: "Apartment Complex"
    },
    {
      quote: "Government project requirements specify branded engines. Kirloskar acceptance everywhere made procurement smooth. Reliable performance throughout the project.",
      name: "PWD Contractor",
      role: "Government Projects, Mysuru",
      project: "Public Works"
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
            <h3 className="text-xl font-bold text-gray-800">Professional Grade Equipment</h3>
            <p className="text-gray-600">500L Full Bag | 6HP Kirloskar Diesel | Industry Standard</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20500L%20Kirloskar%20Diesel%20Concrete%20Mixer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Order Now - ₹1,30,000
          </a>
        </div>
      </div>
    </div>
  );
}

