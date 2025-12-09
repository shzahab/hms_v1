export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for GF20 Three Phase
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The GF20 Three Phase excels in environments where continuous operation and high throughput are required. 
        Perfect for established contractors and fabrication operations across South India.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏭 Rebar Fabrication Units
          </h3>
          <p className="text-gray-600 mb-4">
            Small to medium fabrication yards processing stirrups and bent bars for multiple contractors. 
            The continuous duty cycle handles daily production demands.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• High-volume stirrup production</li>
            <li>• Custom bend orders</li>
            <li>• Batch processing for projects</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Large Construction Sites
          </h3>
          <p className="text-gray-600 mb-4">
            Sites with dedicated fabrication areas and three-phase power connections. 
            Ideal for projects requiring sustained daily bending operations.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• On-site stirrup production</li>
            <li>• Continuous shift operation</li>
            <li>• High productivity requirements</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏢 Housing Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-building residential projects, housing colonies, and layout developments 
            where centralized fabrication serves multiple structures.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Apartment complexes</li>
            <li>• Row house developments</li>
            <li>• Township projects</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Uses the GF20 Three Phase?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Established Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Contractors with permanent workshops or sites with industrial power connections. 
            You prioritize throughput and reliability over portability.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Fabrication Business Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Running a small business supplying bent rebar? The three-phase motor handles 
            the continuous operation your customers expect.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Infrastructure Sub-Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Working on highway projects, bridges, or metro construction where 8-16mm bars 
            are used in large quantities for secondary reinforcement.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Precast Concrete Units
          </h3>
          <p className="text-gray-600 mb-4">
            Manufacturing precast elements like compound wall panels, kerb stones, and 
            small structural members with 8-16mm reinforcement.
          </p>
        </div>
      </div>
    </div>
  );
}

