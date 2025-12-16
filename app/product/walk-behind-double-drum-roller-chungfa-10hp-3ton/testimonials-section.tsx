export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Bought the Chungfa model to save money and it works just as well as more expensive rollers. Been running for 10 months now with no issues. HMS support is excellent when I need spare parts.",
      name: "Suresh Kumar",
      role: "Road Contractor, Bengaluru",
      project: "Urban Road Works"
    },
    {
      quote: "We have 2 Chungfa and 1 Greaves roller. Honestly, can't tell the difference in performance. The ₹5,000 saved per machine adds up when you're running a business.",
      name: "Anand Reddy",
      role: "Civil Engineering Company, Hyderabad",
      project: "Commercial Projects"
    },
    {
      quote: "Started my contracting business with this Chungfa roller because it fit my budget. One year later, it's still going strong. Good decision for a new contractor.",
      name: "Mohammed Irfan",
      role: "New Contractor, Chennai",
      project: "Residential Projects"
    },
    {
      quote: "The self-start works perfectly. Chungfa engine starts easily even after sitting idle over weekends. HMS explained the machine well at delivery time.",
      name: "Prakash Shetty",
      role: "Building Contractor, Mangalore",
      project: "Site Development"
    },
    {
      quote: "My clients don't ask what brand engine is in the roller - they care about the finish quality. Chungfa delivers same quality at better price. Simple choice.",
      name: "Venkatesh M.",
      role: "Infrastructure Contractor, Coimbatore",
      project: "Road Construction"
    },
    {
      quote: "Bought 3 Chungfa rollers for our road laying team. Saved ₹15,000 total compared to Greaves. All three working well for 8 months now. No regrets.",
      name: "Ravi Shankar",
      role: "Road Construction Company, Mysuru",
      project: "Municipal Road Works"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-orange-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-lg border border-orange-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Get Professional Results at Budget Price</h3>
            <p className="text-gray-600">Same 3-ton compaction, ₹5,000 less investment</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20Walk%20Behind%20Double%20Drum%20Roller%20Chungfa%2010HP%203Ton" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Order Now - ₹1,85,000
          </a>
        </div>
      </div>
    </div>
  );
}

