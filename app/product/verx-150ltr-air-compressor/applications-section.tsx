export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Industrial Applications for VERX 150L Compressor
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The VERX 150L is engineered for industrial environments requiring high-volume, reliable compressed air. 
        Here&apos;s where this industrial-grade compressor delivers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏭 Manufacturing Units
          </h3>
          <p className="text-gray-600 mb-4">
            Power pneumatic assembly tools, actuators, and automation equipment across the production floor. 
            Consistent pressure for quality output.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Pneumatic assembly stations</li>
            <li>• Automated packaging lines</li>
            <li>• Quality testing equipment</li>
            <li>• Material handling systems</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🔩 Large Workshops
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-bay auto workshops, truck service centers, and equipment repair facilities 
            with multiple technicians working simultaneously.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Multi-bay service centers</li>
            <li>• Heavy vehicle workshops</li>
            <li>• Equipment repair facilities</li>
            <li>• Industrial maintenance shops</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💨 Sandblasting Operations
          </h3>
          <p className="text-gray-600 mb-4">
            The 350 LPM air flow and 10 bar pressure handle small to medium sandblasting for 
            rust removal, surface preparation, and cleaning.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Rust removal</li>
            <li>• Paint stripping</li>
            <li>• Surface preparation</li>
            <li>• Metal cleaning</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the VERX 150L?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Factory Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Small to medium manufacturing units with 2-3 pneumatic workstations. 
            Central air supply for the entire production area.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Capacity:</strong> Powers entire small factory floors
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Large Auto Workshop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-bay service centers handling trucks, buses, and commercial vehicles. 
            Multiple impact wrenches running simultaneously without pressure drop.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Ideal:</strong> 3-4 bay workshops with heavy equipment
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Fabrication Unit Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Metal fabrication shops with multiple grinders, sanders, and spray equipment. 
            The industrial-grade motor handles continuous heavy use.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Durability:</strong> Built for 8+ hours daily operation
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ CNC Machine Shop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            CNC machines require consistent, clean air supply for pneumatic clamping, 
            tool changers, and chip blowing. The 150L delivers reliably.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Note:</strong> Consider adding air dryer for CNC applications
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider VERX 200L If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>You have three-phase power readily available</strong></li>
          <li>• <strong>Running 4+ pneumatic tools simultaneously</strong></li>
          <li>• <strong>Heavy-duty sandblasting is a primary application</strong></li>
          <li>• <strong>24/7 continuous operation is required</strong></li>
          <li>• <strong>Planning significant future expansion</strong></li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Questions about sizing? <a href="https://wa.me/918074949635" className="underline font-semibold">Contact our industrial team</a> for a consultation.
        </p>
      </div>
    </div>
  );
}

