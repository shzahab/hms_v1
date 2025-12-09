import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This bar bending machine serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Infrastructure Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Highway construction, bridge building, and flyover projects requiring high-volume stirrup production in Bengaluru, Chennai, and Hyderabad metro areas.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-1.webp"
            alt="Hutaib bar bending machine bending rebar for highway construction project in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Shopping complexes, office buildings, and industrial facilities throughout Karnataka, Tamil Nadu, and Kerala requiring precise rebar fabrication.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-2.webp"
            alt="Bar bending machine processing TMT bars for commercial building construction in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Precast Concrete Plants
          </h3>
          <p className="text-gray-600 mb-4">
            Automated rebar cages for precast beam, column, and slab production serving South Indian residential and infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/bar-bending-machine-3.webp"
            alt="Hutaib bar bending machine at precast concrete plant producing rebar cages in South India"
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
                Ensures <strong>uniform rebar bending</strong>.
              </li>
              <li>
                Reduces <strong>material waste</strong> with{" "}
                <strong>digital control</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-1.webp"
            alt="Bar bending machine with digital controls bending rebar for high-rise construction in Bengaluru"
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
              Handles complex <strong>bar shapes</strong>, seamlessly{" "}
              <strong>switching</strong> between <strong>manual</strong> and{" "}
              <strong>automatic functions</strong>.
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-main.webp"
            alt="Hutaib bar bending machine processing complex bar shapes for bridge construction in Tamil Nadu"
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
              <li>
                Ensures <strong>precision</strong> in{" "}
                <strong>factory-based steel processing</strong>.
              </li>
              <li>
                Minimizes <strong>errors</strong> for{" "}
                <strong>efficient assembly</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/bar-bending-machine-3.webp"
            alt="Bar bending machine in prefabrication facility producing precision rebar for modular construction"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
