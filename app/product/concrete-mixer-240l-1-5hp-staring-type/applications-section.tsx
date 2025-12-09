export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for 240L Staring Type Concrete Mixer
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The 240L concrete mixer with 1.5HP staring type motor is purpose-built for small to medium construction projects 
        where half-bag mixing is practical. Here&apos;s where this machine excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏠 Individual Houses (G+1, G+2)
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for residential house construction where concrete needs vary throughout the day. 
            Mix only what you need, when you need it.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Foundation concrete</li>
            <li>• Column and beam pouring</li>
            <li>• Slab casting</li>
            <li>• Staircase construction</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🧱 Compound Walls & Fencing
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal capacity for boundary wall projects where you need consistent small batches 
            for pillar foundations and plinth beams.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Pillar foundations</li>
            <li>• Plinth beam concrete</li>
            <li>• Gate post bases</li>
            <li>• Retaining walls</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🔧 Repair & Renovation Work
          </h3>
          <p className="text-gray-600 mb-4">
            Half-bag capacity is ideal for repair jobs where you need smaller quantities 
            of quality concrete without wastage.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Terrace waterproofing</li>
            <li>• Floor patching</li>
            <li>• Drainage channel lining</li>
            <li>• Wall strengthening</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the 240L Staring Type Mixer?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Small Building Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If you handle 2-4 house construction projects per year, this mixer gives you professional concrete quality 
            at a fraction of the cost of larger machines.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Typical savings:</strong> ₹20,000-30,000 per year in labor and wastage
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Self-Building Homeowners
          </h3>
          <p className="text-gray-600 mb-4">
            Building your own house? This mixer pays for itself in labor savings on a single project. 
            Sell it after or keep for future maintenance work.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Break-even:</strong> Within first house construction project
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Masons & Small Teams
          </h3>
          <p className="text-gray-600 mb-4">
            Independent masons taking small contracts benefit from offering machine-mixed concrete 
            as a value addition to clients.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Business benefit:</strong> Charge premium for quality concrete work
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Farm & Agricultural Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for farm structures, cattle sheds, storage buildings where power availability is limited 
            and batch sizes are smaller.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Advantage:</strong> Works on basic single-phase farm electricity
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Larger Capacity If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Commercial/industrial projects</strong> — Consider 500L or larger mixers for full-bag operations</li>
          <li>• <strong>Multi-storey buildings (G+3 and above)</strong> — Need higher output capacity</li>
          <li>• <strong>Ready-mix supply work</strong> — Require continuous high-volume production</li>
          <li>• <strong>Road construction</strong> — Need engine-powered mixers for site flexibility</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need a larger mixer? <a href="/product/concrete-mixer" className="underline font-semibold">View our 560L mixer</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

