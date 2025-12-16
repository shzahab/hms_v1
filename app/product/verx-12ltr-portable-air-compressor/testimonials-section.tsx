export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Bought this for my home garage. Now I check and inflate tyres every week without going to the petrol pump. Very convenient and the price was right. Been using it for 6 months with no issues.",
      name: "Arun Kumar",
      role: "Home User, Bengaluru",
      project: "Personal Garage"
    },
    {
      quote: "I use it in my small furniture workshop for cleaning sawdust from machines and for small spray painting jobs. Good value for money. Runs quiet and doesn't heat up much.",
      name: "Venkatesan M.",
      role: "Carpenter, Chennai",
      project: "Furniture Workshop"
    },
    {
      quote: "Perfect for my mobile puncture repair service. Lightweight enough to carry in my two-wheeler. Customers are happy with quick service. Very useful investment.",
      name: "Raju Yadav",
      role: "Puncture Shop Owner, Hyderabad",
      project: "Mobile Service"
    },
    {
      quote: "Started my small AC servicing business. This compressor helps me clean AC filters and blow dust from outdoor units. Does the job well for light work.",
      name: "Mohammed Ashraf",
      role: "AC Technician, Coimbatore",
      project: "AC Service"
    },
    {
      quote: "Bought for my electronics repair shop. Using air gun to clean dust from computers, laptops, and TVs. Much better than can sprays. Pays for itself quickly.",
      name: "Suresh Nair",
      role: "Electronics Repair, Kochi",
      project: "Service Center"
    },
    {
      quote: "Good starter compressor for my auto garage. Using it as secondary unit for tyre inflation while main compressor handles heavy tools. HMS delivered fast.",
      name: "Prakash Reddy",
      role: "Auto Garage Owner, Vijayawada",
      project: "Automobile Garage"
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
            <h3 className="text-xl font-bold text-gray-800">Join 100+ Happy VERX 12L Owners</h3>
            <p className="text-gray-600">Start with the most affordable VERX compressor</p>
          </div>
          <a 
            href="https://wa.me/918074949635?text=Hi%2C%20I%20want%20to%20order%20VERX%2012L%20Portable%20Air%20Compressor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Order Now - ₹6,000
          </a>
        </div>
      </div>
    </div>
  );
}

