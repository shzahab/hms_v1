export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Honda engine starts first pull every time. I've been doing driveways for 3 years with this roller - never let me down once. Petrol is cleaner than diesel for residential work.",
      name: "Suresh Kumar",
      role: "Driveway Contractor, Bengaluru",
      project: "Residential Driveways"
    },
    {
      quote: "We use this for our landscaping projects - pathways, patio bases, lawn prep. Compact enough to work in tight gardens. Honda reliability is unmatched.",
      name: "Priya Landscaping",
      role: "Landscape Company, Chennai",
      project: "Garden & Landscape"
    },
    {
      quote: "Perfect for our cable laying work. Compact trenches quickly after laying fiber cables. Light enough to move around without heavy equipment.",
      name: "Ramesh Telecom Works",
      role: "Utility Contractor, Hyderabad",
      project: "Cable Trench Compaction"
    },
    {
      quote: "Bought this as second roller for small jobs. Our 3-ton handles roads, this Honda handles driveways and paths. Good combination.",
      name: "Venkatesh M.",
      role: "Civil Contractor, Mysuru",
      project: "Mixed Projects"
    },
    {
      quote: "Client asked for minimal noise - petrol engine perfect. Finished their farmhouse driveway without disturbing anyone. Very satisfied with Honda quality.",
      name: "Anand Builders",
      role: "Building Contractor, Coimbatore",
      project: "Farmhouse Projects"
    },
    {
      quote: "Easy to transport in my Bolero pickup. Take it to different sites same day. Honda starts immediately even after sitting in vehicle. Great machine.",
      name: "Mohammed Contractors",
      role: "Multi-site Contractor, Mangalore",
      project: "Various Small Projects"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-red-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-red-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Get Honda Reliability for Your Projects</h3>
            <p className="text-gray-600">The world&apos;s most trusted engine for compact construction equipment</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20Walk%20Behind%20Single%20Drum%20Roller%20Honda%20GX390%201.5Ton" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Order Now - ₹1,35,000 + GST
          </a>
        </div>
      </div>
    </div>
  );
}

