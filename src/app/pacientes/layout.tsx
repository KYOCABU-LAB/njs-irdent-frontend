import SideBarPacient from "@/features/paciente/common/components/SideBarPacient";

const PacientesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  ">
      <SideBarPacient />
      <div className="flex-1 ">{children}</div>
    </div>
  );
};

export default PacientesLayout;
