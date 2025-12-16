export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for VERX 50L Compressor
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The VERX 50L is built for professional environments where reliability and continuous performance matter. 
        Here&apos;s where this workhorse compressor excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🚗 Auto Garages
          </h3>
          <p className="text-gray-600 mb-4">
            The go-to choice for automotive service centers. Powers impact wrenches for tyre changes, 
            spray guns for panel painting, and air tools for general repairs.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Tyre removal & installation</li>
            <li>• Panel spray painting</li>
            <li>• Air ratchets & grinders</li>
            <li>• Engine cleaning</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🎨 Professional Painting
          </h3>
          <p className="text-gray-600 mb-4">
            Extended spray sessions without interruption. Paint vehicle panels, furniture sets, 
            and equipment with consistent air supply.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Vehicle body panels</li>
            <li>• Furniture production</li>
            <li>• Industrial equipment</li>
            <li>• Gates and grilles</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏭 Fabrication Shops
          </h3>
          <p className="text-gray-600 mb-4">
            Metal fabrication workshops rely on pneumatic tools for cutting, grinding, and finishing. 
            The 50L keeps up with demanding work.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Air angle grinders</li>
            <li>• Pneumatic sanders</li>
            <li>• Die grinders</li>
            <li>• Plasma cutter air supply</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the VERX 50L?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Auto Workshop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Whether you run a two-wheeler service center or a car repair garage, the 50L handles 
            daily tyre work, painting, and tool operation reliably.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Most popular:</strong> Best-selling VERX model for auto garages
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Furniture Manufacturers
          </h3>
          <p className="text-gray-600 mb-4">
            Spray lacquer, operate nail guns, and power sanders throughout the production day. 
            The belt-driven design handles continuous use.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Advantage:</strong> Belt drive runs cooler for extended operation
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Commercial Tyre Shops
          </h3>
          <p className="text-gray-600 mb-4">
            High-volume tyre shops serving trucks, cars, and two-wheelers need consistent air supply. 
            The 50L handles peak hour demands.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Capacity:</strong> Service 20-30 vehicles per day comfortably
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ General Engineering Workshops
          </h3>
          <p className="text-gray-600 mb-4">
            Lathe shops, welding units, and general engineering workshops using pneumatic tools 
            for finishing, cleaning, and assembly work.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Versatile:</strong> Handles diverse workshop requirements
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider Larger Models If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Running multiple workstations</strong> — 150L supports 2-3 stations simultaneously</li>
          <li>• <strong>Heavy sandblasting work</strong> — 150L or 200L provide better sustained air flow</li>
          <li>• <strong>Factory/production environment</strong> — 200L for continuous duty operation</li>
          <li>• <strong>Planning to expand</strong> — Invest in 150L for future-proofing</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need help deciding? <a href="/category/air-compressors-verx" className="underline font-semibold">Compare all models</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">consult our team</a>.
        </p>
      </div>
    </div>
  );
}

