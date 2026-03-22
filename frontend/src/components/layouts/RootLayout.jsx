// 03-06-2026
// component name: RootLayout.jsx
import HeaderBanner from "../HeaderBanner";
import SidebarNav from "../navigation/SidebarNav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col bg-white text-gray-900">
      <HeaderBanner />

      <div className="flex flex-1 min-h-0">
        <aside className="w-72 shrink-0 bg-gray-50 border-r border-gray-200 shadow-inner">
          <div className="h-full overflow-y-auto">
            <SidebarNav />
          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-y-auto bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
