import { redirect } from "next/navigation";


const CrearDoctorPage = () => {
  return (
    redirect("/admin/doctors/crear/datos-identificacion")
  );
};

export default CrearDoctorPage;
