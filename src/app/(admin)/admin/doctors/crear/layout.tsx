import { HeaderCrearPacientes } from "@/features/paciente/common/components/HeaderCrearPaciente";
import { HeaderPacientes } from "@/features/paciente/common/components/HeaderPacientes";
import { TabsCrearDoctor } from "@/features/paciente/common/components/TabsCrearDoctor";
import { TabsCrearPacientes } from "@/features/paciente/common/components/TabsCrearPaciente";

const CrearDoctoresLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="min-h-screen bg-background">
      <TabsCrearDoctor />
      <main className="p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default CrearDoctoresLayout;
