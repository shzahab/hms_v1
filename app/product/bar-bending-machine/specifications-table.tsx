"use client";

import { useState } from "react";

const models = [
  {
    id: "gf20",
    name: "GF20",
    subtitle: "Light Duty",
    specs: {
      maxDiameter: "25mm",
      bendingAngle: "0° - 180°",
      motorPower: "2.2 kW / 3 HP",
      powerSupply: "415V, 3-Phase, 50Hz",
      bendingSpeed: "28 bends/min",
      weight: "90 kg",
      dimensions: "800mm × 530mm × 830mm",
      warranty: "1 Year",
    },
  },
  {
    id: "gw42",
    name: "GW42",
    subtitle: "Medium Duty",
    specs: {
      maxDiameter: "32mm",
      bendingAngle: "0° - 180°",
      motorPower: "3.0 kW / 4 HP",
      powerSupply: "415V, 3-Phase, 50Hz",
      bendingSpeed: "10-20 bends/min",
      weight: "280 kg",
      dimensions: "850mm × 740mm × 820mm",
      warranty: "1 Year",
    },
  },
  {
    id: "gw52",
    name: "GW52",
    subtitle: "Heavy Duty",
    specs: {
      maxDiameter: "42mm",
      bendingAngle: "0° - 180°",
      motorPower: "4 HP",
      powerSupply: "415V, 3-Phase, 50Hz",
      bendingSpeed: "15-25 bends/min",
      weight: "550 kg",
      dimensions: "850mm × 740mm × 820mm",
      warranty: "1 Year",
    },
  },
];

const specLabels: { [key: string]: string } = {
  maxDiameter: "Maximum Bar Diameter",
  bendingAngle: "Bending Angle Range",
  motorPower: "Motor Power",
  powerSupply: "Power Supply",
  bendingSpeed: "Bending Speed",
  weight: "Machine Weight",
  dimensions: "Dimensions (L×W×H)",
  warranty: "Warranty",
};

export default function SpecificationsTable() {
  const [selectedModel, setSelectedModel] = useState("gw42");

  const activeModel = models.find((m) => m.id === selectedModel) || models[1];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
              selectedModel === model.id
                ? "bg-slate-900 text-white shadow-xl scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-102"
            }`}
          >
            <div className="text-center">
              <div className="text-xl font-bold tracking-tight">{model.name}</div>
              <div className={`text-xs uppercase tracking-wider mt-1 ${
                selectedModel === model.id ? "text-slate-300" : "text-slate-500"
              }`}>
                {model.subtitle}
              </div>
            </div>
            {selectedModel === model.id && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45" />
            )}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
            {activeModel.name}
          </h3>
          <p className="text-slate-500 mt-1">{activeModel.subtitle} Series</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(activeModel.specs).map(([key, value], index) => (
            <div
              key={key}
              className="group bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                    {specLabels[key]}
                  </p>
                  <p className="text-xl font-semibold text-slate-900">{value}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                  <span className="text-slate-400 group-hover:text-blue-600 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        {models.map((model) => (
          <div
            key={model.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedModel === model.id
                ? "w-8 bg-slate-900"
                : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
