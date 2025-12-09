export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The Honda GX390 13HP Concrete Cutting Machine is the <strong>premium choice for professional contractors</strong> who demand 
          the world&apos;s most reliable engine. Honda&apos;s legendary reputation for quality and durability makes this the go-to machine 
          for serious road cutting operations.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Honda GX390?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">World&apos;s Most Reliable Engine</h4>
            <p className="text-gray-600">Honda GX series engines are the <strong>global standard for reliability</strong>. Known for starting on the first pull, running for thousands of hours, and requiring minimal maintenance.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">13HP Maximum Power</h4>
            <p className="text-gray-600">With <strong>13 horsepower</strong>, the GX390 delivers excellent cutting power for thick concrete, reinforced slabs, and continuous road cutting operations.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Excellent Fuel Efficiency</h4>
            <p className="text-gray-600">Despite the high power output, Honda&apos;s OHV technology delivers <strong>superior fuel economy</strong>. The 6.1L tank provides extended operation between refills.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Global Service Network</h4>
            <p className="text-gray-600">Honda has <strong>service centers and genuine parts</strong> available in every major city in India. No worries about finding support anywhere.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy One-Pull Starting</h4>
            <p className="text-gray-600">Honda engines are famous for <strong>easy starting</strong> - typically starts on the first or second pull, even in cold conditions or after sitting unused.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Low Noise & Vibration</h4>
            <p className="text-gray-600">Advanced engine design with <strong>better balancing</strong> means smoother operation with less noise and vibration for operator comfort.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Honda GX390 vs Other 13HP Options</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-red-50 rounded-lg border-2 border-red-300">
              <h4 className="font-semibold text-red-800 mb-2">Honda GX390 13HP</h4>
              <p className="text-3xl font-bold text-red-600 mb-2">₹75,000</p>
              <p className="text-sm text-red-700">World&apos;s most reliable</p>
              <p className="text-sm text-red-700">Best resale value</p>
              <p className="text-sm text-red-700">Global service network</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Husqvarna 13HP</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">₹65,000</p>
              <p className="text-sm text-gray-600">Swedish quality</p>
              <p className="text-sm text-gray-600">Good value option</p>
              <p className="text-sm text-gray-600">Professional grade</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">VST Shakti 13HP Diesel</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">₹1,30,000</p>
              <p className="text-sm text-gray-600">Maximum power diesel</p>
              <p className="text-sm text-gray-600">Water cooled</p>
              <p className="text-sm text-gray-600">Heavy infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

