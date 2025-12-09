export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Honda GX390 is worth every rupee. Three years running and never missed a single day of work. Starts first pull every morning. This reliability is why I chose Honda.", name: "Rajesh Infrastructure", role: "Road Contractor, Bengaluru", project: "BBMP Road Contracts" },
    { quote: "Running rental business - customers specifically ask for Honda-powered cutters. Premium rentals and the machine holds resale value better than any other brand.", name: "Srinivas Equipment Rentals", role: "Equipment Rental, Hyderabad", project: "Rental Fleet" },
    { quote: "Airport runway repair work requires zero failures. Honda GX390 delivered perfectly through entire 3-month contract. Will only use Honda for critical projects.", name: "AV Constructions", role: "Infrastructure Contractor, Chennai", project: "Airport Maintenance" },
    { quote: "Service support is excellent. Honda dealer in every city. Got a small issue fixed same day in Mysuru even though I bought from Bengaluru. That peace of mind matters.", name: "Vinod Kumar", role: "Independent Contractor, Mysuru", project: "Municipal Contracts" },
    { quote: "Compared to my old Chinese engine cutter - night and day difference. Honda starts easy, runs smooth, uses less fuel. Should have bought Honda from the start.", name: "Mahesh Constructions", role: "Commercial Contractor, Mangalore", project: "Commercial Buildings" },
    { quote: "Heavy cutting through reinforced concrete - 13HP Honda handles it without strain. Good power delivery and the engine doesn't struggle even on deep cuts.", name: "Krishna Road Works", role: "Highway Contractor, Hubballi", project: "NH Development" }
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-red-500 hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{t.quote}&quot;</p>
            <div className="border-t pt-3"><p className="font-semibold text-gray-800">{t.name}</p><p className="text-xs sm:text-sm text-gray-500">{t.role}</p><p className="text-xs text-red-600 mt-1">📍 {t.project}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-red-50 to-gray-50 p-6 rounded-lg border border-red-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div><h3 className="text-xl font-bold text-gray-800">Join 150+ Honda GX390 Owners</h3><p className="text-gray-600">Experience world-class reliability</p></div>
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20Honda%20GX390%2013HP%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">Order Now - ₹75,000</a>
        </div>
      </div>
    </div>
  );
}

