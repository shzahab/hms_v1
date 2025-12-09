export default function ApplicationsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ideal Applications for GQ42 Bar Cutting Machine
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        The GQ42 Bar Cutting Machine is purpose-built for small to medium construction projects. 
        Here&apos;s where this machine excels:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏠 Individual Houses
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for G+1 and G+2 residential houses. Cut all bars for columns, beams, 
            and slabs using 8mm, 10mm, 12mm, and 16mm bars commonly specified in house plans.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Stirrup bar cutting (8mm)</li>
            <li>• Slab reinforcement bars (10mm)</li>
            <li>• Column main bars (12mm, 16mm)</li>
            <li>• Beam reinforcement cutting</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🧱 Compound Walls & Fencing
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal for boundary wall construction projects. Quickly cut pillar reinforcement 
            and horizontal band bars using 8mm and 10mm bars.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Pillar column bar cutting</li>
            <li>• Foundation bar preparation</li>
            <li>• Plinth beam reinforcement</li>
            <li>• Gate post bar cutting</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏪 Small Commercial Buildings
          </h3>
          <p className="text-gray-600 mb-4">
            Suitable for small shops, godowns, and commercial structures up to G+2. 
            Handle typical commercial building reinforcement cutting efficiently.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Shop front column bars</li>
            <li>• Mezzanine floor beams</li>
            <li>• Staircase reinforcement</li>
            <li>• Small span slab bars</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10">
        Who Should Buy the GQ42 Bar Cutting Machine?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Individual Building Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            If you take on 3-5 house construction projects per year, this machine will transform your bar cutting efficiency. 
            No more depending on manual labor for cutting.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Typical savings:</strong> ₹50,000-80,000 per year in labor costs
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Self-Building Homeowners
          </h3>
          <p className="text-gray-600 mb-4">
            Building your own house? Buy the GQ42, use it for your project, and sell it after or keep it for future maintenance. 
            Still cheaper than paying for manual labor.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Break-even:</strong> One house project covers the machine cost
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Small Fabrication Workshops
          </h3>
          <p className="text-gray-600 mb-4">
            Running a small rebar fabrication unit? The GQ42 handles the common sizes while larger machines handle bigger bars. 
            Great as a secondary or starter machine.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Use case:</strong> Quick jobs and small orders
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Rural Area Contractors
          </h3>
          <p className="text-gray-600 mb-4">
            Working in villages or smaller towns across Karnataka, Tamil Nadu, and Kerala? 
            The compact GQ42 is easy to transport and set up at any site.
          </p>
          <div className="bg-green-50 p-3 rounded text-sm text-green-700">
            <strong>Advantage:</strong> Portable and efficient for multiple sites
          </div>
        </div>
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Not Recommended For:</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <strong>Large commercial projects</strong> — Consider GQ52 or GQ40 GUTE for bars above 16mm</li>
          <li>• <strong>High-rise buildings</strong> — Requires larger capacity machines for main bars (20mm+)</li>
          <li>• <strong>Industrial/infrastructure work</strong> — Need heavy-duty machines with higher output</li>
          <li>• <strong>High-volume fabrication yards</strong> — Consider higher capacity models for continuous operation</li>
        </ul>
        <p className="mt-4 text-yellow-800">
          Need a higher capacity machine? <a href="/product/bar-rebar-cutting-machine" className="underline font-semibold">View our full range</a> or 
          <a href="https://wa.me/918074949635" className="underline font-semibold ml-1">contact us for advice</a>.
        </p>
      </div>
    </div>
  );
}

