"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex-1 text-slate-800 px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Sobre mí
        </motion.h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-lg"
        >
          <p className="text-2xl font-light">
            Profesional comercial con 15 años liderando equipos y proyectos en
            retail e industria. Ahora curso el bootcamp G6 de Ciberseguridad
            (SENCE BOTIC-SOFOF-24-28-05-0011) donde he visto:
          </p>

          <ul className="list-disc text-xl font-bold list-inside space-y-2">
            <li>Introducción a la seguridad en la nube</li>
            <li>Servicios de Identidad y VPC en AWS</li>
            <li>Seguridad y control de acceso en entornos de red</li>
            <li>Protección y fortificación en entornos de red</li>
            <li>Gestión de incidentes y respuesta ante amenazas</li>
            <li>Fundamentos de Ethical Hacking</li>
            <li>Herramientas y técnicas</li>
          </ul>

          <p className="text-2xl font-light text-cyan-500">
            Mi objetivo es unir mi experiencia en gestión de riesgos comerciales
            con la protección digital de activos.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
