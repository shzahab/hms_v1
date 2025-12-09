import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This Tamping Rammer serves multiple compaction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Utility Trench Work
          </h3>
          <p className="text-gray-600 mb-4">
            Compacting backfill in water, sewer, gas, and electrical utility trenches across Bengaluru, Chennai, and Hyderabad infrastructure projects.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/tamping-rammer-1.webp"
            alt="Tamping rammer compacting utility trench backfill in Bengaluru infrastructure project"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Foundation Backfill
          </h3>
          <p className="text-gray-600 mb-4">
            Compacting soil around foundations, footings, and retaining walls in residential and commercial construction across South India.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/tamping-rammer-2.webp"
            alt="Jumping rammer compacting foundation backfill in Chennai building construction"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Pipe & Cable Bedding
          </h3>
          <p className="text-gray-600 mb-4">
            Creating properly compacted bedding for pipes and cables in plumbing and electrical installations across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/tamping-rammer-3.webp"
            alt="Rammer compactor preparing pipe bedding in Hyderabad plumbing project"
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
              Water & Sewer Line Trenches
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>narrow trenches under 600mm width</strong> efficiently.
              </li>
              <li>
                <strong>20kN impact</strong> ensures{" "}
                <strong>proper density to prevent settling</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/tamping-rammer-1.webp"
            alt="Tamping rammer compacting water line trench backfill in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Column Footing Compaction
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Reaches <strong>around column footings and corners</strong> where plates can't access.
              </li>
              <li>
                <strong>Deep impact compaction</strong> creates{" "}
                <strong>stable foundation support</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/tamping-rammer-main.webp"
            alt="Jumping rammer compacting soil around column footing in Tamil Nadu building site"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Repair & Patch Work
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Compacts <strong>small repair areas and patches</strong> in existing pavements.
              </li>
              <li>
                <strong>Portable design</strong> moves{" "}
                <strong>easily between repair locations</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/tamping-rammer-3.webp"
            alt="Soil rammer compacting repair patch in Hyderabad road maintenance"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

