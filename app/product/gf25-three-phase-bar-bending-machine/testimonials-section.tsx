export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The GF25 three phase is our main production machine. We process stirrups and main bars for 5-6 contractor clients. It runs 8+ hours daily and has never let us down. Excellent ROI.",
      name: "Manjunath Swamy",
      role: "Fabrication Unit Owner, Bengaluru",
      highlight: "8+ hours daily operation"
    },
    {
      quote: "After comparing all options, GF25 3-Phase was the clear choice. 20mm capacity with industrial power at ₹38,000 is unbeatable value. Our apartment projects run smoothly now.",
      name: "Prakash Reddy",
      role: "Apartment Builder, Hyderabad",
      highlight: "Best value for apartments"
    },
    {
      quote: "Upgraded from GF20 three phase to GF25 when we started G+4 projects. The 20mm capacity was exactly what we needed. Same reliable HMS quality we trusted.",
      name: "Suresh Babu",
      role: "Construction Company, Chennai",
      highlight: "Upgraded from GF20"
    },
    {
      quote: "Running three construction sites simultaneously. One GF25 3-Phase at our central fabrication area serves all three. Production capacity is more than sufficient.",
      name: "Vivek Sharma",
      role: "Multi-Project Contractor, Kochi",
      highlight: "Serves 3 sites"
    },
    {
      quote: "Professional machine at a reasonable price. The 3kW motor handles continuous bending without issues. We've processed thousands of bends over 18 months with zero problems.",
      name: "Nagendra Rao",
      role: "Infrastructure Contractor, Vijayawada",
      highlight: "18 months, zero problems"
    },
    {
      quote: "Best investment for our growing business. Started with residential, now doing commercial projects. The GF25 handles everything we throw at it. Highly recommend.",
      name: "Ibrahim Khan",
      role: "Building Contractor, Belgaum",
      highlight: "Grows with business"
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
            <div className="mb-3">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {testimonial.highlight}
              </span>
            </div>
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">The Professional&apos;s Choice</h3>
            <p className="text-gray-600">Join serious contractors who chose GF25 Three Phase</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GF25%20Three%20Phase%20Bar%20Bending%20Machine%20at%20Rs.38%2C000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹38,000
          </a>
        </div>
      </div>
    </div>
  );
}

