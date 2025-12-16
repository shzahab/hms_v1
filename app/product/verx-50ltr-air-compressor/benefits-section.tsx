export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The VERX 50L Air Compressor is <strong>built for professionals</strong> who need reliable, continuous compressed air 
          for demanding workshop applications. With its belt-driven twin-cylinder design, it delivers the performance serious users require.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits of VERX 50L</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional 2 HP Motor</h4>
            <p className="text-gray-600">
              The <strong>2 HP belt-driven motor</strong> delivers 220 LPM air flow - enough for continuous spray painting, 
              impact wrench operation, and running multiple small tools simultaneously.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">50L Tank for Extended Run Time</h4>
            <p className="text-gray-600">
              The <strong>50-litre tank</strong> stores enough air for extended spray painting sessions and keeps tools running 
              without constant motor cycling. Less wear, longer life.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Belt Drive Advantage</h4>
            <p className="text-gray-600">
              Unlike direct-drive models, <strong>belt-driven compressors run cooler</strong>, last longer, and are easier to maintain. 
              The pump operates at lower RPM for extended service life.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Twin Cylinder V-Type Pump</h4>
            <p className="text-gray-600">
              The <strong>V-type twin cylinder design</strong> provides balanced compression and efficient air delivery. 
              Fills the tank faster while maintaining consistent pressure.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Still Single Phase</h4>
            <p className="text-gray-600">
              Even with professional-grade performance, it runs on <strong>standard 220V single-phase power</strong>. 
              No expensive three-phase installation required.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Best for Auto Garages</h4>
            <p className="text-gray-600">
              Handles <strong>tyre changes, panel painting, and general workshop tasks</strong> with ease. 
              The go-to choice for automotive service centers across South India.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose 50L Over Smaller Models?</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 24L</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹9,500</p>
              <p className="text-sm text-gray-600">1.5 HP / 170 LPM</p>
              <p className="text-sm text-gray-600">Direct Drive</p>
              <p className="text-sm text-gray-600">Light-Medium Use</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">VERX 50L ⭐</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">₹13,500</p>
              <p className="text-sm text-green-700">2 HP / 220 LPM (+29%)</p>
              <p className="text-sm text-green-700">Belt Drive (longer life)</p>
              <p className="text-sm text-green-700">Professional Use</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VERX 150L</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹40,000</p>
              <p className="text-sm text-gray-600">3 HP / 350 LPM</p>
              <p className="text-sm text-gray-600">Industrial Grade</p>
              <p className="text-sm text-gray-600">Multi-Station Use</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Perfect Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">✅ Ideal For</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Auto garages and service centers</li>
              <li>• Vehicle panel spray painting</li>
              <li>• Furniture manufacturing workshops</li>
              <li>• Impact wrench operation (up to 1/2&quot;)</li>
              <li>• Continuous air tool use</li>
              <li>• Commercial tyre shops</li>
              <li>• Fabrication work</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Consider 150L/200L For</h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Full vehicle body painting</li>
              <li>• Heavy sandblasting operations</li>
              <li>• Running 3+ tools simultaneously</li>
              <li>• Large industrial applications</li>
              <li>• Factory production lines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

