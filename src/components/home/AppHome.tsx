"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FcBiohazard } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";

export default function AppHome() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-white px-4 py-20 max-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Diego Cabré
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-cyan-200">
          Estudiante G6 – Ciberseguridad
        </h2>
        <p className="mt-6 text-lg text-slate-100">
          Descubre mis primeros pasos y desafíos en el bootcamp.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/desafios"
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition"
          >
            <FcBiohazard className="text-xl" /> Ver desafíos
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white hover:bg-white hover:text-slate-900 rounded-lg font-semibold transition"
          >
            <FiArrowRight /> Sobre mí
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
