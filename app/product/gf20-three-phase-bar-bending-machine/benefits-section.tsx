export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The GF20 Three Phase is engineered for <strong>high-volume production environments</strong> where 
          continuous operation and maximum throughput are essential. The industrial three-phase motor 
          delivers <strong>consistent power without the limitations</strong> of single-phase machines.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Three Phase Motor Advantages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">45% More Power</h4>
            <p className="text-gray-600">
              The 2.2kW three-phase motor delivers <strong>significantly more torque</strong> than the 1.5kW 
              single-phase variant, making bending faster and easier, especially on harder TMT grades.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Continuous Duty Rating</h4>
            <p className="text-gray-600">
              Three-phase motors can run <strong>continuously without overheating</strong>. Process hundreds 
              of stirrups per shift without stopping to cool down the motor.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Faster Bending Speed</h4>
            <p className="text-gray-600">
              Achieve <strong>28-32 bends per minute</strong> compared to 20-25 on single phase. 
              That&apos;s up to <strong>30% higher productivity</strong> per hour.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Longer Motor Life</h4>
            <p className="text-gray-600">
              Three-phase motors run cooler and more efficiently under load, resulting in 
              <strong> longer service life</strong> and lower maintenance costs over time.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideal For High-Volume Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Fabrication Units</h4>
            <p className="text-blue-600">
              Processing orders for multiple contractors? The three-phase GF20 handles 
              <strong> all-day operation</strong> without breaking a sweat.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Large Site Operations</h4>
            <p className="text-blue-600">
              Big construction sites with dedicated fabrication areas benefit from the 
              <strong> industrial-grade reliability</strong> of three-phase power.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Multi-Building Projects</h4>
            <p className="text-blue-600">
              Apartment complexes, housing colonies, and commercial developments need machines 
              that can <strong>keep up with demanding schedules</strong>.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Choose Three Phase Over Single Phase</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">✅ Choose GF20 Three Phase If:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• You have 3-phase power at your site/workshop</li>
                <li>• You process 100+ stirrups per day</li>
                <li>• You run fabrication for multiple projects</li>
                <li>• You need continuous operation (6+ hours/day)</li>
                <li>• You value speed and throughput</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700 mb-3">⚠️ Consider Single Phase If:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Your sites don&apos;t have 3-phase connections</li>
                <li>• You work on 2-3 small projects at a time</li>
                <li>• Portability between sites is important</li>
                <li>• You don&apos;t need continuous operation</li>
                <li>• Budget is the primary concern (₹33K vs ₹35K)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

