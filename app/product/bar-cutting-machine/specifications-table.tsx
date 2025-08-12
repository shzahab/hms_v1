
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
              Cutting Diameter
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
              Cutting Speed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GQ40</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8-32mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">320</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">850x740x820</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4kW</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 cuts/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GQ50</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-40mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">950x780x900mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.5kW</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12-18 cuts/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GQ60</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12-50mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">650</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1050x850x950mm</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7.5kW 3Phase</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-15 cuts/min</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 
