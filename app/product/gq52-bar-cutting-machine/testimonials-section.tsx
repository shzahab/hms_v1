export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We bought GQ52 for our flyover project in Hyderabad. Cuts 36mm bars cleanly without any strain. Much better than the smaller machines we used before. Worth every rupee.",
      name: "Srinivas Reddy",
      role: "Infrastructure Contractor, Hyderabad",
      project: "Flyover Construction"
    },
    {
      quote: "Running a fabrication yard - GQ52 is our main cutting machine. From 8mm stirrups to 40mm main bars, it handles everything. Customers happy with clean cuts and fast turnaround.",
      name: "Mohan Kumar",
      role: "Fabrication Yard Owner, Chennai",
      project: "Rebar Fabrication"
    },
    {
      quote: "Building G+12 apartment complex. The 32mm column bars cut like butter. Motor never overheats even in Chennai summer. Excellent industrial quality machine.",
      name: "Rajesh Constructions",
      role: "Commercial Builder, Chennai",
      project: "High-Rise Apartments"
    },
    {
      quote: "Upgraded from GQ42 after we started getting bridge work. The extra ₹18K for GQ52 was the best decision - now we can bid on any infrastructure tender.",
      name: "Nagaraj M.",
      role: "Civil Contractor, Bengaluru",
      project: "Bridge Construction"
    },
    {
      quote: "Heavy-duty machine. We run it 8-10 hours daily at our yard. No major issues in 14 months. Blade life is good - changed only twice so far.",
      name: "Abdul Rahman",
      role: "Fabrication Unit, Vijayawada",
      project: "Commercial Fabrication"
    },
    {
      quote: "HMS team recommended GQ52 when I explained my project mix. Good advice - the 42mm capacity has come handy many times. Better to have it and not need it.",
      name: "Venkatesh Gowda",
      role: "Building Contractor, Mysuru",
      project: "Mixed Construction"
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
            <h3 className="text-xl font-bold text-gray-800">Join 400+ Happy GQ52 Owners</h3>
            <p className="text-gray-600">The go-to machine for infrastructure and commercial projects</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GQ52%20Bar%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹93,000
          </a>
        </div>
      </div>
    </div>
  );
}

