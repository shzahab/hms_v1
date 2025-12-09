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
              5HP Greaves Diesel Model
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">CCM-5HP-GRV</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine</td>
            <td className="px-6 py-4 text-sm text-gray-600">Greaves 5HP Diesel Engine</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Single Cylinder, Air Cooled, Diesel</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td>
            <td className="px-6 py-4 text-sm text-gray-600">240mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">Up to 500mm diameter</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">35 Liters (Wet Cutting)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Material</td>
            <td className="px-6 py-4 text-sm text-gray-600">Concrete, Asphalt, Reinforced Concrete</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Tank Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">3.5 Liters</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operating Mode</td>
            <td className="px-6 py-4 text-sm text-gray-600">Manual Push with Handle</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Depth Adjustment</td>
            <td className="px-6 py-4 text-sm text-gray-600">Handle Rotation (Graduated)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">~95 kg (without blade)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹55,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Why Greaves 5HP Diesel?</h4>
        <p className="text-sm text-yellow-700">
          Greaves is India&apos;s most trusted diesel engine brand with service centers across the country. 
          The 5HP model offers the perfect balance of power and fuel economy for small to medium concrete cutting projects.
          Diesel engines provide <strong>better torque at low RPM</strong> and <strong>lower running costs</strong> compared to petrol alternatives.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects on the machine body and components. 
          Greaves engine warranty is handled separately through authorized Greaves service centers. 
          Warranty does not cover diamond blades, consumables, or damage from improper use. 
          Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

