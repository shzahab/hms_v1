export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The GF20 Single Phase bar bending machine is specifically designed for <strong>small contractors, individual builders, and residential construction</strong>. 
          It delivers the benefits of mechanized bending without the complexity and cost of industrial equipment.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits for Small Contractors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">No 3-Phase Power Required</h4>
            <p className="text-gray-600">
              Works on <strong>standard 220V single-phase electricity</strong> available at homes, shops, and small sites. 
              No need to wait for expensive electrical infrastructure upgrades.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Low Investment, High Returns</h4>
            <p className="text-gray-600">
              At <strong>₹33,000</strong>, this is the most affordable motorized bar bender. 
              Pays for itself within <strong>2-3 residential projects</strong> through labor savings.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy to Transport</h4>
            <p className="text-gray-600">
              Weighing only <strong>~75kg</strong>, the GF20 fits in small vehicles and can be moved between sites easily. 
              Perfect for contractors handling multiple projects.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Perfect Capacity for Residential Work</h4>
            <p className="text-gray-600">
              The <strong>8-16mm range</strong> covers all common bar sizes used in houses, compound walls, 
              and small commercial buildings up to G+2.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Reduced Material Waste</h4>
            <p className="text-gray-600">
              Consistent, accurate bends mean <strong>less rejected pieces</strong> compared to manual bending. 
              Even a 5% reduction in waste saves significant money over time.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Faster Project Completion</h4>
            <p className="text-gray-600">
              Complete stirrup and bend work in <strong>hours instead of days</strong>. 
              Keep your projects on schedule and move to the next job faster.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ease of Operation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Simple Foot Pedal Control</h4>
            <p className="text-blue-600">
              Press the pedal to bend, release to stop. <strong>No complex controls</strong> or programming needed. 
              Any worker can learn to operate in <strong>under 30 minutes</strong>.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Angle Stopper Included</h4>
            <p className="text-blue-600">
              Set your desired angle once and produce <strong>identical bends repeatedly</strong>. 
              Great for making large quantities of stirrups.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Hands-Free Operation</h4>
            <p className="text-blue-600">
              Both hands remain free to position and guide the bar while your foot controls the bending action. 
              This improves <strong>accuracy and safety</strong>.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Minimal Maintenance</h4>
            <p className="text-blue-600">
              Simple design with fewer parts means <strong>less can go wrong</strong>. 
              Basic lubrication is all that&apos;s needed for years of reliable service.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost Comparison: Manual vs GF20</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Manual Bending</h4>
              <p className="text-3xl font-bold text-red-600 mb-2">2-3 Workers</p>
              <p className="text-sm text-gray-600">₹500-800/day labor cost</p>
              <p className="text-sm text-gray-600">Inconsistent angles</p>
              <p className="text-sm text-gray-600">Physical strain on workers</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">GF20 Single Phase</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">1 Worker</p>
              <p className="text-sm text-green-700">One-time ₹33,000 investment</p>
              <p className="text-sm text-green-700">Precise, repeatable bends</p>
              <p className="text-sm text-green-700">Minimal physical effort</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Your Savings</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">~₹15,000</p>
              <p className="text-sm text-gray-600">Per residential project</p>
              <p className="text-sm text-gray-600">ROI in 2-3 projects</p>
              <p className="text-sm text-gray-600">Years of savings after</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

