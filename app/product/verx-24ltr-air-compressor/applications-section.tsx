export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for VERX 24L Compressor
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The VERX 24L strikes the perfect balance between portability and performance. 
        Here&apos;s where this mid-range compressor excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🎨 Spray Painting
          </h3>
          <p className="text-gray-600 mb-4">
            Handle furniture painting, grille work, and small automotive parts with ease. 
            The 24L tank provides 5-8 minutes of continuous spraying.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Furniture refinishing</li>
            <li>• Metal grilles and gates</li>
            <li>• Auto parts and panels</li>
            <li>• DIY and craft projects</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🔧 Pneumatic Tools
          </h3>
          <p className="text-gray-600 mb-4">
            Power common workshop pneumatic tools including nail guns, staplers, 
            small impact wrenches, and die grinders.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Brad nailers & finish nailers</li>
            <li>• Pneumatic staplers</li>
            <li>• Small impact wrenches (3/8&quot;)</li>
            <li>• Die grinders & rotary tools</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🚗 Tyre Services
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for puncture shops and small tyre service centers. 
            Faster inflation than 12L models with less wait time between vehicles.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Multi-vehicle tyre inflation</li>
            <li>• Puncture repair shops</li>
            <li>• Two-wheeler service centers</li>
            <li>• Fleet maintenance</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the VERX 24L?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Small Workshop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Carpenters, furniture makers, and general repair shops that need reliable air for daily tool operation 
            and occasional spray painting work.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Best value:</strong> ₹3,500 more than 12L for 50% more performance
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Puncture Shop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Handle multiple vehicles efficiently. The larger tank means less waiting between inflations 
            during peak hours.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Upgrade from:</strong> 12L models for busier shops
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Serious Hobbyists
          </h3>
          <p className="text-gray-600 mb-4">
            Woodworkers, model builders, and DIY enthusiasts who frequently use pneumatic nailers, 
            spray equipment, and air tools for projects.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Advantage:</strong> More capable than entry-level without pro pricing
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Mobile Service Providers
          </h3>
          <p className="text-gray-600 mb-4">
            AC technicians, appliance repair services, and mobile mechanics who need 
            a capable yet still portable compressor.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Note:</strong> At 28kg, still manageable for transport
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Other Models If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Budget is tight</strong> — The 12L at ₹6,000 handles basic tasks</li>
          <li>• <strong>Need continuous spray painting</strong> — 50L provides longer run time</li>
          <li>• <strong>Operating larger impact wrenches</strong> — 50L or 150L recommended</li>
          <li>• <strong>Running multiple tools simultaneously</strong> — Consider 150L or 200L</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need help choosing? <a href="/category/air-compressors-verx" className="underline font-semibold">Compare all VERX models</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">ask our experts</a>.
        </p>
      </div>
    </div>
  );
}

