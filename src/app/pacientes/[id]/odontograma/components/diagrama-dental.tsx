"use client";

const findingsColors: Record<string, string> = {
  caries: "bg-red-200 border-red-500",
  fractura: "bg-green-200 border-green-500",
  mancha: "bg-purple-200 border-purple-500",
  otros: "bg-yellow-200 border-yellow-500",
};

const teethData = [
  { number: 18 }, { number: 17 }, { number: 16, type: "caries" },
  { number: 15 }, { number: 14 }, { number: 13 }, { number: 12 },
  { number: 11, type: "mancha" }, { number: 21, type: "caries" },
  { number: 22 }, { number: 23 }, { number: 24 }, { number: 25 },
  { number: 26, type: "caries" }, { number: 27 }, { number: 28 },
];

const teethDataLower = [
  { number: 48 }, { number: 47 }, { number: 46, type: "desgaste" },
  { number: 45 }, { number: 44 }, { number: 43 }, { number: 42 },
  { number: 41 }, { number: 31 }, { number: 32 }, { number: 33 },
  { number: 34 }, { number: 35 }, { number: 36, type: "fractura" },
  { number: 37 }, { number: 38 },
];

export default function DiagramaDental() {
  return (
    <div className="border rounded-xl p-4 space-y-4">
      <h2 className="font-medium text-lg">Diagrama Dental</h2>

      {/* Superior */}
      <div className="flex gap-2 justify-center flex-wrap">
        {teethData.map((tooth) => (
          <div
            key={tooth.number}
            className={`w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer ${
              tooth.type ? findingsColors[tooth.type] : "border-gray-300"
            }`}
          >
            {tooth.number}
          </div>
        ))}
      </div>

      {/* Inferior */}
      <div className="flex gap-2 justify-center flex-wrap">
        {teethDataLower.map((tooth) => (
          <div
            key={tooth.number}
            className={`w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer ${
              tooth.type ? findingsColors[tooth.type] : "border-gray-300"
            }`}
          >
            {tooth.number}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-200 border border-red-500 rounded-sm"></span>
          Caries
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-200 border border-green-500 rounded-sm"></span>
          Fractura
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-purple-200 border border-purple-500 rounded-sm"></span>
          Mancha
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-yellow-200 border border-yellow-500 rounded-sm"></span>
          Otros
        </div>
      </div>
    </div>
  );
}
