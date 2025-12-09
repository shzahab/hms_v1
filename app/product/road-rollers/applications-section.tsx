import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This road roller serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Road Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Sub-base and asphalt compaction for highway construction, city roads, and rural road projects in Bengaluru, Chennai, and Hyderabad regions.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/road-rollers-1.webp"
            alt="Hutaib road roller compacting asphalt surface on highway construction project in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Parking & Commercial Areas
          </h3>
          <p className="text-gray-600 mb-4">
            Compacting parking lot surfaces, commercial driveways, and industrial yard areas across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/road-rollers-2.webp"
            alt="Vibratory roller compacting parking lot surface in Chennai commercial project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Foundation Preparation
          </h3>
          <p className="text-gray-600 mb-4">
            Soil compaction for building foundations, floor slabs, and structural base preparation throughout South Indian construction sites.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/road-rollers-3.webp"
            alt="Road roller compacting soil for foundation preparation in South Indian construction site"
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
              Highway & Road Projects
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>granular sub-base layers</strong> to specification.
              </li>
              <li>
                Finishes <strong>asphalt surfaces</strong> with{" "}
                <strong>proper density for durability</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/road-rollers-1.webp"
            alt="Road roller achieving specified compaction on highway construction in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Municipal Road Repair
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>patch work and resurfaced areas</strong> on existing roads.
              </li>
              <li>
                <strong>Variable speed</strong> enables{" "}
                <strong>precision work in urban areas</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/road-rollers-main.webp"
            alt="Hutaib vibratory roller performing road repair compaction in Tamil Nadu city"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Industrial Site Development
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Prepares <strong>stable base for factory floors</strong> and warehouse slabs.
              </li>
              <li>
                <strong>15kN force</strong> achieves{" "}
                <strong>required soil bearing capacity</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/road-rollers-3.webp"
            alt="Road roller compacting industrial site foundation in Hyderabad development project"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

