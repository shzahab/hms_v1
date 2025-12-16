export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The VERX 150L Industrial Air Compressor is <strong>engineered for demanding industrial applications</strong>. 
          With its 3 HP motor and 150-litre tank, it delivers the consistent high-volume air supply that factories and large workshops require.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits of VERX 150L</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Industrial 3 HP Motor</h4>
            <p className="text-gray-600">
              The powerful <strong>3 HP motor</strong> delivers 350 LPM air flow - enough to power multiple pneumatic tools 
              across different workstations simultaneously without pressure drop.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">150L High-Capacity Tank</h4>
            <p className="text-gray-600">
              The <strong>large 150-litre tank</strong> provides substantial air reserve, allowing extended operation 
              between motor cycles. Essential for high-demand applications like sandblasting.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">10 Bar Maximum Pressure</h4>
            <p className="text-gray-600">
              Higher <strong>10 bar (145 PSI) maximum pressure</strong> compared to smaller models. 
              Better suited for tools and applications requiring higher operating pressure.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Multi-Station Capability</h4>
            <p className="text-gray-600">
              Connect <strong>2-3 workstations</strong> with separate air lines. 
              Perfect for workshops where multiple technicians work simultaneously.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Single/Three Phase Options</h4>
            <p className="text-gray-600">
              Available in both <strong>220V single-phase and 415V three-phase</strong> variants. 
              Choose based on your electrical infrastructure and usage requirements.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Sandblasting Ready</h4>
            <p className="text-gray-600">
              With 350 LPM air flow and 150L storage, this compressor handles <strong>small to medium sandblasting operations</strong>. 
              Suitable for rust removal and surface preparation work.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Industrial vs Commercial Grade</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 50L</h4>
              <p className="text-lg font-bold text-gray-600 mb-2">₹13,500</p>
              <p className="text-sm text-gray-600">2 HP / 220 LPM</p>
              <p className="text-sm text-gray-600">8 bar pressure</p>
              <p className="text-sm text-gray-600">Single workshop use</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">VERX 150L ⭐</h4>
              <p className="text-lg font-bold text-green-600 mb-2">₹40,000</p>
              <p className="text-sm text-green-700">3 HP / 350 LPM (+59%)</p>
              <p className="text-sm text-green-700">10 bar pressure (+25%)</p>
              <p className="text-sm text-green-700">Multi-station capability</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 200L</h4>
              <p className="text-lg font-bold text-gray-600 mb-2">₹52,000</p>
              <p className="text-sm text-gray-600">5 HP / 450 LPM</p>
              <p className="text-sm text-gray-600">12 bar pressure</p>
              <p className="text-sm text-gray-600">Factory production lines</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Industrial Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">✅ Perfect For</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Large auto workshops with multiple bays</li>
              <li>• Fabrication and welding shops</li>
              <li>• Small to medium sandblasting</li>
              <li>• CNC machine air supply</li>
              <li>• Multiple spray painting stations</li>
              <li>• Pneumatic assembly lines</li>
              <li>• Industrial cleaning operations</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Consider 200L For</h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Heavy industrial sandblasting</li>
              <li>• Factory-wide air distribution</li>
              <li>• 4+ simultaneous tool operation</li>
              <li>• 24/7 continuous operation needs</li>
              <li>• High-pressure specialized equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

