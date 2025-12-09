export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Applications for HMS Made in India</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏗️ Long-Term Projects</h3>
          <p className="text-gray-600">Multi-year construction programs where equipment will be used extensively. Built for decades of service.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🏭 Established Fabrication</h3>
          <p className="text-gray-600">Permanent fabrication facilities planning 15-20 years of operation. Premium durability justifies premium price.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🇮🇳 Government Projects</h3>
          <p className="text-gray-600">Projects with preference for Made in India equipment. Supporting Atmanirbhar Bharat initiatives.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Who Chooses HMS Made in India?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Patriotic Entrepreneurs</h3>
          <p className="text-gray-600">Business owners who want premium quality AND want to support Indian manufacturing.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Legacy-Minded Contractors</h3>
          <p className="text-gray-600">Family businesses building equipment fleets for the next generation.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ PSU & Government Contractors</h3>
          <p className="text-gray-600">Working on government tenders with Make in India preferences.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Quality-First Operators</h3>
          <p className="text-gray-600">Contractors who prioritize minimal downtime and maximum reliability.</p>
        </div>
      </div>
    </div>
  );
}

