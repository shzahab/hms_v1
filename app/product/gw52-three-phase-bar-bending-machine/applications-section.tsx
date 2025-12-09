export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for GW52</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🌉 Bridge Construction</h3>
          <p className="text-gray-600">Major river bridges, rail over bridges, and heavy infrastructure using 36-42mm piles and piers.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🚇 Metro Rail Projects</h3>
          <p className="text-gray-600">Viaduct columns, underground station diaphragm walls, and heavy structural elements.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏭 Industrial Structures</h3>
          <p className="text-gray-600">Heavy industrial foundations, power plant structures, and refinery equipment bases.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Specialized Applications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Dam & Spillway Work</h3>
          <p className="text-gray-600">Heavy water retaining structures with 36-42mm reinforcement requirements.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Port & Harbor</h3>
          <p className="text-gray-600">Jetty construction, wharf structures, and marine infrastructure.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Heavy Fabrication</h3>
          <p className="text-gray-600">Specialized fabrication yards processing the largest bar sizes.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Nuclear/Power Plants</h3>
          <p className="text-gray-600">Containment structures and heavy equipment foundations.</p>
        </div>
      </div>
    </div>
  );
}

