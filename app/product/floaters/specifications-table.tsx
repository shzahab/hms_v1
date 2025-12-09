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
            <td className="px-6 py-4 text-sm text-gray-600">FWT48</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Walk Behind Power Trowel</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Max Output</td>
            <td className="px-6 py-4 text-sm text-gray-600">7.0 kW / 9.0 HP</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Speed Range</td>
            <td className="px-6 py-4 text-sm text-gray-600">70-125 RPM (Adjustable)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">2080mm × 1250mm × 1020mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">48 inch (1220mm)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operation Mode</td>
            <td className="px-6 py-4 text-sm text-gray-600">Walk Behind (Push-Type)</td>
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
          <li>• Float finishing for surface leveling</li>
          <li>• Pan finishing for smooth textures</li>
          <li>• Combination blade finishing</li>
          <li>• Final surface polishing</li>
        </ul>
      </div>
    </div>
  );
}

