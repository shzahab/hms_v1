export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This machine pays for itself within months. We recover bent bars from our construction sites instead of selling as scrap. The 30m/min speed handles large volumes easily. Great investment for our Bengaluru projects.",
      name: "Sunil Rao",
      role: "Construction Company Owner, Bengaluru"
    },
    {
      quote: "We run a steel recycling yard in Chennai. This straightener processes collected scrap efficiently, and we resell straightened bars at much better prices. The 9.5kW motor handles heavily bent bars without issues.",
      name: "Venkatesan M",
      role: "Scrap Dealer, Chennai"
    },
    {
      quote: "Our fabrication workshop generates significant waste from cutting operations. This machine recovers that waste for reuse, reducing our material costs by 15%. Hutaib's service support has been excellent.",
      name: "Imran Pasha",
      role: "Fabrication Workshop Owner, Hyderabad"
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

