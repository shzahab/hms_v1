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
            <td className="px-6 py-4 text-sm text-gray-600">GX6-14A</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">9.5 kW</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Straightening Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">6-14mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Working Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">30 m/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">1800mm × 1500mm × 850mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operation Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Semi-Automatic</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Feed System</td>
            <td className="px-6 py-4 text-sm text-gray-600">Automated Continuous Feed</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Compatible Steel Types:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• TMT bars (Fe415, Fe500, Fe500D) - bent or curved scrap</li>
          <li>• Plain round bars from construction waste</li>
          <li>• Wire rod coils requiring straightening</li>
          <li>• Cold-drawn steel bars for reprocessing</li>
        </ul>
      </div>
    </div>
  );
}

