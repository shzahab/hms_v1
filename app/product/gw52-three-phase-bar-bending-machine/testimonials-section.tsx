export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Essential for our bridge construction work. 42mm capacity is non-negotiable for heavy pier reinforcement. GW52 handles it all day.", name: "K. Venkatesh", role: "Bridge Contractor, Andhra Pradesh", highlight: "Bridge construction" },
    { quote: "Working on metro elevated corridor. GW52 bends 40mm bars for viaduct columns perfectly. Heavy machine but does the job.", name: "Amit Joshi", role: "Metro Rail Contractor, Bengaluru", highlight: "Metro projects" },
    { quote: "For dam spillway work, we needed 42mm capacity. GW52 was the clear choice. Powerful motor handles the heaviest bars.", name: "Sanjay Reddy", role: "Irrigation Contractor, Telangana", highlight: "Dam construction" },
    { quote: "Industrial plant foundation work requires thick bars. GW52 is the only machine we trust for 36-42mm bending.", name: "Pradeep Singh", role: "Industrial Contractor, Gujarat", highlight: "Industrial foundations" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mb-3">{t.highlight}</span>
          <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}

