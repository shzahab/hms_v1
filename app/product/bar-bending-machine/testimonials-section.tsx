import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The best bar bending machine we've used—accurate, easy to operate, and highly efficient. It has significantly improved our project timelines across multiple sites in Bengaluru.",
    name: "Rajesh Kumar",
    role: "Civil Contractor, Bengaluru",
    initials: "RK"
  },
  {
    quote: "Durable and cost-effective. We've cut labour costs by 35% while increasing precision on our Chennai metro infrastructure projects. Hutaib's support has been excellent.",
    name: "Venkatesh Iyer",
    role: "Site Engineer, Chennai",
    initials: "VI"
  },
  {
    quote: "The digital control panel is a game-changer. Precise bends with minimal errors. Been using it for 2 years on high-rise projects in Hyderabad with zero major issues.",
    name: "Prakash Reddy",
    role: "Project Manager, Hyderabad",
    initials: "PR"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 hover:from-white hover:to-slate-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        >
          <div className="absolute top-0 left-8 w-16 h-1 rounded-b-full bg-gradient-to-r from-blue-500 to-blue-600" />
          
          <div className="relative">
            <Quote className="w-10 h-10 text-blue-500/20 mb-4" />
            
            <p className="text-slate-700 leading-relaxed mb-6">
              {testimonial.quote}
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
