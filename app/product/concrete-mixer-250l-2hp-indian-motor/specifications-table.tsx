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
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Heavy-Duty Indian Motor</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">250 Liters</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">2 HP Indian Motor</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Origin</td>
            <td className="px-6 py-4 text-sm text-gray-600">Made in India (Premium Quality)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">220V, Single Phase, 50Hz</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Tilting Drum (Heavy Gauge Steel)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">16-18 RPM</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Mixing Output</td>
            <td className="px-6 py-4 text-sm text-gray-600">~160-180 Liters per batch</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Frame Construction</td>
            <td className="px-6 py-4 text-sm text-gray-600">Extra Heavy-Duty Steel (Thicker Gauge)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Build Quality</td>
            <td className="px-6 py-4 text-sm text-gray-600">Professional/Commercial Grade</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹58,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Why Premium Pricing?</h4>
        <p className="text-sm text-yellow-700">
          The ₹58,000 price reflects superior build quality - thicker steel frame, quality Indian 2HP motor designed for Indian voltage conditions, 
          better bearings and gears, and construction built for <strong>years of professional daily use</strong>. This is not an entry-level mixer.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover motor burnout due to voltage fluctuations, 
          drum damage from overloading, or wear items. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

