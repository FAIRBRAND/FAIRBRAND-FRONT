import { ReactNode } from "react";
import { AdminSidebar } from "@/features/admin/components/AdminSidebar";
import { AdminHeader } from "@/features/admin/components/AdminHeader";
import { AdminGuard } from "@/features/admin/components/AdminGuard";
import "../[locale]/globals.css";
interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    // <AdminGuard>
    <html suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <AdminSidebar />

          <div className="flex flex-1 flex-col">
            <AdminHeader />

            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
    // </AdminGuard>
  );
}
