"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FcAbout, FcAssistant, FcBiohazard, FcHome } from "react-icons/fc";
import { Logo } from "../logo/Logo";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { icon: <FcHome />, label: "Inicio", href: "/" },
  { icon: <FcAbout />, label: "Sobre mí", href: "/about" },
  { icon: <FcBiohazard />, label: "Desafíos", href: "/desafios" },
  { icon: <FcAssistant />, label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Clase condicional para link activo */
  const linkClass = (href: string) =>
    pathname === href ? "text-amber-400" : "text-white hover:text-amber-400";

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ icon, label, href }) => (
            <Link
              key={href}
              href={href}
              className={`group flex items-center space-x-1 text-md font-medium transition-colors duration-150 ${linkClass(
                href
              )}`}
              title={label}
            >
              <span className="text-2xl">{icon}</span>
              <span className="hidden lg:inline">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-slate-800"
          >
            <ul className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map(({ icon, label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center space-x-2 text-sm py-2 transition-colors ${linkClass(
                      href
                    )}`}
                  >
                    <span className="text-xl">{icon}</span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
