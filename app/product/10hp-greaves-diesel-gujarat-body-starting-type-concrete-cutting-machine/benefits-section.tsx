export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 10HP Greaves Diesel Gujarat Body with <strong>Starting Type (Electric Start)</strong> is the premium version of our 
          professional-grade cutter. Same proven 10HP Greaves + Gujarat body combination, plus the convenience of 
          <strong> one-button electric starting</strong> - no more hand cranking.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Pay Extra for Starting Type?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">⚡ One-Button Electric Start</h4>
            <p className="text-green-700">Just press a button - engine starts instantly. No hand cranking, no physical effort, no technique required. <strong>Start the engine dozens of times a day</strong> without fatigue.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">⚡ Cold Start Reliability</h4>
            <p className="text-green-700">Electric starter cranks the engine at <strong>consistent speed regardless of conditions</strong>. Works reliably in cold mornings when manual cranking is difficult.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">⚡ Operator Safety</h4>
            <p className="text-green-700">No risk of <strong>hand crank kickback injuries</strong>. Especially important when engine is warm and might start unexpectedly during cranking.</p>
          </div>
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-2">⚡ Time Savings</h4>
            <p className="text-green-700">Start/stop the machine <strong>instantly between cuts</strong>. Save fuel by turning off during breaks. Adds up to significant time savings daily.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Same Proven 10HP Greaves</h4>
            <p className="text-gray-600">Identical Greaves 10HP diesel engine with <strong>nationwide service network</strong>. The starting system is an addition, not a change.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Manual Backup Included</h4>
            <p className="text-gray-600">Hand crank backup remains available. If battery ever runs low, you can still <strong>start manually</strong> - best of both worlds.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Manual Start vs Electric Start</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">10HP Greaves (Manual Start)</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">₹95,000</p>
              <p className="text-sm text-gray-600">Hand crank starting</p>
              <p className="text-sm text-gray-600">Simpler system</p>
              <p className="text-sm text-gray-600">No battery maintenance</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">10HP Greaves (Starting Type)</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">₹1,15,000</p>
              <p className="text-sm text-green-700">Electric start + manual backup</p>
              <p className="text-sm text-green-700">One-button convenience</p>
              <p className="text-sm text-green-700">Worth it for daily use</p>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600">
            <strong>₹20,000 extra</strong> for electric start pays for itself in <strong>convenience, time savings, and operator safety</strong> over the machine&apos;s lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}

