export default function TestimonialsSection() {
  const testimonials = [
    { quote: "After using budget machines that needed constant repairs, we invested in GUTE. Two years, zero breakdowns. The premium is worth it for our fabrication business.", name: "Arjun Menon", role: "Fabrication Unit Owner, Kochi", highlight: "Zero breakdowns" },
    { quote: "The precision difference is noticeable. Our bent bars now meet specifications consistently. Less rejection, happier clients.", name: "Vikram Shah", role: "Premium Builder, Mumbai", highlight: "Better precision" },
    { quote: "Running GUTE for 14 hours some days. It handles the load without overheating like our old machine did. Quality shows.", name: "Naresh Kumar", role: "Fabricator, Hyderabad", highlight: "14 hours daily" },
    { quote: "International project partner recommended GUTE. They were right - this is proper industrial equipment, not construction-site machinery.", name: "Rakesh Jain", role: "JV Project Manager, Delhi NCR", highlight: "International standard" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mb-3">{t.highlight}</span>
          <p className="text-gray-600 italic mb-4">&quot;{t.quote}&quot;</p>
          <p className="font-semibold text-gray-800">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}

