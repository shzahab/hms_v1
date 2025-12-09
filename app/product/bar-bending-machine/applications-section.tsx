import Image from "next/image";

const applications = [
  {
    title: "Infrastructure Projects",
    description: "Highway construction, bridge building, and flyover projects requiring high-volume stirrup production in Bengaluru, Chennai, and Hyderabad metro areas.",
    image: "/images/products/bar-bending-machine-1.webp",
    alt: "Hutaib bar bending machine bending rebar for highway construction project in Karnataka"
  },
  {
    title: "Commercial Construction",
    description: "Shopping complexes, office buildings, and industrial facilities throughout Karnataka, Tamil Nadu, and Kerala requiring precise rebar fabrication.",
    image: "/images/products/bar-bending-machine-2.webp",
    alt: "Bar bending machine processing TMT bars for commercial building construction in Chennai"
  },
  {
    title: "Precast Concrete Plants",
    description: "Automated rebar cages for precast beam, column, and slab production serving South Indian residential and infrastructure projects.",
    image: "/images/products/bar-bending-machine-3.webp",
    alt: "Hutaib bar bending machine at precast concrete plant producing rebar cages in South India"
  }
];

const useCases = [
  {
    title: "Skyscraper & High-Rise Construction",
    points: [
      "Ensures uniform rebar bending",
      "Reduces material waste with digital control"
    ],
    image: "/images/products/bar-bending-machine-1.webp",
    alt: "Bar bending machine with digital controls bending rebar for high-rise construction in Bengaluru"
  },
  {
    title: "Bridge & Highway Projects",
    points: [
      "Handles complex bar shapes",
      "Seamless switching between manual and automatic functions"
    ],
    image: "/images/products/bar-bending-machine-main.webp",
    alt: "Hutaib bar bending machine processing complex bar shapes for bridge construction in Tamil Nadu"
  },
  {
    title: "Prefabrication & Modular Construction",
    points: [
      "Ensures precision in factory-based steel processing",
      "Minimizes errors for efficient assembly"
    ],
    image: "/images/products/bar-bending-machine-3.webp",
    alt: "Bar bending machine in prefabrication facility producing precision rebar for modular construction"
  }
];

export default function ApplicationsSection() {
  return (
    <div className="space-y-16">
      <div>
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Applications Across South Indian Industries
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            This bar bending machine serves multiple construction applications across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {applications.map((app, index) => (
            <div key={index} className="group relative h-[400px] overflow-hidden">
              <Image
                src={app.image}
                alt={app.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white mb-3 w-fit">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Proven Use Cases</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {useCase.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-2">
                  {useCase.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span><strong className="text-slate-900">{point.split(" ")[0]}</strong> {point.split(" ").slice(1).join(" ")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
