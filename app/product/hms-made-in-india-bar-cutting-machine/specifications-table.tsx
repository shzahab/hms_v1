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
              HMS Made in India Bar Cutting Machine
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">HMS India (100% Made in India)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Model Number</td>
            <td className="px-6 py-4 text-sm text-gray-600">HMS-BC32-INDIA</td>
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
            <td className="px-6 py-4 text-sm text-gray-600">4.0 kW / 5.4 HP Premium Indian Motor</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cutting Speed</td>
            <td className="px-6 py-4 text-sm text-gray-600">22-28 cuts/minute</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Frame Material</td>
            <td className="px-6 py-4 text-sm text-gray-600">Premium Bhilai Steel (extra-thick)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Gears & Components</td>
            <td className="px-6 py-4 text-sm text-gray-600">CNC Machined, Heat-treated</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Machine Weight</td>
            <td className="px-6 py-4 text-sm text-gray-600">~380 kg</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Dimensions (L×W×H)</td>
            <td className="px-6 py-4 text-sm text-gray-600">950mm × 550mm × 750mm</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Expected Service Life</td>
            <td className="px-6 py-4 text-sm text-gray-600">15-20 Years (with maintenance)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Safety Features</td>
            <td className="px-6 py-4 text-sm text-gray-600">Premium guard, E-stop, Motor protection, Overload cutoff</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">6 Months*</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-green-700">₹1,55,000 + GST (18%)</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <h4 className="font-semibold text-orange-800 mb-2">🇮🇳 Atmanirbhar Bharat - Premium Indian Manufacturing</h4>
        <p className="text-sm text-orange-700">
          Our flagship Made in India bar cutting machine represents the finest Indian engineering. 
          Built with premium Bhilai steel, CNC machined components, and designed for 15-20 years of professional daily use.
          Ideal for government projects requiring Indian-manufactured equipment.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> 6-month warranty covers manufacturing defects. Extended Annual Maintenance Contract (AMC) available. 
          Direct factory support from HMS Bengaluru. Delivery charges as per actuals.
        </p>
      </div>
    </div>
  );
}

