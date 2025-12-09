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
            <td className="px-6 py-4 text-sm text-gray-600">Full Bag Diesel Mixer</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">500 Liters (Full 1-Bag)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 HP Diesel Engine</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">Kirloskar (India&apos;s Most Trusted)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Diesel</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Consumption</td>
            <td className="px-6 py-4 text-sm text-gray-600">~1-1.5 Liters/Hour</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Tilting Drum (Heavy Gauge Steel)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">14 RPM</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Mixing Output</td>
            <td className="px-6 py-4 text-sm text-gray-600">~350-400 Liters per batch</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Frame Construction</td>
            <td className="px-6 py-4 text-sm text-gray-600">Extra Heavy-Duty Industrial Grade</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Mobility</td>
            <td className="px-6 py-4 text-sm text-gray-600">Portable with Heavy-Duty Wheels</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹1,30,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Why Kirloskar Engine?</h4>
        <p className="text-sm text-yellow-700">
          Kirloskar is India&apos;s most trusted diesel engine manufacturer with <strong>over 75 years of heritage</strong>. 
          Their engines are known for fuel efficiency, reliability, and easy serviceability. Parts and service are available 
          at any diesel mechanic across India - critical for construction equipment that needs minimal downtime.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Engine warranty as per Kirloskar terms. 
          Does not cover damage from improper fuel, overloading, or misuse. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

