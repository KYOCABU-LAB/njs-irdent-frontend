"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Stethoscope,
  ChevronRight,
  X,
} from "lucide-react";
import { useNavContext } from "@/shared/context/useNavContext";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Administrador", href: "/admin", icon: UserCog },
];

// Componente header
const SidebarHeader = ({
  showCloseButton = false,
}: {
  showCloseButton?: boolean;
}) => {
  const { onCloseNav } = useNavContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="flex items-center space-x-3 p-8 border-b border-border relative"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl shadow-lg">
        <Stethoscope className="h-6 w-6 text-primary-foreground" />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-foreground tracking-tight">
          IrDent
        </h1>
        <p className="text-xs text-muted-foreground font-medium">
          Sistema Dental
        </p>
      </div>

      {showCloseButton && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCloseNav}
          className="absolute top-6 right-6 flex items-center p-2 text-muted-foreground hover:text-foreground hover:bg-dental-light rounded-lg transition-all duration-200"
        >
          <X className="h-4 w-4" />
        </motion.button>
      )}
    </motion.div>
  );
};

// Componente para la navegación
const SidebarNavigation = ({ isMobile = false }: { isMobile?: boolean }) => {
  const pathname = usePathname();
  const { onCloseNav } = useNavContext();

  const handleLinkClick = () => {
    // Cerrar sidebar en móvil al hacer click en un link
    if (isMobile) {
      onCloseNav?.();
    }
  };

  return (
    <nav className="flex-1 px-6 py-8">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="space-y-2"
      >
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="block"
                onClick={handleLinkClick}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-dental-light"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon
                      className={`h-5 w-5 transition-colors ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key="chevron"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-4 w-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

// Sidebar Desktop
const SideBarDesktop = () => {
  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-screen w-72 flex-col bg-background border-r border-border hidden lg:flex backdrop-blur-sm"
    >
      <SidebarHeader />
      <SidebarNavigation />
    </motion.aside>
  );
};

// Sidebar Mobile
export const SideBarMobile = () => {
  const { isNavOpen, onCloseNav } = useNavContext();

  return (
    <AnimatePresence mode="wait">
      {isNavOpen && (
        <motion.div
          key="mobile-sidebar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden inset-0 fixed z-[60] bg-primary/20 backdrop-blur-sm"
          onClick={onCloseNav}
        >
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="h-screen w-72 fixed flex-col bg-background border-r border-border z-[70] flex backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarHeader showCloseButton />
            <SidebarNavigation isMobile />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBarDesktop;
