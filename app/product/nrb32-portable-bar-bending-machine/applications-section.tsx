export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for NRB32 Portable</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏗️ Multi-Site Contractors</h3>
          <p className="text-gray-600">Contractors running 3-5 sites who need to move equipment based on work schedule. One machine serves multiple locations.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">📍 Remote/Difficult Access</h3>
          <p className="text-gray-600">Sites where crane access is difficult or expensive. The NRB32 can be manually positioned.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏢 Individual Building Sites</h3>
          <p className="text-gray-600">Building construction where the machine moves to each new project. Not a fixed fabrication setup.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Who Chooses NRB32?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Mobile Contractors</h3>
          <p className="text-gray-600">Contractors who move from project to project rather than maintaining a central yard.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Rental Equipment Operators</h3>
          <p className="text-gray-600">Businesses renting equipment who need easy loading/unloading for customer deliveries.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Small Fleet Operators</h3>
          <p className="text-gray-600">Companies with 2-3 machines that need to redistribute based on project requirements.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Time-Sensitive Projects</h3>
          <p className="text-gray-600">Projects where waiting for cranes would cause costly delays.</p>
        </div>
      </div>
    </div>
  );
}

