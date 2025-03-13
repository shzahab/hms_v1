export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The best bar bending machine we've used—accurate, easy to operate, and highly efficient. It has significantly improved our project timelines.",
      name: "Rajesh Sharma",
      role: "Civil Contractor"
    },
    {
      quote: "Durable and cost-effective. We've cut labour costs while increasing precision.",
      name: "Amit Patel",
      role: "Site Engineer"
    },
    {
      quote: "The digital control panel is a game-changer. Precise bends with minimal errors.",
      name: "Suresh Mehta",
      role: "Project Manager"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
        >
          <p className="text-gray-600 italic mb-4 text-sm sm:text-base">{testimonial.quote}</p>
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
        </div>
      ))}
    </div>
  );
} 