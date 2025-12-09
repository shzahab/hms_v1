export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for 280L Handy Type Concrete Mixer
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The 280L concrete mixer with 1.5HP handy type motor is perfect for small to medium construction projects 
        where you need slightly more capacity than the 240L model. Here&apos;s where this machine excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏠 G+1 and G+2 Houses
          </h3>
          <p className="text-gray-600 mb-4">
            The extra capacity is useful when pouring larger columns and beams for multi-floor houses. 
            Fewer batches needed per pour session.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Foundation concrete</li>
            <li>• Multi-floor column work</li>
            <li>• Beam and slab casting</li>
            <li>• Staircase construction</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Small Commercial Structures
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for small shops, godowns, and commercial buildings where batch size matters 
            but full-bag mixing isn&apos;t needed.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Shop front construction</li>
            <li>• Small warehouse floors</li>
            <li>• Office building foundations</li>
            <li>• Commercial parking areas</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🧱 Compound Walls & Driveways
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal for continuous pouring projects like long compound walls and driveways 
            where consistent batches speed up work.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Long boundary walls</li>
            <li>• Driveway concrete</li>
            <li>• Paving work</li>
            <li>• Plinth beam for fencing</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the 280L Handy Type Mixer?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Contractors Upgrading from 240L
          </h3>
          <p className="text-gray-600 mb-4">
            If you&apos;re already using a 240L mixer and find yourself wanting just a bit more capacity per batch, 
            the 280L is the logical upgrade.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> 20L more output per batch adds up over a full day
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Sites with Stable Power Supply
          </h3>
          <p className="text-gray-600 mb-4">
            The handy type motor works best with consistent voltage. If your site has reliable electricity, 
            this simpler design means less maintenance.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> DOL motors are simpler and more robust
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Multi-Floor Residential Projects
          </h3>
          <p className="text-gray-600 mb-4">
            When building G+1 or G+2 houses, the extra capacity helps when pouring larger structural elements 
            without significantly increasing cost.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Fewer batches for larger pours
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Budget-Conscious Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            At only ₹3,000 more than the 240L model, you get better value per liter of capacity. 
            Smart choice for growing businesses.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Better cost per liter of capacity
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Other Options If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Unstable power supply</strong> — Consider 240L Staring Type with star-delta start for weak connections</li>
          <li>• <strong>Need full-bag mixing</strong> — Look at 500L models for 1-bag operations</li>
          <li>• <strong>Higher output needed</strong> — Consider 350L with 3HP motor for faster production</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need help choosing? <a href="https://wa.me/918074949635" className="underline font-semibold">Contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

