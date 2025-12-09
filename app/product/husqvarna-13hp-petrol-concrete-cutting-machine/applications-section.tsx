export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for Husqvarna 13HP</h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The Husqvarna 13HP petrol cutter delivers professional-grade performance at an excellent price point. 
        Perfect for contractors who want 13HP power without the Honda premium.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🛣️ Road Construction & Repair</h3>
          <p className="text-gray-600 mb-4">Full 13HP power for road joints, expansion cutting, and pavement repairs at contractor-friendly pricing.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Road expansion joints</li>
            <li>• Control joint cutting</li>
            <li>• Pavement repairs</li>
            <li>• Asphalt cutting</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏢 Commercial Floor Work</h3>
          <p className="text-gray-600 mb-4">Office buildings, retail spaces, and commercial complexes - handle all standard floor cutting needs.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Commercial floor joints</li>
            <li>• Office renovation cuts</li>
            <li>• Retail space modifications</li>
            <li>• Parking structure work</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏠 Residential & Mixed Use</h3>
          <p className="text-gray-600 mb-4">Driveways, compound floors, and residential colony roads - versatile for mixed project portfolios.</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Driveway cutting</li>
            <li>• Colony road joints</li>
            <li>• Compound floor work</li>
            <li>• Utility trenching</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Who Should Buy Husqvarna 13HP?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Value-Conscious Professional Contractors</h3>
          <p className="text-gray-600 mb-4">You need 13HP professional power but don&apos;t want to pay the Honda premium. Husqvarna delivers comparable performance at ₹10,000 less.</p>
          <div className="bg-orange-50 p-3 rounded text-sm text-orange-700"><strong>Savings:</strong> ₹10,000 vs Honda for similar specifications</div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Growing Construction Businesses</h3>
          <p className="text-gray-600 mb-4">Expanding your fleet? Husqvarna offers excellent quality at better margins, allowing you to grow faster.</p>
          <div className="bg-orange-50 p-3 rounded text-sm text-orange-700"><strong>Advantage:</strong> Better investment efficiency for fleet expansion</div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Multi-Project Contractors</h3>
          <p className="text-gray-600 mb-4">Handle diverse projects from roads to floors? 13HP petrol power with Swedish reliability covers all bases.</p>
          <div className="bg-orange-50 p-3 rounded text-sm text-orange-700"><strong>Versatility:</strong> One machine for diverse project needs</div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Quality-Brand Preference (Not Honda)</h3>
          <p className="text-gray-600 mb-4">Want a recognized international brand with Swedish quality heritage but different from the common Honda choice.</p>
          <div className="bg-orange-50 p-3 rounded text-sm text-orange-700"><strong>Differentiation:</strong> Premium Swedish brand at better price</div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">💡 Husqvarna vs Honda - Quick Decision Guide</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Choose Husqvarna</strong> — Best value, Swedish quality, ₹65,000 for 13HP professional power</li>
          <li>• <strong>Choose Honda</strong> — If brand name matters for clients/rentals or you want widest service network</li>
          <li>• <strong>Choose Diesel instead</strong> — If running cost savings over time outweigh convenience of petrol</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          <a href="/product/concrete-cutting-machine" className="underline font-semibold">Compare all models</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">get personalized recommendation</a>.
        </p>
      </div>
    </div>
  );
}

