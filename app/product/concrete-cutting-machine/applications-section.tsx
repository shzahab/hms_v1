import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This concrete cutting machine serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Road Construction & Repair
          </h3>
          <p className="text-gray-600 mb-4">
            Creating expansion joints, control joints, and repair cuts on highways, city roads, and industrial areas in Bengaluru, Chennai, and Hyderabad.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-cutting-machine-1.webp"
            alt="Hutaib concrete cutting machine creating expansion joints on road construction project in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Utility Installation Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Cutting trenches for water mains, gas pipelines, electrical conduits, and fiber optic cables across urban and suburban areas.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-cutting-machine-2.webp"
            alt="Concrete cutting machine cutting utility trenches for pipe installation in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industrial Floor Cutting
          </h3>
          <p className="text-gray-600 mb-4">
            Floor modification, machinery foundation cutting, and warehouse renovation projects throughout South Indian industrial zones.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-cutting-machine-3.webp"
            alt="Concrete floor saw cutting industrial floor for renovation in South Indian factory"
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
              Expansion Joint Cutting
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>precise control joints</strong> to prevent random cracking.
              </li>
              <li>
                Essential for <strong>large concrete slabs</strong> and{" "}
                <strong>pavement installations</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-cutting-machine-1.webp"
            alt="Concrete cutting machine creating expansion joints on freshly laid concrete in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Asphalt Road Repair
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Enables <strong>clean removal of damaged sections</strong> for patching.
              </li>
              <li>
                Provides <strong>straight edges</strong> for{" "}
                <strong>seamless repair integration</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-cutting-machine-main.webp"
            alt="Road cutting machine performing asphalt cutting for road repair in Tamil Nadu highway project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Concrete Demolition Preparation
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Cuts <strong>defined sections</strong> for controlled concrete removal.
              </li>
              <li>
                Minimizes <strong>vibration damage</strong> to adjacent structures.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-cutting-machine-3.webp"
            alt="Concrete saw preparing demolition cuts for building renovation in Hyderabad construction site"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

