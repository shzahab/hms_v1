export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Game changer for my business. I was struggling with manual bending for 20mm bars because I don't have 3-phase at my sites. The GF25 single phase solved this completely. Now I can take on G+2 projects confidently.",
      name: "Ramesh Kumar",
      role: "Building Contractor, Bengaluru",
      highlight: "20mm on single phase"
    },
    {
      quote: "Upgraded from GF20 to GF25 when I started getting G+2 and G+3 projects. The extra ₹2,000 was totally worth it. 20mm capacity means I don't have to outsource main bar bending anymore.",
      name: "Prakash Shetty",
      role: "Civil Contractor, Mangalore",
      highlight: "Upgraded from GF20"
    },
    {
      quote: "Most 20mm bar benders need 3-phase power which I don't have at my village construction sites. This machine is a blessing - same power requirement as my GF20 but handles bigger bars.",
      name: "Shivanna H.",
      role: "Rural Contractor, Hassan",
      highlight: "Works in rural areas"
    },
    {
      quote: "Was surprised this can actually bend 20mm TMT on single phase. Tested it thoroughly before buying - it handles Fe500D 20mm bars smoothly. Very impressed with the engineering.",
      name: "Deepak Jain",
      role: "Structural Engineer, Chennai",
      highlight: "Handles Fe500D 20mm"
    },
    {
      quote: "Perfect for my small apartment projects. The 20mm capacity covers all my column requirements, and I can use it at any site since single phase is available everywhere. Best purchase decision.",
      name: "Abdul Rashid",
      role: "Apartment Builder, Coimbatore",
      highlight: "Perfect for apartments"
    },
    {
      quote: "Recommended by another contractor who uses the same machine. After 6 months of heavy use on G+2 projects, no complaints. Motor is strong and bends are consistent.",
      name: "Nagaraj M.",
      role: "Building Contractor, Hubli",
      highlight: "6 months heavy use"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-yellow-500 hover:shadow-md transition-shadow"
          >
            <div className="mb-3">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
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
      
      <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg border border-yellow-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Get 20mm Capacity Without 3-Phase</h3>
            <p className="text-gray-600">Join contractors who&apos;ve upgraded their capabilities</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GF25%20Single%20Phase%20Bar%20Bending%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold hover:bg-yellow-700 transition-colors"
          >
            Order Now - ₹35,000
          </a>
        </div>
      </div>
    </div>
  );
}

