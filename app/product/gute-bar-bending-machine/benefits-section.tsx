export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 mb-6">
        GUTE represents <strong>international engineering excellence</strong>. For contractors who understand that equipment quality 
        directly impacts productivity, downtime, and long-term costs, GUTE offers measurable advantages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Precision Engineering</h4>
          <p className="text-gray-600">Precision-ground gears, tighter tolerances, and superior fit and finish. Bends are more accurate than standard machines.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Components</h4>
          <p className="text-gray-600">Imported bearings, hardened steel gears, and premium motor. Built to outlast standard machines significantly.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Lower Lifetime Cost</h4>
          <p className="text-gray-600">Higher upfront cost is offset by longer life, fewer repairs, and better resale value. TCO often lower than budget machines.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Local Service Support</h4>
          <p className="text-gray-600">HMS provides spare parts and service support across India. International quality, local convenience.</p>
        </div>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <h4 className="font-bold text-purple-800 mb-2">Who Should Choose GUTE?</h4>
        <p className="text-purple-700">
          • High-volume fabrication yards running 8+ hours daily<br/>
          • Premium contractors working on prestigious projects<br/>
          • Businesses that prioritize equipment reliability over initial cost<br/>
          • Contractors who&apos;ve experienced problems with budget machines
        </p>
      </div>
    </div>
  );
}

