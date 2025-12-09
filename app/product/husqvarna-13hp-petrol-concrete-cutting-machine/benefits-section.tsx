export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The Husqvarna 13HP Petrol Concrete Cutting Machine delivers <strong>Swedish engineering quality at an Indian-friendly price</strong>. 
          At ₹65,000, it&apos;s the best value 13HP petrol cutter in our range - ₹10,000 less than Honda with comparable professional-grade performance.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Husqvarna?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">330+ Years of Swedish Heritage</h4>
            <p className="text-gray-600">Husqvarna has been manufacturing since 1689. Their <strong>professional outdoor equipment</strong> is used worldwide by demanding professionals.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Best Value 13HP Option</h4>
            <p className="text-gray-600">At <strong>₹65,000</strong>, you get premium 13HP power for ₹10,000 less than Honda. Same cutting performance, excellent build quality.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Advanced Air Filtration</h4>
            <p className="text-gray-600">Husqvarna engines feature <strong>superior air filtration systems</strong> that extend engine life in dusty construction site conditions.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Efficient Combustion</h4>
            <p className="text-gray-600">Swedish engineering delivers <strong>clean, efficient combustion</strong> for better fuel economy and lower emissions.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional Grade Build</h4>
            <p className="text-gray-600">Built for <strong>commercial daily use</strong>. Robust construction handles the demands of professional road cutting operations.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Growing Service Network</h4>
            <p className="text-gray-600">Husqvarna has been <strong>expanding in India</strong>. Service and parts increasingly available in major cities.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Value Comparison: Husqvarna vs Honda</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
              <h4 className="font-semibold text-orange-800 mb-2">Husqvarna 13HP - BEST VALUE</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">₹65,000</p>
              <p className="text-sm text-orange-700">Swedish engineering</p>
              <p className="text-sm text-orange-700">₹10,000 savings vs Honda</p>
              <p className="text-sm text-orange-700">Same 13HP power output</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Honda GX390 13HP</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">₹75,000</p>
              <p className="text-sm text-gray-600">Premium brand</p>
              <p className="text-sm text-gray-600">Best resale value</p>
              <p className="text-sm text-gray-600">Widest service network</p>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600">
            <strong>Bottom Line:</strong> Choose Husqvarna if you want 13HP petrol power at the best price. Choose Honda if brand name and resale value matter most.
          </p>
        </div>
      </div>
    </div>
  );
}

