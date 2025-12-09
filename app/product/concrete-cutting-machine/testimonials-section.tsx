export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We've used this concrete cutter for multiple road projects in Bengaluru. The 240mm depth is perfect for expansion joints, and the wet cutting system keeps dust minimal. Excellent machine from Hutaib.",
      name: "Venkatesh Murthy",
      role: "Road Contractor, Bengaluru"
    },
    {
      quote: "The best floor saw we've purchased. Clean cuts every time, and the water tank capacity means we can work longer without refilling. Been using it for 2 years on utility installation projects across Tamil Nadu.",
      name: "Arun Kumar",
      role: "Project Engineer, Chennai"
    },
    {
      quote: "Blade life improved significantly with the wet cutting feature. We do a lot of pavement repair work in Hyderabad, and this machine handles both concrete and asphalt perfectly. Hutaib's service team is always responsive.",
      name: "Syed Rahman",
      role: "Infrastructure Contractor, Hyderabad"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
        >
          <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
        </div>
      ))}
    </div>
  );
}

