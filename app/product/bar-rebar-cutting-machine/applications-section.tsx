import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This bar cutting machine serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Infrastructure Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Highway construction, bridge building, and flyover projects requiring high-volume rebar cutting in Bengaluru, Chennai, and Hyderabad metro areas.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="Hutaib bar cutting machine cutting rebar for highway construction project in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Shopping complexes, office buildings, and industrial facilities throughout Karnataka, Tamil Nadu, and Kerala requiring precision rebar cutting.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-2.webp"
            alt="Bar cutting machine processing TMT bars for commercial building construction in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Precast Concrete Plants
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume rebar cutting for precast beam, column, and slab production serving South Indian residential and infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="Hutaib bar cutting machine at precast concrete plant processing rebar in South India"
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
              Skyscraper & High-Rise Construction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>precise steel bar lengths</strong> for structural integrity.
              </li>
              <li>
                Reduces <strong>material waste</strong> with{" "}
                <strong>clean, accurate cuts</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-1.webp"
            alt="Bar cutting machine with safety guards cutting rebar for high-rise construction in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Bridge & Highway Projects
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Handles <strong>large diameter bars</strong> up to 42mm for heavy infrastructure.
              </li>
              <li>
                <strong>High-speed cutting</strong> meets demanding project timelines.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-main.webp"
            alt="Hutaib bar cutting machine processing large diameter bars for bridge construction in Tamil Nadu"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Steel Fabrication Workshops
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Enables <strong>high-volume processing</strong> for steel distribution centers.
              </li>
              <li>
                Provides <strong>custom cutting services</strong> for various industries.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-cutting-machine-3.webp"
            alt="Bar cutting machine in steel fabrication workshop enabling high-volume rebar processing"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
