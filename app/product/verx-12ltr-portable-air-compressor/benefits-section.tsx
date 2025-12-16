export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The VERX 12L Portable Air Compressor is designed for <strong>small workshops, home garages, and light commercial use</strong>. 
          It delivers reliable compressed air for everyday tasks without the complexity and cost of industrial equipment.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits of VERX 12L Compressor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Compact & Portable</h4>
            <p className="text-gray-600">
              Weighing only <strong>~18 kg</strong>, this compressor is easy to move around your workshop or carry to different locations. 
              Perfect for mobile mechanics and small service providers.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Budget-Friendly Entry Point</h4>
            <p className="text-gray-600">
              At <strong>₹6,000</strong>, this is the most affordable VERX compressor. 
              Ideal for those starting out or needing a secondary compressor for light tasks.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Single Phase Operation</h4>
            <p className="text-gray-600">
              Runs on <strong>standard 220V home/shop electricity</strong>. 
              No need for three-phase connection or special electrical setup.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Oil-Lubricated for Longevity</h4>
            <p className="text-gray-600">
              Unlike oil-free compressors that wear out faster, this <strong>oil-lubricated design</strong> runs cooler and lasts longer with proper maintenance.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Automatic Pressure Cut-Off</h4>
            <p className="text-gray-600">
              Built-in pressure switch <strong>automatically stops the motor</strong> when tank reaches max pressure, 
              preventing overheating and extending motor life.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Quick Recovery Time</h4>
            <p className="text-gray-600">
              The 1 HP motor fills the 12L tank quickly, so you spend <strong>less time waiting</strong> and more time working.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ease of Use</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Simple Controls</h4>
            <p className="text-blue-600">
              On/off switch, pressure gauge, and regulator knob - that&apos;s all you need. 
              <strong>No complex settings</strong> or programming required.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Easy Maintenance</h4>
            <p className="text-blue-600">
              Oil level sight glass, drain valve, and accessible air filter make routine maintenance <strong>quick and simple</strong>. 
              Check oil, drain water, clean filter - done.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Standard Fittings</h4>
            <p className="text-blue-600">
              Uses <strong>standard quick-connect couplers</strong> compatible with most pneumatic tools, spray guns, and accessories available in the market.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Safety Features</h4>
            <p className="text-blue-600">
              Includes <strong>safety valve, thermal overload protection</strong>, and pressure relief valve for safe operation even in demanding conditions.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cost Comparison: VERX 12L vs Manual Alternatives</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Foot Pump / Hand Pump</h4>
              <p className="text-3xl font-bold text-red-600 mb-2">₹300-800</p>
              <p className="text-sm text-gray-600">Physical effort required</p>
              <p className="text-sm text-gray-600">Very slow inflation</p>
              <p className="text-sm text-gray-600">Cannot power tools</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">VERX 12L Compressor</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">₹6,000</p>
              <p className="text-sm text-green-700">Automatic operation</p>
              <p className="text-sm text-green-700">Powers multiple tools</p>
              <p className="text-sm text-green-700">Years of reliable use</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Petrol Station Visits</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">₹20-50/visit</p>
              <p className="text-sm text-gray-600">Inconvenient travel</p>
              <p className="text-sm text-gray-600">Adds up over time</p>
              <p className="text-sm text-gray-600">Not available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

