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
              GUTE GQ40 with Indian Motor
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">GUTE (Premium Imported)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">GQ40</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Capacity</td>
            <td className="px-6 py-4 text-sm text-gray-600">8mm - 32mm TMT/HYSD bars</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Power Supply</td>
            <td className="px-6 py-4 text-sm text-gray-600">415V, 3-Phase, 50Hz</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Motor</td>
            <td className="px-6 py-4 text-sm text-gray-600">3.5 kW / 4.7 HP Indian Motor</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">22-30 cuts/minute</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Blade Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Premium alloy steel (longer life)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">~320 kg</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">900mm × 520mm × 720mm</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Build Quality</td>
            <td className="px-6 py-4 text-sm text-gray-600">Precision-ground gears, superior bearings</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Safety Features</td>
            <td className="px-6 py-4 text-sm text-gray-600">Full guard, E-stop, Motor protection, Overload cutoff</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹1,10,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">🏆 Premium GUTE Quality + Indian Motor Reliability</h4>
        <p className="text-sm text-blue-700">
          This model combines GUTE&apos;s globally-recognized precision engineering with an Indian motor designed for local conditions. 
          You get premium build quality with easy serviceability and spare parts availability across India.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects. Does not cover spares, consumables, blades, or damage from improper use. 
          Indian motor backed by nationwide service network. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

