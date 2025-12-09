export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Upgraded from the 240L model. The extra capacity really helps when doing column work - fewer trips to refill. Motor runs smooth on our site power.",
      name: "Ramesh K.",
      role: "Building Contractor, Bengaluru",
      project: "G+2 Residential"
    },
    {
      quote: "Good value for ₹26,000. I compared with 240L and decided the extra 40L capacity is worth ₹3,000 more. No regrets after 8 months of use.",
      name: "Vinod Sharma",
      role: "Civil Contractor, Mysuru",
      project: "Multiple Houses"
    },
    {
      quote: "Using this for compound wall contracts. The handy type motor is simple - no complicated starting mechanism. Just switch on and it works.",
      name: "Syed Ibrahim",
      role: "Fencing Contractor, Hassan",
      project: "Compound Walls"
    },
    {
      quote: "Perfect size for our residential projects. Not too big, not too small. Easy to move around site. Drum tilts nicely for discharge.",
      name: "Prakash Naidu",
      role: "Residential Builder, Chennai",
      project: "Individual Houses"
    },
    {
      quote: "Bought this for a G+1 house construction. The capacity is enough for most pours. Will use for future projects also.",
      name: "Manjunath B.",
      role: "Self-Builder, Tumkur",
      project: "Self Construction"
    },
    {
      quote: "Third mixer from HMS. Always reliable. This 280L is good for medium jobs where 240L feels small but 500L is too much.",
      name: "Ravi Kulkarni",
      role: "Contractor, Hubli",
      project: "Various Projects"
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
            <h3 className="text-xl font-bold text-gray-800">Get More Capacity at Great Value</h3>
            <p className="text-gray-600">280L mixer - just ₹3,000 more than 240L model</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20280L%20Concrete%20Mixer%20(Handy%20Type)" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹26,000
          </a>
        </div>
      </div>
    </div>
  );
}

