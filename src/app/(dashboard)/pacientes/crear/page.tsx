import { redirect } from "next/navigation";


const CrearPacientePage = () => {
  return (
    redirect("/pacientes/crear/datos-identificacion")
  );
};

export default CrearPacientePage;
