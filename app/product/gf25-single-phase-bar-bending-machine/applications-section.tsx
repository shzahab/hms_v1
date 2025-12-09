export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for GF25 Single Phase
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The GF25 Single Phase is perfect for contractors who need 20mm capacity but work at sites 
        without three-phase power. It&apos;s the bridge between entry-level machines and industrial equipment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏠 G+2 & G+3 Residential Buildings
          </h3>
          <p className="text-gray-600 mb-4">
            Three and four-story houses often specify 20mm main bars for ground floor columns. 
            The GF25 handles these with ease on single-phase power.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 20mm main column bars</li>
            <li>• 16mm secondary bars</li>
            <li>• 8-12mm stirrups</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏪 Small Commercial Buildings
          </h3>
          <p className="text-gray-600 mb-4">
            Shops, small offices, and commercial complexes up to G+3 that require 
            larger main reinforcement than residential structures.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Shop front columns</li>
            <li>• Clear span beams</li>
            <li>• Heavy-duty footings</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🌾 Rural & Semi-Urban Sites
          </h3>
          <p className="text-gray-600 mb-4">
            Many growing towns and rural areas have single-phase power only. 
            The GF25 lets you work on larger projects without electrical constraints.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Village community halls</li>
            <li>• Agricultural buildings</li>
            <li>• Rural healthcare centers</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Perfect For These Scenarios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Contractors Scaling Up
          </h3>
          <p className="text-gray-600 mb-4">
            You&apos;ve been doing G+1 houses with GF20, now you&apos;re getting G+2 and G+3 projects. 
            The GF25 handles the larger bars without needing new electrical infrastructure.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Sites Without 3-Phase Power
          </h3>
          <p className="text-gray-600 mb-4">
            Many residential sites in newer layouts don&apos;t have industrial connections yet. 
            Work with standard domestic power while still handling 20mm bars.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Individual Project Sites
          </h3>
          <p className="text-gray-600 mb-4">
            You move between different client sites rather than having a central workshop. 
            Single-phase availability everywhere makes the GF25 truly portable.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Future-Proofing Your Business
          </h3>
          <p className="text-gray-600 mb-4">
            Even if you&apos;re doing smaller projects now, having 20mm capacity means you&apos;re 
            ready when bigger opportunities come along.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Pro Tip: GF25 Single Phase Limitations</h3>
        <p className="text-yellow-700 mb-4">
          While the GF25 Single Phase bends 20mm bars, it&apos;s optimized for intermittent use rather than 
          continuous high-volume production. If you need to bend 20mm bars all day every day, consider 
          the GF25 Three Phase instead.
        </p>
        <p className="text-yellow-700">
          <strong>Best for:</strong> 50-100 bends of 20mm per day, higher volumes of 16mm and below.
        </p>
      </div>
    </div>
  );
}

