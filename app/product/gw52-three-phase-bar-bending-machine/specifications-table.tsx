export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GW52</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">GW52-J</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Capacity</td><td className="px-6 py-4 text-sm text-gray-600 font-semibold">16mm - 42mm TMT/HYSD bars</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td><td className="px-6 py-4 text-sm text-gray-600">415V, Three Phase, 50Hz</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td><td className="px-6 py-4 text-sm text-gray-600">4.0 kW / 5.4 HP</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td><td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td><td className="px-6 py-4 text-sm text-gray-600">8-15 bends/minute</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~550 kg</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td><td className="px-6 py-4 text-sm text-gray-600">950mm × 850mm × 900mm</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Control Type</td><td className="px-6 py-4 text-sm text-gray-600">Digital Control Panel + Foot Pedal</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Disc Diameter</td><td className="px-6 py-4 text-sm text-gray-600">500mm</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months*</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹95,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <h4 className="font-semibold text-red-800 mb-2">⚠️ Heavy Machine - Site Requirements</h4>
        <p className="text-sm text-red-700">At 550kg, the GW52 requires crane assistance for positioning. Ensure your site has suitable foundation/floor and access for heavy equipment delivery.</p>
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

