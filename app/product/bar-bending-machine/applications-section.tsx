import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Adaptability for Industrial Applications</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Construction & Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            Ideal for <strong>bending reinforcement bars</strong> used in bridges, buildings, and highways.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-1.webp"
            alt="HMS Bar Bending Machine used in construction"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Manufacturing & Fabrication</h3>
          <p className="text-gray-600 mb-4">
            Essential for <strong>casting, grinding, and shaping iron rods</strong> in steel plants and
            factories.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-2.webp"
            alt="HMS Bar Bending Machine used in manufacturing"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Heavy Engineering & Industrial Use</h3>
          <p className="text-gray-600 mb-4">
            Supports <strong>customized bending requirements</strong> for various metalworking
            applications.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-3.webp"
            alt="HMS Bar Bending Machine used in heavy engineering"
            width={400}
            height={300}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Proven Use Cases</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Skyscraper & High-Rise Construction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Ensures <strong>uniform rebar bending</strong>.</li>
              <li>Reduces <strong>material waste</strong> with <strong>digital control</strong>.</li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-1.webp"
            alt="HMS Bar Bending Machine used in skyscraper construction"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bridge & Highway Projects</h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Handles <strong>complex bar shapes</strong> for <strong>infrastructure projects</strong>.</li>
              <li>Switches seamlessly between <strong>manual and automatic functions</strong>.</li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-2.webp"
            alt="HMS Bar Bending Machine used in bridge construction"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Prefabrication & Modular Construction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Ensures <strong>precision</strong> in <strong>factory-based steel processing</strong>.</li>
              <li>Minimizes <strong>errors</strong> for <strong>efficient assembly</strong>.</li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-3.webp"
            alt="HMS Bar Bending Machine used in prefabrication"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
} 