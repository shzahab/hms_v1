export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for 350L 3HP Indian Motor Mixer
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The 350L mixer with 3HP Indian motor is designed for contractors who need <strong>more capacity than small mixers</strong> 
        but don&apos;t want the cost and complexity of diesel-powered equipment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏢 G+3 and G+4 Buildings
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-floor residential buildings need larger concrete volumes. The 350L capacity 
            reduces mixing cycles per floor pour.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Large column foundations</li>
            <li>• Wide span beams</li>
            <li>• Full floor slab pours</li>
            <li>• Staircase construction</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏗️ Commercial Construction
          </h3>
          <p className="text-gray-600 mb-4">
            Shops, offices, and commercial buildings often need continuous concrete supply. 
            3/4 bag capacity keeps up with demand.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Showroom construction</li>
            <li>• Office building floors</li>
            <li>• Shopping complex work</li>
            <li>• Industrial flooring</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏘️ Apartment Complexes
          </h3>
          <p className="text-gray-600 mb-4">
            Multiple-unit residential projects benefit from faster concrete production 
            without multiple mixer setups.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Multi-unit foundations</li>
            <li>• Common area construction</li>
            <li>• Parking structure floors</li>
            <li>• Boundary and compound walls</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the 350L 3HP Mixer?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Growing Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If you&apos;ve been using 250L mixers and find capacity limiting, the 350L is your natural upgrade 
            before jumping to diesel machines.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> 40% more capacity for just ₹10,000 extra
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Electric-Only Sites
          </h3>
          <p className="text-gray-600 mb-4">
            Some locations restrict diesel equipment due to noise or emissions. The 350L gives you 
            maximum electric capacity.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Largest single-phase electric mixer available
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Budget-Conscious Commercial Work
          </h3>
          <p className="text-gray-600 mb-4">
            Need more capacity than residential mixers but can&apos;t justify ₹1,30,000 for diesel? 
            The 350L is your answer at ₹68,000.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Commercial capacity at residential pricing
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Multi-Floor Projects
          </h3>
          <p className="text-gray-600 mb-4">
            G+3, G+4 buildings need more concrete per pour. The 3/4 bag capacity significantly 
            reduces floor casting time.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Benefit:</strong> Fewer batches = faster pour completion
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Consider 500L Diesel Instead If:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Need full 1-bag mixing</strong> — Diesel 500L offers true full-bag capacity</li>
          <li>• <strong>Limited electrical capacity</strong> — 3HP draws significant current; diesel avoids this</li>
          <li>• <strong>Remote sites without power</strong> — Diesel is self-powered</li>
          <li>• <strong>Large commercial/infrastructure</strong> — May need higher volume output</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Not sure? <a href="https://wa.me/918074949635" className="underline font-semibold">Contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

