export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Airport runway work requires non-stop cutting for hours. VST Shakti 13HP water-cooled handles it without overheating. No other diesel in this class can match it.", name: "AAI Contractor", role: "Airport Infrastructure, Bengaluru", project: "Kempegowda Airport" },
    { quote: "National highway project - 8 hours continuous cutting daily. Air-cooled engines struggled in summer heat. VST Shakti water-cooled runs cool all day.", name: "NHAI Contractor", role: "Highway Contractor, Chennai", project: "NH Development" },
    { quote: "Maximum power in diesel category. When you're cutting heavily reinforced industrial floors, you need every bit of that 13HP. VST Shakti delivers.", name: "Industrial Contractors Pvt Ltd", role: "Industrial Contractor, Hyderabad", project: "Steel Plant" },
    { quote: "VST service network is excellent - better than expected. Parts available quickly, mechanics know the engine well. Important for commercial operations.", name: "Highway Infrastructure", role: "Infrastructure Contractor, Vijayawada", project: "Highway Maintenance" },
    { quote: "Top investment for serious infrastructure work. Running costs are excellent for the power output. Professional machine for professional results.", name: "Metro Infrastructure", role: "Heavy Contractor, Bengaluru", project: "Metro Related Work" },
    { quote: "Bought VST Shakti for our refinery project. Zero downtime in 6 months of daily use. Water cooling makes the difference in sustained heavy operations.", name: "Petrochemical Contractors", role: "Refinery Contractor, Chennai", project: "Refinery Floor Cutting" }
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{t.quote}&quot;</p>
            <div className="border-t pt-3"><p className="font-semibold text-gray-800">{t.name}</p><p className="text-xs sm:text-sm text-gray-500">{t.role}</p><p className="text-xs text-purple-600 mt-1">📍 {t.project}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-purple-50 to-gray-50 p-6 rounded-lg border border-purple-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div><h3 className="text-xl font-bold text-gray-800">Maximum Power Diesel</h3><p className="text-gray-600">13HP water-cooled for infrastructure work</p></div>
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VST%20Shakti%2013HP%20Diesel%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">Order Now - ₹1,30,000</a>
        </div>
      </div>
    </div>
  );
}

