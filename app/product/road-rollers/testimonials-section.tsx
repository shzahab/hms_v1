export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We use this roller on our road construction projects across Karnataka. The 15kN force achieves proper compaction, and the dual fuel option is convenient when diesel isn't available. Solid machine from Hutaib.",
      name: "Nagesh Kumar",
      role: "Road Contractor, Bengaluru"
    },
    {
      quote: "The vibratory function makes a huge difference in compaction quality. We've used it for parking lot construction and highway sub-base work in Tamil Nadu. Fuel efficient and reliable performance.",
      name: "Murugavel S",
      role: "Infrastructure Developer, Chennai"
    },
    {
      quote: "Bought this for our municipal road repair contracts in Hyderabad. Variable speed control is perfect for patch work in busy areas. Hutaib's service team responds quickly when we need support.",
      name: "Raju Reddy",
      role: "PWD Contractor, Hyderabad"
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

