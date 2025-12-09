export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Proud to support Indian manufacturing. This machine proves we don't need imports for premium quality. Running perfectly for 4 years.", name: "Mohan Rao", role: "Contractor, Karnataka", highlight: "4 years strong" },
    { quote: "My father bought HMS machines 18 years ago - still working! Now I'm buying the same for our expanding business. Quality speaks.", name: "Rajiv Sharma Jr.", role: "Second Generation Contractor, Delhi", highlight: "18-year track record" },
    { quote: "For government projects, Made in India is preferred. This machine delivers premium quality AND supports local manufacturing.", name: "Vinod Patil", role: "PSU Contractor, Maharashtra", highlight: "Government preferred" },
    { quote: "The extra cost is visible in build quality. Thicker steel, smoother operation, and HMS factory support means quick spare parts.", name: "Abdul Rashid", role: "Fabrication Owner, Tamil Nadu", highlight: "Premium build" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mb-3">{t.highlight}</span>
          <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}

