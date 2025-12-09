import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This ring making machine serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Column & Beam Stirrups
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume stirrup production for RCC columns and beams in multi-story buildings across Bengaluru, Chennai, and Hyderabad construction projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/ring-making-machine-1.webp"
            alt="Hutaib ring making machine producing stirrups for column reinforcement in Karnataka construction project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Spiral Reinforcement
          </h3>
          <p className="text-gray-600 mb-4">
            3D spiral production for circular columns, piles, and precast concrete elements used in infrastructure development across South India.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/ring-making-machine-2.webp"
            alt="Spiral machine creating 3D spirals for pile reinforcement in Chennai infrastructure project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Precast Manufacturing
          </h3>
          <p className="text-gray-600 mb-4">
            Automated ring production for precast concrete factories serving residential and commercial construction throughout Tamil Nadu and Kerala.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/ring-making-machine-3.webp"
            alt="Ring making machine in precast concrete plant producing uniform stirrups in South India"
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
              High-Rise Construction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Produces <strong>thousands of uniform stirrups</strong> for tower construction.
              </li>
              <li>
                Ensures <strong>consistent quality</strong> across{" "}
                <strong>all floor levels</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/ring-making-machine-1.webp"
            alt="Ring making machine producing stirrups for high-rise building construction in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Bridge & Flyover Projects
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>heavy-gauge stirrups</strong> for pier and deck reinforcement.
              </li>
              <li>
                <strong>High-speed production</strong> meets demanding project timelines.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/ring-making-machine-main.webp"
            alt="Hutaib spiral machine producing stirrups for bridge construction in Tamil Nadu infrastructure project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Rebar Fabrication Yards
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Enables <strong>centralized stirrup production</strong> for multiple sites.
              </li>
              <li>
                <strong>Quick size changes</strong> handle varied customer requirements.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/ring-making-machine-3.webp"
            alt="Ring making machine in rebar fabrication yard serving construction projects across South India"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

