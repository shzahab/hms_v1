export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Started with this 5HP Greaves model 2 years ago. Perfect for the road repair contracts I do in Yelahanka and surrounding areas. Fuel cost is very less compared to petrol machines. No regrets.",
      name: "Raju K.",
      role: "Road Contractor, Bengaluru",
      project: "Road Repairs & Joints"
    },
    {
      quote: "I do plumbing work and needed a cutter for floor trenches. This machine handles all my floor cutting work easily. Greaves engine starts in one pull even in winter. Very happy with the purchase.",
      name: "Mohammed Saleem",
      role: "Plumbing Contractor, Hyderabad",
      project: "Floor Cutting for Plumbing"
    },
    {
      quote: "We bought this as a backup machine for our construction company. Now it runs almost daily for small jobs. At this price with Greaves engine, it's excellent value. HMS delivery was prompt.",
      name: "Suresh Constructions",
      role: "Construction Company, Chennai",
      project: "General Construction"
    },
    {
      quote: "Running a rental business in Mangalore. This 5HP model is my most rented machine because the price is affordable for small contractors to rent. Greaves spares available locally which customers appreciate.",
      name: "Naveen Shetty",
      role: "Equipment Rental, Mangalore",
      project: "Rental Business"
    },
    {
      quote: "For residential colony road work, this machine is more than enough. I've cut hundreds of expansion joints with this. The wet cutting system keeps dust down and neighbors don't complain.",
      name: "Prakash Reddy",
      role: "Civil Contractor, Warangal",
      project: "Colony Roads"
    },
    {
      quote: "Good starter machine for anyone new to concrete cutting business. I learned on this machine and now have two more cutters. The 5HP Greaves never gave me any problems in 18 months.",
      name: "Arun Kumar",
      role: "Cutting Works Owner, Coimbatore",
      project: "Concrete Cutting Services"
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
            <h3 className="text-xl font-bold text-gray-800">Join 200+ 5HP Greaves Owners Across South India</h3>
            <p className="text-gray-600">Start your concrete cutting business with a proven, reliable machine</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%205HP%20Greaves%20Diesel%20Concrete%20Cutting%20Machine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Order Now - ₹55,000
          </a>
        </div>
      </div>
    </div>
  );
}

