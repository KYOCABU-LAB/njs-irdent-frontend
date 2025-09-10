import { HeaderListaPacientes } from "@/features/paciente/common/components/HeaderListaPacientes";

// This layout applies to the patient list and create patient pages
const PacientesListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderListaPacientes />
      <main className="p-8">{children}</main>
    </div>
  );
};

export default PacientesListLayout;
