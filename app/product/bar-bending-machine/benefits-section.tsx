import { 
  Target, 
  Banknote, 
  Zap, 
  Shield, 
  Gauge, 
  Settings2,
  Fingerprint,
  Cpu,
  RotateCcw,
  Lock
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "High Bending Accuracy",
    description: "Ensures precise angles with minimal errors, reducing material wastage and ensuring structural integrity.",
    accent: "blue"
  },
  {
    icon: Banknote,
    title: "Reduced Labour Costs",
    description: "Automates the bending process, reducing manual effort and dependency on skilled labour, leading to significant time and cost savings.",
    accent: "green"
  },
  {
    icon: Zap,
    title: "Improved Construction Efficiency",
    description: "Enhances project timelines by ensuring consistent and fast bending of reinforcement bars, helping meet strict deadlines.",
    accent: "yellow"
  },
  {
    icon: Shield,
    title: "Enhanced Structural Durability",
    description: "Precisely bent bars contribute to stronger, more reliable concrete structures, reducing the risk of structural failures over time.",
    accent: "purple"
  },
  {
    icon: Gauge,
    title: "Energy-Efficient Operation",
    description: "Optimized power consumption ensures cost savings without compromising performance.",
    accent: "cyan"
  },
  {
    icon: Settings2,
    title: "Motor Protection with Preventer",
    description: "Equipped with a preventer that safeguards the motor from power fluctuations, ensuring consistent performance and extending the machine's lifespan.",
    accent: "orange"
  }
];

const engineeringFeatures = [
  {
    icon: Fingerprint,
    title: "Ergonomic Design & User-Friendly Controls",
    description: "Intuitive interfaces allow both seasoned professionals and first-time users to operate effortlessly."
  },
  {
    icon: Cpu,
    title: "Advanced Electrical Control",
    description: "Enhanced with brake motor for superior machine performance, preventing sudden stops, and increasing durability."
  },
  {
    icon: RotateCcw,
    title: "Automated Bending",
    description: "Semi-automatic operation minimizes physical strain, making bending faster, easier, and more efficient."
  },
  {
    icon: Lock,
    title: "Enhanced Safety Mechanisms",
    description: "Built-in safeguards prevent errors and ensure operational reliability, keeping workers safe while increasing output."
  }
];

const industries = [
  { title: "Construction & Infrastructure", description: "Ideal for bending reinforcement bars used in bridges, buildings, and highways." },
  { title: "Bridge & Highway Projects", description: "Handles complex bar shapes for infrastructure projects with seamless switching between manual and automatic functions." },
  { title: "Manufacturing & Fabrication", description: "Essential for casting, grinding, and shaping iron rods in steel plants and factories." },
  { title: "Heavy Engineering", description: "Supports customized bending requirements for various metalworking applications." }
];

const accentColors: { [key: string]: string } = {
  blue: "from-blue-500 to-blue-600",
  green: "from-emerald-500 to-emerald-600",
  yellow: "from-amber-500 to-amber-600",
  purple: "from-violet-500 to-violet-600",
  cyan: "from-cyan-500 to-cyan-600",
  orange: "from-orange-500 to-orange-600"
};

export default function BenefitsSection() {
  return (
    <div className="space-y-16">
      <div className="max-w-3xl">
        <p className="text-lg text-slate-600 leading-relaxed">
          Bar bending machines play a <strong className="text-slate-900">crucial role in modern construction projects</strong>,
          offering superior <strong className="text-slate-900">efficiency, durability, and cost-effectiveness</strong>. Designed with{" "}
          <strong className="text-slate-900">robust gearboxes and advanced automation</strong>, these machines ensure{" "}
          <strong className="text-slate-900">high bending accuracy</strong>, reduce <strong className="text-slate-900">manual effort</strong>, and enhance{" "}
          <strong className="text-slate-900">project efficiency</strong>.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mt-4">
          With features like <strong className="text-slate-900">foot pedal control switches</strong>, they enable seamless operation
          even in <strong className="text-slate-900">harsh construction conditions</strong>, making them an{" "}
          <strong className="text-slate-900">indispensable tool for contractors and engineers</strong>.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Key Benefits</h3>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-6 w-12 h-1 rounded-b-full bg-gradient-to-r ${accentColors[benefit.accent]}`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentColors[benefit.accent]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-600" />
          <h3 className="text-2xl font-bold text-white tracking-tight">Engineering Features</h3>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group flex gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Industrial Applications</h3>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/50 rounded-full -translate-y-12 translate-x-12 group-hover:bg-blue-200/50 transition-colors" />
              <div className="relative">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white rounded-full text-slate-500 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{industry.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
