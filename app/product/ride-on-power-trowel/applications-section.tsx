import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This Ride On Power Trowel serves multiple large-scale concrete finishing applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Warehouse Floors
          </h3>
          <p className="text-gray-600 mb-4">
            Finishing large warehouse and logistics center floors in Bengaluru, Chennai, and Hyderabad industrial parks with smooth, durable surfaces.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/power-trowel-1.webp"
            alt="Ride on power trowel finishing warehouse floor in Bengaluru industrial park"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industrial Facilities
          </h3>
          <p className="text-gray-600 mb-4">
            Creating high-strength industrial floors for manufacturing plants and factories across South Indian industrial corridors.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/power-trowel-2.webp"
            alt="Power trowel machine finishing industrial factory floor in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Buildings
          </h3>
          <p className="text-gray-600 mb-4">
            Finishing basement floors, parking decks, and commercial spaces in shopping malls and office complexes across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/power-trowel-3.webp"
            alt="Concrete finishing machine working on commercial building basement floor"
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
              E-Commerce Warehouse Floors
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Finishes <strong>50,000+ sqft floors</strong> efficiently in major logistics hubs.
              </li>
              <li>
                <strong>Smooth surfaces</strong> support{" "}
                <strong>forklift and pallet jack traffic</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/power-trowel-1.webp"
            alt="Ride on trowel creating smooth floor for e-commerce warehouse in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manufacturing Plant Floors
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>high-strength floors</strong> for heavy machinery operations.
              </li>
              <li>
                <strong>Dense surface</strong> resists{" "}
                <strong>oil and chemical penetration</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/power-trowel-main.webp"
            alt="Power trowel finishing manufacturing plant floor in Tamil Nadu industrial zone"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Airport & Metro Flooring
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Delivers <strong>precision finishes</strong> for high-traffic public infrastructure.
              </li>
              <li>
                <strong>Wide coverage</strong> ensures{" "}
                <strong>consistent quality across large areas</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/power-trowel-3.webp"
            alt="Concrete finishing for infrastructure project floor in Hyderabad metro"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

