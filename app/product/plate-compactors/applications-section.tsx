import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This plate compactor serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Trench & Utility Work
          </h3>
          <p className="text-gray-600 mb-4">
            Compacting backfill in water, sewer, gas, and electrical utility trenches across Bengaluru, Chennai, and Hyderabad infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/plate-compactors-1.webp"
            alt="Hutaib plate compactor compacting trench backfill for utility installation in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Paving & Landscaping
          </h3>
          <p className="text-gray-600 mb-4">
            Preparing stable base layers for interlocking pavers, driveways, and hardscape installations across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/plate-compactors-2.webp"
            alt="Vibratory plate compactor preparing paver base in Chennai landscaping project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Foundation & Building
          </h3>
          <p className="text-gray-600 mb-4">
            Compacting soil around foundations, footings, and structural elements in residential and commercial construction.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/plate-compactors-3.webp"
            alt="Plate compactor compacting foundation backfill in South Indian building construction"
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
              Water & Sewer Line Installation
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>pipe bedding and trench backfill</strong> to prevent settling.
              </li>
              <li>
                <strong>30kN force</strong> achieves{" "}
                <strong>required density in layers</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/plate-compactors-1.webp"
            alt="Plate compactor achieving compaction density in utility trench in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Interlocking Paver Installation
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Creates <strong>stable, level base for pavers</strong> that won't shift.
              </li>
              <li>
                <strong>95Hz frequency</strong> ensures{" "}
                <strong>uniform compaction</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/plate-compactors-main.webp"
            alt="Hutaib vibratory compactor preparing paver base for driveway in Tamil Nadu"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Road Patch Repair
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>repair patches and fill material</strong> in road maintenance.
              </li>
              <li>
                <strong>Compact size</strong> works{" "}
                <strong>around traffic barriers</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/plate-compactors-3.webp"
            alt="Plate compactor compacting road repair patch in Hyderabad maintenance project"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

