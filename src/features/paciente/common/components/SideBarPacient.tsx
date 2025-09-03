import Link from "next/link";

const SideBarPacient = () => {
  return (
    <div className="flex-1 max-w-3xs m h-screen bg-gray-200 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes"}
        >
          <div>Datos generales</div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/registro-clinico"}
        >
          <div>Registros clinicos</div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/odontograma"}
        >
          <div>Odontograma</div>
        </Link>

        <Link
          className="font-bold hover:bg-gray-300 p-2 rounded"
          href={"/pacientes/periodontograma"}
        >
          <div>Periodontograma</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBarPacient;
