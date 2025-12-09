export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Game changer for our business. We move NRB32 between 4 sites weekly. Four workers load it in 10 minutes. No crane costs!", name: "Sunil Yadav", role: "Multi-site Contractor, UP", highlight: "4 sites weekly" },
    { quote: "Remote hill station project had no crane access. NRB32 was the only 32mm machine we could actually get to the site.", name: "Prakash Negi", role: "Hill Station Builder, Uttarakhand", highlight: "No crane needed" },
    { quote: "Running equipment rental business. NRB32's portability means easier deliveries and pickups. Customers love it.", name: "Ganesh Babu", role: "Equipment Rental, Coimbatore", highlight: "Rental business" },
    { quote: "Compact enough for our small site spaces, powerful enough for 32mm bars. Best of both worlds.", name: "Imran Khan", role: "Urban Contractor, Hyderabad", highlight: "Compact & powerful" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">{t.highlight}</span>
          <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}

