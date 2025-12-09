export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The GQ42 Bar Cutting Machine is specifically designed for <strong>small contractors, individual builders, and residential construction</strong>. 
          It delivers the benefits of mechanized cutting without the cost of heavy-duty industrial equipment.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits for Small Contractors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Affordable Entry Point</h4>
            <p className="text-gray-600">
              At <strong>₹75,000</strong>, the GQ42 is the most cost-effective bar cutting machine in our range. 
              Perfect for contractors who need mechanized cutting without heavy investment.
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
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Fast Cutting Speed</h4>
            <p className="text-gray-600">
              Achieve <strong>25-30 cuts per minute</strong> - significantly faster than manual cutting. 
              Complete your bar cutting work in hours instead of days.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Clean, Precise Cuts</h4>
            <p className="text-gray-600">
              High-quality blade produces <strong>clean, burr-free cuts</strong> every time. 
              No need for secondary grinding or finishing.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Reduced Labor Costs</h4>
            <p className="text-gray-600">
              One operator with GQ42 equals <strong>3-4 manual workers</strong>. 
              Save on labor while increasing productivity.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Compact & Portable</h4>
            <p className="text-gray-600">
              Weighing <strong>~120kg</strong>, the GQ42 can be transported in a small vehicle. 
              Move it between sites as needed.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Safety & Ease of Operation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Built-in Safety Guards</h4>
            <p className="text-blue-600">
              Protective blade guard and <strong>emergency stop button</strong> ensure operator safety. 
              Designed to prevent accidents during cutting operations.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Simple Operation</h4>
            <p className="text-blue-600">
              Easy push-button controls. Any worker can learn to operate the machine <strong>in under 30 minutes</strong>.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Easy Blade Replacement</h4>
            <p className="text-blue-600">
              Quick-change blade system allows fast replacement <strong>without special tools</strong>. 
              Minimize downtime between blade changes.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Low Maintenance</h4>
            <p className="text-blue-600">
              Robust construction with <strong>minimal moving parts</strong>. 
              Regular lubrication and blade sharpening is all that&apos;s needed.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost Comparison: Manual vs GQ42</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Manual Cutting</h4>
              <p className="text-3xl font-bold text-red-600 mb-2">3-4 Workers</p>
              <p className="text-sm text-gray-600">₹600-1000/day labor cost</p>
              <p className="text-sm text-gray-600">Inconsistent cuts</p>
              <p className="text-sm text-gray-600">Safety hazards</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">GQ42 Bar Cutter</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">1 Worker</p>
              <p className="text-sm text-green-700">One-time ₹75,000 investment</p>
              <p className="text-sm text-green-700">Clean, precise cuts</p>
              <p className="text-sm text-green-700">Built-in safety features</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Your Savings</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">~₹20,000</p>
              <p className="text-sm text-gray-600">Per medium project</p>
              <p className="text-sm text-gray-600">ROI in 3-4 projects</p>
              <p className="text-sm text-gray-600">Years of savings after</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

