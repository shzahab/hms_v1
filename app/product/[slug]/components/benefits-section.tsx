import { 
  Zap, 
  Shield, 
  Clock, 
  Wrench, 
  TrendingUp, 
  Award 
} from "lucide-react";

interface BenefitsSectionProps {
  productName: string;
  features: string[];
}

const benefitIcons = [
  Zap,
  Shield,
  Clock,
  Wrench,
  TrendingUp,
  Award,
];

export default function BenefitsSection({
  productName,
  features,
}: BenefitsSectionProps) {
  // Generate benefits from features
  const benefits = [
    {
      title: "High Performance",
      description: `The ${productName} delivers exceptional performance with advanced engineering for maximum efficiency and output.`,
    },
    {
      title: "Durable Construction",
      description: "Built with high-quality materials and robust components to withstand demanding construction site conditions.",
    },
    {
      title: "Time Savings",
      description: "Significantly reduces project timelines with faster processing speeds and minimal downtime.",
    },
    {
      title: "Easy Maintenance",
      description: "Designed for easy maintenance with accessible components and straightforward servicing procedures.",
    },
    {
      title: "Cost Effective",
      description: "Reduces labor costs and material waste while improving overall project efficiency and ROI.",
    },
    {
      title: "Quality Assurance",
      description: "Each machine undergoes rigorous quality testing to ensure consistent, reliable performance.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The {productName} offers numerous advantages for construction
          professionals. Here&apos;s why contractors and builders choose HMS
          Machinery:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const IconComponent = benefitIcons[index % benefitIcons.length];
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      {/* Key Features Highlight */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Key Features of {productName}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

