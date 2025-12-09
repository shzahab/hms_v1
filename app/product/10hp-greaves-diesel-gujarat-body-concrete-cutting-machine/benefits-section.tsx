export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 10HP Greaves Diesel with Gujarat Body is the <strong>professional road contractor&apos;s workhorse</strong>. 
          Combining India&apos;s most trusted diesel engine with heavy-duty Gujarat manufacturing, this machine is built for 
          years of demanding daily use on road construction and cutting projects.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits for Road Contractors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Greaves 10HP - Double the Power</h4>
            <p className="text-gray-600">With <strong>10HP vs 5HP</strong>, this engine handles sustained heavy cutting without strain. Better for continuous road work, reinforced concrete, and daily professional use.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Gujarat Heavy-Duty Body</h4>
            <p className="text-gray-600">Gujarat-manufactured frames are renowned for <strong>thicker steel, better welding, reinforced joints</strong>. Built to last 10+ years of professional use.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Diesel Economy</h4>
            <p className="text-gray-600">Diesel costs <strong>₹15-20 less per liter</strong> than petrol. Combined with better fuel efficiency, daily savings add up to ₹50,000+ per year.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Nationwide Greaves Service</h4>
            <p className="text-gray-600">Greaves has <strong>service centers in every district</strong>. Parts and mechanics available everywhere in India - no remote area problems.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">High Torque for Deep Cuts</h4>
            <p className="text-gray-600">Diesel engines deliver <strong>higher torque at low RPM</strong>. Better for cutting through reinforced concrete and making deep passes.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional Price Point</h4>
            <p className="text-gray-600">At <strong>₹95,000</strong>, this is the sweet spot for professional contractors - serious power and build quality without premium brand markup.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">5HP vs 10HP Greaves Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">5HP Greaves (Entry Level)</h4>
              <p className="text-3xl font-bold text-gray-600 mb-2">₹55,000</p>
              <p className="text-sm text-gray-600">Small contractors</p>
              <p className="text-sm text-gray-600">Light to medium work</p>
              <p className="text-sm text-gray-600">Budget-friendly start</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">10HP Greaves Gujarat Body</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">₹95,000</p>
              <p className="text-sm text-blue-700">Professional contractors</p>
              <p className="text-sm text-blue-700">Heavy-duty daily use</p>
              <p className="text-sm text-blue-700">Built for 10+ years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

