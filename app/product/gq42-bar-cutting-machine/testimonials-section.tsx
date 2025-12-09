export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Bought the GQ42 for my house construction work. It cuts through 12mm and 16mm bars like butter. Saved me a lot on labor costs and the cuts are much cleaner than manual work.",
      name: "Ramesh Shetty",
      role: "Building Contractor, Mangalore",
      project: "Residential Houses"
    },
    {
      quote: "Very compact machine. I move it in my Bolero between sites. For small houses and compound walls, this is more than enough capacity. Good value for ₹75,000.",
      name: "Karthik R.",
      role: "Civil Contractor, Coimbatore",
      project: "Compound Walls & Houses"
    },
    {
      quote: "Started my small fabrication unit with this machine. Handles all the 8mm and 10mm stirrup cutting work efficiently. Planning to add a bending machine from HMS soon.",
      name: "Arun Kumar",
      role: "Fabrication Unit Owner, Hyderabad",
      project: "Rebar Fabrication"
    },
    {
      quote: "We use it for our temple construction projects in villages around Madurai. Easy to set up, and even our helpers learned to use it quickly. Very reliable.",
      name: "Murugan P.",
      role: "Temple Committee Contractor, Madurai",
      project: "Temple Construction"
    },
    {
      quote: "The safety guard is a big plus. Operator feels safe while cutting. Clean cuts every time, no need for grinding afterwards. Good machine for the price.",
      name: "Prakash Reddy",
      role: "Site Engineer, Vijayawada",
      project: "Commercial Projects"
    },
    {
      quote: "Hutaib team was helpful in explaining which model suits my work. For residential projects, GQ42 is perfect. Delivered in 3 days to Mysore.",
      name: "Shivakumar H.",
      role: "Building Contractor, Mysuru",
      project: "Residential Construction"
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
            <h3 className="text-xl font-bold text-gray-800">Join 300+ Happy GQ42 Owners</h3>
            <p className="text-gray-600">Start saving on your construction projects today</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GQ42%20Bar%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹75,000
          </a>
        </div>
      </div>
    </div>
  );
}

