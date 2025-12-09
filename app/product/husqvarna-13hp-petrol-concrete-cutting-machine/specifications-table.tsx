export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Husqvarna 13HP Petrol Model</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td><td className="px-6 py-4 text-sm text-gray-600">CCM-13HP-HUSQ</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine</td><td className="px-6 py-4 text-sm text-gray-600">Husqvarna 13HP Petrol</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Type</td><td className="px-6 py-4 text-sm text-gray-600">Single Cylinder, Air Cooled, 4-Stroke OHV</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Origin</td><td className="px-6 py-4 text-sm text-gray-600">Swedish Engineering</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Cutting Depth</td><td className="px-6 py-4 text-sm text-gray-600">240mm</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Capacity</td><td className="px-6 py-4 text-sm text-gray-600">Up to 600mm diameter</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Water Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">35 Liters (Wet Cutting)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Tank Capacity</td><td className="px-6 py-4 text-sm text-gray-600">5.5 Liters</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Consumption</td><td className="px-6 py-4 text-sm text-gray-600">~2-2.5 Liters/Hour</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Starting System</td><td className="px-6 py-4 text-sm text-gray-600">Recoil (Pull Start)</td></tr>
          <tr><td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td><td className="px-6 py-4 text-sm text-gray-600">~110 kg (without blade)</td></tr>
          <tr className="bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td><td className="px-6 py-4 text-sm text-gray-600">6 Months*</td></tr>
          <tr className="bg-green-50"><td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td><td className="px-6 py-4 text-sm font-bold text-green-700">₹65,000 + GST (18%)</td></tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <h4 className="font-semibold text-orange-800 mb-2">🇸🇪 Swedish Engineering at Indian Price</h4>
        <p className="text-sm text-orange-700">
          Husqvarna is a <strong>premium Swedish brand</strong> with over 330 years of manufacturing heritage. 
          Known for professional outdoor power equipment, their engines feature advanced air filtration and efficient combustion. 
          At <strong>₹65,000</strong>, this is the <strong>best value 13HP petrol cutter</strong> in our range - ₹10,000 less than Honda with comparable performance.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects on machine body and components.
          Warranty does not cover diamond blades, consumables, or damage from improper use. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

