import { HeaderCrearPacientes } from "@/features/paciente/common/components/HeaderCrearPaciente";
import { HeaderPacientes } from "@/features/paciente/common/components/HeaderPacientes";
import { TabsCrearPacientes } from "@/features/paciente/common/components/TabsCrearPaciente";
import { TabsPacientes } from "@/features/paciente/common/components/TabsPacientes";

const CrearPacientesLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderCrearPacientes />
      <TabsCrearPacientes />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default CrearPacientesLayout;
