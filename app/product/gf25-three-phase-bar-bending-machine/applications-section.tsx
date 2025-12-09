export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for GF25 Three Phase
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The GF25 Three Phase is engineered for professional contractors handling medium to large scale projects. 
        With 20mm capacity and industrial power, it&apos;s the workhorse for serious construction businesses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏢 Apartment Buildings (G+3/G+4)
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-story apartment complexes require significant quantities of 16-20mm main bars 
            along with 8-10mm stirrups. Handle both efficiently with one machine.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 20mm column main bars</li>
            <li>• 16mm beam reinforcement</li>
            <li>• High-volume stirrups</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏭 Fabrication Yards
          </h3>
          <p className="text-gray-600 mb-4">
            Small to medium fabrication businesses serving multiple contractors. 
            The industrial duty cycle handles daily production demands reliably.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Custom bend orders</li>
            <li>• Batch production</li>
            <li>• Multi-client servicing</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Shopping complexes, office buildings, and light industrial structures 
            where professional-grade equipment is expected.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Commercial complexes</li>
            <li>• Office buildings</li>
            <li>• Warehouse structures</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        The Right Choice For Professional Operations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Multi-Project Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Running 4-6 projects simultaneously? The GF25 3-Phase handles the combined 
            workload with its high throughput and continuous operation capability.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Typical output:</strong> 500-800 bends per day across all sizes
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Construction Company Fleets
          </h3>
          <p className="text-gray-600 mb-4">
            Adding to your equipment fleet? The GF25 3-Phase is the reliable 20mm machine 
            that your operators can depend on project after project.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Fleet role:</strong> Primary 20mm machine for most projects
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Growing Fabrication Businesses
          </h3>
          <p className="text-gray-600 mb-4">
            Starting or expanding a fabrication supply business? The GF25 3-Phase is 
            affordable enough to start with, capable enough to grow with.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Business case:</strong> ROI in 6-8 months of operation
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Institutional Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Schools, hospitals, and government buildings often specify higher-grade 
            construction requiring 20mm bars. Meet specifications reliably.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Compliance:</strong> Meets IS standard requirements
          </div>
        </div>
      </div>

      <div className="mt-10 bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-3">🎯 When GF25 3-Phase is the Right Choice</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-700">
          <div>
            <h4 className="font-semibold mb-2">Project Size</h4>
            <ul className="text-sm space-y-1">
              <li>• G+3 and above buildings</li>
              <li>• 3+ projects running</li>
              <li>• Commercial construction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Daily Volume</h4>
            <ul className="text-sm space-y-1">
              <li>• 200+ bends per day</li>
              <li>• Regular 20mm work</li>
              <li>• 6+ hours operation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Business Stage</h4>
            <ul className="text-sm space-y-1">
              <li>• Established contractors</li>
              <li>• Growing businesses</li>
              <li>• Fabrication units</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

