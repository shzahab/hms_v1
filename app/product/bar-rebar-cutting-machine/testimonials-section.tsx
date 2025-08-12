
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Outstanding cutting machine - fast, precise, and incredibly reliable. It has transformed our steel processing operations and improved our project delivery times.",
      name: "Vikram Singh",
      role: "Steel Fabricator"
    },
    {
      quote: "The safety features are excellent, and the cutting speed is impressive. We've significantly reduced our labor costs while improving quality.",
      name: "Pradeep Kumar",
      role: "Construction Manager"
    },
    {
      quote: "Easy blade replacement and consistent performance make this our go-to cutting machine. Perfect for our high-volume operations.",
      name: "Manoj Agarwal",
      role: "Workshop Owner"
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
