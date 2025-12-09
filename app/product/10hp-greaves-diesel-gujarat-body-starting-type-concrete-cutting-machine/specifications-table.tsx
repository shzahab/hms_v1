export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">10HP Greaves Gujarat Body Starting Type</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">CCM-10HP-GRV-GUJ-ST</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine</td><td className="px-6 py-4 text-sm text-gray-600">Greaves 10HP Diesel (Electric Start)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td><td className="px-6 py-4 text-sm text-gray-600">Single Cylinder, Air Cooled, Diesel</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Body/Frame</td><td className="px-6 py-4 text-sm text-gray-600">Gujarat Heavy-Duty Body</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Starting System</td><td className="px-6 py-4 text-sm text-gray-600 font-semibold text-green-700">Electric Start (Self Start) + Manual Backup</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td><td className="px-6 py-4 text-sm text-gray-600">240mm</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Capacity</td><td className="px-6 py-4 text-sm text-gray-600">Up to 600mm diameter</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">35 Liters (Wet Cutting)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">5.5 Liters</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Consumption</td><td className="px-6 py-4 text-sm text-gray-600">~1.5-2 Liters/Hour</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Battery</td><td className="px-6 py-4 text-sm text-gray-600">12V with charging system</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~140 kg (without blade)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months* + Greaves Engine Warranty</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹1,15,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">⚡ Electric Start = One-Button Convenience</h4>
        <p className="text-sm text-green-700">
          The <strong>Starting Type</strong> model includes electric start system - just press a button to start the engine. 
          No more hand cranking in cold mornings or after long breaks. Includes <strong>12V battery, starter motor, and charging system</strong>. 
          Manual backup start also available if battery is low. Worth the extra ₹20,000 for <strong>professional daily use</strong>.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty on machine body, Gujarat frame, and electric start system. Greaves engine warranty through authorized Greaves service centers.
          Warranty does not cover diamond blades, consumables, battery wear, or damage from improper use. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

