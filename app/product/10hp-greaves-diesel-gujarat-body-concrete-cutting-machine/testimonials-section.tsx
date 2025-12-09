export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Gujarat body makes a real difference. My previous cutter body cracked after 2 years. This one is 4 years old and still rock solid. Thicker steel, better welding.", name: "Suresh Road Contractors", role: "Road Contractor, Ahmedabad", project: "Gujarat Roads" },
    { quote: "10HP Greaves is perfect for our daily PWD maintenance contracts. Diesel economy saves us ₹300 per day compared to petrol cutters. That's ₹90K per year!", name: "Karnataka Road Developers", role: "PWD Contractor, Bengaluru", project: "PWD Contracts" },
    { quote: "Greaves service available in my small town - that's why I chose this over branded petrol cutters. Parts and mechanics readily available locally.", name: "Ravi Civil Works", role: "Independent Contractor, Tumkur", project: "Municipal Work" },
    { quote: "Heavy-duty professional machine at reasonable price. Running 5-6 hours daily for 3 years without major problems. This is what professional equipment should be.", name: "Lakshmi Infrastructure", role: "Infrastructure Contractor, Chennai", project: "Industrial Roads" },
    { quote: "Upgraded from 5HP to 10HP Greaves. Night and day difference for our road joint work. The extra power cuts through reinforced sections without struggling.", name: "Patel Road Works", role: "Road Contractor, Surat", project: "Highway Joints" },
    { quote: "Best combination of power, durability, and running cost. Gujarat body is noticeably heavier and more rigid than standard machines. Worth the investment.", name: "Yadav Constructions", role: "Road Contractor, Hyderabad", project: "Colony Roads" }
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{t.quote}&quot;</p>
            <div className="border-t pt-3"><p className="font-semibold text-gray-800">{t.name}</p><p className="text-xs sm:text-sm text-gray-500">{t.role}</p><p className="text-xs text-blue-600 mt-1">📍 {t.project}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border border-blue-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div><h3 className="text-xl font-bold text-gray-800">Professional Contractor&apos;s Choice</h3><p className="text-gray-600">Greaves reliability + Gujarat durability</p></div>
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%2010HP%20Greaves%20Gujarat%20Body%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">Order Now - ₹95,000</a>
        </div>
      </div>
    </div>
  );
}

