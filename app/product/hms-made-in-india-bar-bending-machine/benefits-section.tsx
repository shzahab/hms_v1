export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 mb-6">
        Our HMS Made in India machine proves that <strong>Indian manufacturing can match international standards</strong>. 
        Premium quality, designed and built entirely in India, for Indian conditions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Indian Steel</h4>
          <p className="text-gray-600">Frame built with extra-thick Bhilai steel plates. Heavier, stronger, and more durable than standard machines.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">CNC Precision Components</h4>
          <p className="text-gray-600">Gears and critical parts are CNC machined in Bangalore for precision fit. Hardened for extended life.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">15-20 Year Service Life</h4>
          <p className="text-gray-600">Built to last decades with proper maintenance. Many customers still running 15+ year old HMS machines.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Direct Factory Support</h4>
          <p className="text-gray-600">No middlemen. Spare parts always available. Direct technical support from people who built the machine.</p>
        </div>
      </div>
      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h4 className="font-bold text-orange-800 mb-2">🇮🇳 Supporting Atmanirbhar Bharat</h4>
        <p className="text-orange-700">
          100% Indian value addition. Supporting Indian steel mills, motor manufacturers, and skilled machinists. 
          When you buy HMS Made in India, you invest in Indian manufacturing capability.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
        <h4 className="font-bold text-gray-800 mb-2">Why ₹1,55,000?</h4>
        <p className="text-gray-600">
          This is our premium, no-compromise machine. Extra-thick frame steel, premium bearings, CNC machined gears, 
          and extensive quality testing add cost - but deliver a machine built for decades of service. 
          For contractors who view equipment as a long-term investment, not an expense.
        </p>
      </div>
    </div>
  );
}

