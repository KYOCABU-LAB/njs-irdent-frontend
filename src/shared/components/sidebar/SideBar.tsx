"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, UserCog, Stethoscope } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Usuarios", href: "/users", icon: UserCog },
];

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 flex flex-col bg-stone-50 border-r border-stone-200">
      <div className="flex items-center space-x-2 p-6">
        <Stethoscope className="h-7 w-7 text-stone-800" />
        <span className="text-xl font-bold text-stone-800">Irdent</span>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-teal-600 text-white shadow-sm"
                      : "text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-stone-200">
        <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-stone-200 transition-colors cursor-pointer">
          <div className="flex items-center justify-center h-9 w-9 bg-stone-200 rounded-full font-semibold text-stone-600">
            RR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-stone-800">Russel</span>
            <span className="text-xs text-stone-500">Ver Perfil</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
