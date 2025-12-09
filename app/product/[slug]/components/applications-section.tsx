import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ApplicationsSectionProps {
  applications: string[];
  productName: string;
  images: string[];
}

export default function ApplicationsSection({
  applications,
  productName,
  images,
}: ApplicationsSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Applications of {productName}
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
        The {productName} is designed for versatility and can be used across
        various industries and applications. Here are some of the key use cases:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((application, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
            >
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{application}</span>
            </div>
          ))}
        </div>

        {/* Application Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${productName} application ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Need a Custom Solution?
        </h3>
        <p className="text-blue-700">
          Our {productName} can be customized to meet your specific project
          requirements. Contact our team to discuss your needs and get expert
          recommendations.
        </p>
      </div>
    </div>
  );
}

