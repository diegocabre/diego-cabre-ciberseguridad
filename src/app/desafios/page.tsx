"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FcBiohazard, FcDataProtection } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

const challenges = [
  {
    id: 1,
    title: "Desafío de Autenticación y Autorización",
    icon: <FcDataProtection size={28} />,
    fileUrl: "/doc/desafio_auth.docx",
    summary:
      "Implementación de políticas de acceso físico y lógico, 2FA, gestión de privilegios y respuesta ante brechas de seguridad.",
    details: `
### 🔐 Objetivo
Garantizar el acceso seguro a áreas y sistemas mediante controles robustos de autenticación y autorización.

### 🛠️ Tecnologías aplicadas
- **Wazuh SIEM** (detección de anomalías)
- **Políticas GPO** (Windows Server 2019)
- **2FA vía SMS/App** (TOTP)
- **LDAP + RBAC** (gestión centralizada)

### 📋 Hitos alcanzados
- ✅ Configuración de tarjetas RFID y lectores biométricos para acceso físico.
- ✅ Desactivación inmediata de credenciales perdidas.
- ✅ Política de contraseñas de 12+ caracteres, expiración 90 días.
- ✅ Autenticación de dos factores (2FA) con códigos vía SMS/App.
- ✅ Asignación de privilegios mediante grupos y roles (RBAC).
- ✅ Notificación y registro de brechas de seguridad.
- ✅ Validación de robustez de contraseñas con bcrypt/Argon2.
- ✅ Protocolos LDAP, Kerberos y OAuth 2.0 para autenticación centralizada.
- ✅ Cifrado HTTPS/TLS y hash con sal para proteger credenciales.
    `,
  },
  {
    id: 2,
    title: "Instalación y configuración de Wazuh SIEM",
    icon: <FcBiohazard size={28} />,
    fileUrl: "/doc/desafio_wazuh.docx",
    summary:
      "Despliegue completo de Wazuh Manager + Agent en AWS EC2 (Ubuntu & Windows Server 2019) con monitoreo centralizado.",
    details: `
### 🎯 Objetivo
Centralizar logs y eventos de seguridad de máquinas Windows y Linux mediante Wazuh SIEM.

### 🧱 Infraestructura
- **Wazuh Manager**: Ubuntu 22.04 (AWS EC2)
- **Wazuh Agent**: Windows Server 2019
- **Puertos**: 1514, 1515, 443 (HTTPS)

### 🚀 Pasos ejecutados
1. **Provisionamiento AWS**
   - AMI Ubuntu 22.04 y Windows Server 2019.
   - Security Groups con reglas inbound para RDP, SSH y puertos Wazuh.

2. **Instalación Wazuh (all-in-one)**
   \`\`\`bash
   curl -sO https://packages.wazuh.com/4.12/wazuh-install.sh
   sudo bash wazuh-install.sh -a
   \`\`\`
   Credenciales generadas: \`admin / s3*U6hU2r8QwGuUJuPdx6UhLj?i8Pac5\`

3. **Configuración de firewall**
   \`\`\`bash
   sudo ufw allow 1514/tcp
   sudo ufw allow 1515/tcp
   sudo ufw allow 443/tcp
   \`\`\`

4. **Agent en Windows**
   - Descarga del instalador.
   - IP del Manager configurada.
   - Clave de autenticación obtenida vía \`manage_agents\`.
   - Verificación con \`agent_control -l\` y \`tail -f /var/ossec/logs/ossec.log\`.

### ✅ Resultados
- Agent conectado y registrado.
- Logs centralizados en dashboard Wazuh.
- Detección temprana de eventos críticos.
- Listo para escalar con más agents y reglas personalizadas.
    `,
  },
];

export default function DesafiosPage() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-800 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Mis Desafíos G6
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-10"
        >
          {challenges.map((c) => (
            <motion.article
              key={c.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <header className="flex items-center gap-3 mb-4">
                {c.icon}
                <h2 className="text-2xl font-semibold">{c.title}</h2>
              </header>

              <p className="text-slate-600 mb-4">{c.summary}</p>

              {/* Render Markdown con Tailwind Typography */}
              <div className="prose prose-sm prose-slate max-w-none">
                <ReactMarkdown>{c.details}</ReactMarkdown>
              </div>
              <Link
                href={c.fileUrl}
                download
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
              >
                <FiDownload size={16} />
                Descargar archivo
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
