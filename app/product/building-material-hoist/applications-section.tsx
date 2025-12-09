import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This building material hoist serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            High-Rise Residential
          </h3>
          <p className="text-gray-600 mb-4">
            Vertical material transport for apartment complexes and housing towers in Bengaluru, Chennai, Hyderabad, and other growing South Indian cities.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/building-material-hoist-1.webp"
            alt="Hutaib building material hoist lifting construction materials at high-rise apartment project in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Material lifting for shopping malls, office buildings, hotels, and hospitals under construction throughout Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/building-material-hoist-2.webp"
            alt="Construction hoist transporting cement bags at commercial building site in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industrial & Warehouse
          </h3>
          <p className="text-gray-600 mb-4">
            Supporting factory, warehouse, and industrial facility construction across South Indian manufacturing and logistics hubs.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/building-material-hoist-3.webp"
            alt="Material hoist at industrial facility construction site in South Indian industrial area"
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
              Brick & Block Transport
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Lifts <strong>bricks, concrete blocks, and tiles</strong> to upper floors efficiently.
              </li>
              <li>
                <strong>350kg capacity</strong> handles multiple loads{" "}
                <strong>per trip</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/building-material-hoist-1.webp"
            alt="Building material hoist lifting bricks to upper floors at construction site in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Cement & Sand Delivery
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Transports <strong>cement bags and sand</strong> for concrete and plastering work.
              </li>
              <li>
                <strong>Continuous operation</strong> keeps{" "}
                <strong>work crews supplied</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/building-material-hoist-main.webp"
            alt="Hutaib construction hoist delivering cement bags to multi-story building in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Steel & Rebar Transport
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Moves <strong>cut steel bars and fabricated reinforcement</strong> to working floors.
              </li>
              <li>
                <strong>60m reach</strong> serves{" "}
                <strong>high-rise construction efficiently</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/building-material-hoist-3.webp"
            alt="Material hoist transporting steel reinforcement bars for high-rise construction in Hyderabad"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

