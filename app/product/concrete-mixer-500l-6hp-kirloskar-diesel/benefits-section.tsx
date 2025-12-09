export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 500L Concrete Mixer with 6HP Kirloskar Diesel Engine is our <strong>flagship professional mixer</strong> - the industry standard 
          for commercial construction, infrastructure projects, and high-volume concrete production. True 1-bag capacity powered by 
          India&apos;s most trusted diesel engine brand.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose the 500L Kirloskar Diesel?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">True Full Bag Capacity</h4>
            <p className="text-gray-600">
              <strong>500L drum = 350-400L output per batch</strong> - true 1-bag (50kg cement) mixing. 
              The industry standard for commercial and infrastructure projects.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Kirloskar Engine - Gold Standard</h4>
            <p className="text-gray-600">
              <strong>75+ years of trust</strong>. Kirloskar engines are known nationwide for reliability, 
              fuel efficiency, and easy serviceability. Parts available everywhere.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Works Without Electricity</h4>
            <p className="text-gray-600">
              <strong>Complete independence from power supply</strong>. Work at remote sites, locations without 
              electricity, or when power fails. Just fuel and go.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Maximum Production Output</h4>
            <p className="text-gray-600">
              Produce <strong>2-3x more concrete per hour</strong> than 250L mixers. Fewer batches 
              means faster pours and more efficient use of labor.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Industrial Grade Construction</h4>
            <p className="text-gray-600">
              <strong>Extra-thick steel frame and drum</strong> built for daily commercial use. 
              Designed to handle the stresses of full-bag mixing year after year.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Nationwide Service Network</h4>
            <p className="text-gray-600">
              Kirloskar service centers and mechanics <strong>available across India</strong>. 
              Spare parts, repairs, and maintenance - never far away.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Electric vs Diesel - Full Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">350L Electric (₹68K)</h4>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>✓ Lower purchase cost</li>
                <li>✓ Lower running cost</li>
                <li>✓ Simpler maintenance</li>
                <li>✓ Quieter operation</li>
                <li>✗ Needs electricity</li>
                <li>✗ 3/4 bag capacity</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">500L Diesel (₹1.3L)</h4>
              <ul className="text-sm text-green-700 text-left space-y-1">
                <li>✓ Full 1-bag capacity</li>
                <li>✓ No electricity needed</li>
                <li>✓ Maximum output</li>
                <li>✓ Remote site capable</li>
                <li>✓ Kirloskar reliability</li>
                <li>✓ Industry standard</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Choose Diesel If</h4>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Need full-bag mixing</li>
                <li>• Remote sites</li>
                <li>• Unreliable power</li>
                <li>• Commercial projects</li>
                <li>• High volume work</li>
                <li>• Infrastructure jobs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Operating Cost Analysis</h3>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">Daily Fuel Cost (8 hours)</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• Consumption: ~1.2L/hour average</li>
                <li>• Daily usage: ~10 liters</li>
                <li>• Diesel cost: ~₹90/liter</li>
                <li>• <strong>Daily fuel: ~₹900</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">Monthly Cost Estimate</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• 25 working days</li>
                <li>• Fuel: ~₹22,500/month</li>
                <li>• Oil & maintenance: ~₹2,500/month</li>
                <li>• <strong>Total: ~₹25,000/month</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-4">
            Note: Higher running cost than electric, but justified for full-bag capacity and electricity independence.
          </p>
        </div>
      </div>
    </div>
  );
}

