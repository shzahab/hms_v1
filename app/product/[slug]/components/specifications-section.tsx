interface Specification {
  label: string;
  value: string;
}

interface SpecificationsSectionProps {
  specifications: Specification[];
  productName: string;
}

export default function SpecificationsSection({
  specifications,
  productName,
}: SpecificationsSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Technical Specifications - {productName}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left p-4 font-semibold">Specification</th>
              <th className="text-left p-4 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-4 font-medium text-gray-700">{spec.label}</td>
                <td className="p-4 text-gray-600">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        * Specifications may vary. Contact us for detailed technical information.
      </p>
    </div>
  );
}

