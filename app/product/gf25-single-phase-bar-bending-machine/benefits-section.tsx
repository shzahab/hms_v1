export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The GF25 Single Phase delivers <strong>20mm bending capacity without requiring three-phase power</strong>. 
          This unique combination makes it the ideal choice for growing contractors who need higher capacity 
          but work at sites without industrial electrical connections.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The 20mm Single Phase Advantage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Bend 20mm Without 3-Phase</h4>
            <p className="text-gray-600">
              Most 20mm bar benders require industrial power. The GF25 Single Phase uses a 
              <strong> specially engineered high-torque motor</strong> to achieve 20mm capacity on standard 220V.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Handle Larger Projects</h4>
            <p className="text-gray-600">
              G+2 and G+3 buildings typically need 20mm main bars. Now you can 
              <strong> take on bigger projects</strong> without upgrading your electrical infrastructure.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Work Anywhere</h4>
            <p className="text-gray-600">
              Residential areas, rural sites, small commercial plots - use your GF25 
              <strong> wherever single-phase power is available</strong>.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Future-Proof Investment</h4>
            <p className="text-gray-600">
              As your business grows to larger projects, the GF25 grows with you. 
              <strong> No need to buy a new machine</strong> when you start G+2 projects.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Bar Size Coverage</h3>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
          <p className="text-blue-700 mb-4">
            The 8-20mm range covers virtually all reinforcement needs for residential and small commercial buildings:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-3 rounded text-center">
              <div className="text-2xl font-bold text-blue-600">8mm</div>
              <div className="text-xs text-gray-600">Stirrups</div>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <div className="text-2xl font-bold text-blue-600">10mm</div>
              <div className="text-xs text-gray-600">Slabs & Ties</div>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <div className="text-2xl font-bold text-blue-600">12-16mm</div>
              <div className="text-xs text-gray-600">Beams & Columns</div>
            </div>
            <div className="bg-white p-3 rounded text-center">
              <div className="text-2xl font-bold text-green-600">20mm</div>
              <div className="text-xs text-gray-600">Main Bars (G+2/G+3)</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Perfect Upgrade Path</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-gray-700">GF20 Single Phase</div>
              <div className="text-sm text-gray-500">8-16mm | ₹33,000</div>
              <div className="text-xs text-gray-400 mt-1">Entry Level</div>
            </div>
            <div className="text-3xl text-gray-400">→</div>
            <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-300">
              <div className="text-lg font-bold text-green-700">GF25 Single Phase</div>
              <div className="text-sm text-green-600">8-20mm | ₹35,000</div>
              <div className="text-xs text-green-500 mt-1">You Are Here ⭐</div>
            </div>
            <div className="text-3xl text-gray-400">→</div>
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-gray-700">GW42/GW52</div>
              <div className="text-sm text-gray-500">32-42mm | ₹75K+</div>
              <div className="text-xs text-gray-400 mt-1">Industrial</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            For just ₹2,000 more than GF20, get 25% more capacity (20mm vs 16mm) - excellent value for growing businesses.
          </p>
        </div>
      </div>
    </div>
  );
}

