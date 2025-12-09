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
            <td className="px-6 py-4 text-sm text-gray-600">FTR100E</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Tamping Rammer / Jumping Rammer</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Impacting Force</td>
            <td className="px-6 py-4 text-sm text-gray-600">20 kN</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Jumping Height</td>
            <td className="px-6 py-4 text-sm text-gray-600">45-70mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Shoe Size (L×W)</td>
            <td className="px-6 py-4 text-sm text-gray-600">300mm × 330mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">100 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">600mm × 600mm × 1000mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Compaction Applications:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Trench backfill compaction</li>
          <li>• Foundation soil compaction</li>
          <li>• Pipe bedding and utility trenches</li>
          <li>• Confined area and repair work</li>
        </ul>
      </div>
    </div>
  );
}

