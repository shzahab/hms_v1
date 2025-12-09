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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Make</td>
            <td className="px-6 py-4 text-sm text-gray-600">Indian</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Frequency</td>
            <td className="px-6 py-4 text-sm text-gray-600">50 Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor</td>
            <td className="px-6 py-4 text-sm text-gray-600">2HP Single Phase</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Source</td>
            <td className="px-6 py-4 text-sm text-gray-600">Electric</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Working Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">30 m/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operation Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Automatic</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Shaft Options</td>
            <td className="px-6 py-4 text-sm text-gray-600">Flexible (Multiple Lengths Available)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year Comprehensive</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-2">Available Needle Head Sizes:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 25mm diameter for narrow columns and dense reinforcement</li>
          <li>• 32mm diameter for standard column and beam work</li>
          <li>• 40mm diameter for slabs and foundations</li>
          <li>• 50mm diameter for mass concrete applications</li>
        </ul>
      </div>
    </div>
  );
}

