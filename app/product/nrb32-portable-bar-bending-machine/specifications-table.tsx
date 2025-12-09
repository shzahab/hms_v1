export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-green-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NRB32 Portable</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">NRB32</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Capacity</td><td className="px-6 py-4 text-sm text-gray-600 font-semibold">Up to 32mm TMT/HYSD bars</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td><td className="px-6 py-4 text-sm text-gray-600">415V, Three Phase, 50Hz</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td><td className="px-6 py-4 text-sm text-gray-600">3.0 kW / 4 HP</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td><td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td><td className="px-6 py-4 text-sm text-gray-600">10-18 bends/minute</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-green-600 font-semibold">~180 kg (Portable)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td><td className="px-6 py-4 text-sm text-gray-600">750mm × 600mm × 750mm (Compact)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Portability Features</td><td className="px-6 py-4 text-sm text-gray-600">Integrated handles, balanced design</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Workers to Move</td><td className="px-6 py-4 text-sm text-gray-600">4 workers (no crane needed)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months*</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹95,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">🚚 Designed for Portability</h4>
        <p className="text-sm text-green-700">Unlike standard 32mm machines (280-320kg), the NRB32 at 180kg with integrated handles is truly portable. 4 workers can load/unload without crane assistance.</p>
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

