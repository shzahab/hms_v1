export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Best investment for my auto garage. Running impact wrench and spray gun all day. The belt drive motor runs much cooler than my old direct drive. Very happy.",
      name: "Ganesh Motors",
      role: "Auto Garage Owner, Bengaluru",
      project: "Auto Workshop"
    },
    {
      quote: "Switched from a cheap brand to VERX 50L. The difference in build quality is obvious. Handles continuous spray painting for our furniture production.",
      name: "Royal Wood Crafts",
      role: "Furniture Manufacturer, Chennai",
      project: "Furniture Production"
    },
    {
      quote: "Servicing trucks and buses at our workshop. The 50L handles heavy impact wrenches without losing pressure. Reliable and worth the money.",
      name: "Lakshmi Transport Services",
      role: "Fleet Workshop, Hyderabad",
      project: "Commercial Vehicle Service"
    },
    {
      quote: "Using it for panel beating and spray painting in my body shop. Good air flow for continuous work. HMS delivered quickly and helped with setup.",
      name: "Perfect Dent Works",
      role: "Auto Body Shop, Coimbatore",
      project: "Dent & Paint"
    },
    {
      quote: "Our fabrication shop runs 8 hours daily with grinders and sanders. The VERX 50L keeps up without issues. Good quality for the price.",
      name: "Steel Masters",
      role: "Fabrication Unit, Kochi",
      project: "Metal Fabrication"
    },
    {
      quote: "Upgraded from 24L to 50L when our tyre shop got busy. Now we can serve 40-50 vehicles daily. The larger tank makes a big difference.",
      name: "Quick Tyre Zone",
      role: "Tyre Shop Owner, Vijayawada",
      project: "Tyre Services"
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
            <h3 className="text-xl font-bold text-gray-800">Most Popular for Auto Garages</h3>
            <p className="text-gray-600">Professional performance at workshop-friendly pricing</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VERX%2050L%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹13,500
          </a>
        </div>
      </div>
    </div>
  );
}

