"use client";

import Prioridad from "./prioridad";


const findings = [
  {
    tooth: 16,
    name: "Caries - Profunda",
    priority: "Alta",
    description: "Caries profunda en cara oclusal con compromiso pulpar",
    date: "15/03/2024",
    doctor: "Dr. Pérez",
    status: "Pendiente",
  },
  {
    tooth: 26,
    name: "Caries - Superficial",
    priority: "Media",
    description: "Caries superficial en cara mesial",
    date: "15/03/2024",
    doctor: "Dr. Pérez",
    status: "Completado",
  },
  {
    tooth: 36,
    name: "Fractura - Leve",
    priority: "Baja",
    description: "Fractura del esmalte en cúspide vestibular",
    date: "10/02/2024",
    doctor: "Dr. Rodríguez",
    status: "Pendiente",
  },
  {
    tooth: 46,
    name: "Desgaste - Moderado",
    priority: "Media",
    description: "Desgaste oclusal por bruxismo",
    date: "10/02/2024",
    doctor: "Dr. Rodríguez",
    status: "En progreso",
  },
  {
    tooth: 11,
    name: "Mancha - Leve",
    priority: "Baja",
    description: "Mancha por tetraciclina en tercio cervical",
    date: "05/01/2024",
    doctor: "Dr. García",
    status: "Completado",
  },
  {
    tooth: 21,
    name: "Caries - Moderada",
    priority: "Alta",
    description: "Caries interproximal entre 21 y 22",
    date: "05/01/2024",
    doctor: "Dr. García",
    status: "Pendiente",
  },
];

export default function TablaHallazgos() {
  return (
    <div className="border rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Hallazgos Registrados</h2>
        <span className="text-gray-500 text-sm">
          {findings.length} hallazgos encontrados
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2 px-3">Diente</th>
              <th className="py-2 px-3">Hallazgo</th>
              <th className="py-2 px-3">Prioridad</th>
              <th className="py-2 px-3">Descripción</th>
              <th className="py-2 px-3">Fecha</th>
              <th className="py-2 px-3">Doctor</th>
              <th className="py-2 px-3">Estado</th>
              <th className="py-2 px-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((f, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3 font-medium">{f.tooth}</td>
                <td className="py-2 px-3">{f.name}</td>
                <td className="py-2 px-3">
                  <Prioridad priority={f.priority as "Alta" | "Media" | "Baja"} />
                </td>
                <td className="py-2 px-3">{f.description}</td>
                <td className="py-2 px-3">{f.date}</td>
                <td className="py-2 px-3">{f.doctor}</td>
                <td className="py-2 px-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium
                    ${
                      f.status === "Pendiente"
                        ? "bg-gray-200 text-gray-700"
                        : f.status === "Completado"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {f.status}
                  </span>
                </td>
                <td className="py-2 px-3 flex gap-2">
                  <button className="p-1 rounded hover:bg-gray-200">✏️</button>
                  <button className="p-1 rounded hover:bg-gray-200">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
