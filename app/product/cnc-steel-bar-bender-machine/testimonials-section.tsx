export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar S.",
      role: "Owner, Rebar Fabrication Unit",
      location: "Bengaluru, Karnataka",
      quote:
        "We've been using this CNC bar bender for over a year. The 6-42mm range means we can handle all rebar sizes with one machine. The consistency in bend angles has significantly improved our output quality.",
      rating: 5,
    },
    {
      name: "Anand Krishnan",
      role: "Site Engineer, Construction Company",
      location: "Chennai, Tamil Nadu",
      quote:
        "Excellent machine for high-volume stirrup production. We produce thousands of stirrups daily for our high-rise projects. The adjustable speed lets us optimize for different bar sizes efficiently.",
      rating: 5,
    },
    {
      name: "Srinivas Reddy",
      role: "Project Manager, Infrastructure Contractor",
      location: "Hyderabad, Telangana",
      quote:
        "The precision of this CNC bender has reduced our rebar wastage by almost 15%. For infrastructure projects where we use heavy-gauge bars, the 40mm capacity is essential.",
      rating: 5,
    },
    {
      name: "Mohamed Ismail",
      role: "Rebar Workshop Manager",
      location: "Coimbatore, Tamil Nadu",
      quote:
        "Good machine for the price. The semi-automatic operation gives us flexibility - we can do complex custom shapes while still maintaining high production rates. Hutaib's service support has been excellent.",
      rating: 4,
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-green-800">
              Trusted by 150+ Rebar Fabricators in South India
            </h4>
            <p className="text-green-700 mt-1">
              Construction companies, rebar fabrication units, and infrastructure contractors rely on our CNC bar benders for daily production across Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

