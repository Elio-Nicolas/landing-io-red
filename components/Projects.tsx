"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, PawPrint, Plus, X } from "lucide-react";

const mibusImages = ["/MiBus-1.png", "/MiBus-2.png", "/MiBus-3.png"];

export default function Projects() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const changeImage = (step: number) => setCurrent((index) => (index + step + mibusImages.length) % mibusImages.length);

  return (
    <section id="projects" className="relative overflow-hidden border-t border-slate-200 bg-[#F8FAFC] py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E11D48]"><span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" /> Ecosistema IORed</span>
          <h2 className="text-4xl font-bold tracking-tight text-[#0A2540] md:text-5xl">Ideas que se convierten en <span className="text-[#E11D48]">productos reales.</span></h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">Además de desarrollar software a medida, impulsamos soluciones propias para necesidades concretas de nuestra comunidad.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="group flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9fbf4] via-[#f1fbff] to-[#d9f1ff] p-8">
              <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/40" />
              <div className="relative flex items-center gap-4 rounded-3xl border border-white/80 bg-white/85 px-8 py-7 shadow-xl backdrop-blur-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white shadow-lg"><Plus size={44} strokeWidth={3} /></span>
                <div><span className="block text-3xl font-extrabold tracking-tight text-[#0A2540]">MiFarma</span><span className="text-sm font-medium text-slate-500">Farmacias de turno, más cerca.</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-7 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl font-bold text-[#0A2540]">MiFarma</h3><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Disponible online</span></div>
              <p className="leading-7 text-slate-600">Consultá las farmacias de turno en Villa Mercedes y San Luis desde una experiencia simple, rápida y pensada para el celular.</p>
              <a href="https://farmacias.iored.com.ar/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 font-bold text-[#0A2540] transition hover:gap-3 hover:text-[#E11D48]">Explorar MiFarma <ArrowUpRight size={18} /></a>
            </div>
          </article>

          <article className="group flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#eaf8f4] via-[#f6fbf7] to-[#d8eee8] p-8">
              <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full border-[35px] border-white/40" />
              <div className="relative flex items-center gap-4 rounded-3xl border border-white/80 bg-white/85 px-8 py-7 shadow-xl backdrop-blur-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#157b70] text-white shadow-lg"><PawPrint size={36} /></span>
                <div><span className="block text-3xl font-extrabold tracking-tight text-[#123f3d]">Mascotas<span className="text-[#159b85]">VM</span></span><span className="text-sm font-medium text-slate-500">Una comunidad para volver a casa.</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-7 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl font-bold text-[#0A2540]">MascotasVM</h3><span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">En desarrollo</span></div>
              <p className="leading-7 text-slate-600">Una plataforma comunitaria para publicar mascotas perdidas o encontradas, compartir avistamientos y ayudar a reunirlas con sus familias.</p>
              <a href="/mascotasvm" className="inline-flex w-fit items-center gap-2 font-bold text-[#0A2540] transition hover:gap-3 hover:text-[#E11D48]">Conocer el proyecto <ArrowUpRight size={18} /></a>
            </div>
          </article>

          <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
            <div className="grid md:grid-cols-2">
              <button type="button" onClick={() => { setCurrent(0); setGalleryOpen(true); }} className="relative min-h-64 overflow-hidden bg-[#e9eff8] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E11D48]" aria-label="Abrir galería de MiBus">
                <Image src="/MiBus-1.png" alt="Vista de la aplicación MiBus" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#0A2540] shadow">Ver capturas</span>
              </button>
              <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E11D48]"><MapPin size={15} /> Movilidad urbana</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Proyecto en desarrollo</span></div>
                <h3 className="text-3xl font-bold text-[#0A2540]">MiBus</h3>
                <p className="leading-7 text-slate-600">Una propuesta tecnológica para acercar información contextual del transporte público a los pasajeros y mejorar su experiencia de movilidad.</p>
                <button type="button" onClick={() => { setCurrent(0); setGalleryOpen(true); }} className="inline-flex w-fit items-center gap-2 font-bold text-[#0A2540] transition hover:gap-3 hover:text-[#E11D48]">Explorar capturas <ArrowUpRight size={18} /></button>
              </div>
            </div>
          </article>
        </div>
      </div>

      {galleryOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071626]/90 p-4" role="dialog" aria-modal="true" aria-label="Galería de MiBus" onClick={() => setGalleryOpen(false)}>
        <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
          <button type="button" onClick={() => setGalleryOpen(false)} aria-label="Cerrar galería" className="absolute -top-12 right-0 rounded-full p-2 text-white hover:bg-white/15"><X size={24} /></button>
          <div className="relative h-[55vh] min-h-64 max-h-[620px] overflow-hidden rounded-2xl bg-white"><Image src={mibusImages[current]} alt={`Captura ${current + 1} de MiBus`} fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" /></div>
          <div className="mt-5 flex items-center justify-between text-white"><button type="button" onClick={() => changeImage(-1)} aria-label="Captura anterior" className="rounded-full border border-white/30 p-3 hover:bg-white/15"><ChevronLeft size={22} /></button><span className="text-sm font-medium">MiBus · {current + 1} / {mibusImages.length}</span><button type="button" onClick={() => changeImage(1)} aria-label="Captura siguiente" className="rounded-full border border-white/30 p-3 hover:bg-white/15"><ChevronRight size={22} /></button></div>
        </div>
      </div>}
    </section>
  );
}
