
import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Versatility for Steel Processing Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Construction & Building Sites
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for <strong>on-site cutting of reinforcement bars</strong> used in
            foundations, columns, and structural elements.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="HMS Bar Cutting Machine in action at construction site, demonstrating precise steel reinforcement cutting capabilities"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Steel Fabrication Workshops
          </h3>
          <p className="text-gray-600 mb-4">
            Essential for{" "}
            <strong>high-volume steel processing and fabrication</strong> in manufacturing
            facilities and steel plants.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-2.webp"
            alt="HMS Bar Cutting Machine operating in steel fabrication workshop, showcasing high-speed cutting capabilities"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Infrastructure & Heavy Engineering
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal for <strong>bridge construction and highway projects</strong> requiring
            precise cutting of large diameter steel bars.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="HMS Bar Cutting Machine performing heavy-duty cutting operations for infrastructure projects"
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
              High-Rise Construction Projects
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>precise steel bar lengths</strong> for structural integrity.
              </li>
              <li>
                Reduces <strong>material waste</strong> with{" "}
                <strong>accurate cutting</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="HMS Bar Cutting Machine demonstrating precise steel cutting for high-rise construction projects"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Precast Manufacturing Operations
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Delivers <strong>consistent steel bar lengths</strong> for precast elements.
              </li>
              <li>
                Enhances <strong>production efficiency</strong> in factory settings.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-main.webp"
            alt="HMS Bar Cutting Machine in precast manufacturing facility showing consistent steel processing"
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
                Enables <strong>high-volume processing</strong> for steel distribution.
              </li>
              <li>
                Provides <strong>custom cutting services</strong> for various industries.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="HMS Bar Cutting Machine in steel service center demonstrating high-volume processing capabilities"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
