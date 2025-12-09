export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GUTE 32mm</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td><td className="px-6 py-4 text-sm text-gray-600 font-semibold">GUTE (Imported)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Capacity</td><td className="px-6 py-4 text-sm text-gray-600">16mm - 32mm TMT/HYSD bars</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td><td className="px-6 py-4 text-sm text-gray-600">415V, Three Phase, 50Hz</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td><td className="px-6 py-4 text-sm text-gray-600">3.5 kW / 4.7 HP</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td><td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td><td className="px-6 py-4 text-sm text-gray-600">12-22 bends/minute</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~340 kg</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Build Quality</td><td className="px-6 py-4 text-sm text-gray-600">Premium - Precision ground gears, imported bearings</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Control Type</td><td className="px-6 py-4 text-sm text-gray-600">Digital Control Panel</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months*</td></tr>
          <tr className="bg-blue-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-blue-700">₹1,15,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">🏆 Premium Quality Assurance</h4>
        <p className="text-sm text-purple-700">GUTE machines undergo stringent quality testing before export. Each unit comes with quality certification.</p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover spares, consumables, or damage from improper use/manual misuse. 
          Delivery charges as per actuals. Installation and operator training available at additional cost.
        </p>
      </div>
    </div>
  );
}

