"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiBook, FiBriefcase, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function AboutPage() {
  const info = [
    {
      icon: <FiMapPin />,
      label: "¿De dónde soy?",
      value: "Puerto Varas, Chile",
    },
    {
      icon: <FiBriefcase />,
      label: "A qué me dedico",
      value:
        "Estudiante G6 – Ciberseguridad + 15 años liderando equipos comerciales",
    },
    {
      icon: <FiBook />,
      label: "Mi formación",
      value:
        "Bootcamp Ciberseguridad G6 (SENCE BOTIC-SOFOF-24-28-05-0011) | Técnico Superior en Informática (IUT Antonio José de Sucre, 2005)",
    },
  ];

  return (
    <main className="flex-1 bg-amber-50 text-slate-800 px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Sobre mí
        </motion.h1>

        {/* ¿Quién eres? */}
        <div className="flex flex-col mb-8">
          <Image
            src="/carnet.jpg"
            alt="Avatar de Diego Cabré"
            width={100}
            height={100}
            className="rounded-full mb-4 self-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light mb-8"
          >
            Soy Diego Antonio Cabré Perrone, profesional comercial pivotando a
            la ciberseguridad.
          </motion.p>
        </div>
        {/* 3 bloques rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-8"
        >
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="text-cyan-500 text-xl">{item.icon}</span>
              <div>
                <span className="font-semibold text-slate-700">
                  {item.label}
                </span>
                <p className="text-slate-600">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experiencia previa */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-2">Experiencia previa</h2>
          <p className="text-slate-600">
            15 años en retail e industria (Wurth, Construmart, Imperial)
            generando crecimiento de ventas +20 % y reduciendo la fuga de
            clientes. Aunque aún no trabajo como desarrollador, mi portfolio
            muestra proyectos reales con CI/CD, tests automatizados y
            despliegues en Vercel.
          </p>
        </motion.div>

        {/* Contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 text-sm text-slate-600"
        >
          <Link
            href="mailto:diegocabre@gmail.com"
            className="inline-flex items-center gap-2 hover:text-cyan-500 transition"
          >
            <FiMail /> diegocabre@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/diegoantoniocabreperrone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-cyan-500 transition"
          >
            <FiPhone /> LinkedIn
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
