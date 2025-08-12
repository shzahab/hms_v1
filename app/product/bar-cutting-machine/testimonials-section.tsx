
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Exceptional cutting precision and speed. This machine has transformed our steel processing operations and significantly improved our productivity.",
      name: "Vikram Singh",
      role: "Steel Fabrication Manager"
    },
    {
      quote: "Outstanding build quality and reliability. The clean cuts save us time on finishing work.",
      name: "Pradeep Kumar",
      role: "Construction Engineer"
    },
    {
      quote: "The automated features are incredible. We've reduced labor costs while increasing output quality.",
      name: "Manoj Gupta",
      role: "Production Supervisor"
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
