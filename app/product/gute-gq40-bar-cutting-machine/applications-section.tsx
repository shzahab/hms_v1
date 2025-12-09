export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for GUTE GQ40 Bar Cutting Machine
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The GUTE GQ40 is the choice for professionals who value quality and reliability. 
        Here&apos;s where this premium machine excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏢 Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Office buildings, shopping complexes, hotels. Where consistent quality matters 
            and downtime costs money.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Column main bars (20-32mm)</li>
            <li>• Beam reinforcement</li>
            <li>• Slab cutting work</li>
            <li>• Foundation bars</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏭 Fabrication Yards
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume fabrication operations where machine reliability directly impacts profits.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Daily production runs</li>
            <li>• Multiple job orders</li>
            <li>• Quality-critical contracts</li>
            <li>• Long-term fabrication work</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Mid-Scale Infrastructure
          </h3>
          <p className="text-gray-600 mb-4">
            Roads, small bridges, culverts where 32mm capacity is sufficient and quality is paramount.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Road infrastructure</li>
            <li>• Small bridge work</li>
            <li>• Box culverts</li>
            <li>• Retaining walls</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the GUTE GQ40?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Quality-Focused Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If you&apos;ve experienced breakdowns with cheaper machines, GUTE GQ40 delivers the reliability 
            you need. Less downtime, consistent performance.
          </p>
          <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
            <strong>Benefit:</strong> Premium quality with local motor serviceability
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Established Fabrication Businesses
          </h3>
          <p className="text-gray-600 mb-4">
            Your reputation depends on quality and delivery. GUTE GQ40 delivers consistent cuts 
            that keep your customers happy and coming back.
          </p>
          <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
            <strong>ROI:</strong> Fewer rejects, faster turnaround, better margins
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Contractors Upgrading from Budget Machines
          </h3>
          <p className="text-gray-600 mb-4">
            Tired of frequent repairs and inconsistent cuts? The GUTE GQ40 is the upgrade that 
            pays for itself in reduced maintenance and better results.
          </p>
          <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
            <strong>Smart move:</strong> Stop throwing money at repairs
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Equipment Rental Businesses
          </h3>
          <p className="text-gray-600 mb-4">
            Premium machines withstand rental abuse better. GUTE quality means longer service life 
            and fewer repair calls from customers.
          </p>
          <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
            <strong>Business sense:</strong> Higher rental rates, lower maintenance
          </div>
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold text-blue-800 mb-3">💡 GUTE GQ40 vs GQ52: Which to Choose?</h3>
        <div className="text-blue-700 space-y-2">
          <p><strong>Choose GUTE GQ40 (₹1,10,000) if:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your work rarely needs bars above 32mm</li>
            <li>You value build quality and longevity over maximum capacity</li>
            <li>You want premium components with easy local motor service</li>
            <li>Your budget allows the ₹17K premium over GQ52</li>
          </ul>
          <p className="mt-4"><strong>Choose GQ52 (₹93,000) if:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You need full 42mm capacity for infrastructure work</li>
            <li>Maximum capacity is more important than premium quality</li>
            <li>Budget is the primary concern</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

