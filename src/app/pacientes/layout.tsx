import SideBarPacient from "@/shared/components/sidebar/SideBarPacient";

const PacientesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  bg-gray-50/25 ">
      <SideBarPacient />
      <div className="flex-1  p-5 ">{children}</div>
    </div>
  );
};

export default PacientesLayout;
