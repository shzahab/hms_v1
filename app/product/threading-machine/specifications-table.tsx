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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">HMS</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Name/Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">CDRG 45</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">16-40mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Main Shaft Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">40-62 r/m</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Max Rolling Length</td>
            <td className="px-6 py-4 text-sm text-gray-600">100mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Thread Pitches Available</td>
            <td className="px-6 py-4 text-sm text-gray-600">1.75, 2.0, 2.5, 3.0mm</td>
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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Thread Pitch Compatibility:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 1.75mm pitch - for 16-20mm diameter bars</li>
          <li>• 2.0mm pitch - for 20-25mm diameter bars</li>
          <li>• 2.5mm pitch - for 25-32mm diameter bars</li>
          <li>• 3.0mm pitch - for 32-40mm diameter bars</li>
        </ul>
      </div>
    </div>
  );
}

