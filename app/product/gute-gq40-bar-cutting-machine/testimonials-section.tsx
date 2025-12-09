export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Third bar cutter I've owned. First two were budget machines - constant problems. GUTE GQ40 has been running 2 years now without any major issues. Should have bought quality from the start.",
      name: "Krishnamurthy R.",
      role: "Fabrication Yard Owner, Bengaluru",
      project: "Commercial Fabrication"
    },
    {
      quote: "The difference in cut quality is visible. Cleaner cuts, less burrs. My workers also say it runs smoother and quieter than our old machine. Worth the extra investment.",
      name: "Suresh Menon",
      role: "Civil Contractor, Kochi",
      project: "Commercial Buildings"
    },
    {
      quote: "Indian motor was the deciding factor for me. GUTE quality with easy local service. Had a minor motor issue once - fixed same day by local electrician. No import headaches.",
      name: "Mohammed Basheer",
      role: "Building Contractor, Kozhikode",
      project: "Apartment Construction"
    },
    {
      quote: "Running our fabrication unit for 8 years. Tried multiple brands. GUTE is definitely premium quality. The gearbox alone is noticeably better - no play, smooth operation.",
      name: "Ramakrishna Rao",
      role: "Fabrication Business Owner, Visakhapatnam",
      project: "Steel Fabrication"
    },
    {
      quote: "We rent out equipment. GUTE machines survive rental abuse much better than standard machines. Fewer service calls, happier customers, better business.",
      name: "Pradeep Construction Equipment",
      role: "Equipment Rental, Chennai",
      project: "Rental Business"
    },
    {
      quote: "Upgraded from GQ52 after it wore out in 4 years. GUTE GQ40 costs more but the quality difference is obvious. This one should last much longer.",
      name: "Venkatesan K.",
      role: "Infrastructure Contractor, Madurai",
      project: "Road Construction"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-blue-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Join Quality-Conscious Professionals</h3>
            <p className="text-gray-600">Premium GUTE engineering with Indian motor reliability</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GUTE%20GQ40%20Bar%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹1,10,000
          </a>
        </div>
      </div>
    </div>
  );
}

