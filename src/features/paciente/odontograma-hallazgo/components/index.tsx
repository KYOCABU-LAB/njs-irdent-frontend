"use client";
import { BrainIcon, FileIcon } from "lucide-react";
import { useState } from "react";
import HallazgosOdontograma from "./hallazgos";
import TratamientosOdontograma from "./tratamientos";

type tipo = "hallazgo" | "tratamiento";

const OontogramaHallazgoMain = () => {
  const [tipo, setTipo] = useState<tipo>("hallazgo");

  return (
    <div className="flex flex-col gap-2 w-full h-full ">
      <div className="flex gap-2">
        <button
          className="bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition-colors shadow-lg flex gap-2 items-center"
          onClick={() => setTipo("hallazgo")}
        >
          Hallazgos
          <FileIcon className="w-5 h-5" />
        </button>

        <button
          className="bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition-colors shadow-lg flex gap-2 items-center"
          onClick={() => setTipo("tratamiento")}
        >
          Tratamientos
          <BrainIcon className="w-5 h-5" />
        </button>
      </div>
      <div>
        {tipo === "hallazgo" ? (
          <HallazgosOdontograma />
        ) : (
          <TratamientosOdontograma />
        )}
      </div>
    </div>
  );
};

export default OontogramaHallazgoMain;
