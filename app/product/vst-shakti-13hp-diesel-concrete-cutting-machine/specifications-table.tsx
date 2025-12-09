export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VST Shakti 13HP Diesel Model</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">CCM-13HP-VST</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine</td><td className="px-6 py-4 text-sm text-gray-600">VST Shakti 13HP Diesel</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td><td className="px-6 py-4 text-sm text-gray-600">Single Cylinder, Water Cooled, Diesel</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Origin</td><td className="px-6 py-4 text-sm text-gray-600">Made in India (VST Tillers Tractors Ltd)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td><td className="px-6 py-4 text-sm text-gray-600">240mm</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Capacity</td><td className="px-6 py-4 text-sm text-gray-600">Up to 600mm diameter</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">35 Liters (Wet Cutting)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">7 Liters</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Consumption</td><td className="px-6 py-4 text-sm text-gray-600">~1.8-2.2 Liters/Hour</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Starting System</td><td className="px-6 py-4 text-sm text-gray-600">Hand Crank (Manual Start)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Cooling System</td><td className="px-6 py-4 text-sm text-gray-600">Water Cooled (for sustained heavy loads)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~150 kg (without blade)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months* + VST Engine Warranty</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹1,30,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-2">🔥 Maximum Power: VST Shakti 13HP Diesel</h4>
        <p className="text-sm text-purple-700">
          The <strong>VST Shakti 13HP</strong> is the most powerful diesel engine in our range. Features <strong>water cooling</strong> for sustained heavy-duty operation 
          without overheating. VST Tillers Tractors Ltd is a renowned Indian manufacturer with <strong>extensive dealer network</strong> across India. 
          This is the <strong>top choice for infrastructure contractors</strong> who need maximum cutting power and reliability.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty on machine body and components. VST Shakti engine warranty through authorized VST service centers.
          Warranty does not cover diamond blades, consumables, or damage from improper use. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

