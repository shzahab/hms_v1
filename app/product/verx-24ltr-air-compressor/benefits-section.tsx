export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The VERX 24L Air Compressor is the <strong>ideal mid-range choice</strong> for small workshops, service centers, and professional users 
          who need more capacity than entry-level models but don&apos;t require industrial-grade equipment.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits of VERX 24L</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Double the Tank Capacity</h4>
            <p className="text-gray-600">
              With <strong>24 litres vs 12 litres</strong>, you get twice the air storage. 
              This means longer run times before the motor kicks in and less waiting during intensive tasks.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">More Powerful Motor</h4>
            <p className="text-gray-600">
              The <strong>1.5 HP motor</strong> delivers 170 LPM air flow - a 50% increase over the 12L model. 
              Better for spray painting and running pneumatic tools continuously.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Still Single Phase</h4>
            <p className="text-gray-600">
              Runs on <strong>standard 220V single-phase power</strong> - no industrial electrical setup required. 
              Perfect for small workshops and service centers without three-phase supply.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Best Value Upgrade</h4>
            <p className="text-gray-600">
              At <strong>₹9,500</strong> (just ₹3,500 more than 12L), you get significantly more capability. 
              The best price-to-performance ratio in the VERX range.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Suitable for Regular Spray Work</h4>
            <p className="text-gray-600">
              The larger tank handles <strong>5-8 minutes of continuous spraying</strong> before refill. 
              Enough for painting furniture, automotive panels, and medium-sized projects.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Portable Yet Capable</h4>
            <p className="text-gray-600">
              At <strong>~28 kg</strong>, still manageable for moving around the workshop. 
              Many units come with wheels for easier mobility.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">24L vs 12L: Why Upgrade?</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 12L</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹6,000</p>
              <p className="text-sm text-gray-600">1 HP Motor</p>
              <p className="text-sm text-gray-600">115 LPM Air Flow</p>
              <p className="text-sm text-gray-600">Light use only</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">VERX 24L ⭐</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">₹9,500</p>
              <p className="text-sm text-green-700">1.5 HP Motor (+50%)</p>
              <p className="text-sm text-green-700">170 LPM Air Flow (+48%)</p>
              <p className="text-sm text-green-700">Regular workshop use</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 50L</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹13,500</p>
              <p className="text-sm text-gray-600">2 HP Motor</p>
              <p className="text-sm text-gray-600">220 LPM Air Flow</p>
              <p className="text-sm text-gray-600">Professional/continuous use</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideal Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">✅ Good For</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Regular spray painting (furniture, grilles, small items)</li>
              <li>• Operating nail guns and staplers</li>
              <li>• Running small impact wrenches</li>
              <li>• Tyre inflation services</li>
              <li>• Air tool operation in workshops</li>
              <li>• Cleaning and dusting equipment</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Consider Larger Model For</h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Continuous spray painting (vehicle bodies)</li>
              <li>• Large impact wrenches (1/2&quot; or bigger)</li>
              <li>• Sandblasting operations</li>
              <li>• Running multiple tools simultaneously</li>
              <li>• Commercial tyre shops with high volume</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

