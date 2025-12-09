export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 mb-6">
        The NRB32 solves a real problem: contractors need 32mm capacity but also need to <strong>move equipment between sites</strong>. 
        Standard 32mm machines are too heavy. The NRB32 delivers both capability and mobility.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Truly Portable 32mm</h4>
          <p className="text-gray-600">At 180kg with integrated handles, 4 workers can load/unload without crane. Standard GW42 at 320kg typically needs mechanical assistance.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Compact Dimensions</h4>
          <p className="text-gray-600">Fits in pickup trucks, auto-rickshaws, and tight site spaces. Set up and start working within minutes of arrival.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Full 32mm Capacity</h4>
          <p className="text-gray-600">Don&apos;t sacrifice capability for portability. The NRB32 bends the same 32mm bars as fixed machines.</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Time = Money</h4>
          <p className="text-gray-600">Quick setup means more productive hours. Less waiting for cranes. More flexibility in scheduling across sites.</p>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h4 className="font-bold text-green-800 mb-2">NRB32 vs GW42: How to Choose</h4>
        <p className="text-green-700">
          <strong>Choose NRB32 (₹95K)</strong> if you move between multiple sites regularly and value portability.<br/>
          <strong>Choose GW42 (₹75K)</strong> if the machine will stay in one location (fabrication yard, large project site).
        </p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-6">
        <h4 className="font-bold text-yellow-800 mb-2">💡 Pro Tip: The Portability Premium</h4>
        <p className="text-yellow-700">
          The NRB32 costs ₹20K more than GW42 for the same 32mm capacity. This premium buys you: lighter weight design, 
          integrated handles, balanced construction. If portability saves you even one crane rental or one day of waiting, 
          the premium pays for itself.
        </p>
      </div>
    </div>
  );
}

