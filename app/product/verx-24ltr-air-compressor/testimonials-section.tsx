export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Upgraded from a 12L compressor and the difference is night and day. Can spray paint a full chair set without stopping. Worth every rupee of the extra cost.",
      name: "Anand Furniture Works",
      role: "Furniture Manufacturer, Bengaluru",
      project: "Furniture Workshop"
    },
    {
      quote: "Running a busy puncture shop near the bus stand. The 24L handles 25-30 vehicles daily without issues. Good recovery time between inflations.",
      name: "Suresh Kumar",
      role: "Puncture Shop Owner, Chennai",
      project: "Tyre Services"
    },
    {
      quote: "Perfect for my small fabrication unit. Using pneumatic grinder and spray gun regularly. Runs for hours without overheating. Very satisfied.",
      name: "Ravi Metal Works",
      role: "Fabrication Shop, Hyderabad",
      project: "Metal Fabrication"
    },
    {
      quote: "Bought for AC servicing business. Great for cleaning outdoor units and filter work. Portable enough to take to client sites. Reliable performance.",
      name: "Cool Zone Services",
      role: "AC Technician, Coimbatore",
      project: "AC Servicing"
    },
    {
      quote: "My carpenter workshop depends on this for nail guns and finishing sprays. The 24L gives good run time. Better than cheap Chinese options I tried before.",
      name: "Vijay Carpentry",
      role: "Carpenter, Mangalore",
      project: "Woodworking"
    },
    {
      quote: "Good balance of price and performance. Using it for two-wheeler painting and it handles the work well. HMS support team was helpful during setup.",
      name: "Two Wheeler Zone",
      role: "Bike Service Center, Mysuru",
      project: "Vehicle Painting"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-blue-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Best Value Mid-Range Compressor</h3>
            <p className="text-gray-600">Double the capacity at just ₹3,500 more than 12L</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VERX%2024L%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹9,500
          </a>
        </div>
      </div>
    </div>
  );
}

