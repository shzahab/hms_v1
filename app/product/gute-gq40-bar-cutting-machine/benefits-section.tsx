export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The GUTE GQ40 with Indian Motor combines <strong>premium imported engineering with local reliability</strong>. 
          Ideal for professionals who demand superior build quality and consistent performance day after day.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose GUTE GQ40?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium GUTE Engineering</h4>
            <p className="text-gray-600">
              GUTE is a globally recognized brand known for <strong>precision manufacturing</strong>. 
              Precision-ground gears, superior bearings, and tighter tolerances deliver consistently clean cuts.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Indian Motor Advantage</h4>
            <p className="text-gray-600">
              The Indian motor is designed for <strong>local voltage conditions</strong> (415V with fluctuations). 
              Easy spare parts, local mechanics know it, nationwide service network.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">32mm Professional Capacity</h4>
            <p className="text-gray-600">
              Cuts 8-32mm TMT bars - covering <strong>95% of commercial construction needs</strong>. 
              Only ultra-heavy infrastructure work requires larger capacity.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Longer Service Life</h4>
            <p className="text-gray-600">
              Premium components typically last <strong>30-50% longer</strong> than standard machines. 
              Lower total cost of ownership over the machine&apos;s lifetime.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Consistent Cut Quality</h4>
            <p className="text-gray-600">
              Tighter manufacturing tolerances mean <strong>cleaner, more precise cuts</strong>. 
              Less burrs, less blade wear, better end results.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Quieter Operation</h4>
            <p className="text-gray-600">
              Better bearings and precision components result in <strong>smoother, quieter operation</strong>. 
              Less vibration, less noise, more comfortable working environment.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Best of Both Worlds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">GUTE Body = International Quality</h4>
            <p className="text-blue-600">
              Frame, gears, cutting mechanism, and blade system from GUTE&apos;s precision manufacturing. 
              <strong>Build quality you can see and feel.</strong>
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Indian Motor = Local Reliability</h4>
            <p className="text-blue-600">
              Motor designed for Indian conditions, service available everywhere, parts in every town. 
              <strong>No import hassles for motor repairs.</strong>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Model Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">GQ52 (₹93,000)</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">8-42mm</p>
              <p className="text-sm text-gray-600">Standard quality</p>
              <p className="text-sm text-gray-600">Maximum capacity</p>
              <p className="text-sm text-gray-600">Best for: Infrastructure</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">GUTE GQ40 (₹1,10,000)</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">8-32mm</p>
              <p className="text-sm text-blue-700">Premium GUTE quality</p>
              <p className="text-sm text-blue-700">Indian motor reliability</p>
              <p className="text-sm text-blue-700">Best for: Quality-focused</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">HMS India (₹1,55,000)</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">8-32mm</p>
              <p className="text-sm text-gray-600">Premium Indian make</p>
              <p className="text-sm text-gray-600">15-20 year life</p>
              <p className="text-sm text-gray-600">Best for: Long-term</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

