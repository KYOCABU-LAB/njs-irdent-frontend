import AdminLayout from "@/shared/components/layouts/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
