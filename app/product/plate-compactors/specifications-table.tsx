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
            <td className="px-6 py-4 text-sm text-gray-600">FPC160</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">4 kW, 1440 r/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Centrifugal Force</td>
            <td className="px-6 py-4 text-sm text-gray-600">30 kN</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Vibration Frequency</td>
            <td className="px-6 py-4 text-sm text-gray-600">95 Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Plate Size (L×W)</td>
            <td className="px-6 py-4 text-sm text-gray-600">650mm × 500mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Net Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">250 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">865mm × 550mm × 1120mm</td>
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
          <li>• Granular and mixed soils in trenches</li>
          <li>• Backfill compaction around structures</li>
          <li>• Paver base and sub-base preparation</li>
          <li>• Pipe bedding and utility trench compaction</li>
        </ul>
      </div>
    </div>
  );
}

