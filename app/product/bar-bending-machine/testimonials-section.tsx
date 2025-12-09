export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The best bar bending machine we've used—accurate, easy to operate, and highly efficient. It has significantly improved our project timelines across multiple sites in Bengaluru.",
      name: "Rajesh Kumar",
      role: "Civil Contractor, Bengaluru"
    },
    {
      quote: "Durable and cost-effective. We've cut labour costs by 35% while increasing precision on our Chennai metro infrastructure projects. Hutaib's support has been excellent.",
      name: "Venkatesh Iyer",
      role: "Site Engineer, Chennai"
    },
    {
      quote: "The digital control panel is a game-changer. Precise bends with minimal errors. Been using it for 2 years on high-rise projects in Hyderabad with zero major issues.",
      name: "Prakash Reddy",
      role: "Project Manager, Hyderabad"
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