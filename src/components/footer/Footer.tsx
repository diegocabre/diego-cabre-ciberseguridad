"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiGithub />,
    label: "GitHub",
    href: "https://github.com/diegocabre",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diegoantoniocabreperrone/",
  },
  {
    icon: <FiInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/diegoacabrep/",
  },
  {
    icon: <FiMail />,
    label: "Email",
    href: "mailto:diegocabre@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Top: enlaces y RRSS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo / frase */}
          <p className="text-sm">
            © 2025 Diego Cabré — G6 ·{" "}
            <span className="italic">“Hack ethically, sleep peacefully.”</span>
          </p>

          {/* Redes */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-xl text-slate-400 hover:text-cyan-400 transition"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom: links rápidos (opcional) */}
        <nav className="mt-4 flex flex-wrap justify-center md:justify-end gap-x-4 text-xs">
          <Link href="/">Inicio</Link>
          <Link href="/privacy">Privacidad</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </nav>
      </div>
    </footer>
  );
}
