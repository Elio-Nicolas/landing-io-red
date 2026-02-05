"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CTA() {
    const [openContact, setOpenContact] = useState(false);
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

  {/* Contacto dropdown */}
 <nav className="flex items-center space-x-8 text-foreground/80 text-sm md:text-base font-medium tracking-wide relative">
  
  {/* Servicios */}
  <a
    href="#services"
  className="
    px-10 py-5 rounded-xl
    border border-white/40 text-white text-lg font-semibold
    transition-all duration-200 ease-out
    hover:bg-white/10
    hover:scale-[1.03]
    hover:-translate-y-1
  ">
    Servicios
  </a>

  {/* Contacto dropdown */}
  <div className="relative inline-block">
    <button
      onClick={() => setOpenContact(!openContact)}
className="
    px-10 py-5 rounded-xl
    border border-white/40 text-white text-lg font-semibold
    transition-all duration-200 ease-out
    hover:bg-white/10
    hover:scale-[1.03]
    hover:-translate-y-1
  "
    >
      Contacto
    </button>

    {openContact && (
  <div
    className={`
      absolute top-1/2 left-full ml-4
      -translate-y-1/2
      w-56
      rounded-xl
      border border-white/20
      bg-[#0A2540]
      shadow-xl
      transition-all duration-300 ease-out
      ${openContact ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
    `}
  >
    <a
      href="https://wa.me/5492657659689"
      target="_blank"
      className="block px-4 py-3 text-white hover:bg-white/10 transition"
    >
      📱 WhatsApp
    </a>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=baigorriaen83@gmail.com"
      target="_blank"
      className="block px-4 py-3 text-white hover:bg-white/10 transition"
    >
      ✉️ Email
    </a>
  </div>
)}

           </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
