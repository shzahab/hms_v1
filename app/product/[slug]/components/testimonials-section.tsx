import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  productName: string;
}

// Generic testimonials that work for any product
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Manager",
    company: "BuildRight Constructions, Bangalore",
    rating: 5,
    text: "Excellent quality machinery from HMS. The equipment has significantly improved our project efficiency. Their after-sales support is commendable.",
  },
  {
    name: "Mohammed Ismail",
    role: "Site Engineer",
    company: "Metro Infrastructure Ltd, Hyderabad",
    rating: 5,
    text: "We've been using HMS machinery for over 2 years now. Reliable performance and minimal maintenance requirements. Highly recommended for construction professionals.",
  },
  {
    name: "Suresh Patel",
    role: "Project Director",
    company: "Patel & Sons Builders, Mumbai",
    rating: 5,
    text: "The quality-to-price ratio is unmatched. HMS delivers professional-grade equipment at competitive prices. Their technical team is always helpful.",
  },
  {
    name: "Anand Sharma",
    role: "Owner",
    company: "Sharma Construction Co., Delhi",
    rating: 4,
    text: "Good machinery with solid build quality. Delivery was on time and the installation support was helpful. Would purchase from HMS again.",
  },
];

export default function TestimonialsSection({
  productName,
}: TestimonialsSectionProps) {
  return (
    <div>
      <p className="text-gray-600 mb-8">
        See what construction professionals across India say about HMS Machinery
        and our {productName}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-sm text-blue-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">15+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">100+</p>
            <p className="text-sm text-gray-600">Products Sold</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-sm text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

