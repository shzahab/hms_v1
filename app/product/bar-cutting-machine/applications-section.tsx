
import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Versatility for Industrial Cutting Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Steel Fabrication & Processing
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for <strong>cutting steel bars to precise lengths</strong> in
            fabrication workshops and steel processing facilities.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="HMS Bar Cutting Machine in steel fabrication facility, demonstrating precision cutting capabilities"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Construction & Infrastructure
          </h3>
          <p className="text-gray-600 mb-4">
            Essential for{" "}
            <strong>on-site cutting of reinforcement bars</strong> for
            buildings, bridges, and infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-2.webp"
            alt="HMS Bar Cutting Machine at construction site, showcasing rebar cutting for building projects"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Manufacturing & Production
          </h3>
          <p className="text-gray-600 mb-4">
            Supports <strong>high-volume cutting operations</strong> for
            manufacturing plants and production facilities.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="HMS Bar Cutting Machine in manufacturing facility performing high-volume cutting operations"
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
              High-Rise Building Construction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>precise length cutting</strong> for structural reinforcement.
              </li>
              <li>
                Reduces <strong>material waste</strong> with{" "}
                <strong>automated cutting sequences</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="HMS Bar Cutting Machine ensuring precise rebar cutting for high-rise construction projects"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Precast Concrete Manufacturing
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Handles <strong>batch cutting operations</strong> with{" "}
                <strong>consistent quality</strong> for precast elements.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-main.webp"
            alt="HMS Bar Cutting Machine in precast facility showing batch cutting capabilities"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Steel Service Centers
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>fast turnaround</strong> for{" "}
                <strong>custom length requirements</strong>.
              </li>
              <li>
                Maximizes <strong>throughput</strong> with{" "}
                <strong>high-speed cutting capabilities</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="HMS Bar Cutting Machine in steel service center demonstrating high-speed cutting operations"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
