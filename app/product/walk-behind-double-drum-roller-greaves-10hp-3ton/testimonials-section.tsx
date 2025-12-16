export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Using this Greaves roller for our road contracts in Mysuru district. Very reliable engine - starts easily even in cold mornings. The double drum gives much better finish than our old single drum roller.",
      name: "Rajesh Kumar",
      role: "Road Contractor, Mysuru",
      project: "PWD Road Works"
    },
    {
      quote: "Bought this for our layout development projects. The self-start is a blessing - no more cranking headaches. Greaves service center is just 10km from our site, so spare parts are never an issue.",
      name: "Venkatesh Reddy",
      role: "Real Estate Developer, Hyderabad",
      project: "Residential Layouts"
    },
    {
      quote: "We have 3 of these Greaves rollers now. Fuel consumption is very reasonable compared to other brands we tried. HMS delivered on time and their after-sales support is good.",
      name: "Mohammed Sharief",
      role: "Civil Contractor, Bengaluru",
      project: "Commercial Sites"
    },
    {
      quote: "Perfect for our municipal road maintenance contracts. The 3-ton compaction handles asphalt patches well. Water sprinkler works great - no asphalt sticking problems.",
      name: "Suresh Babu",
      role: "Municipal Contractor, Chennai",
      project: "Road Maintenance"
    },
    {
      quote: "First road roller purchase for my company. HMS team helped me choose the right model. The Greaves engine is exactly what we needed - trusted brand with local service support.",
      name: "Prakash Shetty",
      role: "Infrastructure Company, Mangalore",
      project: "New Road Construction"
    },
    {
      quote: "Running this roller for 14 months now on various sites. Only regular maintenance needed - oil changes and filter cleaning. Very happy with the purchase decision.",
      name: "Anand Murthy",
      role: "Building Contractor, Coimbatore",
      project: "Site Development"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-green-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Join 100+ Road Contractors Using Our Rollers</h3>
            <p className="text-gray-600">Get professional compaction equipment with trusted Greaves power</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20Walk%20Behind%20Double%20Drum%20Roller%20Greaves%2010HP%203Ton" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹1,90,000
          </a>
        </div>
      </div>
    </div>
  );
}

