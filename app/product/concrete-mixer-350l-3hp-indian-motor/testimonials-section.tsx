export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Upgraded from 250L to 350L for our G+4 apartment project. The difference in pour time is significant - we complete floors faster with larger batches. 3HP motor handles the load easily.",
      name: "Anand Developers",
      role: "Real Estate Builder, Bengaluru",
      project: "Apartment Complex"
    },
    {
      quote: "Perfect middle ground between small mixers and expensive diesel machines. For our commercial projects, this capacity is ideal and running cost is just electricity.",
      name: "Rajesh Construction",
      role: "Commercial Builder, Chennai",
      project: "Showroom & Office"
    },
    {
      quote: "We do G+3 individual houses regularly. The 350L gives us the capacity we need without the complexity of diesel. Just plug in and mix - simple.",
      name: "Srinivas K.",
      role: "Building Contractor, Hyderabad",
      project: "Premium Villas"
    },
    {
      quote: "The 3HP motor is powerful. Handles thick mixes for foundation work without slowing down. Indian motor means parts are available anywhere if needed.",
      name: "Mohammed Irfan",
      role: "Civil Contractor, Mysuru",
      project: "Commercial Buildings"
    },
    {
      quote: "Compared buying diesel mixer at 1.3L vs this at 68K. For our project volume, the 350L electric is more cost-effective. No diesel headaches.",
      name: "Prakash Builders",
      role: "Construction Company, Hubli",
      project: "Mixed Projects"
    },
    {
      quote: "Running two 350L mixers on a large site is more flexible than one 500L diesel. Can run them independently at different pour locations.",
      name: "KVR Projects",
      role: "Builder, Coimbatore",
      project: "Layout Development"
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
            <h3 className="text-xl font-bold text-gray-800">Maximum Electric Capacity</h3>
            <p className="text-gray-600">350L 3HP - Largest single-phase mixer available</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20350L%203HP%20Indian%20Motor%20Concrete%20Mixer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹68,000
          </a>
        </div>
      </div>
    </div>
  );
}

