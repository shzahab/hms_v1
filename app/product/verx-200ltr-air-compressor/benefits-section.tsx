export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The VERX 200L Heavy-Duty Air Compressor is our <strong>flagship industrial compressor</strong>, 
          designed for factories, large manufacturing facilities, and operations requiring maximum air capacity and continuous duty performance.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits of VERX 200L</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Powerful 5 HP Motor</h4>
            <p className="text-gray-600">
              The <strong>5 HP three-phase motor</strong> delivers an impressive 450 LPM air flow - 
              enough to power an entire small factory&apos;s pneumatic tool requirements.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Maximum 200L Tank</h4>
            <p className="text-gray-600">
              The <strong>largest tank in the VERX range</strong> provides massive air reserve for extended operation. 
              Reduced motor cycling means longer equipment life and lower energy costs.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Two-Stage Compression</h4>
            <p className="text-gray-600">
              <strong>Two-stage compression technology</strong> delivers higher pressure (12 bar) more efficiently. 
              Better air quality with lower operating temperatures and reduced moisture.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">12 Bar Maximum Pressure</h4>
            <p className="text-gray-600">
              Industry-leading <strong>12 bar (175 PSI) maximum pressure</strong>. 
              Handles the most demanding pneumatic equipment and high-pressure applications.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Continuous Duty Rated</h4>
            <p className="text-gray-600">
              Built for <strong>continuous industrial operation</strong>. 
              Heavy-duty components, efficient cooling, and robust construction for 24/7 reliability.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Multi-Station Factory Use</h4>
            <p className="text-gray-600">
              Power <strong>4-5 workstations simultaneously</strong> without pressure drop. 
              Central air supply for entire production lines or large workshop floors.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete VERX Range Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3">Model</th>
                <th className="text-center py-2 px-3">Tank</th>
                <th className="text-center py-2 px-3">Motor</th>
                <th className="text-center py-2 px-3">Air Flow</th>
                <th className="text-center py-2 px-3">Pressure</th>
                <th className="text-right py-2 px-3">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">VERX 12L</td>
                <td className="text-center py-2 px-3">12L</td>
                <td className="text-center py-2 px-3">1 HP</td>
                <td className="text-center py-2 px-3">115 LPM</td>
                <td className="text-center py-2 px-3">8 bar</td>
                <td className="text-right py-2 px-3">₹6,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">VERX 24L</td>
                <td className="text-center py-2 px-3">24L</td>
                <td className="text-center py-2 px-3">1.5 HP</td>
                <td className="text-center py-2 px-3">170 LPM</td>
                <td className="text-center py-2 px-3">8 bar</td>
                <td className="text-right py-2 px-3">₹9,500</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">VERX 50L</td>
                <td className="text-center py-2 px-3">50L</td>
                <td className="text-center py-2 px-3">2 HP</td>
                <td className="text-center py-2 px-3">220 LPM</td>
                <td className="text-center py-2 px-3">8 bar</td>
                <td className="text-right py-2 px-3">₹13,500</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">VERX 150L</td>
                <td className="text-center py-2 px-3">150L</td>
                <td className="text-center py-2 px-3">3 HP</td>
                <td className="text-center py-2 px-3">350 LPM</td>
                <td className="text-center py-2 px-3">10 bar</td>
                <td className="text-right py-2 px-3">₹40,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-2 px-3 font-bold text-green-800">VERX 200L ⭐</td>
                <td className="text-center py-2 px-3 font-bold text-green-800">200L</td>
                <td className="text-center py-2 px-3 font-bold text-green-800">5 HP</td>
                <td className="text-center py-2 px-3 font-bold text-green-800">450 LPM</td>
                <td className="text-center py-2 px-3 font-bold text-green-800">12 bar</td>
                <td className="text-right py-2 px-3 font-bold text-green-800">₹52,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Heavy Industrial Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">✅ Designed For</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Manufacturing factories</li>
              <li>• Large auto service centers</li>
              <li>• Heavy sandblasting operations</li>
              <li>• CNC machine shops</li>
              <li>• Assembly line pneumatics</li>
              <li>• Industrial spray painting facilities</li>
              <li>• Multi-bay truck workshops</li>
              <li>• Shipyard and heavy equipment shops</li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h4 className="text-lg font-semibold text-green-800 mb-2">💡 Maximum Value When</h4>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• You have three-phase power available</li>
              <li>• Multiple operators need air simultaneously</li>
              <li>• Operations run 8+ hours daily</li>
              <li>• High-pressure tools are used</li>
              <li>• Reliability is critical to production</li>
              <li>• Future expansion is planned</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

