export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We upgraded from single phase to three phase GF20 for our fabrication unit. The difference is night and day - we can now run 8 hours straight without any motor heating issues. Production has increased by almost 40%.",
      name: "Nagesh R.",
      role: "Fabrication Unit Owner, Bengaluru",
      highlight: "40% production increase"
    },
    {
      quote: "The three phase motor is much smoother. Bending is faster and the machine doesn't struggle on Fe500D bars like our old single phase did. Worth the extra ₹2,000 for sure.",
      name: "Karthik Naidu",
      role: "Site Engineer, Hyderabad",
      highlight: "Handles Fe500D easily"
    },
    {
      quote: "Running a small fabrication business, we needed something reliable for daily production. The GF20 three phase has been working flawlessly for 14 months now. Very happy with the purchase.",
      name: "Mohammed Aslam",
      role: "Fabrication Business, Chennai",
      highlight: "14 months reliable operation"
    },
    {
      quote: "Our housing project has 24 buildings. The three phase GF20 handles all the stirrup work for the entire project. It runs from morning to evening with no problems.",
      name: "Srinivas Murthy",
      role: "Project Contractor, Mysuru",
      highlight: "Handles large projects"
    },
    {
      quote: "I compared single phase and three phase before buying. For my volume of work, three phase was the right choice. The continuous duty rating means I never have to wait for the motor to cool down.",
      name: "Rajendra Prasad",
      role: "Civil Contractor, Vijayawada",
      highlight: "Continuous operation"
    },
    {
      quote: "Good value for money. The extra speed and reliability over single phase is worth more than the ₹2,000 price difference. HMS installation team was very professional.",
      name: "Venkat Rao",
      role: "Building Contractor, Visakhapatnam",
      highlight: "Great value"
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
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {testimonial.highlight}
              </span>
            </div>
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">&quot;{testimonial.quote}&quot;</p>
            <div className="border-t pt-3">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Join Our Industrial Users</h3>
            <p className="text-gray-600">Get the three-phase advantage for your high-volume operations</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20GF20%20Three%20Phase%20Bar%20Bending%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹35,000
          </a>
        </div>
      </div>
    </div>
  );
}

