export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Saved ₹10,000 choosing Husqvarna over Honda. Honestly can't tell the difference in performance. Both are 13HP petrol and both cut the same. Smart money goes to Husqvarna.", name: "Prakash Civil Works", role: "Road Contractor, Bengaluru", project: "Colony Road Work" },
    { quote: "Swedish brand, professional quality, better price than Honda. My clients don't care if it's Honda or Husqvarna - they care about the cut quality. Husqvarna delivers.", name: "Metro Constructions", role: "Commercial Contractor, Chennai", project: "Commercial Projects" },
    { quote: "Bought 3 Husqvarna cutters for my fleet instead of 2 Honda. Same total budget, 50% more capacity. Business decision that made sense.", name: "Sai Road Equipment", role: "Fleet Owner, Hyderabad", project: "Multi-Site Operations" },
    { quote: "Good build quality, starts well, cuts well. At ₹65,000 for 13HP petrol power, this is the best value in the market. No regrets.", name: "Ramesh Contractors", role: "Road Contractor, Coimbatore", project: "Municipal Contracts" },
    { quote: "Engine is smooth and powerful. Handles our daily road cutting work without any issues. Swedish engineering at Indian-friendly pricing.", name: "VK Infrastructure", role: "Infrastructure Contractor, Vijayawada", project: "Highway Maintenance" },
    { quote: "HMS recommended Husqvarna when I asked for budget option in 13HP range. They were right - excellent performance without the premium price tag.", name: "Abdul Road Works", role: "Independent Contractor, Mangalore", project: "Road Repairs" }
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{t.quote}&quot;</p>
            <div className="border-t pt-3"><p className="font-semibold text-gray-800">{t.name}</p><p className="text-xs sm:text-sm text-gray-500">{t.role}</p><p className="text-xs text-orange-600 mt-1">📍 {t.project}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-orange-50 to-gray-50 p-6 rounded-lg border border-orange-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div><h3 className="text-xl font-bold text-gray-800">Best Value 13HP - Husqvarna</h3><p className="text-gray-600">Swedish quality, ₹10,000 savings vs Honda</p></div>
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20Husqvarna%2013HP%20Petrol%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors">Order Now - ₹65,000</a>
        </div>
      </div>
    </div>
  );
}

