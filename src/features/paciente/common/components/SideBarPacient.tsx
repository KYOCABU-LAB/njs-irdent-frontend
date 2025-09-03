const SideBarPacient = () => {
  return (
    <div className="flex-1 max-w-3xs m h-screen bg-gray-200 p-4 flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        <li>
          <a href="#">Datos generales</a>
        </li>
        <li>
          <a href="#">Registros clinicos</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarPacient;
