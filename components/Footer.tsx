import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Productos" },
  { href: "#process", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05111E] px-5 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="flex w-fit items-center gap-3" aria-label="IORed, volver al inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E11D48] text-xs font-extrabold">IO</span>
          <span><span className="block font-bold tracking-tight">IORed</span><span className="mt-0.5 block text-[9px] font-semibold tracking-[0.2em] text-slate-400">SOFTWARE ARG.</span></span>
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Enlaces del pie de página">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">{link.label}</a>)}
        </nav>
        <a href="https://wa.me/5492657659689" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-rose-300">Contacto directo <ArrowUpRight size={15} /></a>
      </div>
      <div className="mx-auto mt-7 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} IORed Software Arg. Todos los derechos reservados.</span>
        <span>Hecho con propósito en Argentina.</span>
      </div>
    </footer>
  );
}
