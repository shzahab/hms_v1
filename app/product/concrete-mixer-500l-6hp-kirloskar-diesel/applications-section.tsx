export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for 500L Kirloskar Diesel Mixer
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The 500L diesel mixer with Kirloskar engine is the <strong>professional standard</strong> for projects 
        requiring maximum concrete output and reliable operation regardless of electricity availability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            The industry standard for commercial projects. Full-bag capacity keeps pace 
            with demanding pour schedules.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Shopping complexes</li>
            <li>• Office buildings</li>
            <li>• Hotels and resorts</li>
            <li>• Industrial facilities</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🛣️ Infrastructure Projects
          </h3>
          <p className="text-gray-600 mb-4">
            Essential for road, bridge, and public infrastructure work where high 
            volume output is required.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Road construction</li>
            <li>• Bridge foundations</li>
            <li>• Drainage systems</li>
            <li>• Government projects</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏢 Large Residential Complexes
          </h3>
          <p className="text-gray-600 mb-4">
            Apartment buildings, villa communities, and large residential developments 
            benefit from full-bag efficiency.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Apartment complexes</li>
            <li>• Gated communities</li>
            <li>• Township development</li>
            <li>• Multi-building projects</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the 500L Kirloskar Diesel?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Commercial Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If your business focuses on commercial construction, this is your workhorse. 
            Full-bag capacity meets commercial project demands.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Industry-standard capacity for professional output
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Remote Site Operations
          </h3>
          <p className="text-gray-600 mb-4">
            Working at sites without electricity? Diesel power means complete independence. 
            Just fuel up and start mixing.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> No dependency on electricity supply
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Infrastructure Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Road, bridge, and public works projects require reliable, high-volume equipment. 
            Kirloskar reliability delivers.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Trusted for government and infrastructure contracts
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Equipment Rental Businesses
          </h3>
          <p className="text-gray-600 mb-4">
            Diesel mixers command higher rental rates and work at any site. 
            Kirloskar brand recognition adds rental value.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Higher rental income potential
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Electric Models Instead If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Budget constraint</strong> — Electric 350L is ₹62,000 cheaper at ₹68,000</li>
          <li>• <strong>Reliable power available</strong> — Electric has lower running costs</li>
          <li>• <strong>Noise restrictions</strong> — Diesel engines are louder than electric motors</li>
          <li>• <strong>Smaller projects</strong> — 3/4 bag may be sufficient for your needs</li>
          <li>• <strong>Environmental concerns</strong> — Electric produces no exhaust</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need help deciding? <a href="https://wa.me/918074949635" className="underline font-semibold">Contact us</a>.
        </p>
      </div>
    </div>
  );
}

