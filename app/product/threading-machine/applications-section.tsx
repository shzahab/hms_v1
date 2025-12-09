import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This threading machine serves multiple construction and fabrication applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            High-Rise Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Threading column bars for coupler splicing in multi-story buildings where lap splices would create congestion in Bengaluru, Chennai, and Hyderabad.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/threading-machine-1.webp"
            alt="Threading machine preparing rebar for coupler splicing in high-rise construction Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Infrastructure Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Creating threaded ends for bridge piers, metro structures, and flyover columns requiring mechanical splices across South India.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/threading-machine-2.webp"
            alt="Rebar threading for infrastructure mechanical splicing in Chennai metro project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Prefabrication Facilities
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume threading for precast element production and modular construction facilities in Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/threading-machine-3.webp"
            alt="Threading machine in prefabrication facility producing threaded rebar for precast elements"
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
              Column Starter Bar Threading
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>threaded ends for column dowels</strong> in foundations.
              </li>
              <li>
                <strong>Coupler connections</strong> enable{" "}
                <strong>floor-to-floor continuity</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/threading-machine-1.webp"
            alt="Threading machine creating column starter bar threads for foundation in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Beam-Column Joint Threading
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Threads <strong>heavy-gauge bars for critical joints</strong> in seismic zones.
              </li>
              <li>
                <strong>Full-strength splices</strong> meet{" "}
                <strong>IS 13920 requirements</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/threading-machine-main.webp"
            alt="HMS threading machine creating beam-column joint threads in Tamil Nadu construction"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Precast Connection Threading
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Produces <strong>threaded bars for precast connections</strong> in modular buildings.
              </li>
              <li>
                <strong>Consistent threads</strong> ensure{" "}
                <strong>reliable field assembly</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/threading-machine-3.webp"
            alt="Rebar threading for precast panel connections in Hyderabad prefab facility"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

