import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const CrearPacientePage = () => {
  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Link href="/pacientes">
          <button className="flex items-center space-x-2 text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span>Volver a Pacientes</span>
          </button>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-xl font-bold text-stone-800">
          Crear Nuevo Paciente
        </h1>
        <p className="text-stone-600 mt-2">prueba</p>
      </div>
    </div>
  );
};

export default CrearPacientePage;
