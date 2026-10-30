"use client";

import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Smartphone } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Desarrollo a medida" },
  { icon: Layers3, label: "Productos propios" },
  { icon: Smartphone, label: "Experiencias digitales" },
];

export default function Hero() {
  return (
    <section id="top" className="ior-hero relative isolate overflow-hidden bg-[#071626] px-5 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-40">
      <div className="ior-hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-28 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 left-[28%] h-[30rem] w-[30rem] rounded-full bg-rose-500/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#E11D48] shadow-[0_0_14px_rgba(225,29,72,0.9)]" />
            IORed SOFTWARE ARG.
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-7xl">
            Tecnología que resuelve.
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-white to-rose-300 bg-clip-text pb-2 text-transparent">
              Ideas que avanzan.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Diseñamos y desarrollamos software a medida y productos digitales para resolver problemas reales, con foco en la experiencia, la calidad técnica y el crecimiento.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E11D48] px-6 py-4 font-semibold text-white shadow-[0_12px_35px_rgba(225,29,72,0.22)] transition hover:-translate-y-0.5 hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300">
              Conocé nuestros productos <ArrowDownRight size={18} />
            </a>
            <a href="#services" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Qué podemos desarrollar <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {highlights.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-slate-300">
                <Icon size={16} className="text-sky-300" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-transparent to-rose-500/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#0B2035]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
              <div className="flex items-center gap-2" aria-label="Ventana de producto">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="text-[11px] font-medium tracking-[0.16em] text-slate-400">SOLUCIONES DIGITALES</span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#123657] to-[#0B2035] p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">De la idea al producto</span>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Construido con propósito.</p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">Tecnología útil, diseño claro y decisiones técnicas conscientes.</p>
                  </div>
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 sm:flex">
                    <Code2 size={26} className="text-sky-200" />
                  </div>
                </div>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-300 to-rose-400" />
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200/10 bg-emerald-300/[0.07] p-4 sm:p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-200"><Layers3 size={20} /></div>
                <p className="font-semibold text-white">Productos propios</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Soluciones que nacen de necesidades concretas.</p>
              </div>
              <div className="rounded-2xl border border-rose-200/10 bg-rose-300/[0.07] p-4 sm:p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-300/15 text-rose-200"><Code2 size={20} /></div>
                <p className="font-semibold text-white">A medida</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">Arquitectura pensada para cada desafío.</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3">
              <span className="text-xs text-slate-400">IORed Software Arg.</span>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Ideas en movimiento</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-3 top-[18%] h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur sm:-right-6" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-12 w-28 rounded-full border border-sky-200/15 bg-sky-300/10 blur-[1px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
