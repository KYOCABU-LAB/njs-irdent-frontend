import { BoxesIcon, EditIcon, FileUser } from "lucide-react";
import Link from "next/link";

const SideBarPacient = () => {
  return (
    <div className="flex-1 max-w-3xs m h-screen bg-gray-200 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes"}
        >
          <div className="flex gap-2">
            <div>Datos generales</div>
            <BoxesIcon className="w-5 h-5" />
          </div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/registro-clinico"}
        >
          <div className="flex gap-2">
            <div>Registros clinicos</div>
            <EditIcon className="w-5 h-5" />
          </div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/odontograma"}
        >
          <div className="flex gap-2">
            <div>Odontograma</div>
            <FileUser className="w-5 h-5" />
          </div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/periodontograma"}
        >
          <div className="flex gap-2">
            <div>Periodontograma</div>
            <FileUser className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBarPacient;
