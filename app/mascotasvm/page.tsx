"use client";

import Link from "next/link";
import { ArrowLeft, PawPrint, Sparkles } from "lucide-react";

export default function MascotasVMComingSoon() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-16 text-[#0A2540]">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
      <section className="relative w-full max-w-2xl rounded-[32px] border border-white bg-white/90 p-8 text-center shadow-2xl shadow-slate-200/70 backdrop-blur md:p-14">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-700 text-white shadow-lg shadow-emerald-900/20">
          <PawPrint size={40} strokeWidth={1.8} />
        </div>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
          <Sparkles size={14} /> Estamos trabajando
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Mascotas<span className="text-emerald-600">VM</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-600">
          Estamos preparando un espacio para ayudar a que las mascotas perdidas y encontradas vuelvan a casa.
        </p>
        <div className="mx-auto mt-8 h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 animate-pulse" />
        </div>
        <p className="mt-5 text-sm font-medium text-slate-500">Muy pronto en Villa Mercedes.</p>
        <Link href="/#projects" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0A2540] px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
          <ArrowLeft size={17} /> Volver a IORed
        </Link>
      </section>
    </main>
  );
}
