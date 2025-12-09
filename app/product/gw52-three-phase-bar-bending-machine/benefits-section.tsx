export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 mb-6">
        The GW52 is for contractors who need <strong>maximum bending capacity</strong>. When your projects specify 36mm, 40mm, or 42mm bars, 
        this is the machine that delivers - no compromises, no workarounds.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Maximum 42mm Capacity</h4>
          <p className="text-gray-600">The largest standard TMT bar size used in Indian construction. Essential for bridge piers, dam works, and heavy industrial foundations.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">4HP Heavy-Duty Motor</h4>
          <p className="text-gray-600">Serious power for serious applications. Bends 42mm Fe550D grade TMT with consistent performance.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">550kg Stable Platform</h4>
          <p className="text-gray-600">The heavy frame ensures stability when bending thick bars. No movement or vibration during operation.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Infrastructure-Ready</h4>
          <p className="text-gray-600">Built for the demanding requirements of NHAI, metro rail, and major infrastructure projects.</p>
        </div>
      </div>
      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
        <h4 className="font-bold text-red-800 mb-2">⚠️ Important Considerations</h4>
        <p className="text-red-700">The GW52 is a specialized machine. At 550kg and ₹95,000, it&apos;s only cost-effective if you actually need 36mm+ capacity. For most building construction (up to 32mm), the GW42 at ₹75,000 is more appropriate.</p>
      </div>
    </div>
  );
}

