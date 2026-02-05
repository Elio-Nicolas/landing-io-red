"use client";

import { useState } from "react";
import Image from "next/image";

const mibusImages = [
  "/MiBus-1.png",
  "/MiBus-2.png",
  "/MiBus-3.png",
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % mibusImages.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? mibusImages.length - 1 : prev - 1
    );

  return (
    <section
      id="projects"
      className="w-full bg-slate-100 py-24 border-t border-slate-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14">
          Proyectos & MVP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ================= MiBus ================= */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col gap-6">
            <button
              onClick={() => {
                setOpen(true);
                setCurrent(0);
              }}
              className="relative w-full h-56 rounded-lg overflow-hidden
               bg-white
               rounded-xl
               border
               border-slate-200
               shadow-sm
               hover:shadow-md
               transition
               cursor-pointer"
            >
              <Image
                src="/MiBus-1.png"
                alt="MiBus App"
                fill
                className="object-cover"
              />
            </button>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                MiBus
              </h3>

              <p className="text-slate-700 leading-relaxed mb-4">
                Aplicación ciudadana para la geolocalización en tiempo real del
                transporte público.
              </p>

              <span className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Proyecto en etapa avanzada
              </span>
            </div>
          </div>

          {/* ================= Segunda card ================= */}
    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col gap-6 cursor-pointer">
      <div className="w-full h-56 relative rounded-lg bg-slate-50 overflow-hidden">
       <Image
        src="/cat.svg"
        alt="Mi Huella"
        fill
        className="object-contain"
       />
         </div>
           <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
               Plataforma para Animales en Situación de Calle y Busqueda.
              </h3>

              <p className="text-slate-700 leading-relaxed">
               App comunitaria con geolocalización e identificación mediante IA
               para animales encontrados.
              </p>
            </div>
           </div>
          </div>
        </div>

      {/* ================= MODAL CON SLIDER ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-5xl rounded-xl overflow-hidden">
            {/* Cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 text-slate-600 hover:text-slate-900 text-xl"
            >
              ✕
            </button>

            {/* Slider */}
            <div className="relative w-full h-[70vh] bg-black">
              <Image
                src={mibusImages[current]}
                alt="MiBus detalle"
                fill
                className="rounded-lg cursor-pointer select-none transition-transform duration-300 hover:scale-[1.01]"
              />

              {/* Flechas */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
              >
                ›
              </button>
            </div>

            {/* Texto */}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">
                MiBus — Detalle del proyecto
              </h4>

              <p className="text-slate-700 leading-relaxed">
                Plataforma pensada para municipios, basadas en experiencia
                ciudadana, escalabilidad e integración futura con sistemas
                oficiales.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
