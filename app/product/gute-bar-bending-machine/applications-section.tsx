export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for GUTE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏭 High-Volume Fabrication</h3>
          <p className="text-gray-600">Fabrication yards running 8-12 hours daily. Premium components handle continuous operation without issues.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏢 Premium Projects</h3>
          <p className="text-gray-600">High-profile commercial and residential projects where equipment quality reflects on contractor reputation.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🔧 Precision Requirements</h3>
          <p className="text-gray-600">Projects with tight angle tolerances where standard machines may not meet specifications.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Who Chooses GUTE?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Established Fabricators</h3>
          <p className="text-gray-600">Businesses with multiple machines who understand the value of equipment reliability.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Quality-Focused Contractors</h3>
          <p className="text-gray-600">Companies that view equipment as a long-term investment rather than a cost to minimize.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Upgrading from Budget Machines</h3>
          <p className="text-gray-600">Contractors who&apos;ve experienced downtime and repairs with cheaper equipment.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ International Project Teams</h3>
          <p className="text-gray-600">Projects with international partners familiar with global equipment standards.</p>
        </div>
      </div>
    </div>
  );
}

