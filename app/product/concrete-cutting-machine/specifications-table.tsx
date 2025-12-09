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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td>
            <td className="px-6 py-4 text-sm text-gray-600">240mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Width</td>
            <td className="px-6 py-4 text-sm text-gray-600">10-12mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade/Disk Size</td>
            <td className="px-6 py-4 text-sm text-gray-600">600mm (24 inch)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">35 Liters</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Depth Adjustment</td>
            <td className="px-6 py-4 text-sm text-gray-600">Handle Rotation (Precision Control)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Driving Method</td>
            <td className="px-6 py-4 text-sm text-gray-600">Manual Push</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">930mm × 565mm × 1020mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Source</td>
            <td className="px-6 py-4 text-sm text-gray-600">Petrol/Diesel Engine</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Compatible Blade Types:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Diamond blades for concrete and reinforced concrete</li>
          <li>• Asphalt cutting blades for road surfaces</li>
          <li>• General-purpose blades for mixed materials</li>
          <li>• Green concrete blades for fresh concrete cutting</li>
        </ul>
      </div>
    </div>
  );
}

