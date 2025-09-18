import { HeaderPacientes } from "@/features/paciente/common/components/HeaderPacientes";
import { TabsPacientes } from "@/features/paciente/common/components/TabsPacientes";

const PacientesLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderPacientes />
      <TabsPacientes pacienteId={params.id} />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default PacientesLayout;
