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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Source</td>
            <td className="px-6 py-4 text-sm text-gray-600">Engine (Air-cooled 4-cycle)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Gasoline / Diesel</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Vibrating Clutch Mode</td>
            <td className="px-6 py-4 text-sm text-gray-600">Automatic</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Centrifugal Force</td>
            <td className="px-6 py-4 text-sm text-gray-600">15 kN</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operating Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">0-4 km/h</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operation Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Automatic / Manual</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Suitable Compaction Applications:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Granular soils and sub-base compaction</li>
          <li>• Asphalt road surface compaction</li>
          <li>• Foundation and backfill compaction</li>
          <li>• Parking lot and driveway construction</li>
        </ul>
      </div>
    </div>
  );
}

