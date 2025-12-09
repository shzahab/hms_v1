export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Electric start is a game changer. I start the machine 15-20 times a day doing road joints. Can't imagine going back to hand cranking. Worth every rupee of the extra ₹20K.", name: "Sharma Road Contractors", role: "Road Contractor, Bengaluru", project: "BBMP Maintenance" },
    { quote: "Bought manual start initially, then upgraded to starting type. Wish I had paid extra from the beginning. The convenience is unbeatable for daily use.", name: "Venkat Infrastructure", role: "Infrastructure Contractor, Chennai", project: "Industrial Estate" },
    { quote: "I'm 55 years old, hand cranking diesel engine was becoming difficult. Electric start solved my problem. Still working as contractor because the machine does the hard work.", name: "Ramanna", role: "Senior Contractor, Mysuru", project: "Municipal Contracts" },
    { quote: "Winter mornings in Bengaluru - engine cold, hard to hand start. Electric start works perfectly every time. No more struggling with cold starts at 6 AM.", name: "Chethan Constructions", role: "Road Contractor, Bengaluru", project: "Colony Roads" },
    { quote: "Running 3 cutters for my road contracting business. Electric start models have better operator satisfaction - workers prefer them over manual start machines.", name: "Reddy Infrastructure", role: "Fleet Owner, Hyderabad", project: "Multi-Site Operations" },
    { quote: "Safety was my concern - hand crank kickback injured my operator once. With electric start, that risk is eliminated completely. Good investment in worker safety.", name: "Ashok Constructions", role: "Road Contractor, Vijayawada", project: "Highway Work" }
  ];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{t.quote}&quot;</p>
            <div className="border-t pt-3"><p className="font-semibold text-gray-800">{t.name}</p><p className="text-xs sm:text-sm text-gray-500">{t.role}</p><p className="text-xs text-green-600 mt-1">📍 {t.project}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-green-50 to-gray-50 p-6 rounded-lg border border-green-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div><h3 className="text-xl font-bold text-gray-800">One-Button Convenience</h3><p className="text-gray-600">Electric start for professional daily use</p></div>
          <a href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%2010HP%20Greaves%20Starting%20Type%20Concrete%20Cutting%20Machine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors">Order Now - ₹1,15,000</a>
        </div>
      </div>
    </div>
  );
}

