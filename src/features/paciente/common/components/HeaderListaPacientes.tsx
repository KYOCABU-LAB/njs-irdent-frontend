import { PlusCircle } from "lucide-react";
import Link from "next/link";

export function HeaderListaPacientes() {
  return (
    <header className="bg-white w-full py-4 px-8 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-xl font-bold text-gray-800">Gestion de Pacientes</h1>
      <Link href="/pacientes/crear">
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
          <PlusCircle className="h-5 w-5" />
          <span>Crear Paciente</span>
        </button>
      </Link>
    </header>
  );
}
