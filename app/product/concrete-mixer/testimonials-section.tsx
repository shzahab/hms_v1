export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The Kirloskar engine is incredibly reliable. We've been using this mixer on our residential projects in Bengaluru for 2 years. 560L capacity is perfect for our site requirements. Quality concrete every batch.",
      name: "Manjunath Reddy",
      role: "Building Contractor, Bengaluru"
    },
    {
      quote: "The tilting drum mechanism makes discharge so easy. We use it for our apartment construction in Chennai. Moves easily around site on the wheels. Hutaib's after-sales service is excellent when we needed parts.",
      name: "Krishnan Iyer",
      role: "Real Estate Developer, Chennai"
    },
    {
      quote: "Bought this mixer for our road construction projects in Telangana. Consistent mixing quality, fuel-efficient Kirloskar engine, and sturdy build. It handles the rough site conditions without issues.",
      name: "Srikanth Rao",
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

