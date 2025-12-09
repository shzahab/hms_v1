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
              GQ52 Bar Cutting Machine
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">GQ52</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">8mm - 42mm TMT/HYSD bars</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">4.0 kW / 5.4 HP</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">20-28 cuts/minute</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Heavy-duty alloy steel blade</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">~280 kg</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">950mm × 550mm × 750mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Safety Features</td>
            <td className="px-6 py-4 text-sm text-gray-600">Full blade guard, Emergency stop, Motor protection</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Frame Construction</td>
            <td className="px-6 py-4 text-sm text-gray-600">Heavy-duty cast iron with steel reinforcement</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹93,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">💪 Heavy-Duty Industrial Cutter</h4>
        <p className="text-sm text-yellow-700">
          The GQ52 is designed for serious infrastructure and commercial projects. With 42mm maximum capacity and a powerful 4kW motor, 
          it handles everything from stirrups to main reinforcement bars for bridges, high-rises, and industrial structures.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover spares, consumables, blades, or damage from improper use/overloading. 
          Delivery charges as per actuals. Installation guidance provided via phone/video call.
        </p>
      </div>
    </div>
  );
}

