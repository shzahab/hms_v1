export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Worth every rupee. Using this mixer daily for 2 years now - motor still runs strong, frame has no rust, drum is in good condition. Budget mixers would have needed replacement by now.",
      name: "Krishnamurthy S.",
      role: "Building Contractor, Bengaluru",
      project: "Commercial & Residential"
    },
    {
      quote: "The 2HP motor makes a real difference. Mixes faster and handles thicker concrete better than my old 1.5HP mixer. Indian motor is reliable - no voltage problems.",
      name: "Rajesh Patil",
      role: "Civil Contractor, Hubli",
      project: "G+3 Buildings"
    },
    {
      quote: "I rent out construction equipment. This mixer has survived 15+ different users over 18 months with minimal issues. That's the difference premium build makes.",
      name: "Sunil Kumar",
      role: "Equipment Rental, Mysuru",
      project: "Rental Business"
    },
    {
      quote: "Compared to Chinese imports, Indian motor mixers are just better for our conditions. Parts available, voltage compatible, mechanics know how to repair.",
      name: "Mohammed Saleem",
      role: "Contractor, Chennai",
      project: "Multiple Projects"
    },
    {
      quote: "Third generation in construction business. We always buy quality equipment. This mixer is exactly what professional contractors need - reliable and built to last.",
      name: "Venkat Reddy",
      role: "Senior Contractor, Hyderabad",
      project: "Commercial Construction"
    },
    {
      quote: "Initially hesitated at ₹58,000 price. Now after 1.5 years of trouble-free operation while my neighbor's cheap mixer broke twice, I understand the value.",
      name: "Praveen Kumar",
      role: "Builder, Coimbatore",
      project: "Residential Complex"
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
            <h3 className="text-xl font-bold text-gray-800">Invest in Quality, Save in Long Run</h3>
            <p className="text-gray-600">Premium 2HP Indian Motor mixer for professional contractors</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20250L%202HP%20Indian%20Motor%20Concrete%20Mixer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹58,000
          </a>
        </div>
      </div>
    </div>
  );
}

