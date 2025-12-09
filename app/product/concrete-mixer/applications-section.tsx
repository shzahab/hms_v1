import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This concrete mixer serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Residential Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Producing quality concrete for individual houses, apartment buildings, and housing complexes in Bengaluru, Chennai, and Hyderabad.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-mixer-1.webp"
            alt="Hutaib concrete mixer producing concrete at residential construction site in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Commercial Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Consistent concrete supply for shopping centers, office buildings, and industrial facilities across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-mixer-2.webp"
            alt="Cement mixer providing concrete for commercial building construction in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Road & Infrastructure
          </h3>
          <p className="text-gray-600 mb-4">
            Supporting road construction, drainage works, and public infrastructure projects throughout South Indian states.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/concrete-mixer-3.webp"
            alt="Concrete mixer at road construction project in South Indian infrastructure development"
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
              Foundation & Footing Work
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Produces <strong>consistent M20/M25 concrete</strong> for foundation pours.
              </li>
              <li>
                <strong>560L capacity</strong> matches{" "}
                <strong>typical foundation batch requirements</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-mixer-1.webp"
            alt="Concrete mixer producing M25 grade concrete for building foundation in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Column & Slab Concrete
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Ensures <strong>uniform mix quality</strong> for structural concrete work.
              </li>
              <li>
                <strong>Tilting discharge</strong> feeds{" "}
                <strong>directly into column formwork</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-mixer-main.webp"
            alt="Hutaib cement mixer supplying concrete for RCC column construction in Tamil Nadu"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Paving & Flooring
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Produces <strong>workable concrete for floor screeding</strong> and paving.
              </li>
              <li>
                <strong>Portable design</strong> moves{" "}
                <strong>as paving work progresses</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/concrete-mixer-3.webp"
            alt="Concrete mixer providing material for compound paving work in Hyderabad"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

