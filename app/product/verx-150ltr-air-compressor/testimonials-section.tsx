export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Running three workstations in our truck workshop. Impact wrenches, spray guns, and grinders all working simultaneously without pressure drop. Excellent industrial compressor.",
      name: "Bharat Heavy Vehicles",
      role: "Truck Workshop Owner, Bengaluru",
      project: "Heavy Vehicle Service"
    },
    {
      quote: "Our CNC shop needed reliable air supply for pneumatic clamps and chip blowing. The 150L delivers consistent pressure throughout the shift. Very satisfied with the purchase.",
      name: "Precision Engineering Works",
      role: "CNC Machine Shop, Chennai",
      project: "CNC Manufacturing"
    },
    {
      quote: "Using for sandblasting work on fabricated structures. The 350 LPM air flow handles our blasting cabinet well. Good investment for our surface preparation business.",
      name: "MetalPro Finishers",
      role: "Surface Treatment, Hyderabad",
      project: "Sandblasting Services"
    },
    {
      quote: "Upgraded from 50L when we expanded our auto body shop. Now running two spray booths without issues. The three-phase option was perfect for our setup.",
      name: "Elite Auto Body",
      role: "Auto Body Shop, Coimbatore",
      project: "Vehicle Painting"
    },
    {
      quote: "Central air supply for our furniture factory. Powers multiple pneumatic stations across the floor. Reliable performance for industrial use.",
      name: "Woodcraft Industries",
      role: "Furniture Factory, Thrissur",
      project: "Furniture Manufacturing"
    },
    {
      quote: "HMS helped us select the right model for our workshop. The 150L handles our daily operations perfectly. Good after-sales support when we needed spare parts.",
      name: "Southern Fabricators",
      role: "Fabrication Factory, Visakhapatnam",
      project: "Industrial Fabrication"
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
            <h3 className="text-xl font-bold text-gray-800">Industrial Grade for Serious Operations</h3>
            <p className="text-gray-600">Multi-station capability at competitive pricing</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VERX%20150L%20Industrial%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Order Now - ₹40,000
          </a>
        </div>
      </div>
    </div>
  );
}

