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
              GQ40
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GQ42
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GQ50
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Bar Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">32mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">42mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">50mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">35 cuts/min</td>
            <td className="px-6 py-4 text-sm text-gray-600">32 cuts/min</td>
            <td className="px-6 py-4 text-sm text-gray-600">25 cuts/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">2.2 kW / 3 HP</td>
            <td className="px-6 py-4 text-sm text-gray-600">3.2 kW / 4.3 HP</td>
            <td className="px-6 py-4 text-sm text-gray-600">4.0 kW / 5.4 HP</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Standard Cutting Range</td>
            <td className="px-6 py-4 text-sm text-gray-600">6-32mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">8-42mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">10-50mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">280 kg</td>
            <td className="px-6 py-4 text-sm text-gray-600">350 kg</td>
            <td className="px-6 py-4 text-sm text-gray-600">480 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">1200mm × 450mm × 650mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">1350mm × 480mm × 680mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">1500mm × 550mm × 750mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year</td>
            <td className="px-6 py-4 text-sm text-gray-600">1 Year</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
