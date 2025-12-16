export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for VERX 12L Compressor
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The VERX 12L Portable Air Compressor is perfect for light-duty applications where portability and convenience matter. 
        Here&apos;s where this compact compressor excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🚗 Tyre Inflation
          </h3>
          <p className="text-gray-600 mb-4">
            Inflate car tyres, bike tyres, auto-rickshaw tyres, and bicycle tyres quickly. 
            Keep one in your garage for regular pressure checks and top-ups.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Car & SUV tyres</li>
            <li>• Two-wheeler tyres</li>
            <li>• Auto-rickshaw tyres</li>
            <li>• Sports balls & inflatables</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🎨 Spray Painting
          </h3>
          <p className="text-gray-600 mb-4">
            Power small spray guns for painting furniture, grilles, small automotive parts, and DIY projects. 
            Perfect for touch-ups and small-scale work.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Furniture refinishing</li>
            <li>• Small automotive parts</li>
            <li>• Grilles & gates (touch-up)</li>
            <li>• Craft & hobby projects</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🧹 Cleaning & Dusting
          </h3>
          <p className="text-gray-600 mb-4">
            Use an air blow gun to clean dust from electronics, machinery, keyboards, and hard-to-reach areas. 
            Essential for workshops and service centers.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Computer & electronics cleaning</li>
            <li>• Workshop equipment dusting</li>
            <li>• Vehicle interior cleaning</li>
            <li>• AC filter cleaning</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the VERX 12L Compressor?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Home Garage Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Keep your car and bike tyres properly inflated without trips to the petrol station. 
            Also useful for DIY projects around the house.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Best for:</strong> Personal use, 2-3 vehicles, occasional DIY
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Small Workshop Owners
          </h3>
          <p className="text-gray-600 mb-4">
            Carpenters, electricians, and small repair shops can use this for cleaning equipment, 
            light spray painting, and operating small pneumatic tools.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Best for:</strong> Light-duty workshop tasks, secondary compressor
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Mobile Mechanics & Puncture Shops
          </h3>
          <p className="text-gray-600 mb-4">
            Portable design makes it easy to carry in your service vehicle. 
            Provides quick tyre inflation for roadside assistance.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Best for:</strong> On-the-go tyre services, emergency repairs
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Hobbyists & DIY Enthusiasts
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for airbrushing, model painting, small woodworking projects with brad nailers, 
            and other hobby applications.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Best for:</strong> Crafts, models, light pneumatic tools
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Not Recommended For:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Continuous spray painting</strong> — Tank empties quickly; consider 24L or 50L models</li>
          <li>• <strong>Heavy pneumatic tools</strong> — Impact wrenches, large grinders need higher CFM</li>
          <li>• <strong>Commercial tyre shops</strong> — High volume work needs larger tanks</li>
          <li>• <strong>Sandblasting</strong> — Requires much higher air flow capacity</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need more capacity? <a href="/category/air-compressors-verx" className="underline font-semibold">View our full VERX compressor range</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

