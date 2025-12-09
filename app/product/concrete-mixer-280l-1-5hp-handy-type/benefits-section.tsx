export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 280L Concrete Mixer with 1.5HP Handy Type Motor offers <strong>slightly more capacity than the 240L model</strong> while maintaining 
          the same budget-friendly price bracket. Perfect for contractors who need just a bit more output per batch.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose the 280L Handy Type?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">40L More Than 240L Model</h4>
            <p className="text-gray-600">
              The extra <strong>40 liters drum capacity</strong> gives you approximately 20 liters more concrete per batch. 
              Over a full day, this adds up to significant extra output.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Simple & Robust Motor Design</h4>
            <p className="text-gray-600">
              Handy type motors have <strong>fewer components</strong> than star-delta starters, meaning less that can go wrong. 
              Ideal for sites with reliable power supply.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Only ₹3,000 More Than 240L</h4>
            <p className="text-gray-600">
              For just <strong>₹3,000 extra</strong>, you get 40L more capacity - that&apos;s excellent value for contractors 
              who frequently need slightly larger batches.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Single Phase Operation</h4>
            <p className="text-gray-600">
              Works on <strong>standard 220V single-phase electricity</strong> available everywhere. 
              No special power connections needed.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy Site Mobility</h4>
            <p className="text-gray-600">
              Compact size with <strong>sturdy wheels</strong> allows easy movement around the construction site. 
              Repositioning takes minimal effort.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Consistent Mix Quality</h4>
            <p className="text-gray-600">
              Mechanical mixing ensures <strong>uniform concrete every batch</strong> with proper water-cement ratio 
              for stronger construction.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">280L vs 240L - Quick Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">240L Staring Type</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹23,000</p>
              <p className="text-sm text-gray-600">~160-180L output/batch</p>
              <p className="text-sm text-gray-600">Star-delta start (less surge)</p>
              <p className="text-sm text-gray-600">Best for weak power supply</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">280L Handy Type</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">₹26,000</p>
              <p className="text-sm text-green-700">~180-200L output/batch</p>
              <p className="text-sm text-green-700">DOL start (simpler design)</p>
              <p className="text-sm text-green-700">Best for stable power supply</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Difference</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">+₹3,000</p>
              <p className="text-sm text-gray-600">+40L drum capacity</p>
              <p className="text-sm text-gray-600">+20L more per batch</p>
              <p className="text-sm text-gray-600">Simpler maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

