export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We use these vibrators on all our high-rise projects in Bengaluru. The 50Hz frequency gives excellent consolidation, and the flexible shaft reaches into tight column reinforcement. No more honeycombing issues.",
      name: "Kiran Kumar",
      role: "Structural Engineer, Bengaluru"
    },
    {
      quote: "Affordable and reliable. We've purchased 5 units for our construction sites across Tamil Nadu. The single-phase motor works with our site power, and Hutaib's support team is always helpful.",
      name: "Balaji Shankar",
      role: "Building Contractor, Chennai"
    },
    {
      quote: "The different needle head sizes are great. We use 25mm for columns and 40mm for slabs. Concrete quality has improved significantly since we started using these vibrators. Good value at ₹10,500.",
      name: "Ahmed Khan",
      role: "Site Supervisor, Hyderabad"
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

