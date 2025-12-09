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
              GF20
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GW42
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GW52
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Bar Diameter</td>
            <td className="px-6 py-4 text-sm text-gray-600">25mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">32mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">42mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Angle Range</td>
            <td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td>
            <td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td>
            <td className="px-6 py-4 text-sm text-gray-600">0° - 180°</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">2.2 kW / 3 HP</td>
            <td className="px-6 py-4 text-sm text-gray-600">3.0 kW / 4 HP</td>
            <td className="px-6 py-4 text-sm text-gray-600">4 HP</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bending Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">28 bends/min</td>
            <td className="px-6 py-4 text-sm text-gray-600">10-20 bends/min</td>
            <td className="px-6 py-4 text-sm text-gray-600">15-25 bends/min</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">90 kg</td>
            <td className="px-6 py-4 text-sm text-gray-600">280 kg</td>
            <td className="px-6 py-4 text-sm text-gray-600">550 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">800mm × 530mm × 830mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">850mm × 740mm × 820mm</td>
            <td className="px-6 py-4 text-sm text-gray-600">850mm × 740mm × 820mm</td>
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