export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Suresh M.",
      role: "Owner, Plumbing Contractor",
      location: "Bengaluru, Karnataka",
      quote:
        "We use this rammer daily for pipe trench compaction. It gets into narrow trenches where our plate compactor won't fit. The 20kN impact force compacts our clay soils properly - no settling issues after backfill.",
      rating: 5,
    },
    {
      name: "Ravi Kumar P.",
      role: "Site Supervisor, Utility Contractor",
      location: "Chennai, Tamil Nadu",
      quote:
        "For our water and sewer line installations, this tamping rammer is essential. It reaches into trenches under 500mm wide and compacts the cohesive soil we deal with in Chennai. Reliable machine.",
      rating: 5,
    },
    {
      name: "Nagaraj H.",
      role: "Building Contractor",
      location: "Hyderabad, Telangana",
      quote:
        "We bought this for foundation backfill around columns and footings. It works in corners and tight spaces where the plate compactor can't reach. The compaction is better in our soil conditions compared to vibration.",
      rating: 5,
    },
    {
      name: "Anwar Pasha",
      role: "Civil Works Contractor",
      location: "Coimbatore, Tamil Nadu",
      quote:
        "Good machine for the price. We use it for trench work and small area compaction. The shock-absorbing handle helps during long shifts. Hutaib's spare parts availability is excellent.",
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
              Trusted by 250+ Contractors in South India
            </h4>
            <p className="text-green-700 mt-1">
              Plumbers, utility contractors, and building contractors rely on our tamping rammers for trench compaction across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

