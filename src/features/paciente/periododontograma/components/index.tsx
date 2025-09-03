"use client";
import { useState } from "react";
import Periodontograma from "./periodontograma";
import PlanTratamiento from "./planTratamiento";
type Tabla = "planTratamiento" | "periodontograma";

const PeriododontogramaMain = () => {
  const [tabla, setTabla] = useState<Tabla>("planTratamiento");

  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <button
          className={`rounded-md px-4 py-2 ${
            tabla === "periodontograma"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setTabla("periodontograma")}
        >
          Periodontograma
        </button>
        <button
          className={`rounded-md px-4 py-2 ${
            tabla === "planTratamiento"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setTabla("planTratamiento")}
        >
          Plan de Tratamiento
        </button>
      </div>

      {tabla === "periodontograma" ? <Periodontograma /> : <PlanTratamiento />}
    </div>
  );
};

export default PeriododontogramaMain;
