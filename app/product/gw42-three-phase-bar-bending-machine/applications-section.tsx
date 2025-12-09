export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for GW42</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏗️ Infrastructure Projects</h3>
          <p className="text-gray-600">Highway overpasses, flyovers, bridges with 25-32mm main bars. Standard equipment on NHAI projects.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏢 High-Rise Buildings</h3>
          <p className="text-gray-600">G+10 and above commercial buildings using 25-32mm columns. Essential for major construction companies.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏭 Fabrication Yards</h3>
          <p className="text-gray-600">Central fabrication operations serving multiple contractors. High-volume production capability.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Who Uses GW42?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Infrastructure Contractors</h3>
          <p className="text-gray-600">Working on highways, bridges, and government infrastructure projects requiring heavy rebar.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Commercial Builders</h3>
          <p className="text-gray-600">Constructing malls, offices, and high-rises where 25-32mm bars are specified.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Fabrication Businesses</h3>
          <p className="text-gray-600">Processing bent rebar for multiple contractor clients. High throughput requirements.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Metro Rail Contractors</h3>
          <p className="text-gray-600">Station construction, viaduct piers, and related infrastructure work.</p>
        </div>
      </div>
    </div>
  );
}

