export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">10HP Greaves Gujarat Body Model</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">CCM-10HP-GRV-GUJ</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine</td><td className="px-6 py-4 text-sm text-gray-600">Greaves 10HP Diesel</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td><td className="px-6 py-4 text-sm text-gray-600">Single Cylinder, Air Cooled, Diesel</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Body/Frame</td><td className="px-6 py-4 text-sm text-gray-600">Gujarat Heavy-Duty Body</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td><td className="px-6 py-4 text-sm text-gray-600">240mm</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Capacity</td><td className="px-6 py-4 text-sm text-gray-600">Up to 600mm diameter</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">35 Liters (Wet Cutting)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">5.5 Liters</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Consumption</td><td className="px-6 py-4 text-sm text-gray-600">~1.5-2 Liters/Hour</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Starting System</td><td className="px-6 py-4 text-sm text-gray-600">Hand Crank (Manual Start)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~130 kg (without blade)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months* + Greaves Engine Warranty</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹95,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">🏭 Gujarat Body = Heavy-Duty Construction</h4>
        <p className="text-sm text-blue-700">
          Gujarat-manufactured machine bodies are renowned for <strong>superior build quality</strong>. 
          Features include <strong>thicker steel frame, better welding quality, reinforced joints</strong>, and components built to withstand 
          the demands of professional daily use. Combined with the reliable Greaves 10HP diesel, this is the <strong>professional road contractor&apos;s choice</strong>.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty on machine body and Gujarat frame. Greaves engine warranty through authorized Greaves service centers.
          Warranty does not cover diamond blades, consumables, or damage from improper use. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

