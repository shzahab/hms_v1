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
              VERX 150L
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">VERX</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Tank Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">150 Litres</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">3 HP / 2.2 kW</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">220V Single Phase / 415V Three Phase*</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Pressure</td>
            <td className="px-6 py-4 text-sm text-gray-600">10 bar / 145 PSI</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Air Displacement</td>
            <td className="px-6 py-4 text-sm text-gray-600">~350 LPM (Litres Per Minute)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Compressor Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Belt Drive, Oil Lubricated</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cylinder Configuration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Twin Cylinder, V-Type</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Weight (Approx)</td>
            <td className="px-6 py-4 text-sm text-gray-600">~95 kg</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">1200mm × 450mm × 900mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Noise Level</td>
            <td className="px-6 py-4 text-sm text-gray-600">~78 dB</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹40,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Industrial Grade Performance</h4>
        <p className="text-sm text-blue-700">
          The 150L tank with 3 HP motor delivers industrial-grade performance for workshops and small factories. 
          Capable of powering multiple pneumatic tools simultaneously. Available in both single-phase and three-phase variants.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-xs text-yellow-700">
          <strong>*Power Supply Note:</strong> Available in both 220V single-phase and 415V three-phase variants. 
          Three-phase recommended for heavy continuous use. Please specify your requirement when ordering.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover consumables, wear parts, belts, or damage from improper use/voltage fluctuations. 
          Delivery and installation charges as per actuals.
        </p>
      </div>
    </div>
  );
}

