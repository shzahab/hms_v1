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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Bag Mixer</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">Kirloskar</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Tilting Drum Mixer</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">560 Liters</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">14 r/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">1000 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Automation Grade</td>
            <td className="px-6 py-4 text-sm text-gray-600">Manual</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Mobility</td>
            <td className="px-6 py-4 text-sm text-gray-600">Portable with Sturdy Wheels</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Mix Design Capabilities:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Standard M15, M20, M25 concrete grades</li>
          <li>• Custom mix ratios as per project requirements</li>
          <li>• Compatible with all Indian cement brands</li>
          <li>• Handles 20mm and 40mm aggregate sizes</li>
        </ul>
      </div>
    </div>
  );
}

