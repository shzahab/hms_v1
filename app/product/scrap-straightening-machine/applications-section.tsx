import Image from "next/image";

export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications Across South Indian Industries
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This scrap straightening machine serves multiple construction and recycling applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Construction Site Recovery
          </h3>
          <p className="text-gray-600 mb-4">
            Reclaiming bent and curved rebar scrap from construction and demolition sites in Bengaluru, Chennai, and Hyderabad for immediate reuse.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/scrap-straightening-machine-1.webp"
            alt="Hutaib scrap straightening machine processing bent rebar at construction site in Bengaluru"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Steel Recycling Operations
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume scrap processing at recycling yards and metal collection centers across Karnataka and Tamil Nadu.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/scrap-straightening-machine-2.webp"
            alt="Steel bar straightener processing scrap at recycling yard in Chennai"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Fabrication Workshop Waste
          </h3>
          <p className="text-gray-600 mb-4">
            Recovering production waste and rejected pieces from rebar fabrication workshops for reprocessing into usable stock.
          </p>
          <Image
            className="w-full h-40 object-cover rounded mt-4"
            src="/images/products/scrap-straightening-machine-3.webp"
            alt="Scrap straightening machine in fabrication workshop processing waste bars in South India"
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
              Large Project Waste Recovery
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Recovers <strong>bent bars from demolition phases</strong> for use in new construction.
              </li>
              <li>
                <strong>On-site processing</strong> eliminates{" "}
                <strong>transport costs for scrap</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/scrap-straightening-machine-1.webp"
            alt="Scrap straightening machine recovering bent rebar at large construction project in Karnataka"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Rebar Dealer Operations
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Adds value to <strong>purchased scrap by straightening</strong> before resale.
              </li>
              <li>
                <strong>Higher profit margins</strong> compared to{" "}
                <strong>selling unprocessed scrap</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/scrap-straightening-machine-main.webp"
            alt="Hutaib steel bar straightener at rebar dealer processing scrap for resale in Tamil Nadu"
            width={400}
            height={300}
          />
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Wire Rod Processing
            </h3>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>
                Straightens <strong>coiled wire rod</strong> for manufacturing applications.
              </li>
              <li>
                <strong>Continuous feed</strong> handles{" "}
                <strong>long lengths efficiently</strong>.
              </li>
            </ul>
          </div>
          <Image
            className="w-full h-48 object-cover"
            src="/images/products/scrap-straightening-machine-3.webp"
            alt="Scrap straightening machine processing wire rod at metal processing plant in Hyderabad"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

