export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This ring making machine has transformed our stirrup production. We now produce 10x more stirrups than before with consistent quality. Essential for our high-rise projects in Bengaluru.",
      name: "Ramesh Gowda",
      role: "Rebar Fabricator, Bengaluru"
    },
    {
      quote: "The ability to switch between flat stirrups and spirals is excellent. We supply precast factories across Tamil Nadu, and this machine meets all our production demands. Hutaib's support is always reliable.",
      name: "Senthil Kumar",
      role: "Steel Fabrication Owner, Chennai"
    },
    {
      quote: "Been using this machine for 3 years on bridge projects in Telangana. The 32mm capacity handles all our heavy-gauge requirements. Production speed and quality are exactly what we needed.",
      name: "Rajesh Sharma",
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

