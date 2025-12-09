export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 mb-6">
        The GW42 is the <strong>industry workhorse</strong> for 32mm bar bending - powerful enough for heavy infrastructure, 
        priced right for widespread adoption. This is why it&apos;s our best-selling heavy-duty machine.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">32mm Handles All Standard Infrastructure</h4>
          <p className="text-gray-600">Covers 16mm, 20mm, 25mm, 28mm, and 32mm bars - the complete range for bridges, flyovers, high-rises, and commercial buildings.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Digital Control Precision</h4>
          <p className="text-gray-600">Set exact bending angles digitally. Produces consistent, repeatable bends that meet IS specifications every time.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Best Value in 32mm Category</h4>
          <p className="text-gray-600">At ₹75,000, no other 32mm machine offers this combination of features, power, and reliability.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Proven Track Record</h4>
          <p className="text-gray-600">Thousands operating across India. Proven reliability on metro projects, highway construction, and commercial buildings.</p>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-2">GW42 vs GW52: How to Choose</h4>
        <p className="text-blue-700"><strong>Choose GW42</strong> if your largest bars are 32mm or less (most buildings, standard infrastructure).<br/>
        <strong>Choose GW52</strong> only if your projects specify 36mm-42mm bars (bridges, heavy industrial, metro viaducts).</p>
      </div>
    </div>
  );
}

