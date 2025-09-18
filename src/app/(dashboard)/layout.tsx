import DashboardLayout from "@/shared/components/layouts/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
