export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Model Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bending Diameter
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Weight (kg)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dimensions (mm)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Motor Power
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Speed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GF20</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contact for details</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contact for details</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contact for details</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Contact for details</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GW42</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">850x740x820mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4hp 3phase</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 r/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GW52</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">550</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">850x740x820mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4hp 3phase</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 r/min</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 