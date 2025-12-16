export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The flagship VERX compressor is worth every rupee. Running our entire factory floor with 5 pneumatic stations. Two-stage compression delivers excellent pressure consistency.",
      name: "Apex Manufacturing",
      role: "Factory Owner, Bengaluru",
      project: "Production Factory"
    },
    {
      quote: "Our sandblasting business handles large structural components. The 200L provides sustained air flow that smaller compressors simply cannot match. Essential for heavy blasting.",
      name: "BlastPro Services",
      role: "Sandblasting Contractor, Chennai",
      project: "Industrial Sandblasting"
    },
    {
      quote: "Five-bay truck workshop running simultaneously. Heavy impact wrenches on every bay without any pressure issues. The 5 HP motor handles our demanding work easily.",
      name: "Highway Transport Services",
      role: "Fleet Maintenance Center, Hyderabad",
      project: "Heavy Vehicle Workshop"
    },
    {
      quote: "Central air supply for our paint facility. Continuous spray painting of large equipment components. The 12 bar pressure and high CFM are perfect for our needs.",
      name: "Industrial Coatings Ltd",
      role: "Paint Shop Manager, Pune",
      project: "Industrial Painting"
    },
    {
      quote: "After trying cheaper industrial compressors, we invested in VERX 200L. The quality difference is clear. Running continuously for 3 years now with minimal maintenance.",
      name: "Pioneer Engineering",
      role: "Factory Operations, Coimbatore",
      project: "Manufacturing Facility"
    },
    {
      quote: "HMS provided excellent consultation before purchase. The 200L was exactly what our expanded facility needed. Professional sales team and good after-sales service.",
      name: "Metro Fabricators",
      role: "Fabrication Factory, Kochi",
      project: "Large Scale Fabrication"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-purple-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Maximum Capacity for Maximum Demands</h3>
            <p className="text-gray-600">Flagship industrial compressor for serious operations</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VERX%20200L%20Heavy-Duty%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Order Now - ₹52,000
          </a>
        </div>
      </div>
    </div>
  );
}

