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
              VERX 200L
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
            <td className="px-6 py-4 text-sm text-gray-600">200 Litres</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">5 HP / 3.7 kW</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, Three Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Maximum Pressure</td>
            <td className="px-6 py-4 text-sm text-gray-600">12 bar / 175 PSI</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Air Displacement</td>
            <td className="px-6 py-4 text-sm text-gray-600">~450 LPM (Litres Per Minute)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Compressor Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Belt Drive, Oil Lubricated, Two-Stage</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cylinder Configuration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Twin Cylinder, Two-Stage Compression</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Weight (Approx)</td>
            <td className="px-6 py-4 text-sm text-gray-600">~120 kg</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">1400mm × 500mm × 1000mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Noise Level</td>
            <td className="px-6 py-4 text-sm text-gray-600">~80 dB</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Duty Cycle</td>
            <td className="px-6 py-4 text-sm text-gray-600">Continuous Duty</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹52,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Maximum Capacity for Heavy Industrial Use</h4>
        <p className="text-sm text-blue-700">
          The VERX 200L is our flagship compressor with two-stage compression for maximum pressure and efficiency. 
          Designed for factories, large workshops, and industrial applications requiring continuous high-volume air supply for multiple workstations.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-xs text-yellow-700">
          <strong>⚡ Three-Phase Required:</strong> This compressor requires 415V three-phase power supply. 
          Ensure your facility has adequate three-phase infrastructure with proper MCB/starter before purchase.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects only. Does not cover consumables, wear parts, belts, or damage from improper use/voltage fluctuations. 
          Delivery, installation, and commissioning charges as per actuals.
        </p>
      </div>
    </div>
  );
}

