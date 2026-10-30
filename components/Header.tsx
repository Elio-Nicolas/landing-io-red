"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Productos" },
  { href: "#value-proposition", label: "Enfoque" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (typeof window !== "undefined" && !scrolled && window.scrollY > 50) {
    // The effect below synchronizes this value after scrolling.
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 text-white backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "bg-[#071626]/95 shadow-lg shadow-black/10" : "bg-[#071626]/80"
      }`}
    >
      <ScrollSync setScrolled={setScrolled} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="IORed, inicio" onClick={() => setMenuOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 text-sm font-extrabold tracking-tight shadow-lg shadow-rose-950/30">IO</span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight sm:text-xl">IORed</span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-slate-400">SOFTWARE ARG.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0A2540] transition hover:bg-sky-100">
            Hablemos <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#071626] px-5 py-4 md:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#E11D48] px-4 py-3 text-sm font-semibold text-white">
              Hablemos <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ScrollSync({ setScrolled }: { setScrolled: (value: boolean) => void }) {
  const { useEffect } = require("react") as typeof import("react");
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [setScrolled]);
  return null;
}
