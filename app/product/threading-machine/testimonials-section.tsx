export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Suresh Babu M.",
      role: "Technical Manager, Construction Company",
      location: "Bengaluru, Karnataka",
      quote:
        "We switched to mechanical splicing for our high-rise projects and this threading machine has been excellent. The thread quality is consistent and our coupler connections pass every test. Production speed is good for our volume.",
      rating: 5,
    },
    {
      name: "Karthik Rajan",
      role: "Project Engineer, Metro Contractor",
      location: "Chennai, Tamil Nadu",
      quote:
        "For infrastructure work where we use 32-40mm bars, this machine performs reliably. The multiple pitch options mean we can work with different coupler brands. Hutaib's service response has been quick when we needed spare dies.",
      rating: 5,
    },
    {
      name: "Venkateswara Rao",
      role: "Owner, Prefab Facility",
      location: "Hyderabad, Telangana",
      quote:
        "We thread thousands of bar ends monthly for our precast production. This machine has been running for over a year with minimal maintenance. The thread rolling gives stronger threads than cutting - important for our structural connections.",
      rating: 5,
    },
    {
      name: "Pradeep Kumar",
      role: "Site Engineer, Building Contractor",
      location: "Coimbatore, Tamil Nadu",
      quote:
        "Good machine for site use. We transport it between projects for on-site threading. The semi-automatic operation means our workers picked it up quickly. Thread quality has been consistent across all bar sizes.",
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
              Trusted by 100+ Contractors Adopting Mechanical Splicing
            </h4>
            <p className="text-green-700 mt-1">
              Construction companies, infrastructure contractors, and prefabrication facilities rely on our threading machines for coupler-based splicing across Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

