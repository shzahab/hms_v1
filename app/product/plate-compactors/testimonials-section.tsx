export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Manoj Kumar R.",
      role: "Site Engineer, Utility Contractor",
      location: "Bengaluru, Karnataka",
      quote:
        "We use this plate compactor daily for trench backfill on utility installations. The 30kN force achieves excellent compaction in layers, and it fits perfectly in trenches where our larger equipment can't reach.",
      rating: 5,
    },
    {
      name: "Selvakumar K.",
      role: "Landscaping Contractor",
      location: "Chennai, Tamil Nadu",
      quote:
        "For paver base preparation, this compactor is perfect. The uniform compaction from the 95Hz frequency means our pavers don't shift over time. We've used it on dozens of driveway projects.",
      rating: 5,
    },
    {
      name: "Venkatesh N.",
      role: "Building Contractor",
      location: "Hyderabad, Telangana",
      quote:
        "I bought this for foundation backfill compaction around columns and footings. It reaches spots our road roller can't access. The weight is just right for effective compaction without being too heavy to maneuver.",
      rating: 4,
    },
    {
      name: "Pramod S.",
      role: "Road Maintenance Supervisor",
      location: "Coimbatore, Tamil Nadu",
      quote:
        "Our road maintenance team uses this for patch repairs and pothole filling. Compact enough to work in traffic zones and powerful enough to compact repairs properly. Great machine for the price.",
      rating: 5,
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
              Trusted by 200+ Contractors in South India
            </h4>
            <p className="text-green-700 mt-1">
              Utility contractors, landscapers, and building contractors rely on our plate compactors for daily operations across Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

