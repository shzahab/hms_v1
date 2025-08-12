
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
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model Name/Number</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">GQ42</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2kW</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimension</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1350x480x680mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Net Weight</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">350kgs</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cutting Speed</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cutting Steel Bar Diameter</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8-32mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maximum Cutting Capacity</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60mm diameter</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Type</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Automatic/Manual</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
