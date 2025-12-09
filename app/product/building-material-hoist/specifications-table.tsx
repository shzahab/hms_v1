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
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Make</td>
            <td className="px-6 py-4 text-sm text-gray-600">Coimbatore</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">3HP Single Phase</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Lifting Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">350 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Material Hoist</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Mount Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Fixed</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Rope Length</td>
            <td className="px-6 py-4 text-sm text-gray-600">60 meters</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Rope Thickness</td>
            <td className="px-6 py-4 text-sm text-gray-600">8mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Clutch</td>
            <td className="px-6 py-4 text-sm text-gray-600">Yes (Controlled Descent)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Trolley Option</td>
            <td className="px-6 py-4 text-sm text-gray-600">Without Trolley (Optional Available)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Safety Features Included:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Emergency brake system for instant stopping</li>
          <li>• Clutch mechanism for controlled descent</li>
          <li>• Weather-resistant construction for outdoor use</li>
          <li>• Overload protection to prevent accidents</li>
        </ul>
      </div>
    </div>
  );
}

