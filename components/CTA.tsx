"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-28 bg-[#1f1f1f] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
          Construimos productos digitales sólidos, escalables y pensados para crecer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Botón primario - WhatsApp */}
          <button
  onClick={() =>
    window.open("https://wa.me/5492657659689", "_blank")
  }
  className="
    px-10 py-5 rounded-xl
    bg-white text-black text-lg font-semibold
    transition-all duration-200 ease-out
    hover:bg-white/90
    hover:scale-[1.03]
    hover:-translate-y-1
  "
>
  Contactanos
</button>


          {/* Botón secundario - Servicios */}
          <Link
  href="#services"
  className="
    px-10 py-5 rounded-xl
    border border-white/40 text-white text-lg font-semibold
    transition-all duration-200 ease-out
    hover:bg-white/10
    hover:scale-[1.03]
    hover:-translate-y-1
  "
>
  Ver servicios
</Link>


        </div>

      </div>
    </section>
  );
}
