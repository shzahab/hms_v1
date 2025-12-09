export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 250L Concrete Mixer with 2HP Indian Motor is built for <strong>professional contractors who prioritize durability over initial cost</strong>. 
          This is not a budget mixer - it&apos;s a heavy-duty machine designed for years of reliable service on demanding construction sites.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Pay Premium for This Mixer?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">2HP Indian Motor - More Power</h4>
            <p className="text-gray-600">
              The <strong>2HP motor</strong> provides 33% more power than 1.5HP models, resulting in faster mixing, 
              better concrete consistency, and ability to handle slightly thicker mixes without strain.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Made in India Quality</h4>
            <p className="text-gray-600">
              Indian-made motors are designed for <strong>Indian voltage conditions</strong> (220V with fluctuations up to ±10%). 
              Spare parts are readily available across the country.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Heavy-Duty Frame Construction</h4>
            <p className="text-gray-600">
              <strong>Thicker gauge steel</strong> frame and drum compared to budget models. Built to withstand 
              rough handling on construction sites without bending or damage.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Better Bearings & Gears</h4>
            <p className="text-gray-600">
              Premium quality bearings and gears mean <strong>smoother operation, less wear</strong>, and longer 
              service intervals. The difference shows after months of daily use.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Built for Daily Professional Use</h4>
            <p className="text-gray-600">
              While budget mixers may work for occasional use, this model is designed for <strong>8-10 hours 
              daily operation</strong>, day after day, project after project.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Lower Total Cost of Ownership</h4>
            <p className="text-gray-600">
              Higher upfront cost, but <strong>longer service life, fewer breakdowns, and less maintenance</strong>. 
              Professional contractors understand this value.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Budget vs Premium - Honest Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Budget 280L (₹26K)</h4>
              <p className="text-sm text-gray-600 mb-2">Good for:</p>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Occasional use</li>
                <li>• Self-builders</li>
                <li>• Light residential work</li>
                <li>• Cost-sensitive buyers</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Premium 250L 2HP (₹58K)</h4>
              <p className="text-sm text-green-700 mb-2">Good for:</p>
              <ul className="text-sm text-green-700 text-left space-y-1">
                <li>• Daily professional use</li>
                <li>• Established contractors</li>
                <li>• Commercial projects</li>
                <li>• Long-term investment</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">The Difference</h4>
              <p className="text-sm text-gray-600 mb-2">₹32,000 extra gets you:</p>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• 33% more motor power</li>
                <li>• Heavy-duty construction</li>
                <li>• Indian motor quality</li>
                <li>• 2-3x longer service life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

