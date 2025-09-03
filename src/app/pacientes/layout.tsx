import SideBarPacient from "@/features/paciente/common/components/SideBarPacient";

const PacientesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBarPacient />
      {children}
    </div>
  );
};

export default PacientesLayout;
