import { Bell } from "lucide-react";

export function HeaderPacientes() {
  return (
    <header className="bg-stone-50 w-full py-5 px-8 flex justify-between items-center border-b border-stone-200">
      <h1 className="text-xl font-bold text-stone-800">Gestión de Pacientes</h1>
      <div className="flex items-center space-x-6">
        <button className="relative text-stone-500 hover:text-stone-700">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-teal-500 rounded-full"></span>
        </button>
        <div className="flex items-center justify-center h-10 w-10 bg-stone-200 rounded-full text-stone-600 font-semibold text-sm">
          RR
        </div>
      </div>
    </header>
  );
}
