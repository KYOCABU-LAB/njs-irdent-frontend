import Link from "next/link";

const SideBarPacient = () => {
  return (
    <div className="flex-1 max-w-3xs m h-screen bg-gray-200 p-4 flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        <li className="font-bold hover:bg-gray-300 p-2 rounded transition-colors">
          <Link href={"/pacientes"}>Datos generales</Link>
        </li>
        <li className="font-bold hover:bg-gray-300 p-2 rounded">
          <Link href={"/pacientes/registro-clinico"}>Registros clinicos</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarPacient;
