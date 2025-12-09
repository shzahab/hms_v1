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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Name/Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">CDRG 45</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">16-40mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bend Round Steel Bar Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">6-42mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bend HRB400 Ribbed Steel Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">6-42mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Diameter of Working Disc</td>
            <td className="px-6 py-4 text-sm text-gray-600">400mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Adjustable Bending Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">5-10 r/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Semi-Automatic</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Net Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">380 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">850mm × 740mm × 820mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Bending Capabilities:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Precise angle control for consistent bends</li>
          <li>• Suitable for stirrups, hooks, and complex shapes</li>
          <li>• Works with TMT bars and mild steel</li>
          <li>• Multiple bend angles per operation</li>
        </ul>
      </div>
    </div>
  );
}

