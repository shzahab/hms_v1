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
            <td className="px-6 py-4 text-sm text-gray-600">GWH32E</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">3.5kW, 1440 r/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bend HRB400 Ribbed Steel Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">16-28mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bend Round Steel Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">16-32mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Adjustable Bending Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">5-10 rings/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Minimum Working Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">&gt;300mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Net Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">350 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operation Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Automatic / Manual</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Compatible Steel Grades:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Fe415 TMT bars for standard construction</li>
          <li>• Fe500 and Fe500D for high-strength applications</li>
          <li>• Fe550D for earthquake-resistant structures</li>
          <li>• Plain round steel bars for general fabrication</li>
        </ul>
      </div>
    </div>
  );
}

