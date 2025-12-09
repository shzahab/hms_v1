export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-orange-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HMS Made in India</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td><td className="px-6 py-4 text-sm text-gray-600 font-semibold">HMS India (100% Indian)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Capacity</td><td className="px-6 py-4 text-sm text-gray-600">16mm - 32mm TMT/HYSD bars</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td><td className="px-6 py-4 text-sm text-gray-600">415V, Three Phase, 50Hz</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td><td className="px-6 py-4 text-sm text-gray-600">4.0 kW / 5.4 HP (Premium Indian Motor)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td><td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td><td className="px-6 py-4 text-sm text-gray-600">12-20 bends/minute</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~380 kg</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Frame Material</td><td className="px-6 py-4 text-sm text-gray-600">Premium Bhilai Steel (Extra thick)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Gears</td><td className="px-6 py-4 text-sm text-gray-600">CNC Machined, Hardened</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bearings</td><td className="px-6 py-4 text-sm text-gray-600">Heavy-duty sealed bearings</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Expected Life</td><td className="px-6 py-4 text-sm text-gray-600">15-20 years with proper maintenance</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months*</td></tr>
          <tr className="bg-orange-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-orange-700">₹1,55,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <h4 className="font-semibold text-orange-800 mb-2">🇮🇳 100% Made in India</h4>
        <p className="text-sm text-orange-700">Every component sourced from Indian manufacturers. Supporting Atmanirbhar Bharat with premium quality that rivals imports.</p>
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

