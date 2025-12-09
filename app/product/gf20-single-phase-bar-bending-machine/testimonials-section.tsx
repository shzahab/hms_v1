export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I was skeptical about single phase machines, but the GF20 has been running perfectly for 8 months now. I use it for my house construction contracts in Whitefield area. Best investment I made - saved so much on labor costs.",
      name: "Manjunath K.",
      role: "Building Contractor, Bengaluru",
      project: "Residential Houses"
    },
    {
      quote: "Perfect for small jobs. I move it between sites in my Tata Ace. Works on regular bijli connection, no tension about 3-phase. My workers love it compared to manual bending.",
      name: "Ravi Shankar",
      role: "Civil Contractor, Mysuru",
      project: "Compound Walls & Houses"
    },
    {
      quote: "Running a small fabrication unit from my godown. The GF20 handles all my 8mm and 10mm stirrup orders. Very reliable machine and HMS service team helped with installation same day.",
      name: "Suresh Babu",
      role: "Fabrication Unit Owner, Chennai",
      project: "Rebar Fabrication"
    },
    {
      quote: "Built my own house using this machine. After the house was done, I've been renting it out to other house builders in my village. Already recovered more than the cost!",
      name: "Venkatesh M.",
      role: "Self-builder & Rental, Tumkur",
      project: "Self-construction"
    },
    {
      quote: "We work in areas where getting 3-phase connection is impossible. This single phase machine solved our problem. Quality is good, produces consistent bends every time.",
      name: "Mohammed Irfan",
      role: "Rural Construction, Bellary",
      project: "Village Housing Projects"
    },
    {
      quote: "Upgraded from manual bending. The foot pedal control is very easy - even my helper learned to use it in one day. Good value for money at this price.",
      name: "Prakash Shetty",
      role: "Building Contractor, Mangalore",
      project: "Residential & Commercial"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-green-600 mt-1">📍 {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Join 500+ Happy GF20 Owners</h3>
            <p className="text-gray-600">Start saving on your construction projects today</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GF20%20Single%20Phase%20Bar%20Bending%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹33,000
          </a>
        </div>
      </div>
    </div>
  );
}

