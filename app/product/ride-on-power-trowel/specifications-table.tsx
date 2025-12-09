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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model</td>
            <td className="px-6 py-4 text-sm text-gray-600">QUM80</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Ride-On</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">Double 36 inch (914mm × 2)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Working Width</td>
            <td className="px-6 py-4 text-sm text-gray-600">1820mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">60-140 RPM (Adjustable)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Air-cooled 4-cycle gasoline</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Source</td>
            <td className="px-6 py-4 text-sm text-gray-600">Engine</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">1980mm × 1020mm × 1500mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Finishing Capabilities:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Float finishing for initial surface leveling</li>
          <li>• Pan finishing for smooth, dense surfaces</li>
          <li>• Combination blade finishing for versatile operations</li>
          <li>• Burnish finishing for high-gloss industrial floors</li>
        </ul>
      </div>
    </div>
  );
}

