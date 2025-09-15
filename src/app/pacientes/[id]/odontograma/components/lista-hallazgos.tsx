// app/hallazgos/page.tsx (Next.js 13+ con App Router)
"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

const hallazgos = [
  {
    titulo: "CORONA FRENESTADA EN BUEN ESTADO",
    categoria: "Restauraciones",
    descripcion: "Corona de porcelana en buen estado general",
    severidad: "Baja",
  },
  {
    titulo: "AMALGAMA DENTAL EN MAL ESTADO",
    categoria: "Restauraciones",
    descripcion: "Amalgama antigua con filtración marginal",
    severidad: "Alta",
  },
  {
    titulo: "CARIES PROFUNDA CON COMPROMISO PULPAR",
    categoria: "Patologías",
    descripcion: "Caries profunda que compromete la pulpa dental",
    severidad: "Alta",
  },
  {
    titulo: "CARIES INTERPROXIMAL MODERADA",
    categoria: "Patologías",
    descripcion: "Caries entre dientes de severidad moderada",
    severidad: "Media",
  },
  // 👉 aquí agregas el resto de hallazgos
];

const getColor = (severidad: string) => {
  switch (severidad) {
    case "Alta":
      return "text-red-500 bg-red-100";
    case "Media":
      return "text-yellow-600 bg-yellow-100";
    case "Baja":
      return "text-green-600 bg-green-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

export default function HallazgosPage() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Catálogo de Hallazgos</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
          <Plus size={18} /> Nuevo Hallazgo
        </button>
      </div>

      {/* Buscador */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Buscar hallazgos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "Todas",
          "Restauraciones",
          "Patologías",
          "Traumatismos",
          "Desgastes",
          "Alteraciones de Color",
          "Periodontal",
          "Preventivo",
          "Implantes",
          "Anomalías",
        ].map((filtro) => (
          <button
            key={filtro}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-blue-100 text-gray-700"
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* Grid Hallazgos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hallazgos
          .filter((h) =>
            h.titulo.toLowerCase().includes(busqueda.toLowerCase())
          )
          .map((h, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-semibold text-gray-800 text-sm">
                  {h.titulo}
                </h2>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${getColor(
                    h.severidad
                  )}`}
                >
                  {h.severidad}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">
                Categoría: {h.categoria}
              </p>
              <p className="text-sm text-gray-700">{h.descripcion}</p>

              {/* Acciones */}
              <div className="flex justify-end gap-2 mt-3">
                <button className="p-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
                  <Edit size={16} className="text-gray-600" />
                </button>
                <button className="p-1.5 rounded-md bg-gray-100 hover:bg-red-100">
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
