export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This hoist has been running on our 18-floor project in Bengaluru for 8 months now. 350kg capacity is perfect for our needs, and the single-phase motor works with our site power. Reliable and safe.",
      name: "Prakash Naidu",
      role: "Building Contractor, Bengaluru"
    },
    {
      quote: "We bought 3 of these hoists for our apartment projects in Chennai. The emergency brake gives us confidence, and the 60m rope covers all our requirements. Hutaib delivered and installed quickly.",
      name: "Murugan Pillai",
      role: "Real Estate Developer, Chennai"
    },
    {
      quote: "The clutch mechanism for controlled descent is excellent for lowering empty buckets safely. Been using this hoist for 2 years across multiple sites in Hyderabad. Great value for money.",
      name: "Ravi Teja",
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

