export default function TestimonialsSection() {
  const testimonials = [
    { quote: "We have 4 GW42 machines across our infrastructure projects. Reliable, accurate, and the digital control makes a real difference on site. Best value in the 32mm category.", name: "Suresh Patel", role: "Infrastructure Contractor, Ahmedabad", highlight: "4 machines in fleet" },
    { quote: "Been using GW42 for highway work for 3 years. Never let us down even in monsoon conditions. Bends 32mm Fe550D smoothly.", name: "Rajesh Sharma", role: "NHAI Sub-contractor, MP", highlight: "3 years reliable service" },
    { quote: "Compared to other 32mm machines we've used, GW42 offers better precision at a lower price. The digital panel is very useful for consistent work.", name: "Mohammed Ismail", role: "Fabrication Yard Owner, Chennai", highlight: "Better precision" },
    { quote: "Perfect for our commercial building projects. 32mm handles all our column requirements. Good service from HMS team.", name: "Deepak Agarwal", role: "Commercial Builder, Pune", highlight: "Perfect for commercial" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">{t.highlight}</span>
          <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}

