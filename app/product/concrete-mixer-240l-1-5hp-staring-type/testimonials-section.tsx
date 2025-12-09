export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Best investment for my small contracting work. The 240L size is perfect - I don't waste concrete like with bigger mixers. Running it for 6 months now with no problems.",
      name: "Venkatesh R.",
      role: "Building Contractor, Bengaluru",
      project: "Residential Houses"
    },
    {
      quote: "We use this for compound wall contracts. Half-bag capacity is exactly what we need. Motor starts smoothly even on weak power supply in outskirts areas.",
      name: "Suresh Kumar",
      role: "Civil Contractor, Hosur",
      project: "Compound Walls"
    },
    {
      quote: "Bought for my own house construction. Saved so much compared to paying for manual mixing. Concrete quality is also much better - can see the difference in finish.",
      name: "Raghavendra M.",
      role: "Self-Builder, Tumkur",
      project: "Residential Construction"
    },
    {
      quote: "Perfect size for repair and renovation jobs. Easy to move around site, doesn't need too much power. My workers prefer this over manual mixing any day.",
      name: "Mohammed Asif",
      role: "Renovation Contractor, Mysuru",
      project: "Renovation Work"
    },
    {
      quote: "Good machine at good price. The staring type motor is nice - doesn't trip our MCB when starting. Using for farm shed construction in village area.",
      name: "Prakash Gowda",
      role: "Farmer & Builder, Mandya",
      project: "Agricultural Construction"
    },
    {
      quote: "Third mixer I've bought from HMS. This 240L is for small jobs while I use bigger one for larger projects. Service from HMS is always reliable.",
      name: "Shankar Hegde",
      role: "Contractor, Hubli",
      project: "Multiple Projects"
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
            <h3 className="text-xl font-bold text-gray-800">Join 500+ Satisfied Customers</h3>
            <p className="text-gray-600">Start producing quality concrete at your site today</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20240L%20Concrete%20Mixer%20(Staring%20Type)" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹23,000
          </a>
        </div>
      </div>
    </div>
  );
}

