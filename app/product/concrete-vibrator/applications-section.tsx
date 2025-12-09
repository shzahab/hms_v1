import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This concrete vibrator serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Column & Beam Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Consolidating concrete in RCC columns and beams for high-rise residential and commercial buildings in Bengaluru, Chennai, and Hyderabad.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-vibrator-1.webp"
            alt="Hutaib concrete vibrator consolidating column concrete at high-rise construction site in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Slab & Foundation Work
          </h3>
          <p className="text-gray-600 mb-4">
            Ensuring proper consolidation in floor slabs, roof slabs, and foundation concrete across residential and infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-vibrator-2.webp"
            alt="Needle vibrator compacting slab concrete at construction project in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Precast Manufacturing
          </h3>
          <p className="text-gray-600 mb-4">
            High-quality consolidation for precast concrete elements in manufacturing facilities across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-vibrator-3.webp"
            alt="Concrete vibrator being used in precast concrete plant in South India"
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
              High-Rise RCC Structures
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>void-free concrete</strong> in multi-story columns and beams.
              </li>
              <li>
                Prevents <strong>honeycombing and segregation</strong> in{" "}
                <strong>tall structural elements</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-vibrator-1.webp"
            alt="Concrete vibrator consolidating high-rise building column in Karnataka construction project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Infrastructure Projects
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Critical for <strong>bridge piers, abutments, and retaining walls</strong>.
              </li>
              <li>
                <strong>Dense concrete</strong> ensures{" "}
                <strong>long-term structural integrity</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-vibrator-main.webp"
            alt="Hutaib needle vibrator being used for infrastructure project concrete consolidation in Tamil Nadu"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Mass Concrete Applications
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Effective for <strong>raft foundations and deep footings</strong>.
              </li>
              <li>
                <strong>Multiple needle sizes</strong> handle{" "}
                <strong>various concrete depths</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-vibrator-3.webp"
            alt="Concrete vibrator consolidating foundation concrete for commercial building in Hyderabad"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

