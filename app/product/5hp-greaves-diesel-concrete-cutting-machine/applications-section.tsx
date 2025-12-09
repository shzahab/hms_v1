export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for 5HP Greaves Diesel Concrete Cutter
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The 5HP Greaves diesel model is purpose-built for small to medium cutting projects where fuel economy and reliability matter. 
        Here&apos;s where this machine excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🛣️ Road Joints & Repairs
          </h3>
          <p className="text-gray-600 mb-4">
            Cut expansion joints in residential roads, colony streets, and internal roads. 
            Handle small road repair and patching jobs efficiently.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Expansion joint cutting</li>
            <li>• Control joint grooves</li>
            <li>• Road patch perimeters</li>
            <li>• Speed breaker edges</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏠 Residential & Commercial Floors
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for floor cutting in homes, shops, and small commercial buildings. 
            Create clean cuts for utility installations and repairs.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Plumbing line trenches</li>
            <li>• Electrical conduit channels</li>
            <li>• Floor tile removal cuts</li>
            <li>• Drainage channel cutting</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🅿️ Parking & Driveways
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal for parking lot joints, driveway repairs, and compound flooring work. 
            Handle typical residential and small commercial applications.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Parking lot expansion joints</li>
            <li>• Driveway repair cuts</li>
            <li>• Compound floor grooves</li>
            <li>• Pathway edge cutting</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the 5HP Greaves Model?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Small Road Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If you handle residential road repairs, colony internal roads, or small municipal contracts, 
            the 5HP Greaves offers the <strong>best balance of cost and capability</strong>.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Typical savings:</strong> ₹200-300/day in fuel costs vs petrol models
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Plumbers & Utility Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Floor cutting for plumbing, drainage, and electrical work is bread-and-butter work for this machine. 
            The 240mm depth handles most floor cutting requirements.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Use case:</strong> Daily floor cutting jobs in residential areas
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Construction Companies Adding Equipment
          </h3>
          <p className="text-gray-600 mb-4">
            Already have a larger cutter? The 5HP Greaves makes an excellent <strong>secondary machine</strong> for 
            small jobs, saving wear on your primary equipment.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Advantage:</strong> Lower investment for light-duty backup
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Rental Business Startups
          </h3>
          <p className="text-gray-600 mb-4">
            Starting a tool rental business? The affordable price point and Greaves reliability make this 
            a <strong>low-risk investment</strong> with good rental returns.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>ROI:</strong> Typically recovered in 15-20 rental days
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Higher HP Models For:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Major highway/road projects</strong> — Consider 10HP or 13HP for continuous heavy cutting</li>
          <li>• <strong>Deep cutting (250mm+)</strong> — Higher HP provides better power for deep passes</li>
          <li>• <strong>Reinforced concrete cutting</strong> — More power needed for rebar-heavy sections</li>
          <li>• <strong>Full-day continuous operation</strong> — Higher HP engines handle sustained loads better</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need more power? <a href="/product/concrete-cutting-machine" className="underline font-semibold">View all concrete cutting machines</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

