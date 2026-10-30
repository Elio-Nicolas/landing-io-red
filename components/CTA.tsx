import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#071626] px-5 py-24 text-white md:px-8 md:py-28">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-rose-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-300">¿Tenés una idea?</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Hagamos que se convierta en algo real.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Contame qué necesitás resolver. Podemos conversar sobre una aplicación, un sistema o una idea de producto digital.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href="https://wa.me/5492657659689" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#E11D48] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600">
            <MessageCircle size={18} /> Escribir por WhatsApp <ArrowUpRight size={17} />
          </a>
          <a href="mailto:baigorriaen83@gmail.com?subject=Consulta%20sobre%20IORed" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]">
            <Mail size={18} /> Enviar un email
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">Contacto directo · Desarrollo a medida · Productos digitales</p>
      </div>
    </section>
  );
}
