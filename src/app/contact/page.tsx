"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMessageSquare, FiUser } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    /* ----------  SIMULA ENVÍO  ---------- */
    await new Promise((res) => setTimeout(res, 1500));
    if (form.name && form.email && form.message) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
    /* ------------------------------------ */
  };

  return (
    <main className="flex-1 bg-slate-50 text-slate-800 px-4 py-20">
      <div className="max-w-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Contacto
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow space-y-6"
        >
          {/* Name */}
          <label className="block">
            <span className="text-sm font-medium mb-1 inline-flex items-center gap-2">
              <FiUser /> Nombre
            </span>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-sm font-medium mb-1 inline-flex items-center gap-2">
              <FiMail /> Email
            </span>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </label>

          {/* Message */}
          <label className="block">
            <span className="text-sm font-medium mb-1 inline-flex items-center gap-2">
              <FiMessageSquare /> Mensaje
            </span>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntame tu idea o consulta..."
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-cyan-600 text-white py-3 rounded hover:bg-cyan-700 transition disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Status feedback */}
          {status === "sent" && (
            <p className="text-center text-green-600">
              ¡Mensaje enviado! Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600">
              Por favor completa todos los campos.
            </p>
          )}
        </motion.form>
      </div>
    </main>
  );
}
