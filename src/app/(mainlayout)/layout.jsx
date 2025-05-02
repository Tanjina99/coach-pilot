import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-14 border-b px-4 flex items-center">
            <SidebarTrigger className="md:hidden" />
            <h1 className="ml-4 font-semibold">Admin Panel</h1>
          </header>
          <main className="p-4">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
