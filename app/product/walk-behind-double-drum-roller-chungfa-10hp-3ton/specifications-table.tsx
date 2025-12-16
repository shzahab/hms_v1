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
              Chungfa 10HP Double Drum Roller
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">Chungfa</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">10 HP Diesel</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Diesel</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Start Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Self-Start with Battery (Included)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Compaction Force</td>
            <td className="px-6 py-4 text-sm text-gray-600">3 Ton</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Configuration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Double Drum (Tandem)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operating Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Walk Behind</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Vibration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Yes - Vibratory Compaction</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank</td>
            <td className="px-6 py-4 text-sm text-gray-600">Included with Sprinkler System</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹1,85,000 + GST (18%) <span className="text-orange-600 ml-2">Save ₹5,000</span></td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <h4 className="font-semibold text-orange-800 mb-2">💰 Budget-Friendly Choice</h4>
        <p className="text-sm text-orange-700">
          The Chungfa model offers the same 10HP power and 3-ton compaction as the Greaves model, but at ₹5,000 less. 
          The roller body, drums, and all mechanical components are identical - only the engine brand differs. 
          Choose Chungfa if you prefer cost savings over brand premium.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover spares, consumables, or damage from improper use/misuse. 
          Delivery charges as per actuals. Installation support and operator training available.
        </p>
      </div>
    </div>
  );
}

