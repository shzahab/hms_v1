import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This CNC Steel Bar Bender serves multiple construction and fabrication applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            High-Rise Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Producing stirrups, hooks, and bent bars for RCC columns, beams, and slabs in multi-story buildings across Bengaluru, Chennai, and Hyderabad.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/cnc-steel-bar-bender-machine-1.webp"
            alt="CNC bar bender producing stirrups for high-rise construction in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Infrastructure Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Bending heavy-gauge rebar for bridges, flyovers, metro projects, and highway construction across South India.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/cnc-steel-bar-bender-machine-2.webp"
            alt="Steel bar bender machine bending rebar for infrastructure project in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Rebar Fabrication Yards
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume stirrup and bent bar production for fabrication shops supplying construction sites across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/cnc-steel-bar-bender-machine-3.webp"
            alt="CNC steel bar bender in rebar fabrication yard producing bent bars"
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
              Column Stirrup Production
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>precise rectangular stirrups</strong> for RCC columns.
              </li>
              <li>
                <strong>Consistent dimensions</strong> ensure{" "}
                <strong>proper concrete cover</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/cnc-steel-bar-bender-machine-1.webp"
            alt="CNC bar bender producing column stirrups for construction site in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Beam Reinforcement Bending
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Bends <strong>cranked bars and hooks</strong> for beam reinforcement.
              </li>
              <li>
                <strong>40mm capacity</strong> handles{" "}
                <strong>main bars efficiently</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/cnc-steel-bar-bender-machine-main.webp"
            alt="Steel bar bender creating beam reinforcement bends in Tamil Nadu fabrication shop"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Foundation Bar Fabrication
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Produces <strong>L-bends and starter bars</strong> for foundations.
              </li>
              <li>
                <strong>Heavy-duty construction</strong> handles{" "}
                <strong>thick foundation rebar</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/cnc-steel-bar-bender-machine-3.webp"
            alt="CNC bar bender producing foundation starter bars in Hyderabad construction project"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

