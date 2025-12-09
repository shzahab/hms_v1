export default function BenefitsSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6">
          The 350L Concrete Mixer with 3HP Indian Motor is the <strong>largest electric single-phase mixer</strong> we offer. 
          It bridges the gap between small electric mixers and full-bag diesel machines, perfect for contractors who need 
          larger capacity while keeping the convenience of electric operation.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Advantages of the 350L 3HP</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">3/4 Bag Capacity</h4>
            <p className="text-gray-600">
              At <strong>350 liters drum capacity</strong>, you get approximately 230-260 liters of concrete per batch. 
              That&apos;s 40-50% more than 250L models - significant for larger pours.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">3HP Power - Double the Strength</h4>
            <p className="text-gray-600">
              The <strong>3HP Indian motor</strong> provides twice the power of 1.5HP models, enabling faster mixing cycles 
              and better handling of larger, thicker batches.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Still Electric - No Diesel Needed</h4>
            <p className="text-gray-600">
              Unlike 500L diesel mixers, this runs on <strong>single-phase electricity</strong> - no fuel costs, 
              no diesel smell, easier starting, and less maintenance.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Fewer Batches per Pour</h4>
            <p className="text-gray-600">
              Larger capacity means <strong>fewer mixing cycles</strong> for the same volume of concrete. 
              This saves time and reduces labor effort on bigger pours.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Heavy-Duty Construction</h4>
            <p className="text-gray-600">
              Built with <strong>extra-thick steel frame and drum</strong> to handle the larger capacity 
              and more powerful motor without structural stress.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Only ₹10K More Than 250L</h4>
            <p className="text-gray-600">
              For <strong>₹68,000 vs ₹58,000</strong>, you get 100L more drum capacity and 1HP more power - 
              excellent value for growing contractors.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Capacity Comparison</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">250L 2HP</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹58,000</p>
              <p className="text-sm text-gray-600">~160-180L/batch</p>
              <p className="text-xs text-gray-500">Half bag mixing</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">350L 3HP</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">₹68,000</p>
              <p className="text-sm text-green-700">~230-260L/batch</p>
              <p className="text-xs text-green-600">3/4 bag mixing</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">500L Diesel</h4>
              <p className="text-2xl font-bold text-gray-600 mb-2">₹1,30,000</p>
              <p className="text-sm text-gray-600">~350-400L/batch</p>
              <p className="text-xs text-gray-500">Full bag mixing</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">350L Advantage</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">+40%</p>
              <p className="text-sm text-gray-600">More capacity vs 250L</p>
              <p className="text-xs text-gray-500">For just ₹10K extra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

