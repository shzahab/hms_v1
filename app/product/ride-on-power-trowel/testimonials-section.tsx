export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Raghunath P.",
      role: "Director, Flooring Contractor",
      location: "Bengaluru, Karnataka",
      quote:
        "We've completed over 20 warehouse projects with this ride-on trowel. The 1820mm working width makes a huge difference - we finish 50,000 sqft floors in significantly less time compared to walk-behind machines. The blade speed adjustment helps us get the perfect finish every time.",
      rating: 5,
    },
    {
      name: "Senthil Kumar V.",
      role: "Project Manager, Construction Company",
      location: "Chennai, Tamil Nadu",
      quote:
        "For our industrial floor projects, this machine is unbeatable. One operator can efficiently cover large areas, and the finish quality meets client expectations for heavy-duty manufacturing floors. The gasoline engine runs reliably even in our hot conditions.",
      rating: 5,
    },
    {
      name: "Mohammed Aziz",
      role: "Owner, Concrete Works",
      location: "Hyderabad, Telangana",
      quote:
        "The investment in this ride-on trowel has paid off multiple times. We handle commercial basement and parking deck projects across the city, and the productivity gain is substantial. Hutaib's service support has been prompt when we needed spare blades.",
      rating: 5,
    },
    {
      name: "Vijay Sharma",
      role: "Site Engineer, Infrastructure Company",
      location: "Coimbatore, Tamil Nadu",
      quote:
        "We use this for large industrial floor projects. The adjustable blade pitch and speed let us achieve everything from basic float finish to high-gloss burnished floors. Quality machine that's held up well under heavy use.",
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
              Trusted by 50+ Flooring Contractors in South India
            </h4>
            <p className="text-green-700 mt-1">
              Industrial flooring contractors, construction companies, and infrastructure developers rely on our ride-on power trowels for large-scale projects across Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

