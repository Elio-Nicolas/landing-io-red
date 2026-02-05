"use client";
import { Bot as BotIcon } from "lucide-react";
import { useState } from "react";

export default function Bot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
     
    <button
      onClick={() => setOpen(!open)}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[var(--color-accent)]
        text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105 transition
        cursor-pointer
      "
      aria-label="Asistente IO Red"
    >
      <BotIcon size={26} />
    </button>


      {/* Panel */}
      {open && (
        <div
          className="
            fixed bottom-24 right-6 z-50
            w-[320px]
            bg-white
            rounded-2xl
            shadow-2xl
            border border-slate-200
            overflow-hidden
            animate-fade-in
          "
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
            <h4 className="font-semibold text-slate-900">
               Hola, somos IO Red
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Desarrollo de software a medida para proyectos reales.
            </p>
          </div>

          {/* Body */}
          <div className="p-5 space-y-3">
            <p className="text-sm text-slate-700 mb-2">
              ¿Qué te gustaría hacer hoy?
            </p>

            {/* Botones */}
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="
                block w-full text-left
                px-4 py-3 rounded-lg
                bg-slate-100
                hover:bg-slate-200
                transition
                cursor-pointer
              "
            >
              <div className="font-medium text-slate-900">
                💻 Desarrollo a medida
              </div>
              <div className="text-sm text-slate-600">
                Web, backend y arquitectura
              </div>
            </a>

            <a
              href="#value-proposition"
              onClick={() => setOpen(false)}
              className="
                block w-full text-left
                px-4 py-3 rounded-lg
                bg-slate-100
                hover:bg-slate-200
                transition
                cursor-pointer
              "
            >
              <div className="font-medium text-slate-900">
                🚀 Crear o validar un MVP
              </div>
              <div className="text-sm text-slate-600">
                Convertimos ideas en producto
              </div>
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="
                block w-full text-left
                px-4 py-3 rounded-lg
                bg-slate-100
                hover:bg-slate-200
                transition
                cursor-pointer
              "
            >
              <div className="font-medium text-slate-900">
                ⭐ Ver proyectoS & MVP
              </div>
              <div className="text-sm text-slate-600">
                Geolocalización en tiempo real
              </div>
            </a>

            <a
              href="https://wa.me/5492657659689"
              className="
                block w-full text-left
                px-4 py-3 rounded-lg
                bg-[var(--color-cta)]
                text-[#0A2540]
                hover:opacity-90
                transition
                cursor-pointer
              "
            >
              <div className="font-semibold">
                📱 Contacto directo
              </div>
              <div className="text-sm opacity-80">
                Respondemos rápido
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
