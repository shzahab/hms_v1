import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This Walk Behind Power Trowel serves multiple concrete finishing applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Residential Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Finishing driveways, garage floors, patios, and home foundations across Bengaluru, Chennai, and Hyderabad residential projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/floaters-1.webp"
            alt="Walk behind power trowel finishing residential driveway in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Floors
          </h3>
          <p className="text-gray-600 mb-4">
            Creating smooth floors for retail shops, showrooms, restaurants, and small commercial spaces in South Indian cities.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/floaters-2.webp"
            alt="Concrete floater finishing commercial floor in Chennai retail space"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Detail & Edge Work
          </h3>
          <p className="text-gray-600 mb-4">
            Finishing areas around columns, walls, and edges on larger projects where ride-on trowels cannot reach.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/floaters-3.webp"
            alt="Power float machine working on edge finishing around columns"
            width={400}
            height={300}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Proven Use Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Residential Driveway Finishing
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>smooth, durable driveways</strong> for vehicle traffic.
              </li>
              <li>
                <strong>Adjustable speed</strong> ensures{" "}
                <strong>proper finish on different concrete mixes</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/floaters-1.webp"
            alt="Walk behind trowel finishing residential driveway in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Garage Floor Finishing
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Delivers <strong>professional-grade garage floors</strong> for home and commercial.
              </li>
              <li>
                <strong>Maneuverable design</strong> works{" "}
                <strong>in enclosed garage spaces</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/floaters-main.webp"
            alt="Concrete floater finishing garage floor in Tamil Nadu residential project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Patio & Outdoor Area Finishing
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>smooth outdoor living spaces</strong> and entertainment areas.
              </li>
              <li>
                <strong>48-inch blade</strong> provides{" "}
                <strong>efficient coverage for outdoor projects</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/floaters-3.webp"
            alt="Power trowel finishing outdoor patio area in Hyderabad residential project"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

