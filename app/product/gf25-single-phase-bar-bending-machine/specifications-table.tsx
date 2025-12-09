export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specification
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GF25 Single Phase
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">GF25-1PH</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600 font-semibold">8mm - 20mm TMT/HYSD bars</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">220V, Single Phase, 50Hz</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">2.2 kW / 3 HP (High Torque)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td>
            <td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">18-22 bends/minute</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">~95 kg</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">720mm × 500mm × 750mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Control Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Foot Pedal Operation</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Disc Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">320mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹35,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">🔌 Single Phase + 20mm Capacity = Unique Advantage</h4>
        <p className="text-sm text-yellow-700">
          The GF25 Single Phase uses a specially designed high-torque motor that delivers 20mm bending capacity 
          on standard 220V single-phase power. This is rare in the market - most 20mm machines require three-phase connections.
        </p>
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

