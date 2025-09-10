import { HeaderListaPacientes } from "@/features/paciente/common/components/HeaderListaPacientes";
import { Eye, PlusCircle } from "lucide-react";
import Link from "next/link";

const pacientes = [
  {
    id: "1",
    name: "prueba",
    dni: "12345678A",
    lastVisit: "2023-10-15",
    status: "Activo",
  },
];

const StatusBadge = ({ status }: { status: "Activo" | "Inactivo" }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs font-medium rounded-full";
  const statusClasses = {
    Activo: "bg-teal-100 text-teal-800",
    Inactivo: "bg-stone-100 text-stone-800",
  };
  return (
    <span
      className={`${baseClasses} ${
        statusClasses[status] || statusClasses.Inactivo
      }`}
    >
      {status}
    </span>
  );
};

const PacientesPage = () => {
  return (
    <div>
      <HeaderListaPacientes />
      <main className="p-8">
        <div className="flex justify-end mb-6">
          <Link href="/pacientes/crear">
            <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
              <PlusCircle className="h-5 w-5" />
              <span>Crear Paciente</span>
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flow-root">
            <div className="-mx-6 -my-2 overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="grid grid-cols-5 gap-x-6 px-6 text-xs font-medium text-stone-500 uppercase">
                  <div className="col-span-2">Nombre</div>
                  <div>Última Visita</div>
                  <div>Estado</div>
                  <div className="text-right">Acciones</div>
                </div>

                <div className="mt-4 space-y-2">
                  {pacientes.map((patient) => (
                    <div
                      key={patient.id}
                      className="grid grid-cols-5 gap-x-6 px-6 py-4 bg-stone-50 rounded-lg items-center"
                    >
                      <div className="col-span-2">
                        <div className="font-medium text-stone-900">
                          {patient.name}
                        </div>
                        <div className="text-sm text-stone-500">
                          DNI: {patient.dni}
                        </div>
                      </div>
                      <div className="text-sm text-stone-700">
                        {patient.lastVisit}
                      </div>
                      <div>
                        <StatusBadge
                          status={patient.status as "Activo" | "Inactivo"}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Link href={`/pacientes/${patient.id}`}>
                          <button className="flex items-center justify-center space-x-1.5 text-teal-600 hover:text-teal-800 font-medium text-sm">
                            <Eye className="w-4 h-4" />
                            <span>Ver</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PacientesPage;
