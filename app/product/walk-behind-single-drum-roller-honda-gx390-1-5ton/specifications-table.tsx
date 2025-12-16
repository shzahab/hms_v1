export default function SpecificationsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specification
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Honda GX390 Single Drum Roller
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Brand</td>
            <td className="px-6 py-4 text-sm text-gray-600">Honda</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Model</td>
            <td className="px-6 py-4 text-sm text-gray-600">GX390</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Power</td>
            <td className="px-6 py-4 text-sm text-gray-600">13 HP</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Petrol</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Start Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Recoil Start (Pull Start)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Compaction Force</td>
            <td className="px-6 py-4 text-sm text-gray-600">1.5 Ton</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Drum Configuration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Single Drum</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Operating Type</td>
            <td className="px-6 py-4 text-sm text-gray-600">Walk Behind</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Vibration</td>
            <td className="px-6 py-4 text-sm text-gray-600">Yes - Vibratory Compaction</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">Engine Warranty</td>
            <td className="px-6 py-4 text-sm text-gray-600">As per Honda India Policy</td>
          </tr>
          <tr className="bg-red-50">
            <td className="px-6 py-4 text-sm font-bold text-gray-900">Price</td>
            <td className="px-6 py-4 text-sm font-bold text-red-700">₹1,35,000 + GST (18%) = ₹1,59,300 Total</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <h4 className="font-semibold text-red-800 mb-2">🏆 Honda GX390 - Global Gold Standard</h4>
        <p className="text-sm text-red-700">
          The Honda GX390 is the world&apos;s most trusted small engine. Known for starting on the first pull, exceptional fuel efficiency, 
          and years of reliable operation with minimal maintenance. Spare parts and service available at Honda authorized centers across India.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 GST Note</h4>
        <p className="text-sm text-yellow-700">
          Price of ₹1,35,000 is exclusive of GST. Add 18% GST (₹24,300) for total of <strong>₹1,59,300</strong> inclusive of all taxes. 
          Delivery charges as per actuals based on location.
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>*Warranty Terms:</strong> Honda engine warranty as per Honda India policy - serviced at authorized Honda service centers. 
          Non-engine roller components covered under 6-month HMS warranty for manufacturing defects.
        </p>
      </div>
    </div>
  );
}

