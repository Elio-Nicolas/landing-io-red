import { ShieldCheck, Wrench, Target } from "lucide-react";

const principles = [
  { icon: ShieldCheck, title: "Calidad sin atajos", text: "Priorizamos claridad, seguridad y mantenibilidad para que el software sea una base confiable." },
  { icon: Wrench, title: "Tecnología con criterio", text: "Elegimos herramientas según el problema, el contexto y los recursos disponibles; no por moda." },
  { icon: Target, title: "Foco en lo importante", text: "Priorizamos funcionalidades útiles y objetivos concretos para evitar complejidad que no aporta valor." },
];

export default function ValueProposition() {
  return (
    <section id="approach" className="border-t border-slate-200 bg-[#F8FAFC] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E11D48]">Nuestra forma de pensar</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">No se trata de usar más tecnología. Se trata de resolver mejor.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">El valor de un producto digital está en lo que permite hacer, simplificar o mejorar. Esa es la referencia detrás de cada decisión.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="grid gap-4 py-7 sm:grid-cols-[52px_1fr] sm:gap-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#E11D48] shadow-sm ring-1 ring-slate-200"><Icon size={22} /></span>
              <div>
                <div className="flex items-center gap-3"><span className="text-xs font-bold tabular-nums text-slate-400">0{index + 1}</span><h3 className="text-lg font-semibold text-[#0A2540]">{title}</h3></div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
